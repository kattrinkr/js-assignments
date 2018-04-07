function isLeapYear(date) {
  let residual = new Date(date);
  residual = residual.toISOString();
  console.log(residual);
  let hour = residual.slice(11,13);
  let min = residual.slice(14,16);
  
  if (hour > 12) 
  console.log(hour);
  console.log(min);
  let corner = 0.5 * (60 * hour - 11 * min);
  while (corner > 180) corner -= 360;
  console.log(corner);
  console.log((Math.abs(corner) * Math.PI) / 180 );
  
    return (Math.abs((corner )) * Math.PI) / 180 ;
}

var a = isLeapYear(Date.UTC(2016,3,5, 9, 0));
 