//Update skor
let skorPlayerSatu = document.querySelector("#skorPlayerSatu")
let skorPlayerDua = document.querySelector("#skorPlayerDua")
let hitungSkorSatu = document.querySelector(".hitungSkorSatu")
let hitungSkorDua = document.querySelector(".hitungSkorDua")
let countPlayerSatu = 0;
let countPlayerDua = 0;
skorPlayerSatu.addEventListener("click",function(){
    hitungSkorSatu.textContent = countPlayerSatu += 1;
})
skorPlayerDua.addEventListener("click", function(){
    hitungSkorDua.textContent = countPlayerDua += 1;
})
//Update set
let setPSatu = document.querySelector("#setPSatu")
let setPDua = document.querySelector("#setPDua")
let setSatu = document.querySelector(".setSatu")
let setDua = document.querySelector(".setDua")
let skorSetSatu = 0;
let skorSetDua = 0;
setPSatu.addEventListener("click", function(){
    setSatu.textContent = skorSetSatu += 1;
})
setPDua.addEventListener("click", function(){
    setDua.textContent = skorSetDua += 1;
})
//min skor Satu
let minSkorSatu = document.querySelector("#minSkorSatu")
let minSatu = document.querySelector("#minSatu")
minSkorSatu.addEventListener("click", function(){
    hitungSkorSatu.textContent = countPlayerSatu -= 1;
})
//min skor Dua
let minSkorDua = document.querySelector("#minSkorDua")
let minDua = document.querySelector("#minDua")
minSkorDua.addEventListener("click", function(){
    hitungSkorDua.textContent = countPlayerDua -= 1;
})
//Reset skor
let reset = document.querySelector("#Reset");
reset.addEventListener("click", function(){
    hitungSkorSatu.textContent = countPlayerSatu -= countPlayerSatu;
    hitungSkorDua.textContent = countPlayerDua -= countPlayerDua;
    setSatu.textContent = skorSetSatu -= skorSetSatu;
    setDua.textContent = skorSetDua -= skorSetDua;
})