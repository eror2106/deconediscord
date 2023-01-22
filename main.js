const checkboxes = document.querySelectorAll('input[type="checkbox"]');
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].checked = false;
}
var result = "";
var option = "";
var btn = document.querySelector('button')
var texte = document.getElementById('text');
const cache = document.querySelector('#cacher');
const sauter = document.querySelector('#saut');
const button = document.querySelector('#copy-button');
button.style.display='none';
cache.addEventListener('change', (event) => {

  if (event.target.checked) {

    option += '||';
  } else {
    option = '';
  }
});



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

    
    if(cache.checked&&sauter.checked==true){
      for (let i = 0; i < texte.length; i++) {
        option="";
      traiter = " "+"||"+texte[i] +"||"+ "<br>";

      result += traiter;
    }
    }else{for (let i = 0; i < texte.length; i++) {
      traiter = option + texte[i] + option;

      result += traiter;
    }}
    
    var html = document.getElementById('resultat').innerHTML = result;
    result = "";
    console.log(html);
    button.style.display='block';
let html1="";
let textToCopy ="";
if( html[0]=="<"){
 html1 = html.replace(/<[^>]*>/g,"" );
 
 let letters = html1.split("");
console.log(letters);
 textToCopy = letters.join("\n")
;}else if(html[0]==" "){
  console.log('test');
  html1 = html.replace(/<[^>]*>/g ,"" );
  console.log("filtrer"+html1);
  let nb=0;
  letpoubelle="";
  let tour=0;
  let letters="";
  for (let k = 0; k < html1.length; k++) {
    
      if (nb<5) {
        if (html1[k]==" ") {
          letters=html1[k].replace(" " ,"" )
        } else {
          
        
        
        letters+=html1[k];
        nb++}
      }else if(nb=6){
        letters+=html1[k]+"\n";
        nb=0;
      }
      
    
    
  }
  console.log(letters);
  textToCopy=letters;

}else{
  textToCopy=html;
}
button.addEventListener("click", function() {
  navigator.clipboard.writeText(textToCopy).then(function() {
    alert("Texte copié dans le presse-papiers avec succès!");
  }, function(err) {
    console.error("Impossible de copier le texte : ", err);
  });
});
  }
 
}