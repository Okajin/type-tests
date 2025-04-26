'use strict';
// fichier: basic.ts
let isRaining = true;
function describeWeather(temp) {
  switch (true) {
    case temp < 0: {
      return 'Il gèle dehors !';
    }
    case temp < 20: {
      return 'Il fait frais.';
    }
    default: {
      return 'Il fait chaud.';
    }
  }
}
const str = isRaining ? ' Et il pleut !' : '';
console.log(describeWeather(-5) + str); // -> "Il gèle dehors !"
console.log(describeWeather(15) + str); // -> "Il fait frais."
console.log(describeWeather(30) + str); // -> "Il fait chaud."
