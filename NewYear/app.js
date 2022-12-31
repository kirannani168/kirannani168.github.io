const text = "<h2><span>W</span>elcome 20<span>23</span>!!!</h2>"
let textChange = document.getElementById('innerDiv');
const changeText = ()=>{
    setTimeout(()=>{
        textChange.innerHTML = text;
    },7500)
}
changeText()