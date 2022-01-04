// Gameboard Object
function GameBoard() {
    createBoard: {
        const gameBoard = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"]
        for (let i of gameBoard) {
            let box = document.createElement('div')
            box.id = i
            box.classList.add('box')

            // Check clicked box and have CPU select box based on difficulty level
            box.addEventListener("click", () => {
                if (box.textContent == '') {
                    box.textContent = 'X'
                    checkGameEnd(box.id)
                    CPU()
                }
            })

            document.querySelector('.gameBoard').append(box)
        }
    }
}

function CPU() {
    easy: {
        // Random Unchecked Box Strategy
        if (document.querySelector("#CPULevel").value == 'Easy') {
            let availableBoxes = []
            const boxes = [...document.querySelectorAll(".box")]
            for (let box of boxes) {
                if (box.textContent == '') {availableBoxes.push(box.id)}
            }
            let index = Math.floor(availableBoxes.length * Math.random())
            let boxID = availableBoxes[index]
            document.querySelector(`#${boxID}`).textContent = 'O'
            checkGameEnd(boxID)
        }
    }
}

function checkGameEnd(boxID) {
    const numID = Number([...boxID].pop())
    console.log(numID)
    console.log(boxID)
}

GameBoard()