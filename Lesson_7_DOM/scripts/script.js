const goods = [
  {
    id: 1,
    title: 'Bike',
    price: 500,
    country: 'Germany'
  },
  {
    id: 2,
    title: 'Skate',
    price: 700,
    country: 'France'
  },
  {
    id: 3,
    title: 'Skies',
    price: 450,
    country: 'Spain'
  },
  {
    id: 4,
    title: 'Ball',
    price: 100,
    country: 'Poland'
  },
  {
    id: 5,
    title: 'Sport clothes',
    price: 560,
    country: 'USA'
  }
]


// 1. Из каждого объекта сформировать карточку с параграфами title и price
// 2. Добавить карточки в div с классом container
// 3. Добавить каждому объекту свойство country и вывести еще один параграф с информацией о стране

const cards_container = document.querySelector('.container');

goods.forEach(element => {
  const cardElem = document.createElement('div');
  const titleElem = document.createElement('p');
  const priceElem = document.createElement('p');
  const countryElem = document.createElement('p');

  titleElem.innerText = `Title: ${element.title}`;
  priceElem.innerText = `Price: ${element.price}$`;
  countryElem.innerText = `Country: ${element.country}`

  cardElem.classList.add('card_elem');
  // priceElem.classList.add('price');

  priceElem.style.color = 'green';

  cardElem.append(titleElem, priceElem, countryElem);
  cards_container.append(cardElem);
})


