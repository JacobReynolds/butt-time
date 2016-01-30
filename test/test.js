var should = require('chai').should(),
    buttTime = require('../app'),
    convert = buttTime.convert;

describe('#buttTime', function() {
it ('converts cloud to butt', function() {
   convert('cloud').should.equal('butt');
});
it ('converts the cloud to my butt', function() {
   convert('the cloud').should.equal('my butt');
});
})
