const color_btn = document.getElementById("color_btn")

color_btn.addEventListener('click', ()=>{

    color_btn.style.backgroundColor=color_btn.style.backgroundColor==='blue' ? '#4caf50': 'blue'

})

function myFunction() {

    document.getElementById("paragraphClick").innerHTML = "Button has already been clicked."

  }