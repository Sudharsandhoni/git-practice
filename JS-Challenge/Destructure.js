const user = {
  name: "John",
  address: {
    city: "Chennai",
  },
  numbers: {
    mobile: "123",
    telephone: "456",
  },
  devices: [
    {
      name: "iPhone",
      price: 999,
    },
    {
      name: "iPad",
      price: 799,
    },
  ],
};
const {
  name,
  address: { city, state },
  address: { country },
  products: { name: productName } = {},
} = user; // destructuring assignment
console.log(name, city); // Output: John Chennai
console.log(productName, state);

const { devices } = user;

const [firstDevice, secondDevice] = devices;

console.log(firstDevice.name); // iPhone

const response = {
  status: 200,
  data: {
    users: [
      { id: 1, active: true },
      { id: 2, active: false },
    ],
  },
};

const { status, data: { users = [] } = {} } = response;

console.log(status, users);

const activeUserIds = users.reduce((ids, user) => {
  const { id, active } = user;
  if (active) {
    ids.push(id);
  }
  return ids;
}, []);

console.log(activeUserIds);

async function test() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  return a + b;
}

//test().then(console.log);

async function test1() {
  const results = [1, 2, 3].map(async (n) => {
    return n * 2;
  });

  console.log(results);
}
//test1();

