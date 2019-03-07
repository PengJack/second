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
