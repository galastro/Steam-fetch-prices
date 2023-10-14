// const axios = require('axios');

// // Array com o nome dos itens a serem consultados
// const items = [
//   "eSports 2013 Winter Case",
//   "Clutch Case",
//   "Chroma 2 Case",
//   "Danger Zone Case",
//   "Falchion Case",
//   "Fracture Case",
//   "Horizon Case",
//   "Prisma Case",
//   "Prisma 2 Case",
//   "Shadow Case",
//   "Snakebite Case",
//   "Spectrum Case",
//   "Spectrum 2 Case",
//   "Operation Wildfire Case",
// ];

// // URL base da API do Steam Market
// const baseUrl = 'https://steamcommunity.com/market/priceoverview/?currency=7&appid=730&market_hash_name=';

// // Array para armazenar os preços dos itens
// const itemPrices = [];

// // Variável de controle para verificar se houve pelo menos uma consulta bem-sucedida
// let success = false;
// const requestInterval = 1000;
// // Faz a solicitação HTTP para a API para cada item
// items.forEach((item, index) => {
//   const url = baseUrl + encodeURIComponent(item);
  
//   // Adiciona um delay para evitar sobrecarga do servidor
//   setTimeout(() => {
//     axios.get(url)
//       .then(response => {
        
//         itemPrices.push({
//           item: item,
//           price: response.data.lowest_price
//         });
//         success = true;
//         if (index === items.length - 1) {
//           printResults();
//         }
//       })
//       .catch(error => {
//         if (error.response.status) {
//           console.error(`Erro ${error.response.status} ao consultar preço de ${item}`);
//         } else {
//           console.error(error);
//         }
//         if (index === items.length - 1) {
//           if (!success) {
//             console.error('Nenhuma consulta bem-sucedida');
//           } else {
//             printResults();
//           }
//         }
//       });
//   }, index * requestInterval); 
// });


// function printResults() {
//   itemPrices.forEach(item => {
//     console.log(`${item.item}: ${item.price}`);
//   });
  
// }

const axios = require('axios');

// Array com o nome dos itens a serem consultados
const items = [
  "eSports 2013 Winter Case",
  "Clutch Case",
  "Chroma 2 Case",
  "Danger Zone Case",
  "Falchion Case",
  "Fracture Case",
  "Horizon Case",
  "Prisma Case",
  "Prisma 2 Case",
  "Shadow Case",
  "Snakebite Case",
  "Spectrum Case",
  "Spectrum 2 Case",
  "Operation Wildfire Case",
];

// URL base da API do Steam Market
const baseUrl = 'https://steamcommunity.com/market/priceoverview/?currency=7&appid=730&market_hash_name=';

// Array para armazenar os preços dos itens
const itemPrices = [];

// Variável de controle para verificar se houve pelo menos uma consulta bem-sucedida
let success = false;
const requestInterval = 1000;
// Faz a solicitação HTTP para a API para cada item
items.forEach((item, index) => {
  const url = baseUrl + encodeURIComponent(item);
  
  // Adiciona um delay para evitar sobrecarga do servidor
  setTimeout(() => {
    axios.get(url)
      .then(response => {
        itemPrices.push({
          item: item,
          price: response.data.lowest_price
        });
        console.log(`${item}: ${response.data.lowest_price}`);
        success = true;
        
      })
      .catch(error => {
        if (error.response && error.response.status) {
          console.error(`Erro ${error.response.status} ao consultar preço de ${item}`);
        } else {
          console.error(error);
        }
        // ...
      });
  }, index * requestInterval); 
});





