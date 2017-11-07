const Random = require('./Random.js');

const Worker = function(){
  let id = "w" + random().digit(8);
     let wage = random().continuousRange(8,50);
     let hours = random().continuousRange(4,7)*5;

     function pay(){
       console.log(wage*8, wage*40, wage*2080)
     }
}
module.exports = moduleName;
