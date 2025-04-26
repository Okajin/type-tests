import { runMain } from './main.js';
import { sayHello } from './utils/utils.js'; // <-- bien écrire ".js" même si le fichier source est ".ts"
import { getUser } from './services/userService.js';
import { appConfig } from './config/appConfig.js';
console.log(`Bienvenue dans ${appConfig.appName} v${appConfig.version}!`);
const user = getUser();
console.log(`Utilisateur chargé : ${user.name} (${user.email})`);
sayHello('Florient');
if (process.env.NODE_ENV !== 'production') {
  runMain();
}
