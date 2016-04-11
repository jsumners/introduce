'use strict';

const introduce = require('../..')(__dirname);

module.exports.bar = introduce('subdir/bar');
module.exports.subinc = introduce('subdir/subinclude');
