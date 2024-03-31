// 1: "İstifadəçinin daxil etdiyi adın neçə simvoldan ibarət olduğunu tapın."

// let Ad = prompt("Adınızı Daxil Edin:");
// let AdUzunluq = Ad.length;
// console.log("Adınızın Uzunluğu: " + AdUzunluq);

////////////////////////////////////////////////////////////////////////

// 2: "İstifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvol varmı ?"

// let cumle = prompt("Cümlə daxil edin:");
// let sozler = cumle.split(" ");
// if (sozler.length < 2) {
//     console.log("Cümlədə ən azı iki söz olmalıdır.");
// } else {
//     let Ilksoz = sozler[0];
//     let Ikincisoz = sozler[1];
//     let ikinciSimvol = Ikincisoz[0];
//     if (Ilksoz.indexOf(ikinciSimvol) !== -1) {
//         console.log("İlk sözün içində ikinci simvol var.");
//     } else {
//         console.log("İlk sözün içində ikinci simvol yoxdur.");
//     }
// }

////////////////////////////////////////////////////////////////////////

// 3: "İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla başlayırmı ?"

// let cumle = prompt("Bir cümlə daxil edin:");
// let sozler = cumle.split(" ");
// if (sozler.length < 2) {
//     console.log("Cümlədə ən azı iki söz olmalıdır.");
// } else {
//     let ilkSoz = sozler[0];
//     let ikinciSoz = sozler[1];
//
//     if (ilkSoz[0] === ikinciSoz[0]) {
//         console.log("1-ci söz, 2-ci simvol ilə başlayır.");
//     } else {
//         console.log("1-ci söz, 2-ci simvol ilə başlamır.");
//     }
// }

////////////////////////////////////////////////////////////////////////

// 4: "İstifadəçinin daxil etdiyi 1 ci söz daxil etdiyi 2 ci simvolla bitirmi ?"

// let cumle = prompt("Bir cümlə daxil edin:");
// let sozler = cumle.split(" ");
// if (sozler.length < 2) {
//     console.log("Cümlədə ən azı iki söz olmalıdır.");
// } else {
//     let ilkSoz = sozler[0];
//     let ikinciSoz = sozler[1];
//     let sonsimvol = "";
//
//     for (let i = ilkSoz.length - ikinciSoz.length; i < ilkSoz.length; i++) {
//         sonsimvol += ilkSoz[i];
//     }
//
//     if (sonsimvol === ikinciSoz) {
//         console.log("1-ci söz, 2-ci sözün son simvolu ilə bitir.");
//     } else {
//         console.log("1-ci söz, 2-ci sözün son simvolu ilə bitmir.");
//     }
// }

/////////////////////////////////////////////////////////////////////////

// 5: "ifadəçinin daxil etdiyi 1 ci sözdə daxil etdiyi 2 ci simvolun index`ini tapın."

// -------------------------------------------------------------------------------------

/////////////////////////////////////////////////////////////////////////

// 6: "İstifadəçinin daxil etdiyi sözün böyük hərf olub olmadığını tapın"

// let soz = prompt("Bir söz daxil edin:");
// let Boyukherf = false;

// for (let i = 0; i < soz.length; i++) {
//     if (soz[i] >= "A" && soz[i] <= "Z") {
//         Boyukherf = true;
//         break;
//     }
// }
// if (Boyukherf) {
//     console.log("Daxil etdiyiniz sözde böyük hərf var.");
// } else {
//     console.log("Daxil etdiyiniz sözde böyük hərf yoxdur.");
// }

//////////////////////////////////////////////////////////////////////////