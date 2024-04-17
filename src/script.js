function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve,ms)
    })
};
const words = ["Sammy Navarro","FrontEnd Developer"];
let typing = document.querySelector('.typing');
let time = 100;
let wordsIndex = 0;

 const typeWriter = async () => {
    while(true){
        let wordphrase = words[wordsIndex];
        
        for(let i = 0;i <= wordphrase.length;i++){
            typing.innerText = wordphrase.substring(0,i);
            await sleep(time);
        }
        await sleep(time * 10)
        for(let i = wordphrase.length;i >= 0;i--){
            typing.innerText = wordphrase.substring(0,i);
            await sleep(time);
        }
        await sleep(time * 10)
        if(wordsIndex == words.length - 1){
            wordsIndex = 0;
        }else{
            wordsIndex++
        }
    }
}
typeWriter();

function glow(){
    const glow = document.querySelector('.glow');  
    document.addEventListener('mousemove', (e) => {
        let x = e.pageX;
        let y = e.pageY;
        glow.style.left = (x - 500) + "px"
        glow.style.top = (y - 500) + "px"
        if(x > 1400){
            glow.style.display = 'none'
        }else {
            glow.style.display = 'block'
        }
       
    })
}
glow();

function scrollani(S){
    window.addEventListener( 'scroll', () => {
    const title = document.querySelectorAll('.title')
    let y = scrollY;
    let sX = screen.width;
        title[0].style.color = (y === 0 && sX > S)? 'red':  '#8806CE';
        title[1].style.color = (y > 350 && sX > S)? 'red':  '#8806CE';
        title[2].style.color = (y > 700 && sX > S)? 'red':  '#8806CE';
        title[3].style.color = (y > 1000 && sX > S)? 'red':  '#8806CE';      
})
};
scrollani(1200);
const project = document.querySelector('#project');
const showmore = document.querySelector('#showmore');
showmore.addEventListener("click", () => {
    project.classList.toggle('show');
    showmore.innerHTML = (project.classList.contains('show'))? 'Show Less' : 'Show More';
})
console.log(project)


