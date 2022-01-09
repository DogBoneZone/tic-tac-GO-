// Gameboard Object
function GameBoard() {
    createBoard: {
        const gameBoard = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"]
        for (let i of gameBoard) {
            let box = document.createElement('div')
            box.id = i
            box.dataset.winValue = 0
            box.classList.add('box')

            // Check clicked box and have CPU select box based on difficulty level
            box.addEventListener("click", () => {
                let playerLabel = 'player'
                const difficulty = document.querySelector('#CPULevel').value
                if (box.textContent == '') {
                    box.textContent = 'X'
                    box.dataset.winValue = 1
                    checkGameEnd(box, playerLabel)
                    CPU(difficulty)
                }
            })

            document.querySelector('.gameBoard').append(box)
        }
    }

    resetGame: {
        const resetButton = document.querySelector("#reset")
        resetButton.addEventListener("click", () => {
            for (let box of [...document.querySelectorAll(".box")]) {
                box.textContent = ''
                box.dataset.winValue = 0
            }
        })
    }
}

function CPU(difficulty) {
    // Random Unchecked Box Strategy
    if (difficulty == 'Easy') {
        let playerLabel = 'cpu'
        let availableBoxes = []
        const boxes = [...document.querySelectorAll(".box")]
        for (let box of boxes) {
            if (box.textContent == '') {availableBoxes.push(box)}
        }
        let index = Math.floor(availableBoxes.length * Math.random())
        let box = availableBoxes[index]
        box.textContent = 'O'
        box.dataset.winValue = -1
        checkGameEnd(box, playerLabel)
    }
}

// Need to figure out how to work Check Game Logic (has dataset label for +1 for Player and -1 for CPU)
function checkGameEnd(box, playerLabel) {
    const board = document.querySelector('.gameBoard')
    console.log(box)
    if (playerLabel === 'player') {

    }
    else {

    }
}

GameBoard()