// 1-masala

// Uzunlikni santimetrda kiritishni so'raymiz
// const lengthInCentimeters = parseInt(prompt("Uzunlikni santimetrda kiriting:"));

// // Metrlarga aylantiramiz (1 m = 100 sm)
// const lengthInMeters = Math.floor(lengthInCentimeters / 100);

// // Natijani ekranga chiqaramiz
// console.log(`Uzunlik: ${lengthInMeters} metr`);


//#########################################################

// 2-masala

// // Og'irlikni kilogramda kiritishni so'raymiz
// const weightInKilograms = parseInt(prompt("Og'irlikni kilogramda kiriting:"));

// // Tonlarga aylantiramiz (1 t = 1000 kg)
// const weightInTons = Math.floor(weightInKilograms / 1000);

// // Natijani ekranga chiqaramiz
// console.log(`Og'irlik: ${weightInTons} ton`);


//########################################################

// 3-masala

// // Fayl hajmini baytlarda kiritishni so'raymiz
// const fileSizeInBytes = parseInt(prompt("Fayl hajmini baytlarda kiriting:"));

// // Baytlarni kilobaytlarga aylantiramiz (1 Kb = 1024 bayt)
// const fileSizeInKb = Math.floor(fileSizeInBytes / 1024);

// // Natijani ekranga chiqaramiz
// console.log(`Faylning umumiy hajmi: ${fileSizeInKb} Kb`);

//##########################################################

// 4-masala
// Foydalanuvchidan A va B (A > B) sonlarini kiritishni so'raymiz
// const A = parseInt(prompt("A sonini kiriting (musbat son):"));
// const B = parseInt(prompt("B sonini kiriting (musbat son, A dan kichik):"));

// // A va B sonlarining musbat sonlar ekanligini va A ning B dan katta ekanligini tekshiramiz
// if (A > 0 && B > 0 && A > B) {
//     // B qismini A ning ichiga qancha marta joylashtirish mumkinligini hisoblaymiz
//     const joylashtirilishiMarta = Math.floor(A / B);
    
//     // Natijani ekranga chiqaramiz
//     console.log(`B qismi A ning ichiga ${joylashtirilishiMarta} marta joylashtiriladi.`);
// } else {
//     console.log("Iltimos, A va B sonlarini kiriting va A soni B dan katta bo'lsin.");
// }


//#####################################################################

// 5-masala

// Foydalanuvchidan A va B (A > B) sonlarni kiritishni so'raymiz
// const A = parseInt(prompt("A sonini kiriting (musbat son):"));
// const B = parseInt(prompt("B sonini kiriting (musbat son, A dan kichik):"));

// // A va B sonlarining musbat sonlar ekanligini tekshiramiz
// if (A > 0 && B > 0 && A > B) {
//     // B qismini A ning ichiga qancha marta joylashtirish mumkinligini hisoblaymiz
//     const joylashtirilishiMarta = Math.floor(A / B);
    
//     // A ning ichiga joylashtirilmagan qismi hisoblaymiz
//     const joylashtirilmaganQism = A % B;
    
//     // Natijalarni chiqaramiz
//     console.log(`B qismi A ning ichiga ${joylashtirilishiMarta} marta joylashtiriladi.`);
//     console.log(`A ning ichiga joylashtirilmagan qismi: ${joylashtirilmaganQism}`);
// } else {
//     console.log("Iltimos, A va B sonlarini kiriting va A soni B dan katta bo'lsin.");
// }

//####################################################################

// 6-masala

// Foydalanuvchidan ikki xonali sonni kiritishni so'raymiz
// const input = prompt("Ikki xonali son kiriting:");
// const number = parseInt(input);

// // Kiritilgan sonni ikki xonali son ekanligini tekshiramiz
// if (number >= 10 && number <= 99) {
//     // Onlar va birlik xonasini ajratib olamiz
//     const onlar = Math.floor(number / 10);
//     const birlik = number % 10;

//     // Ajratilgan raqamlarni konsolga chiqaramiz
//     console.log(`Onlar xonasidagi raqam: ${onlar}`);
//     console.log(`Birlik xonasidagi raqam: ${birlik}`);
// } else {
//     console.log("Iltimos, haqiqiy ikki xonali son kiriting.");
// }

//###################################################################

//7-masala

// const input = prompt("Ikki xonali raqamni kiriting:");
// const number = parseInt(input);

// if (number >= 10 && number <= 99) {
//     const tens = Math.floor(number / 10);
//     const ones = number % 10;
//     const sum = tens + ones;
//     console.log(`Raqamlar yig'indisi: ${sum}`);
// } else {
//     console.log("Yaroqli ikki xonali raqamni kiriting.");
// }

// 8-masala

// Foydalanuvchidan ikki xonali sonni kiritishni so'raymiz
// const input = prompt("Ikki xonali son kiriting:");
// const number = parseInt(input);

