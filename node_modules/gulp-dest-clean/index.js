/*jslint node:true, white:true */
'use strict';

var path = require('path')
, through = require('through2')
, chalk = require('chalk')
, objectAssign = require('object-assign')
, PluginError = require('gulp-util').PluginError
, del = require('del')
, Promise = require('lie')
;

Promise.prototype.catchTo = Promise.prototype['catch'];
Promise.prototype.trap = Promise.prototype.catchTo;

module.exports = function (destPath, exclude, exclOpts) {
  var parentsToExclude = {}
  , srcPath
  , PLUGIN_NAME = "gulp-dest-clean"
  , win32 = process.platform === "win32"
  , verbose
  , ext
  , extLen
  , extReplacer
  ;

  exclOpts = objectAssign({}, exclOpts);

  verbose = exclOpts.verbose;
  delete exclOpts.verbose;

  ext = exclOpts.ext;
  delete exclOpts.ext;

  if(!destPath || typeof destPath !== "string") {
    return through.obj(function (file, enc, cb) { cb(null, file); }, function(cb){
      console.log(chalk.bold.red(PLUGIN_NAME) + ": " + chalk.blue("destPath") + ' parameter required!');
      this.emit('error', new PluginError(PLUGIN_NAME,'"destPath" parameter required!'));
      cb();
    });
  }

  srcPath = destPath;
  destPath = srcPath.replace(/\/?[\x00-.0-\uffff]*\*[\d\D]*/, ""); //  "[\d\D]" = ".",  "[\x00-.0-\uffff]" = "[^\/]"
  if(srcPath !== destPath){
    return through.obj(function (file, enc, cb) { cb(null, file); }, function(cb){
      console.log(chalk.bold.red(PLUGIN_NAME) + ": " + chalk.blue("destPath") + ' parameter must not contain ' + chalk.red("*") + '!');
      this.emit('error', new PluginError(PLUGIN_NAME, '"destPath" parameter must not contain "*"!'));
      cb();
    });
  }
  srcPath = path.join(srcPath, "/**");

  function excludeParents(file){
    var parent = path.dirname(file);
    while(!parentsToExclude[parent]){
      parentsToExclude[parent] = 1;
      parent = path.dirname(parent);
    }
  }

  function getSrcStats(vinylFile){
    if(verbose) { console.log("stat is "+(vinylFile.stat ? "present" : "loaded")); }
    return vinylFile.stat ? Promise.resolve(vinylFile.stat) : new Promise(function(resolve, reject){
      fs.stat(vinylFile.path, function(err, stats){
        err ? reject(err) : resolve(stats);
      });
    });
  }

  if(typeof exclude === "string") {
    exclude = [exclude];
  }

  if(!Array.isArray(exclude)){
    exclude = [];
  }

  exclude = exclude.map(function(v){
    if(v.slice(0, 1) === "!") {
      return path.join(destPath, v.slice(1));
    }

    excludeParents(v);
    return "!" + path.join(destPath, v);
  });

  exclude = [].concat(srcPath, exclude);

  extReplacer = function(cb, file, p) {
    exclude.push("!" + path.join(destPath, p));

    cb(0, file);
  };

  if(ext){
    if(typeof ext === "string"){

      ext = "." + ext.replace(/^\./, "");

      extReplacer = function(cb, file, p) {
        getSrcStats(file).then(function(stats){
          var isFile = !stats.isDirectory();
          if (isFile) {
            p = p.replace(/\.\w*$/, ext);
            if(verbose) { console.log("replaced to:", p); }
          }
          exclude.push("!" + path.join(destPath, p));
          cb(0, file);
        });
      };

    } else {
      if(typeof ext === "object") {

        (function () {
          var ext2 = {};
          Object.keys(ext).forEach(function(from, to){
            to = "." + ext[from].replace(/^\./, "");
            from = "." + from.replace(/^\./, "");
            ext2[from] = to;
          });
          ext = ext2;
          if(verbose) { console.log("ext replacements:", JSON.stringify(ext, 0, 2)); }
        } ());

        extReplacer = function(cb, file, p) {
          getSrcStats(file).then(function(stats){
            var isFile = !stats.isDirectory()
            , extName = p.match(/\.\w*$/);
            ;

            extName = extName && extName[0];

            if(verbose) { console.log("processing:", p, "isFile:", isFile, "extname:", extName); }
            if (isFile && ext[extName]) {
              p = p.slice(0, -extName.length) + ext[extName];
              if(verbose) { console.log("replaced from:", extName, "to:", p); }
            }
            exclude.push("!" + path.join(destPath, p));
            cb(0, file);
          });
        };
      }
    }
  }

  return through.obj(function (file, enc, cb) {
    var p = file.relative;

    p = win32 ? p.replace(/\\/g, "/") : p;

    excludeParents(p);

    extReplacer(cb, file, p);

  }, function (cb){
    var stream = this;
    Object.keys(parentsToExclude).forEach(function(dir){
      exclude.push("!" + path.join(destPath, dir));
    });

    if (verbose) {
      console.log(chalk.cyan(PLUGIN_NAME) + ": patterns for `del`:", "\n" + exclude.join("\n"));
    }

    del(exclude, exclOpts).then(function(deleted){

      stream.deleted = deleted;

      if (verbose) {
        if(deleted.length) {
          console.log(chalk.cyan(PLUGIN_NAME) + ": deleted:", "\n" + deleted.join("\n"));
        } else {
          console.log(chalk.cyan(PLUGIN_NAME) + ": nothing to delete");
        }
      }

      cb();
    });
  });

};
