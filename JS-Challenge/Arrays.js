const arr = [1, 2, 3, 4];

const result = arr.map(n => {
  if (n % 2 === 0) return n * 2;
});

console.log(result);

const statuses = ["PASS", "FAIL", "PASS", "FAIL"];

const failCount = statuses.filter(s => s === "FAIL").length;

console.log(failCount);

const failedIndexes = statuses.reduce((acc, status, index) => {
  if (status === "FAIL") acc.push(index);
  return acc;
}, []);

console.log(failedIndexes);


 const arr1 = [10, 20, 30];

const result1 = arr1.map(n => {
  if (n > 15) return n;
});
console.log(result1);
console.log(result1.filter(Boolean));

console.log(Boolean(0));


const rows = [
  { id: 1, status: "PASS" },
  { id: 2, status: "FAIL" },
  { id: 3, status: "FAIL" }
];

// 👉 Write:

// Count of FAIL
// First FAIL id
// Array of PASS ids

let countOfFail = rows.filter(row => row.status === 'FAIL').length
console.log(countOfFail);
let firstFailID = rows.find(row => row.status === 'FAIL')?.id
console.log(firstFailID)
let passIDs = rows.filter(row => row.status === 'PASS').map(row => row.id);
console.log(passIDs)

let noFail = rows.every(row => row.status !== "FAIL")
console.log(noFail)

let failIndexes = rows.reduce((arr, row , index) => {
    if(row.status === "FAIL") arr.push(index);
    return arr;
}, [])

console.log(failIndexes)