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
