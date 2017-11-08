const Random = require('./Random.js');

const Worker = function(){
  let id = "w" + random().digit(8);
  let wage = random().continuousRange(8,50);
  let hours = random().continuousRange(4,7)*5;

  function pay(){
    return [wage*hours/5,
            wage*hours,
            wage*hours*52];
     }
}
module.exports = moduleName;
