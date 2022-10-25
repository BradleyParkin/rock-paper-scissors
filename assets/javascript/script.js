const selectionButtons = document.querySelectorAll('[data-selection]')
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
    },
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
})

function makeSelection(selection){
    console.log(selection)
}