const items = ["item1", "item2", "target", "item3"];    
for (const item of items) {
  if (item === "target") {
    break; // ✅ works
  }
  console.log(item);
}