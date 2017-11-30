
/**
 *  [ 자바스크립트 배열 다루는 6가지 방법 ]
 *  자바스크립트에서 배열을 다루는 방법은 많지만 크게 반복 하며 재정렬등을 위한 6가지를 설명하려합니다.
 *  1. some
 *  2. every
 *  3. forEach
 *  4. map
 *  5. filter
 *  6. reduce
 */

/* 진행을 위한 Array */
const array = [
  { id: 0, name: 'A', num: 1 },
  { id: 1, name: 'B', num: 2 },
  { id: 2, name: 'C', num: 3 },
  { id: 3, name: 'D', num: 6 },
  { id: 4, name: 'E', num: 2 },
  { id: 5, name: 'F', num: 8 },
  { id: 6, name: 'G', num: 1 }
];

/**
 *  [ some ] - 하나라도 있는가
 *  - 배열을 반복시키며 내부에 조건문을 써서 return 시키면 조건에 맞는 값이 1개라도 있으면 "true" 아닐시에는 "false"를 반환합니다.
 */

const result1 = array.some(function(item) {
  return item.name === 'C';
})
console.log(`---------------------------------------------`);
console.log(`name 중에 "C"라는 값이 있기때문에 true를 반환`);
console.log(`result : ${result1}`);



/**
 *  [ every ] - 모두 가지고 있는가
 *  - 배열을 반복시키며 내부에 조건문을 써서 return 시키면 조건에 맞는 값이 모두 있어야 "true" 아니라면 "false"를 반환합니다.
 */

const result2 = array.every(function(item) {
  return item.num === 1;
})

console.log(`---------------------------------------------`);
console.log(`num 이 모두 "1"이 아니기 때문에 false를 반환`);
console.log(`result : ${result2}`);

/**
 *  [ forEach ] - 반복문
 *  - 누구나 알고 있는 간단한 반복문 큰 설명은 하지 않겠습니다.
 */

array.forEach(function(item) {
  // 반복
})


/**
 *  [ map ] - 조건에 맞는 것은 값을 아닌것은 undefined를 반환
 *  - 반복을 하며 조건에 맞으면 값을 아니면 undefined를 반환합니다.
 *  - React, Vue에서 반복적으로 Dom을 찍을 때 자주 사용합니다.
 */

const result3 = array.map(function(item){
  if(item.id > 3) return item;
})

console.log(`---------------------------------------------`);
console.log(`id가 "3" 초과인 것만 데이터를 반환합니다. 나머지는 undefined를 반환하여 재배열합니다.`);
console.log(`result : `, result3);

/**
 *  [ filter ] - 조건에 맞는 것만 재배열
 *  - 반복을 하여 조건에 맞는 것만 재배열합니다.  조건에 맞지 않으면 내용을 반환하지 않습니다.
 */

/* 조건에 맞는 것의 데이터를 반환합니다. (배열로 반환) */
const result4 = array.filter(function(item) {
  return item.name === 'F';
})

console.log(`---------------------------------------------`);
console.log(`name이 "F"인 것만 배열에 담아집니다.`);
console.log(`result : `, result4);

/**
 *  [ reduce ] - 다재다능한 활용
 *  - reduce를 잘할 수 있으면 배열을 다루는 것에 능숙해 질수 있습니다.
 *  - 사용 용도가 다양합니다.
 */

/* 예제 1 - 내부 Object에 담긴 일정한 변수의 총합을 구하기 */
const result5 = array.reduce(function(result, item, index, array) {
  result += item.num;
  return result;
},0 /* 초기값을 0 */ )

console.log(`---------------------------------------------`);
console.log(`result의 값을 초기 0으로 주고 반복을 돌면서 누적되는 result라는 변수에 합을 합니다.`);
console.log(`result : ${result5}`);

/* 예제 2 - 보통 두가지의 배열을 합칠 때 concat()을 이용하지만 조건에 만족한것만 배열을 합칠 때는 다음과 같이 사용가능합니다. */

/* 배열2 */
const array2 = [{ id: 100, name: 'Z', num: 1000 }];

const result6 = array.reduce(function(result, item, index, array) {
  if(item.id > 4) result.push(item);
  return result;
}, array2)

console.log(`---------------------------------------------`);
console.log(`result의 값을 초기 Array2로 설정하고 반복을 하면서 id가 4초과일 것을 추가 합니다.`);
console.log(`result : `, result6);