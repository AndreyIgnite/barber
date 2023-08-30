const popover = document.querySelector(".popover-busk");
const button_popover_on = document.querySelector("#button-show-popover");
const button_popover_off = document.querySelector("#popover-off");
button_popover_on.addEventListener("click", function(e){
    e.preventDefault();
    popover.classList.toggle('popover-show');
})

button_popover_off.addEventListener("click", function(e){
    e.preventDefault();
    popover.classList.toggle('popover-show');
});

const button_login = document.querySelector("#button-login")
const modal_window = document.querySelector(".modal-container")
const button_close_modal = document.querySelector(".modal-close")

button_login.addEventListener("click", function(e){
    e.preventDefault()
    modal_window.classList.add("modal-show")
})

button_close_modal.addEventListener("click", function(){
    modal_window.classList.toggle("modal-show")
})