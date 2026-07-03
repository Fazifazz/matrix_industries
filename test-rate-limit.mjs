const URL = "http://localhost:3000/api/contact";
const results = [];

for (let i = 0; i < 10; i++) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": "5.5.5.5" },
    body: JSON.stringify({ name: "Test", email: "test@test.com", message: "hi" }),
  });
  results.push(res.status);
}

console.log(results);