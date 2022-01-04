// Gameboard Object
function GameBoard() {
    createBoard: {
        const gameBoard = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"]
        for (let i of gameBoard) {
            let box = document.createElement('div')
            box.id = i
            box.classList.add('box')

            box.addEventListener("click", () => {
                if (box.textContent == '') {
                    box.textContent = 'X'
                    CPU()
                }
            })

            document.querySelector('.gameBoard').append(box)
        }
    }
}

function CPU() {
    easy: {
        if (document.querySelector("#CPULevel").value == 'Easy') {
            let availableBoxes = []
            const boxes = [...document.querySelectorAll(".box")]
            for (let box of boxes) {
                if (box.textContent !== 'X') {availableBoxes.push(box.id)}
            }
            let index = Math.floor(availableBoxes.length * Math.random())
            document.querySelector(`#${boxID}`).textContent = 'O'
        }
    }
}

GameBoard()