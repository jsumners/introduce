'use strict';

const path = require('path');

function introduce() {
  const parentDir = (this) ? this : path.dirname(module.parent.filename);
  const inArgs = Array.from(arguments);
  const args = (Array.isArray(inArgs[0])) ? inArgs[0] : inArgs;
  let splitArgs = [];
  args.forEach((arg) => {
    if (arg.indexOf('/') > -1) {
      const split = arg.split('/');
      splitArgs = splitArgs.concat(split);
    } else if (arg.indexOf('\\') > -1) {
      const split = arg.split('\\');
      splitArgs = splitArgs.concat(split);
    } else {
      splitArgs.push(arg);
    }
  });

  const finalArgs = [].concat(parentDir, splitArgs);
  return require(
    path.resolve(
      path.join.apply(null, finalArgs.filter((item) => item.length > 0))
    )
  );
}

module.exports = function init(basedir) {
  return introduce.bind(basedir);
};
