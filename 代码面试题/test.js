/** ====================== 面试题1 =============================  **/

async function asycn1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout ");
}, 0);

asycn1();

new Promise(resolve => {
  console.log("promise1");
  resolve();
}).then(() => {
  console.log("promise2");
});

console.log("script end");

/** ====================== 面试题2 =============================  **/

// 请实现 findSubStr(string, subStr) 方法，找出字符串中所有子串出现的索引位置
// findSubStr("a.jshsadjka.js123.1js2a.jsZx", 'a.js')
// [0, 10, 22]

function findSubStr(str, subStr) {}

/** ====================== 面试题3 =============================  **/

var scope = 123;
var obj = {
  scope: 456,
  getScope: function () {
    var scope = 789;
    console.log(scope); // 789 456 123

    console.log(this.scope); // 456 123 1

    var f = function () {
      console.log(scope); // 789 123 123
      console.log(this.scope); // 123 789 1
    };
    f();
  }
};

obj.getScope(); // example: 输出 xxx/xxx，因为 xxx

var getScope = obj.getScope;
getScope();

var a = { scope: 1 };
getScope.apply(a);

function heavy(Arr, key = "id") {
  var obj = {};
  return Arr.reduce(function (item, next) {
    obj[next[key]] ? "" : (obj[next[key]] = true && item.push(next));
    return item;
  }, []);
}

console.log(heavy([{ id: 2, name: "1", id: 2, name: "2", id: 1, name: "3" }]));
