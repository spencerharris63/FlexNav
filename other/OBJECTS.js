let obj = {
  a: 1,
  b: 2,
};

let newObj = {};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
console.log(Object.assign(newObj, obj));
console.log(newObj);

console.log(obj.a);

obj.c = 3;
console.log(obj);
console.log(obj.c);

delete obj.a;
console.log(obj);

for (let key in obj) {
  console.log(obj[key]);
}

// NEW

var data = {};

var setData = function(obj) {
  for (var key in obj) {
    console.log(key);
    console.log(obj[key]);
    data[key] = obj[key];
  }
};

setData({ listItems: 'itemOne' });
console.log(data);
