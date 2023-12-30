function  Start() {
    alert('Are you ready???')
    document.getElementById('div1').innerHTML = document.getElementById('div3').innerHTML
}

function Home(){
    alert('Are you sure?')
    window.location.href = "index.html"
}

function music(){
    alert('Play Music?')
    let x = document.getElementById('btns1')
    x = document.getElementById('btns2')
    x.play()
}



