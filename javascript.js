function multiply(num) {
  const str = num.toString();
  const numArr = str.split('');
  let sum = 1;
  for(let i= 0; i < numArr.length; i++) {
    sum = sum * numArr[i];
  }

}
multiply(123);