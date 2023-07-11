export default class Card {
    isOpen = false
    isComplete = false


    constructor(container, number, action) {

            //Добавляем элемент
    this.card = document.createElement('li')
    this.card.classList.add('game-card')
    this.card.textContent = number
    this.number = number
    
    // Открыть карту по клику
    this.card.addEventListener('click', () => {
        if (this.Open === false && this.Complete === false) {
                this.Open = true
                action(this) // передать весь экземпляр класса
        }
    })
    // Добавить карточку в дом дерево
    container.append(this.card)
    }
    set Open(value) {
        this.isOpen = value
        if (value === true) {
            this.card.classList.add('card-visible')
        } else {
            this.card.classList.remove('card-visible')
        }
    }
    // Возвращаем значение из сеттера
    get Open() {
       return this.isOpen
    }
    set Complete(value) {
        this.isComplete = value
        if (value === true) {
            this.card.classList.add('card-complete')
        } else {
            this.card.classList.remove('card-complete')
        }
    }
    get Complete() {
        return this.isComplete
     }
}





