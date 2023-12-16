
let moveCount = 0

setInterval(()=>{
    const player = document.querySelector(".c-main-view__player")
    moveCount++
    if(moveCount >= 4){
        moveCount = 0
    }
    player.classList.remove("move0")
    player.classList.remove("move1")
    player.classList.remove("move2")
    player.classList.remove("move3")
    player.classList.add(`move${moveCount}`)
},1000)