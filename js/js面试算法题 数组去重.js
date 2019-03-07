// 数组去重，假设没有复杂数据类型
// 方法一： 通过对象中转
var arr = [1,2,'a', 'b', 'a', 1, 2, 'd'];
var myArr = [];
var obj = {};
arr.forEach(function(item, index) {
  if(!obj[item]) {
    obj[item] = item;
    myArr.push(item);
  }
})

// 方法二： 通过另一个数组
var arr = [1,2,'a', 'b', 'a', 1, 2, 'd'];
var newArr = [];
arr.forEach((item, index) => {
  if(newArr.indexOf(item) < 0) {
    newArr.push(item);
  }
})

// 方法三： 通过 filter 方法
var arr = [1,2,'a', 'b', 'a', 1, 2, 'd'];
var newArr = [];
arr.filter((item, index, self) => {
  return self.indexOf(item) === index;
})

// 方法四： 通过转换为 Set 结构去重
var arr = [1,2,'a', 'b', 'a', 1, 2, 'd'];
var newArr = Array.from(new Set(arr))

// 方法5： 利用 Set 和 三点运算符
var arr = [1,2,'a', 'b', 'a', 1, 2, 'd'];
var newArr = [...new Set(arr)];