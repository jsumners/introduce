# introduce

A simple wrapper around Node's regular `require` function that makes it easy
to require file relative to the current script in a platform agnostic manner.

## Examples

```javascript
const introduce = require('introduce')();
const foo = introduce('lib', 'foo.js');
const bar = introduce('lib', 'bar'); // could be .js or .json
const foobar = introduce(['lib', 'subdir', 'foobar']);

// paths work as well
const relativeFoo = introduce('./lib/foo');
const winFoo = introduce('lib\\foo');
```

```javascript
// Includes within includes pose a problem. Node sets the parent of the
// innermost include to the outermost module. Thus, if '/foo.js' includes
// '/lib/bar.js' which includes '/lib/sublib/baz.js', then the second include
// would try to load '/baz.js'. To fix that silliness:
const introduce = require('introduce')(__dirname);
const bar = introduce('lib/bar');
```

## License

[MIT License](http://jsumners.mit-license.org/)
