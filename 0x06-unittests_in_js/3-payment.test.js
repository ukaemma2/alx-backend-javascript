/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const { describe, it } = require('mocha');
const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('check that Utils.calculateNumber was called once', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(50, 24.52);
    assert(spy.calledOnce);
    spy.restore();
  });
});
