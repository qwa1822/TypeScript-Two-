class Person<T,k>{
  private _name:T;
  private _age: k;
  

  constructor(name:T,age:k){
    this._name=name;
    this._age=age;
  }
  
}

new Person("Mark",39);
// new Person<number>(39);
new Person<string,number>("Mark",39);
