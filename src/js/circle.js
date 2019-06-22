// es6 방식의 named export 하는 방법
// 개별 모듈화 => named export
export var area = function (r) {
  return Math.PI * r * r;
}

export var circumference = function (r) {
  return Math.PI * 2 * r;
}

// export {area, circumference}