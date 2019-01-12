function pascal(n) {
  let arr=[];
  if (n==1) {
    arr[0] = [];
    arr[0][0]=1;
  } else if (n==2) {
    arr[0] = [];
    arr[0][0]=1;
    arr[1]=[];
    arr[1][0]=1;
    arr[1][1]=1;
  } else if (n>2) {
    arr[0] = [];
    arr[0][0]=1;
    arr[1]=[];
    arr[1][0]=1;
    arr[1][1]=1;
    for (let i=2; i<n; i++) {
      arr[i]=[];
      arr[i][0]=1;
      for (j=1; j<i; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
      }
      arr[i][j]=1;
    }
  }
  console.log(arr);
  for (i=0; i<arr.length; i++) {
    console.log(arr[i].join(' '))
  }
}
console.log(pascal(5));
