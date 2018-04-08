function deepEqual(start,end) {
  let cur = start - 1;
    let arr = new Array(end - start + 1);
    arr.fill(1);
    return arr.map(item => {return cur += item});
    console.log(arr);
}

var a = deepEqual(1,5);
console.log(a);