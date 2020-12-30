const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(obj) {
  let arr = [];

  for (var key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      arr = arr.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
  }
  return arr;
}

console.log(collectStrings(obj));
