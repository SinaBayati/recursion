function fibs(n){
  if (n < 1) throw new Error("n must be equal to or greater than 1");

  const result = [];
  let a = 0;
  let b = 1;
  let c = a + b;
  for (let i = 0; i < n; i++) {
    if(i === 0){
      result.push(a);
      continue;
    } 
    if(i === 1){
      result.push(b);
      continue;
    }
    if(i === 2){
      result.push(c);
      continue;
    }
    a = b;
    b = c;
    c = a + b;
    result.push(c);
  }
  return result;
}