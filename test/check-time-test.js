'use strict';

var expect = require('chai').expect;

import CheckTime from '../src/check-time';

describe('CheckTime object', function() {

  it('should notify with Date object upon start', function(done) {
    let clock = new CheckTime();

    var subscriber = {
      notify: function(date) {
        expect(date instanceof Date).to.equal(true);
        done();
      }
    };

    clock.subscribe(subscriber);
    clock.start();
    clock.stop();

  });

  it('should set date property to underfined when stop', function(done) {
    let clock = new CheckTime();

    var subscriber = {
      notify: function(date) {}
    };

    clock.subscribe(subscriber);

    clock.start(); 
    clock.stop();

    setTimeout(function() {
      expect(clock.date).to.equal(undefined);
      done();
    }, 1000);

  });
});
