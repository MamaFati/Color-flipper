const btnEl = document.getElementById("btn");
const colorEl = document.getElementById("color");
const containerEl = document.querySelector(".contianer1");

       

 generateColor();
 function generateColor(){
    const newColor = randomColor();
   color.innerText = "#"+ newColor;
    containerEl.style.backgroundColor = "#"+ newColor;
   
 }
randomColor();

function randomColor(){
    let char = "0123456789abcdef"
    let colorCode = 6;
    let mainColor = "";
for(let index= 0; index < colorCode;index++){
    const randomColor = Math.floor(Math.random()*char.length);
    mainColor += char.substring(randomColor,randomColor +1)
    }
    return mainColor
    // document.getElementById('btn').value = btn;
}
 

btnEl.addEventListener("click",()=>{
     generateColor();
     randomColor();
    
})

// function randomInt(max){
//     return Math.floor(Math.random()*(max+1));
// }
// function randomRgbColor(){
//     let r = randomInt(255);
//     let g = randomInt(255);
//     let b = randomInt(255);
//     return [r,g,b];
// }
// function randomHexColor(){
//     let [r,g,b] = randomRgbColor();
//     let hr = r.toString(16).padStart(2,'0');
//     let hg = g.toString(16).padStart(2,'0');
//     let hb = b.toString(16).padStart(2,'0');
//     return "#"+ hr+ hg+ hb;
// }
// function changeColor(){
//     let hex = randomHexColor();
//     document.getElementById('color').value= hex
//     docment.getElementById('btn').innerHTML = hex;
// }
// function clickHandler(event){
//     changeColor();
//     event.preventDefault();
// }

   