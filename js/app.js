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
   dial2.innerHTML = "Quel courage " + nom.bold() + "! Mais désormais tu es dans un désert, tu va devoir faire de la marche, il faut absolument que tu te débarrasse d'un objet sur toi. Que choisis tu de <b>garder</b> ?";
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
var inventaire = document.getElementById("inventaire");
function choix3() {
  console.log(choix3);
  content2.style.display="none";
  inventaire.style.display="block";
  place0.innerHTML = nchoix3.value;
  content3.style.display="block";
  content3.style.marginTop="14vh";
  dial3.innerHTML = nom.bold() + ", tu possèdes désormais un pistolet calibre .45 dans ton inventaire. <br> Tu as raison, une arme dans le désert est toujours plus utile que de l'eau, dans le pire des cas jouer à la roullette russe permet de passer le temps.";
  dial32.innerHTML = "Après plusieurs heures de marche, rien n'y fait " + nom.bold() + ", tu es toujours aussi perdu. Soudain tu remarque un petit objet à tes pieds, il s'agit de : ";
}

function choix4() {
  console.log(choix4);
  content2.style.display="none";
  content4.style.display="block";
  content4.style.marginTop="14vh";
  dial4.innerHTML = nom.bold() + "bla";
  dial42.innerHTML = "blabla ";
}

function choix5() {
  console.log(choix5);
  content2.style.display="none";
  content5.style.display="block";
  content5.style.marginTop="14vh";
  dial5.innerHTML = nom.bold() + "bla";
  dial52.innerHTML = "blabla ";
}
function choix6() {
  console.log(choix6);
  content2.style.display="none";
  content6.style.display="block";
  content6.style.marginTop="14vh";
  dial6.innerHTML = nom.bold() + "bla";
  dial62.innerHTML = "blabla ";
}

// Bonus 1
var objet = document.getElementById("objet");
var place1 = document.getElementById("place1");
var bonus = document.getElementById("bonus");
var nchoix7 = document.getElementById("nchoix7");
function monobjet(){
  place1.innerHTML = objet.value;
  bonus.style.display="none";
  nchoix7.style.display="block";
  dial3.style.display="none";
  dial32.innerHTML = objet.value.bold() + " a été ajouté à ton inventaire.";
}

// Scénario 4
var licorne1 = document.getElementById("licorne1");
function choix7(){
  content3.style.display="none";
  content7.style.display="block";
  licorne1.style.display="block";
  dial7.innerHTML = "Aprés avoir marché plusieurs heures tu te retrouve à bout de force. Aucun batiment à l'horizon, rien que du sable..."
  dial72.innerHTML ="Tout à coup sortie de nulle part une <b>licorne</b> vient vers toi. C'est certainement une hallucination. La </b>licorne</b> te demande de la suivre vers une nouvelle porte des étoiles qui vient d'apparaître. Que fais-tu ?";
}

// Scénario 5
function choix8(){
  licorne1.style.display="none";
  licorne2.style.display="block";
  document.body.style.backgroundImage = "url('img/colline.jpg')";
  content7.style.display="none";
  content8.style.display="block";
  dial8.innerHTML = "Tu te retrouve désormais téléporté dans un nouveau lieu. Tu décide alors de suivre ton nouveau compagnon qui semble visiblement venu pour t'aider à retrouver ton chemin.";
  dial82.innerHTML="Soudain, un monstre vous attaque ! La licorne s'interpose pour vous défendre. Cela vous donne <b>10 secondes</b> pour intervenir !";
}

var fight1 = document.getElementById("fight1");
var mcompteur = document.getElementById("mcompteur");
var mort = document.getElementById("mort");
var gagne = document.getElementById("gagne");
var nchoix11 = document.getElementById("nchoix11");
c = 0;

function choix10(){
  content8.style.display="none";
  fight1.style.display="block";
  licorne2.style.display="none";
  boss1.style.display="block";

  setTimeout(function () {
    mcompteur.style.display ="none";
    if(c < 20) {
         inventaire.style.display ="none";
         boss1.style.display ="none";
         fight1.style.display="none";
         gameover1.style.display ="block";
         document.body.style.backgroundImage = "url('img/mort1.jpg')";
       }
    else if(c => 20) {
         place0.style.color="#db0d20";
         licorne2.style.display="block";
         boss1.style.display="none";
         gagne.style.display ="block";
         dialb1.style.display ="block";
         nchoix11.style.display ="block";
         fight1.style.marginTop="10vh";
         fight1.style.border="1px solid white";
         fight1.style.backgroundColor="rgba(0,0,0,0.5)";
         dialb1.innerHTML="Vous avez réussi ! Le reptile est mort. La licorne te regarde, puis baisse la tête en signe de remerciement.<br> Vous continuez votre chemin jusqu'a un mystérieux puit. La licorne s'approche de toi puis prend un petit objet dans ta poche, il s'agit de : <b>" + objet.value + "</b>. L'objet que tu avez ramassé dans le désert, puis le jette dans le puit. Soudain un vortex de porte des étoiles sort du puit.";
         dialb2.innerHTML="La licorne te salut comme pour te dire bonne chance puis s'en va.";
       }
  }, 10000);
}


