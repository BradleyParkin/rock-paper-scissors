const selectionButtons = document.querySelectorAll('[data-selection]')
const final = document.querySelector('[data-final]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
    {
        name: 'rock',
        ID: 'Rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        ID: 'Paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        ID: 'Scissors',
        beats: 'paper'
    },
]

/**
 * selector button below to chose which button comes first
 */
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

/**
 * function below is to where it works out which player will win, either player or computer automatically generated
 */

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(computerSelection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

/**
 * fuction here is to show the winning image below the score.
 */

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.ID
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    final.after(div)
}