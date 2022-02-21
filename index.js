let count = 0;
let counter = document.getElementById('counter')
document.getElementById('increase').addEventListener('click',
function increase(){
    count +=1
    counter.textContent = count
}
)
document.getElementById('save').addEventListener('click',
function save(){
    let para = document.getElementById('entry')
    para.textContent += count + " - "
    count = 0;
    counter.textContent = '0'
}
)