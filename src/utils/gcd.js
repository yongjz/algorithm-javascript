'use strict';

//计算最大公约数
const gcd = (p, q) => {
  if(parseInt(q) === 0) return p;
  const r = parseInt(p) % parseInt(q);
  return gcd(q, r);
}

const main = (argv) => {
  console.log('p:' + argv[0] + ',q:' + argv[1]);
  const result = gcd(argv[0], argv[1]);
  console.log('result: ' + result);
}

if (require.main === module) {
  // 如果是直接执行 main.js，则进入此处
  // 如果 main.js 被其他文件 require，则此处不会执行。
  main(process.argv.slice(2));
}

exports.gcd = gcd;