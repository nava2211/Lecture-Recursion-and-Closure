// Tasksss.
// function get(a) {
//     let cnt = 0
//     function sum(b) {
//         return (c) => {
//             cnt += a + b + c
//             return cnt
//         }
//     }
//     return sum
// }
// console.log(get (4)(2)(2));

// Tasksss
// function createCounter() {
//     let cnt = 0
//     return () => {
//         cnt += 1
//         return cnt
//     }
// }
// let counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// task 1
     
//  function get(a){
//     if(a==0){
//          return 0;
//     }
//     return (a%10)+get(Math.floor(a/10))
//  }
//  console.log(get(111));
//  console.log(get(222));
//  console.log(get(333));

// task 2

// function get(n,b=10){
//         if(b==0){
//             return 0;
//         }
//         return n*b+ get(n,b-1);
//     }
//     console.log(get(1));
//     console.log(get(6));
//     console.log(get(10));

// task 3

    //     function get(a, b) {
    //     if (b == 0) {
    //       return a;
    //     }
    //       return get(b, a % b);
    //     } 
    //   console.log(get(32, 8));
    //   console.log(get(8, 12)); 
    //   console.log(get(17,13));

    // task 4

// function get(a){
// if(a==0){
//     return true;
// }
// else if(a<0){
//     return false
// }
// return get(a-2)
// }
// console.log(get(124));
// console.log(get(-41));
// console.log(get(17));


// task 5

// function get(a) {
//         return function(b) {
//           return b + a;
//         };
//       }    
//       let  c = get("ly");
//       console.log(c("hopeless"));
//       console.log(c("happy")); 

// task 6

//  function get(a1=0){
//            return (a2=0)=>{
//              return (a3=0)=>{
//                 return (a4=0)=>{
//                    return (a5=0)=>{
//                      return (a6=0)=>{
//                         return a1+a2+a3+a4+a5+a6;
//                      }
//                    }
//                 }
//              }
//            } 
//         }
//         console.log(get(2)(2)()()(2)(1));

// task 7

// function get(a) {
// return (b)=>{
//         return (a+=b);
// };
// }
// let v = get(5)
// console.log(v(10));
// console.log(v(10));

// task 8

//     function get(num) {
//     if (num <= 0) {
//       return 1;
//     }
//       return num * get(num - 2);        
//     }
//   console.log(get(9));
//   console.log(get(6));
//   console.log(get(5)); 
      


// task 10

// function pow(a,b) {
// if (b == 0){
// return 1;
// }
// return a * pow(a, b - 1);
// }
// console.log(pow(2,2))
// console.log(pow(2,3))
// console.log(pow(2,4))