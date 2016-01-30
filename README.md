#buttTime

My first attempt at an NPM module, implementing the famous cloud-to-butt chrome extension.

##Installation

    npm install buttTime --save

## Usage
 
    var buttTime = require('buttTime');
    var convert = buttTime.convert;

    var html = '<h1>I love the cloud</h1>';
    var converted = convert(html);

    console.log('html', html, 'converted', converted);

## Tests

    npm test
