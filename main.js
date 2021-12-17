  const section = document.querySelector('section');
  const playerLivesCount = document.querySelector('span');
  let startBtn = document.querySelector('.startBtn');
  let playerLives = 3;

  playerLivesCount.textContent = playerLives;

  // Generate the data
  const getData = () => [
    { imgSrc: "./images/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 6, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./images/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./images/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./images/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./images/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./images/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./images/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./images/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./images/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
  ];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5)
  return cardData;
}

const cardGenerator = () => {
  const cardData = randomize();
  // generate HTML
  cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    // gen info card
    face.src = item.imgSrc;
    card.setAttribute('name', item.name);
    // Show card in section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
      card.classList.toggle('rotateCard');
      checkCards(e);
    });
  });

}

function checkCards(e){
  const clickedCard = e.target;
  let cards = document.querySelectorAll('.card');
  console.log(clickedCard);
  clickedCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped');
  //logic
  if(flippedCards.length === 2) {
    if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
      console.log('It\'s a match!');
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none'; 
      })
    }
    else {
      console.log('not his time');
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        setTimeout(() => {
          card.classList.remove('rotateCard');
        }, 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      if(playerLives < 1) {
        cards.forEach(card => {
          card.style.pointerEvents = 'none'; 
        })
        section.style.pointerEvents = 'none';
        // restart();
        // setTimeout(() => {
        // }, 1500);
        
      }
    }
  }
}

cardGenerator();

//Restart
const restart = () => {
  let cardData = randomize();
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');
  section.style.pointerEvents = 'none';
  cardData.forEach((item,index) => {
    cards[index].classList.add('rotateCard');
    cards[index].classList.remove('rotateCard');
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name', item.name);
    //DELAY the time of able of click a pictures
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all';
      section.style.pointerEvents = 'all';
    }, 1000)
  })
  playerLives = 3;
  playerLivesCount.textContent = playerLives;
  
  cards.forEach(card => {
    card.classList.add('rotateCard');
    setTimeout(() => {
      card.classList.remove('rotateCard');
    }, 1000);
})
}


startBtn.addEventListener('click', () => {
  restart();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.add('rotateCard');
    setTimeout(() => {
      card.classList.remove('rotateCard');
    }, 1000);
})
})

// rotate(cards);
// function rotate(){
//   cards.forEach(card => {
//     card.classList.add('rotateCard');
//     setTimeout(() => {
//       card.classList.remove('rotateCard');
//     },1000);
//   })
// };