const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// Instructions
// Take the data above and display it as tiles on the page
const placeItem = document.querySelector('#content')
const sortItem = document.querySelector('#order')

function makeCard(container, array){

    // for loop
    for (let index = 0; index < array.length; index++){
    
const tileItem = document.createElement('div')
tileItem.className = 'card'
tileItem.style.backgroundColor = array[index].color
placeItem.appendChild(tileItem)


const topicItem = document.createElement('div')
topicItem.className = 'topic'
topicItem.textContent = array[index].topic
tileItem.appendChild(topicItem)


const title = document.createElement('div')
title.className = 'title'
title.textContent = array[index].title
tileItem.appendChild(title)


const cost = document.createElement('div')
cost.className = 'buy-button'
cost.textContent = array[index].price
tileItem.appendChild(cost)
    }
}

makeCard(content, data, order);
  








