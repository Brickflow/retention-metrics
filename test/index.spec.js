'use strict';

var test = require('tape');
var retention = require('../');


test('acceptance', function(t) {
  t.equal(typeof retention, 'function', 'it should exists');

  t.end();
});

