type HelloFunctionGeneric1=<T>(message:T)=>T;


const helloiFunction1:HelloFunctionGeneric1=<T>(message:T):T=>{
  return message; 
}

interface HelloFunctionGeneric2 {
  <T>(message:T):T
}

const helloFUnction2:HelloFunctionGeneric2=<T>(message:T):T=>{
  return message;
}