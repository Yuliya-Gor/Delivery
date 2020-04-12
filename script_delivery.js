const button=document.getElementById('b1'),
      modal=document.querySelector('.modal'),
      close=document.querySelector('.close');

const toggleModal=()=>{
    modal.classList.toggle('isOpen');
};

button.addEventListener('click',(e)=>{
    toggleModal();
});
close.addEventListener('click',(e)=>{
    toggleModal();
});

new WOW().init();