const Random = require('./Random.js');

const Worker = function(){
  let id = "w-" + Random().digit(8);
  let wage = Random().continuousRange(8,50);
  let hours = Random().discreteRangeIn(4,7)*5;

  function pay(){
    return [wage*hours/5,
            wage*hours,
            wage*hours*52];
     }
}
module.exports = moduleName;
