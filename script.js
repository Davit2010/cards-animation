let card = document.querySelector('.card'),
revCard = document.querySelector('.rev-card'),
halfX = card.offsetHeight / 2,
halfY = card.offsetWidth / 2,
revHalfX = revCard.offsetHeight / 2,
revalfY = revCard.offsetWidth / 2


card.addEventListener('mousemove', (Fev) => {


    card.setAttribute('style', `transform:rotateX(${-(Fev.offsetY - halfX) / 10}deg)
    rotateY(${(Fev.offsetX - halfY) / 10}deg);`)

})
card.addEventListener('mouseout', () => {
    card.setAttribute('style', 'transform: rotate(0);')

})

//______________________________________________________________

revCard.addEventListener('mousemove', (Sev) => {


    revCard.setAttribute('style', `transform:rotateX(${(Sev.offsetY - revHalfX) / 10}deg)
    rotateY(${-(Sev.offsetX - revalfY) / 10}deg);`)

})
revCard.addEventListener('mouseout', () => {
    revCard.setAttribute('style', 'transform: rotate(0);')

})
