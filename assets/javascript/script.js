const selectionButtons = document.querySelectorAll('[data-selection');
const computer = document.querySelector('[data-computer]')
const SELECTIONS = [
    {
        name: 'rock',
        icon: '🤘',
        beats: 'scissors'
    },
    {
        name: 'paper',
        icon: '📜',
        beats: 'rock'
    },
    {
        name: 'scissors',
        icon: '✂️',
        beats: 'paper'
    }
]

//selection button to chose what hand beats who

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

// function below is to where it works out which player will win, either player or computer automatically generated

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourSuccess = isSuccess(selection, computerSelection)
    const computerSuccess = isSuccess(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerSuccess)
    addSelectionResult(selection, yourSuccess)
}

function isSuccess(selection, oppositionSelection) {
    return selection.beats === oppositionSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

// success results

function addSelectionResult(selection, success) {
    const div = document.createElement('div')
    div.innerText = selection.icon
    div.classList.add('result-selection')
    if(success) div.classList.add('winner')
    computer.after(div)

}


