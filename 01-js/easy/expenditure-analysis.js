/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let category = [];
  let price = [];
  for (let i = 0; i < transactions.length; i++) {
    if (category.includes(transactions[i].category)) {
      let j = category.indexOf(transactions[i].category);
      price[j] = price[j] + transactions[i].price;
    } else {
      category.push(transactions[i].category);
      price.push(transactions[i].price);
    }
  }
  for (let i = 0; i < category.length; i++) {
    ans.push({ category: category[i], totalSpent: price[i] });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
