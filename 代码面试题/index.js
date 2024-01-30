/**
 * JavaScript基础：
 */
/* 1. 反转字符串 */
function reverseString(str) {
  return str.split("").reverse().join("");
}
/* 2. 实现一个阶乘函数 */
function factorial(n) {
  for (let i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}
/* 3. 判断一个字符串是否是回文字符串 */
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

/**
 * 数组操作：
 */

/* 4. 找出数组中的最大值和最小值 */
function findMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}
/* 5. 实现数组去重 */
function uniqueArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const index = result.indexOf(arr[i]);
    if (index === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
/* 6. 实现对象去重 */
function uniqueObjByKey(objArr, key) {
  const R = [];
  const map = new Map();
  for (let i = 0; i < objArr.length; i++) {
    const item = objArr[i];
    if (!map.has(item[key])) {
      R.push(item);
      map.set(item[key], item);
    }
  }
  return R;
}

/* 6. 实现对象去重(另一种实现) */
function heavy(objArr, key = "id") {
  const record = {};
  return objArr.reduce((per, cur) => {
    record[cur[key]] ? "" : (record[cur[key]] = true && per.push(cur));
    return per;
  }, []);
}

/**
 * 异步操作和Promise：
 */
function delayTask(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
/* 7. 使用Promise实现一个简单的异步串行执行 */
function serialAsyncTasks(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then(() => {
      return delayTask(1000) // 模拟异步任务
        .then(() => currentTask());
    });
  }, Promise.resolve());
}
/* 8. 使用async/await改写异步代码 */
async function fetchData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

/**
 * DOM 操作：
 */

/* 9. 切换元素的可见性 */
function toggleVisibility(element) {
  element.style.display = element.style.display === "none" ? "block" : "none";
}

/* 10. 查找元素在文档中的位置 */
function getElementPosition(element) {
  let left = 0;
  let top = 0;

  while (element) {
    left += element.offsetLeft || 0;
    top += element.offsetTop || 0;
    element = element.offsetParent;
  }

  return { left, top };
}

/**
 * ES6+特性
 */
/* 11. 使用箭头函数简化以下函数ki */
function add(a, b) {
  return a + b;
}

// 12. 使用解构赋值交换两个变量的值
let x = 1;
let y = 2;
// 你的代码
let [x1, y1] = [y, x];
