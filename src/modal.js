// --------BOOK A TABLE
(() => {
  const refs = {
    openModalBtn: document.querySelectorA('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
  //----------- BOOK A ROOM
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[datar-modal-open]"),
      closeModalBtn: document.querySelector("[datar-modal-close]"),
      modal: document.querySelector("[datar-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
})();
  // PRICES PER ROOM
  (() => {
    const refs = {
      openModalBtn: document.querySelector("[datap-modal-open]"),
      closeModalBtn: document.querySelector("[datap-modal-close]"),
      modal: document.querySelector("[datap-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();