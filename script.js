const starts = ['You must', 'You can', 'You must not', 'You will never']
const verbs = ['eat', 'cook', 'order', 'demand']
const foods = ['veggies', 'chilli', 'medicine', 'CBD', 'cake from Moono', 'OmniPork']

function randMessage(first, second, third) {
    firstIdx = Math.floor(Math.random() * first.length)
    secondIdx = Math.floor(Math.random() * second.length)
    thirdIdx = Math.floor(Math.random() * third.length)
    return first[firstIdx] + ' ' + second[secondIdx] + ' ' + third[thirdIdx] + '.'
}

console.log(randMessage(starts, verbs, foods))
