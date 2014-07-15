importScripts('testharness.js');
importScripts('testharnessreport.js');

test(function(test) {
  assert_true(true, "True is true");
}, 'Test running on worker');
