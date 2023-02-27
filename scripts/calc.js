function formatDate(date = new Date()) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

let calcArr = Array.from(formatDate());

function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

function persistence(num) {
  let mult = num;
  let arr = [];
  let i = [];
  let result = 0;

  if (mult > 22) {
    arr = num.toString().split('');
    mult = arr.reduce((a,b) => parseInt(a) + parseInt(b))
      if (mult > 22) {
        i = mult.toString().split('');
        result = i.reduce((a,b) => parseInt(a) + parseInt(b))
      } else {
        result = mult
      }
  } else {
    result = mult
  }
  
  return result
}

let clearArr = removeItemAll(calcArr, '-');
console.log(clearArr);

let KR_VERH = clearArr[4] + clearArr[5];
KR_VERH = KR_VERH.split('0').join('');
KR_VERH = persistence(KR_VERH);
console.log(KR_VERH);

let KR_LEV = clearArr[6] + clearArr[7];
KR_LEV = KR_LEV.split('0').join('');
KR_LEV = persistence(KR_LEV);
console.log(KR_LEV);

let KR_PRAV = clearArr[0] + clearArr[1] + clearArr[2] + clearArr[3];
KR_PRAV = KR_PRAV.split('0').join('');
KR_PRAV = persistence(KR_PRAV);
console.log(KR_PRAV);

let KR_NIZ = parseInt(KR_VERH) + parseInt(KR_PRAV) + parseInt(KR_LEV);
KR_NIZ = persistence(KR_NIZ);
console.log(KR_NIZ);

let KR_CENTR = parseInt(KR_LEV) + parseInt(KR_NIZ) + parseInt(KR_PRAV) + parseInt(KR_VERH);
KR_CENTR = persistence(KR_CENTR);
console.log(KR_CENTR);




