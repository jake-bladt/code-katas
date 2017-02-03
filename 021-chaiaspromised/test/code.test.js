const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const fs = require('fs')

chai.use(chaiAsPromised)
const assert = chai.assert
const expect = chai.expect
const should = chai.should

describe('Standard Test Responses', () => {
  it('should pass this test', function() {
    return Promise.resolve('this promise will always be resolved');
  })

  it('should fail this test', function() {
    return Promise.reject('this promise will always be rejected');
  })

})
