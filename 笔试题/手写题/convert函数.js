function convert(value) {
    console.log(value)
  let ifAbs = false;
  if (value < 0) {
    value =-1*value;
    ifAbs = true;
  }
  value = value + "";
  value = [...value].reverse();
  let str = "";
  let include = value.indexOf(".");
  let count = 1;
  let ok = false;
  if (include > -1) {
    for (let i in value) {
      str += value[i];
      if (ok) {
        count++;
      }
      if (value[i] == ".") {
        ok = true;
        count = 0;
      }
      if (count != 0 && count % 3 == 0) {
        str += ",";
      }
    }
  } else {
    console.log(value);
    for (let i in value) {
      count++;
      str += value[i];
      if (count % 3 == 0) {
        str += ",";
      }
    }
  }
  str = [...str].reverse().join("");
  return ifAbs ? "-" + str : str;
}
console.log(convert(1231541.112200));
