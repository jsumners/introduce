'use strict';

const path = require('path');
const expect = require('chai').expect;
const introduce = require('..');

suite('introduce');

test('sibling', function sibling(done) {
  const sib = introduce('foobar');
  expect(sib).to.be.an.object;
  expect(sib.foobar).to.exist;
  expect(sib.foobar).to.equal('yep');
  done();
});

test('one dir', function one(done) {
  const foo = introduce('lib', 'foo');
  expect(foo).to.equal('foo');
  done();
});

test('two dirs', function two(done) {
  const bar = introduce('lib', 'subdir', 'bar.js');
  expect(bar).to.equal('bar');
  done();
});

test('array path', function arraypath(done) {
  const foo = introduce(['lib', 'foo']);
  expect(foo).to.equal('foo');
  done();
});

test('slash separated', function slashsep(done) {
  const foo = introduce(`lib${path.sep}foo`);
  expect(foo).to.equal('foo');

  const bar = introduce('lib\\subdir\\bar');
  expect(bar).to.equal('bar');
  done();
});

test('parent dir relative', function prel(done) {
  const foo = introduce('..', 'test', 'lib', 'foo');
  expect(foo).to.equal('foo');

  const bar = introduce('./lib/subdir/bar');
  expect(bar).to.equal('bar');
  done();
});
