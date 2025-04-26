import { sayHello } from './utils/utils.js'; // <-- bien écrire ".js" même si le fichier source est ".ts"
import {
  sum,
  average,
  max,
  totalLength,
  countTotalWords,
  findLongestWord,
  findOldestUser,
  calculateTotal,
  calculateExpensiveTotal,
  roundToTwoDecimals,
  calculateDiscountedTotal,
  groupByCategory,
  groupByArmoryCategory,
} from './utils/mathUtils.js';
export function runMain() {
  const values = [10, 20, 5, 30];
  const mots = ['pingouin', 'JS', 'anticonstitutionnellement', 'chat']; // ⟶ "anticonstitutionnellement"
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 29 },
  ];
  const oldest = findOldestUser(users);
  const inventory = [
    { name: 'Clavier', price: 49.99, category: 'Informatique' },
    { name: 'Souris', price: 19.99, category: 'Informatique' },
    { name: 'Écran', price: 129.9, category: 'Informatique' },
    { name: 'Stylo', price: 2.99, category: 'Papeterie' },
    { name: 'Cahier', price: 4.5, category: 'Papeterie' },
  ];
  const armory = [
    { name: 'Épée en fer', category: 'Armes' },
    { name: 'Arc en bois', category: 'Armes' },
    { name: 'Potion de soin', category: 'Consommables' },
    { name: 'Gemme magique', category: 'Trésors' },
    { name: "Bouclier d'acier", category: 'Armes' },
  ];
  if (oldest) {
    console.log(
      `La personne la plus âgée est ${oldest.name}, ${oldest.age} ans.`
    );
  } else {
    console.log('Liste vide !');
  }
  const totalBuyout = calculateTotal(inventory);
  const totalExpensiveBuyout = roundToTwoDecimals(
    calculateExpensiveTotal(inventory)
  );
  const totalDiscountedBuyout = roundToTwoDecimals(
    calculateDiscountedTotal(inventory)
  );
  const sortedInventory = groupByCategory(inventory);
  const sortedArmory = groupByArmoryCategory(armory);
  console.log(sayHello('Jean'));
  console.log('Somme de 5 + 7 :', sum(5, 7));
  console.log('Moyenne de', values, ':', average(values));
  console.log('Valeur maximale :', max(values));
  console.log(totalLength(['chat', 'avion', 'JS']));
  console.log(countTotalWords(['Bonjour le monde']));
  console.log(findLongestWord(mots));
  console.log("L'utilisateur le plus âgé est :", oldest);
  console.log(totalBuyout);
  console.log(totalExpensiveBuyout);
  console.log(totalDiscountedBuyout);
  console.log(sortedInventory);
  console.log(sortedArmory);
}
