import { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: "Chocolates", value: 10 },
    { name: "Chips", value: 20 },
    { name: "Onion", value: 30 },
    { name: "Tomato", value: 30 },
    // Add more items as needed
    { name: "oranges", value: 10 },
    { name: "mangoes", value: 20 },
    { name: "pineapple", value: 30 },
    { name: "chicken", value: 30 },
  ]);
  function moneyGone(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      console.log(items[i].value);
      total += items[i].value;
    }
    return total;
  }
  // Your code starts here
  const totalValue = useMemo(() => moneyGone(items), [items]);
  // Your code ends here
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>
      <p>Total Value: {totalValue}</p>
    </div>
  );
};

export default Assignment3;
