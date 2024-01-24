// task 1

// function get(a) {
//   if (a === 1) {
//     return 1;
//   } else {
//     return a % 2 === 1 ? a + get(a - 2) : get(a - 1);
//   }
// }
// console.log(get(5));
// console.log(get(8));
// console.log(get(1));

// task 2

// function get(m, n) {
//     if (m < n) {
//       return false;
//     } else if (m === n) {
//       return true;
//     } else {
//       return get(m - n, n);
//     }
//   }
//   console.log(get(10, 5));
//   console.log(get(15, 4));
//   console.log(get(12, 3));

// task 3

// task fibonacci

    //    function get(n){
    //     if(n<2){
    //       return n;
    //     }
    //     return get(n-1)+get(n-2)+1;
    //   }
    //   console.log(get(6));
    //   console.log(get(5));
    //   console.log(get(3));

// task 4

// function get(a){

// }
// console.log(get());


// function task5(a){
//     if(a == 0){
//         return 0
//     }
//     return a%10 + Math.floor(task5(a/10))
// }
// console.log(task5(11012));
// console.log(task5(101));
// console.log(task5(1111));


// function task6(){
//     let cnt  = 0
//     return (b)=>{
//         return cnt += b
//     }
// }
// let result = task6()
// console.log(result(3));
// console.log(result(5));

// task 7

// function get(a){
// return function (b){
//   return (a+=b)/2;
// }
// }
// let c=get(0)
// console.log(c(10));
// console.log(c(15));


// function task8(a){
//     let i = 0
//     return ()=>{
//        return i+=a
//     }
// }
// let sum = task8(2)
// console.log(sum());
// console.log(sum());


// task 9

// function get() {
//   let b = 0;
//   return function(a) {
//     if (a > b) {
//       b = a;
//     }
//     return b;
//   };
// }
// let  set = get();
// console.log(set(10));
// console.log(set(5));

  

// task 10

// function get(a) {
//     return function(b) {
//       return b % a === 0;
//     };
//   }
//   let  d = get(3);
//   console.log(d(9));
//   console.log(d(10));