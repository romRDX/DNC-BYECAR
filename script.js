const BIKE_CARDS = [
    {
      img: "./assets/img-card-1.png",
      paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      name: "Scooter Elétrica Voltz EV1",
    },
    {
      img: "./assets/img-card-2.png",
      paragraph: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
      name: "Honda CB 500X",
    },
  ];
  
  let carousel_li = document.querySelectorAll(".carousel-cards li");
  let firstCard = document.querySelector("#card");
  let index = 0;
  let variation = 1;
  
  function slide(value) {
  
    if((value == 1) && (index == carousel_li.length -1)){
      return;
    }
  
    if((value == -1) && (index == 0)){
      return;
    }
  
    index = value ? index + value : index + variation;
    firstCard.style.marginLeft = `-${index * 540}px`;
  }
  
  setInterval(() => {
  
    if(index == carousel_li.length -1){
      variation = -1;
    }
  
    if(index == 0){
      variation = 1;
    }
  
    slide();
  }, 5000);
  
  
let modal = document.querySelector("#modal");

function showModal(index) {
    modal.innerHTML = "";
    modal.innerHTML = `
    <div class="modal-card">
      <button onclick="closeModal()">
        <img src="./assets/close-btn.png" alt="close-button" />
      </button>
      <h4 class="modal-card-name">${BIKE_CARDS[index].name}</h4>
      <p>
      ${BIKE_CARDS[index].paragraph}
      </p>
      <img src="${BIKE_CARDS[index].img}" alt="" />
      <button ">Quero Assinar!</button>
    </div>
    `;
    modal.style.visibility = "visible";
  }
  
  function closeModal() {
    modal.style.visibility = "hidden";
  }
  