// if (number >= 10 && number <= 99) {
//     // O'nlar xonasini hisoblaymiz
//     const tens = Math.floor(number / 10);
//     // Birlar xonasini hisoblaymiz
//     const ones = number % 10;
//     // Raqamlarni almashtirib yangi sonni hosil qilamiz
//     const permutedNumber = ones * 10 + tens;
//     // Natijani ko'rsatamiz
//     console.log(`Raqamlarni almashtirgandan keyingi son: ${permutedNumber}`);
// } else {
//     console.log("Iltimos, haqiqiy ikki xonali son kiriting.");
// }

//################################################################################

// 9-masala

// Foydalanuvchidan uch xonali sonni kiritishni so'raymiz
// const input = prompt("Uch xonali son kiriting:");
// const number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     // Yuzliklar xonasini hisoblaymiz
//     const hundreds = Math.floor(number / 100);
//     // Onliklar xonasini hisoblaymiz
//     const tens = Math.floor((number % 100) / 10);
//     // Birlar xonasini hisoblaymiz
//     const ones = number % 10;
//     // Raqamlarni almashtirib yangi sonni hosil qilamiz
//     const permutedNumber = ones * 100 + tens * 10 + hundreds;
//     // Natijani ko'rsatamiz
//     console.log(`Raqamlarni almashtirgandan keyingi son: ${permutedNumber}`);
// } else {
//     console.log("Iltimos, haqiqiy uch xonali son kiriting.");
// }

//###################################################################################

// 10-masala

// Foydalanuvchidan uch xonali sonni kiritishni so'raymiz
// const input = prompt("Uch xonali son kiriting:");
// const number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     // Birlar xonasini hisoblaymiz
//     const ones = number % 10;
//     // Onliklar xonasini hisoblaymiz
//     const tens = Math.floor((number % 100) / 10);
//     // Natijani ko'rsatamiz
//     console.log(`Birlar xonasidagi raqam: ${ones}`);
//     console.log(`Onliklar xonasidagi raqam: ${tens}`);
// } else {
//     console.log("Iltimos, haqiqiy uch xonali son kiriting.");
// }

// #######################################################################

// 11-masala

// Foydalanuvchidan uch xonali sonni kiritishni so'raymiz
// const input = prompt("Uch xonali son kiriting:");
// const number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     // Birlar xonasini hisoblaymiz
//     const ones = number % 10;
//     // Onliklar xonasini hisoblaymiz
//     const tens = Math.floor((number % 100) / 10);
//     // Yuzliklar xonasini hisoblaymiz
//     const hundreds = Math.floor(number / 100);
//     // Raqamlarni yig'indisini hisoblaymiz
//     const sum = ones + tens + hundreds;
//     // Natijani ko'rsatamiz
//     console.log(`Uch xonali son raqamlarining yig'indisi: ${sum}`);
// } else {
//     console.log("Iltimos, haqiqiy uch xonali son kiriting.");
// }

// ##########################################################################

// 12-masala 

// Foydalanuvchidan uch xonali sonni kiritishni so'raymiz
// const input = prompt("Uch xonali son kiriting:");
// const number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     // Birlar xonasini hisoblaymiz
//     const ones = number % 10;
//     // Onliklar xonasini hisoblaymiz
//     const tens = Math.floor((number % 100) / 10);
//     // Yuzliklar xonasini hisoblaymiz
//     const hundreds = Math.floor(number / 100);
//     // Raqamlarni teskari tartibda chiqaramiz
//     const reversedNumber = ones * 100 + tens * 10 + hundreds;
//     // Natijani ko'rsatamiz
//     console.log(`Uch xonali sonni teskari tartibda yozilgan son: ${reversedNumber}`);
// } else {
//     console.log("Iltimos, haqiqiy uch xonali son kiriting.");
// }

// ####################################################################

//13-masala

// Foydalanuvchidan uch xonali sonni kiritishni so'raymiz
// const input = prompt("Uch xonali son kiriting:");
// const number = parseInt(input);

// if (number >= 100 && number <= 999) {
//     // Birlar, onliklar va yuzliklar xonasini hisoblaymiz
//     const ones = number % 10;
//     const tens = Math.floor((number % 100) / 10);
//     const hundreds = Math.floor(number / 100);
    
//     // Birinchi raqamni chapdan o'ngga ko'chiramiz va sonni hosil qilamiz
//     const rearrangedNumber = parseInt(`${tens}${hundreds}${ones}`);
    
//     // Natijani ko'rsatamiz
//     console.log(`Birinchi raqamni chapdan o'ngga ko'chirgan son: ${rearrangedNumber}`);
// } else {
//     console.log("Iltimos, haqiqiy uch xonali son kiriting.");
// }
