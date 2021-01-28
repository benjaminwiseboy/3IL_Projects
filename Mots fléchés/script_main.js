var repertoire_mots1= ["ANANAS", "PAPAYE", "PAMPLEMOUSSE", "FRAISE", "CERISE", "POMME", "BANANE", "ORANGE", "AVOCAT", "TOMATE", "MANGUE", "RAISIN"];
var repertoire_mots2= ["PINEAPPLE", "PAPAYA", "LEMON", "STRAWBERRY", "CHERRY", "APPLE", "BANANA", "ORANGE", "AVOCADO", "TOMATO", "MANGO", "GRAPE"];
var grille1 = new Array(n);
var grille2 = new Array(n);
var colonneMots1 = new Array();
var colonneMots2 = new Array();

// Importation du contenu du fichier contenant
/*var Fichier = function Fichier(fichier)
{
    if(window.XMLHttpRequest) obj = new XMLHttpRequest(); //Pour Firefox, Opera,...

    else if(window.ActiveXObject) obj = new ActiveXObject("Microsoft.XMLHTTP"); //Pour Internet Explorer 

    else return(false);
    

    if (obj.overrideMimeType) obj.overrideMimeType("text/xml"); //Évite un bug de Safari

   
    obj.open("GET", fichier, false);
    obj.send(null);
   
    if(obj.readyState == 4) return(obj.responseText);
    else return(false);
}
var text = Fichier('repertoire.txt');
var text="";
 $.get('repertoire.txt', function(data){
    text= data;
 });   

//var text=loadText("http://localhost/Mots%20fl%C3%A9ch%C3%A9s/repertoire.txt" );
console.log(text);
var repertoire_mots= text.split("\n");
console.log(repertoire_mots);*/

creationGrille(grille1, ".grilleJeu1");
creationColMots(colonneMots1,".colonneMots1", repertoire_mots1);
remplissageGrille(grille1, repertoire_mots1);

creationGrille(grille2, ".grilleJeu2");
creationColMots(colonneMots2,".colonneMots2", repertoire_mots2);
remplissageGrille(grille2, repertoire_mots2);

$('.grilleJeu1').addClass('enabled');
$('.grilleJeu2').children().addClass('disabled');

// Evenements de la souris

$(".cellule").mousedown((e)=>{
    var parent=$(e.currentTarget).parent();
  if (parent.hasClass("grilleJeu1"))
    mousedown(grille1, e.currentTarget);
    else if (parent.hasClass("grilleJeu2")  )
    mousedown(grille2, e.currentTarget);

});

$(".cellule").mouseenter((e)=>{
    var parent=$(e.currentTarget).parent();
    if (parent.hasClass("grilleJeu1"))
    mouseenter(grille1, e.currentTarget);
    else if (parent.hasClass("grilleJeu2"))
    mouseenter(grille2, e.currentTarget);
 });
/*
 $(".grilleJeu1").mouseleave((e)=>{
   if ( mouseup(repertoire_mots1, colonneMots1, grille1))
   {
    $('.grilleJeu1').children().addClass('disabled');
    $('.grilleJeu2').children().removeClass('disabled');
    $('.grilleJeu1').removeClass('enabled');
    $('.grilleJeu2').addClass('enabled');
   }
  });*/

 /*$(".grilleJeu2").mouseleave((e)=>{
    if( mouseup(repertoire_mots2, colonneMots2, grille2))
    console.log("mouseup");
   
   $('.grilleJeu2').children().addClass('disabled');
    $('.grilleJeu1').children().removeClass('disabled');
    $('.grilleJeu2').removeClass('enabled');
    $('.grilleJeu1').addClass('enabled');
   comparaison(grille1,grille2,colonneMots1,colonneMots2);
  });*/

  $(".grilleJeu1").mouseup((e)=>{
      if ( mouseup(repertoire_mots1, colonneMots1, grille1))
      {
        $('.grilleJeu1').children().addClass('disabled');
        $('.grilleJeu2').children().removeClass('disabled');
        $('.grilleJeu1').removeClass('enabled');
        $('.grilleJeu2').addClass('enabled');
      }

  });

  $(".grilleJeu2").mouseup((e)=>{
    if ($('.grilleJeu2').hasClass('enabled'))
    {
      if( mouseup(repertoire_mots2, colonneMots2, grille2))
        console.log("mouseup");

          comparaison(grille1,grille2,colonneMots1,colonneMots2);
  
        
        $('.grilleJeu2').children().addClass('disabled');
        $('.grilleJeu1').children().removeClass('disabled');
        $('.grilleJeu2').removeClass('enabled');
        $('.grilleJeu1').addClass('enabled');
    }
  });
