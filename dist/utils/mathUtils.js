export function sum(a, b) {
  return a + b;
}
export function average(numbers) {
  if (numbers.length === 0) return 0;
  const total = numbers.reduce((acc, val) => acc + val, 0);
  return total / numbers.length;
}
export function max(numbers) {
  return Math.max(...numbers);
}
export function totalLength(words) {
  if (words.length === 0) return 0;
  const total = words.reduce((acc, val) => acc + val.length, 0);
  return total;
}
export function countTotalWords(phrases) {
  if (phrases.length === 0) return 0;
  const total = phrases.reduce((acc, val) => acc + val.split(' ').length, 0);
  return total;
}
export function findLongestWord(words) {
  if (words.length === 0) return '';
  const total = words.reduce((acc, val) => {
    if (val.length > acc.length) {
      return val;
    } else {
      return acc;
    }
  }, '');
  return total;
}
export function findOldestUser(users) {
  if (users.length === 0) return undefined;
  const oldestUser = users.reduce((acc, val) => {
    if (acc === undefined) return val; // Premier tour : on initialise avec le premier user
    return val.age > acc.age ? val : acc; // On garde le plus âgé
  }, undefined);
  return oldestUser;
}
export function calculateTotal(products) {
  if (products.length === 0) return 0;
  const total = products.reduce((acc, val) => acc + val.price, 0);
  return total;
}
export function calculateExpensiveTotal(products) {
  if (products.length === 0) return 0;
  const total = products
    .filter((products) => products.price > 30)
    .reduce((acc, val) => acc + val.price, 0);
  return total;
}
export function roundToTwoDecimals(number) {
  return Math.round(number * 100) / 100;
}
export function calculateDiscountedTotal(products) {
  if (products.length === 0) return 0;
  const total = products.reduce((acc, val) => {
    const discount = val.discount ?? 0; // <= valeur par défaut si undefined
    return acc + val.price * (1 - discount);
  }, 0);
  return total;
}
export function groupByCategory(products) {
  return products.reduce((acc, product) => {
    const { category, name } = product;
    if (!acc[category]) {
      acc[category] = [name]; // première entrée
    } else {
      acc[category].push(name); // on ajoute le nom
    }
    return acc;
  }, {});
}
export function groupByArmoryCategory(itemInArmory) {
  return itemInArmory.reduce((acc, item) => {
    const { category, name } = item;
    if (!acc[category]) {
      acc[category] = [name];
    } else {
      acc[category].push(name);
    }
    return acc;
  }, {});
}
