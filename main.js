function  Start() {
    alert('Are you ready???')
    document.getElementById('div1').innerHTML = document.getElementById('div3').innerHTML
}

function  Start2() {
    alert('Are you ready???')
    document.getElementById('div1').innerHTML = document.getElementById('div4').innerHTML
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

var learnings = [
    {
        learning : 'A for Apple',
    },

    {
        learning : 'B for Ball',
    },

    {
        learning : 'C for Cake',
    },
    
    {
        learning : 'D for Dog',
    },

    {
        learning : 'E for Eagle',
    },

    {
        learning : 'F for Fish',
    },

    {
        learning : 'G for Goat',
    },

    {
        learning : 'H for House',
    },

    {
        learning : 'I for Ice-Cream',
    },

    {
        learning : 'J for Jug',
    },

    {
        learning : 'K for Kangaroo',
    },

    {
        learning : 'L for Leopard',
    },

    {
        learning : 'M for Mango',
    },

    {
        learning : 'N for Niddle',
    },

    {
        learning : 'O for Onion',
    },

    {
        learning : 'P for Pot',
    },

    {
        learning : 'Q for Queen',
    },

    {
        learning : 'R for Rabbit',
    },

    {
        learning : 'S for Snake',
    },

    {
        learning : 'T for Tortoise',
    },

    {
        learning : 'U for Umbrella',
    },

    {
        learning : 'V for Vulture',
    },

    {
        learning : 'W for watch',
    },

    {
        learning : 'X for Xylophone',
    },

    {
        learning : 'Y for Yatch',
    },

    {
        learning : 'Z for Zebra'
    }
]

let currentLearning = 0
let previousLearning = 0

function Next(){

    let learningText = document.getElementById('learn')
    learningText.textContent = learnings[currentLearning].learning

    setTimeout(() => {

        currentLearning++
    })
}



