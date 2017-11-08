const Random = require('./Random.js');

const moduleName = function(){
  let id = "m" + random().digit(8);
  let workers = random().continuousRange(4,20);
  let baseSalary = random().continuousRange(4,9)*10000;

  function pay(){
    let y;
    if(workers <= 10){
      [workers*250];
    }
    else if(workers > 10){
      [2500+(workers-10)*400]
    }
    let w;
    let d;
    return [d,w,y];
  }
};

module.exports = moduleName;
