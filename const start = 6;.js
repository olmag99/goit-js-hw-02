let start = 6;
let end = 17;
let number = 0;
function firstDivisibleBy5(start,end) {
  for (let i = start; i < end; i+=1) {

  if (i % 5 == 0) {
    number = i;
    console.log(number);
    break;
  }
}
}
firstDivisibleBy5(start,end)
start = 2;
end = 11;
firstDivisibleBy5(start,end)
start = 17;
end = 25;
firstDivisibleBy5(start,end)