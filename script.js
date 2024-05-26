let boxes = document.querySelectorAll('.box')

let resetBtn = document.querySelector('#reset-btn')
let newGameButton = document.querySelector('#new-btn')

let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector('#msg')
let turn0 = true;

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add('hide');

}
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        if (turn0) {//player0 turn
            box.innerText = '0';
            turn0 = false;
        }
        else {//player X turn
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (winner) => {
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        // boxes[pattern[0]].innerText,
        // boxes[pattern[1]].innerText,
        // boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (pos1Val != '' && posVal2 != '' && posVal3 != '') {
            if (pos1Val === posVal2 && posVal2 === posVal3) {
                console.log('Winner!', pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}
newGameButton.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);




