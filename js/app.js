///////////////////////
///// Story Teller /////
///////////////////////

// Phrase d'intro

document.body.style.backgroundImage = "url('img/porte.jpg')";

var nom = prompt("Bienvenue voyageur ! Quel est ton nom ?");

alert("Enchanter de faire ta connaissance " + nom + ". Prépare toi à vivre une aventure extraordinaire ! Pour une meilleur expérience je te recommande d'utiliser le navigateur Mozilla Firefox.");

// Histoire
var content1 = document.getElementById("content1");
content1.style.display="block";

var dial1 = document.getElementById("dial1");
dial1.innerHTML = nom.bold() + ", tu te retrouve devant une grande et imposante porte des étoiles, que décide tu de faire ?";

// Scénario 1
var content2 = document.getElementById("content2");
var dial2 = document.getElementById("dial2");
var nchoix3 = document.getElementById("nchoix3");
var nchoix4 = document.getElementById("nchoix4");
var nchoix5 = document.getElementById("nchoix5");
var nchoix6 = document.getElementById("nchoix6");
var i = 0;
function choix1() {
   i++;
   console.log(choix1);
   console.log(i);
   document.body.style.backgroundImage = "url('img/desert.jpg')";
   content1.style.display="none";
   content2.style.display="block";
   nchoix5.style.display="none";
   nchoix6.style.display="none";
   dial2.innerHTML = "Quel courage " + nom.bold() + "! Mais désormais tu es dans un désert, tu va devoir faire de la marche, il faut absolument que tu te débarrasse d'un objet sur toi. Que choisis tu d'abandonner ?";
 }

// Scénario 2
 function choix2() {
   console.log(choix2);
   document.body.style.backgroundImage = "url('img/neige.jpg')";
   content1.style.display="none";
   content2.style.display="block";
   nchoix3.style.display="none";
   nchoix4.style.display="none";
   dial2.innerHTML = nom.bold() + ", tu es un vrai trouillard ! La porte t'as aspiré alors que tu t'enfuyais. Pas de chance tu es dans les montagnes gelées et il va falloir marcher. Pas loin de toi se trouve 2 objets. Lequel prends-tu ? ";
 }

// Scénario 3

function choix3() {
  console.log(choix3);
  content2.style.display="none";
  content3.style.display="block";
  content3.style.marginTop="14vh";
  dial3.innerHTML = nom.bold() + ", tu possèdes désormais un pistolet calibre .45 dans ton inventaire. <br> Tu as raison " + nom.bold() + ", une arme dans le désert est toujours plus utile que de l'eau, dans le pire des cas jouer à la roullette permet de passer le temps.";
  dial32.innerHTML = "Après plusieurs heures de marche, rien n'y fait. " + nom.bold() + ", tu en es toujours au meme point. Contre toute attente un petite objet se trouve à tes pieds il s'agit de : ";
}

function choix4() {
  console.log(choix4);
  content2.style.display="none";
  content4.style.display="block";
  content4.style.marginTop="14vh";
  dial4.innerHTML = nom.bold() + "bla";
  dial42.innerHTML = "blabla ";
}
