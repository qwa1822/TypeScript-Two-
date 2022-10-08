function helloBasic<T,U>(message:T,comment:U):T{
  return message;
}


helloBasic<String,number>("mark",39);
helloBasic(36,39);