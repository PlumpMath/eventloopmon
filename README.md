[![Build Status](https://travis-ci.org/elfido/express-slas.svg?branch=master)](https://travis-ci.org/elfido/eventloopmon)
[![Dependencies Status](https://david-dm.org/elfido/express-slas.svg)](https://david-dm.org/elfido/eventloopmon.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/416566b4e6c4410bb518e92566af0cfa)](https://www.codacy.com/app/fidencio-garrido/eventloopmon?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=elfido/eventloopmon&amp;utm_campaign=Badge_Grade)
![Node](https://img.shields.io/badge/node-4.0-brightgreen.svg)

[![NPM](https://nodei.co/npm/eventloopmon.png)](https://nodei.co/npm/eventloopmon/)
# eventloopmon
NodeJS Event Loop Monitor

## Installation and Usage
To install
```javascript
npm install -S eventloopmon
```

To Use
```javascript
var monitor = require("eventloopmon");

// t = time in milliseconds using decimals for nanoseconds precision
monitor(function(t){
  /*
  Do something with t like:
    if (t>10){
      sendAlarm();
    }
  */
});
```
