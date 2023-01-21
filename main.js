const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].checked = false;
}
var result = "";
var btn = document.querySelector('button')
var option = "";
var texte = document.getElementById('text');

const cache = document.querySelector('#cacher');


cache.addEventListener('change', (event) => {

  if (event.target.checked) {

    option += '||';
  } else {
    option = '';
  }
});
const sauter = document.querySelector('#saut');


sauter.addEventListener('change', (event) => {

  if (event.target.checked) {

    option += "<br>";
  } else {
    option = '';
  }
});

btn.onclick = function () {
  if (option == '' || document.getElementById('text').value == "") {
    alert('lol pas d\'optionou champ vide');
  } else {
    var texte = document.getElementById('text').value;
    var longeur = texte.length;
    // console.log(texte[0]);
    // console.log(texte[longeur - 1]);
    if(cache.checked&&sauter.checked==true){
       for (let i = 0; i < texte.length; i++) {
      traiter =  "||"+texte[i] + option;

      result += traiter;
    }
    }else{for (let i = 0; i < texte.length; i++) {
      traiter = option + texte[i] + option;

      result += traiter;
    }}
    
    var html = document.getElementById('resultat').innerHTML = result;
    result = "";
    document.getElementById('text').value = "";
  }
}