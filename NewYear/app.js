const text = "<h2><span>W</span>elcome 20<span>23</span>!!!</h2>"
let textChange = document.getElementById('innerDiv');
const changeText = ()=>{
    setTimeout(()=>{
        textChange.innerHTML = text;
    },7500)
}
changeText()

//remove below lines after downloading code!!
setTimeout(()=>{
    alert("Particle Motion not loaded because of technical glitch!! Please download code from my GitHub Account and run to get full experience")
}, 13000)
