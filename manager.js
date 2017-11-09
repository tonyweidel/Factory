const Random = require('./Random.js');

const Manager = function(){
  let id = "m-" + Random().digit(8);
  let workers = random().discreteRangeIn(4,20);
  let baseSalary = random().discreteRangeIn(4,9)*10000;

  function pay(){
    let y = baseSalary;
    if(workers <= 10){
      y += workers*250;
    }
    else if(workers > 10){
      y += 2500 + (workers-10)*400;
    }
    let w = y/52;
    let d = w/7;
    return [d,w,y];
  }

  return{id, workers, baseSalary, pay}
};

module.exports = Manager;
