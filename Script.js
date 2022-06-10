const items = document.querySelectorAll('.acticle')
const placeholders =  document.querySelectorAll('.li_D')

items.addEventListener('dragstart', dragstart)
items.addEventListener('dragend', dragend)

for (const li_D of placeholders) {
    li.addEventListener('dragover', dragover)
    li.addEventListener('dragenter', dragenter)
    li.addEventListener('dragleave', dragleave)
    li.addEventListener('drop', dragdrop)
}

item.addEventListener('dragstart', dragstart)
function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

 
function dragend(event) {
    event.target.classList.remove('hold', 'hide')

}


function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
    console.log('drag leave')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}

 
