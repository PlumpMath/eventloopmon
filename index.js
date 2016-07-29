/**
* Event Loop Monitor
*/

/**
 * Returns process time
 */
function ptime(){
    var t = process.hrtime();
    return t[0] * 1000000 + t[1] / 1000;
}

function EventMon(callback){
  var start = ptime();
  process.nextTick(function(){
    var lapse = (ptime() - start) / 1000;
    callback(lapse);
  });
}

module.exports = EventMon;
