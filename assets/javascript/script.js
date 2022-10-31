const selectionButtons = document.querySelectorAll('[data-selection');
const SELECTIONS = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
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
    console.log(selection)
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
}


