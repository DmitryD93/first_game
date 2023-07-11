import Card from './app.js'


const newGame = (container, cardsCount) => {
let cardsNumberArr = [], // Замутим массив
cardsArray = [],
firstCard = null,
secondCard = null

    for (let i = 1; i <= cardsCount / 2; i++) {
        cardsNumberArr.push(i)
        cardsNumberArr.push(i)
    }
    
    // Без зазрений совести спереть алогоритм Йейтса с learn.javascript
    let randomizer = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // получить случайный индекс от 0 до i
            // Перемешиваем
          [array[i], array[j]] = [array[j], array[i]];
        }
      } 
      randomizer(cardsNumberArr) // Вызываем перемешивалку массива

      console.log('Выведем массив после рандома', cardsNumberArr) // vse ok

      for (const cardNum of cardsNumberArr) {
        cardsArray.push(new Card(container, cardNum, flip ))
      }

      console.log('Массив с карточками в дом дереве',cardsArray) // Получили объект с картами


      function flip(card) { // Логика самой игры

        if(firstCard !== null && secondCard !== null) { // Если карты не совпали

            if(firstCard.number !== secondCard.number) {
              // закрыть карту
              firstCard.Open = false
              secondCard.Open = false
              firstCard = null
              secondCard = null
            }
        }


        if(firstCard == null) {
            firstCard = card
            console.log('KARTA ODIN', card)
        } else if(secondCard === null) {
            secondCard = card
            console.log('KARTA DVA', card)
        }


        if(firstCard !== null && secondCard !== null) { // Если карты совпали

            if(firstCard.number == secondCard.number) {
              // закрыть карту
              firstCard.Complete = true
              secondCard.Complete = true
              firstCard = null
              secondCard = null
            }
        }
        if(document.querySelectorAll('.card-complete').length === cardsNumberArr.length){
        alert('igra okon4ena. ETO POBEDA')
        container.innerHTML = ''
        cardsNumberArr = [] // Замутим массив
        cardsArray = []
        firstCard = null
        secondCard = null
        newGame(container, cardsCount)
    }
      }
}


let cardsCount = 16 // Количество карт на старте игры
newGame(document.querySelector('.game'), cardsCount)


