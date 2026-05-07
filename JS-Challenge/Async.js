async function test2() {
  const results = await Promise.all([1, 2, 3].map((n) => n * 2));
  console.log(results);
}
await test2();

const texts = [" hello ", " world ", " javascript "];

const result = texts.map(t => t.trim());

console.log(result);