function compteur() {
    c++;
    console.log(c);
    if(c == 5) {
      mcompteur.style.backgroundColor="#db6e0d";
    }
    else if(c == 10) {
      mcompteur.style.backgroundColor="#db9e0d";
    }
    else if(c == 15) {
      mcompteur.style.backgroundColor="#dbd90d";
    }
    else if(c == 20) {
      mcompteur.style.backgroundColor="#5fdb0d";
    }
}

var fuite1 = document.getElementById("fuite1");
function choix010(){
  content8.style.display="none";
  fuite1.style.display="block";
  licorne2.style.display="none";
  place0.style.color="#db0d20";
  dialf1.innerHTML="Tu t'enfuis en courant, au passage tu perds ton <b>cal.45</b>. Tu prends de l'avance mais rapidement le raptor tue la licorne, te rattrape en quelques minutes et te saute dessus.";

}

var fight2 = document.getElementById("fight2");
var gagne2 = document.getElementById("gagne2");
var nchoix12 = document.getElementById("nchoix12");
var res = document.getElementById("res");
r = 0;
function choix011(){
  fuite1.style.display="none";
  fight2.style.display="block";
  boss1.style.display="block";

  setTimeout(function () {
    res.style.display ="none";
    if(r < 45) {
         inventaire.style.display ="none";
         boss1.style.display ="none";
         fight2.style.display="none";
         gameover1.style.display ="block";
         document.body.style.backgroundImage = "url('img/mort1.jpg')";
       }
    else if(r => 45) {
         boss1.style.display="none";
         gagne2.style.display ="block";
         dialb12.style.display ="block";
         dialb21.style.display ="block";
         nchoix12.style.display ="block";
         fight2.style.marginTop="15vh";
         fight2.style.border="1px solid white";
         fight2.style.backgroundColor="rgba(0,0,0,0.5)";
         dialb12.innerHTML="Contre toute attente tu as réussie ! Lors d'une attaque rapide du raptor, tu le prends de vitesse en lui assénant un coups rapide dans les yeux, puis tu fuis à toute jambe !";
         dialb21.innerHTML="Tu repère un puit non loin de toi, c'est ta meilleure chance de survie !";
       }
  }, 10000);
}

function resist() {
    r++;
    console.log(r);
    if(r == 15) {
      res.style.backgroundColor="#db6e0d";
    }
    else if(r == 25) {
      res.style.backgroundColor="#db9e0d";
    }
    else if(r == 35) {
      res.style.backgroundColor="#dbd90d";
    }
    else if(r == 45) {
      res.style.backgroundColor="#5fdb0d";
    }

}


// Fins
var fin1 = document.getElementById("fin1");
function choix11(){
  inventaire.style.display ="none";
  licorne2.style.display="none";
  fight1.style.display ="none";
  fin1.style.display ="block";
  document.body.style.backgroundImage = "url('img/porte.jpg')";
  dialfin1.innerHTML="Félicitation tu as finis le jeu ! Tu as réussie graçe à tes choix à obtenir la meilleur fin possible, tu rentre chez toi sain et sauf après avoir vécu une histoire incroyable.";
  dialfin11.innerHTML="Il existe <b>plusieurs fins</b> à ce jeux avec beaucoups de possibilités. Pour voir ton parcours clique sur le bouton suivant :";
}

function choix12(){
  inventaire.style.display ="none";
  licornedark.style.display="block";
  fight2.style.display ="none";
  fin2.style.display ="block";
  document.body.style.backgroundImage = "url('img/foret.jpg')";
  dialfin2.innerHTML="Tu sens l'objet que tu avais trouvé dans le désert bouger dans ta poche : <b>" + objet.value + "</b>. Soudain un vortex émis par une porte des étoiles au fond du puit t'aspire et te téléporte ailleur.";
  dialfin21.innerHTML="Tu te retrouve dans une forêt, au pied d'un arbre et devant toi se trouve une licorne noir, elle est trés imposante et te regarde de haut. Il s'agit très probablement du compagnon de la licorne que tu as laissé mourir et il ne semble pas près de te le pardonner.<br> Ainsi s'achève ta partie, tu restes perdu dans une forêt immense avec une licorne noir qui t'est hostile et n'attends qu'un seul geste de ta part pour t'empaller.";
  dialfin31.innerHTML="Il existe <b>plusieurs fins</b> à ce jeux avec beaucoups de possibilités. Pour voir ton parcours clique sur le bouton suivant :";
}

// Arborescences
function arb1(){
  fin1.style.display="none";
  credit.style.display="block";
  document.body.style.backgroundImage = "url('img/arbo1.jpg')";
}

function arb2(){
  licornedark.style.display="none";
  fin2.style.display="none";
  credit.style.display="block";
  document.body.style.backgroundImage = "url('img/arbo1.jpg')";
}

// Crédits
var credit = document.getElementById("credit");
var gen = document.getElementById("gen");
function cred(){
  gen.style.display="block";
  credit.style.display="none";
  mescred.innerHTML="Merci d'avoir joué à mon jeu : <b>" + nom + "</b>.";
  recommencer.innerHTML="Pour recommencer le jeu appuyer sur la touche <b>F5</b> ou <b>recharger la page du navigateur</b>.";
}
