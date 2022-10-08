interface IPerson{
  name:string;
  age:number;
}

const person:IPerson={
  name:"Mark",
  age:39,
};

type Keys=keyof IPerson;


// IPerson[Keyof IPerson] 
// => IPerson["Name" | "age"]
// => IPerson["name"]
// => string | number
function getProp<T,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key];
}

getProp(person,'age');

function setProp<T,K extends keyof T>(obj:T,key:K,value:T[K]){
  obj[key]=value;
}


setProp(person,"name","Anna");