var selection=false;
var couleurs = ["fuchsia", "cyan", "rgb(255, 45, 45)", "lime", "gold" ];
var rd=0;
var lettresSelect = "";
var celSelect = new Array(); // Tableau constitué de cellules sélectionnées
var trajectoire = [false, false, false, false, false, false, false, false]; // bas-haut-gauche-droite-haut gauche-haut droite-bas gauche-bas droite

function mousedown (grilleTab, element){

    
    if (rd== couleurs.length-1) rd=0;
    else rd++;
 
    selection=true;

    trajectoire = [true, true, true, true, true, true, true, true]; // bas-haut-gauche-droite-haut gauche-haut droite-bas gauche-bas droite
    lettresSelect="";
    celSelect=new Array();

    lettresSelect+=$(element).text();
    var cel = info_cell(grilleTab, $(element).data("numero"));
    celSelect.push(cel);
    $(element).css({ "color":couleurs[rd],"font-weight": "bolder"});
}

function mouseenter(grilleTab, element){
    if(selection==true)
    {
    
    var cel = info_cell(grilleTab, $(element).data("numero"));
    var length= celSelect.length;
    if (length>=1)
        {
            if (celSelect[length-1].x ==cel.x+1 && celSelect[length-1].y ==cel.y && trajectoire[0]==true)
            {
                    // Déplacement vertical bas

                    //Confirme la trajectoire
                    for (var i=0; i<trajectoire.length; i++)
                        trajectoire[i]=false;

                trajectoire[0]=true;
                lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
                var cel = info_cell(grilleTab, $(element).data("numero"));
                celSelect.push(cel);
                $(element).css({"color":couleurs[rd], "font-weight": "bolder"});

            }
            else  if (celSelect[length-1].x ==cel.x-1 && celSelect[length-1].y ==cel.y && trajectoire[1]==true)
            {
                // Déplacement vertical haut
                //Confirme la trajectoire
                for (var i=0; i<trajectoire.length; i++)
                trajectoire[i]=false;

            trajectoire[1]=true;
            lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courant
            var cel = info_cell(grilleTab, $(element).data("numero"));
            celSelect.push(cel);
            $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }
            else  if (celSelect[length-1].y ==cel.y-1 && celSelect[length-1].x ==cel.x && trajectoire[2]==true)
            {
                // Déplacement vertical gauche
                //Confirme la trajectoire
                for (var i=0; i<trajectoire.length; i++)
                trajectoire[i]=false;

        trajectoire[2]=true;
        lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
        var cel = info_cell(grilleTab, $(element).data("numero"));
        celSelect.push(cel);
        $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }
            else  if (celSelect[length-1].y ==cel.y+1 && celSelect[length-1].x ==cel.x && trajectoire[3]==true)
            {
                // Déplacement vertical droite
                //Confirme la trajectoire
                for (var i=0; i<trajectoire.length; i++)
                trajectoire[i]=false;

        trajectoire[3]=true;
        lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
        var cel = info_cell(grilleTab, $(element).data("numero"));
        celSelect.push(cel);
        $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }
            else  if (celSelect[length-1].x ==cel.x-1 && celSelect[length-1].y ==cel.y-1 && trajectoire[4]==true)
            {
                // Déplacement haut gauche
            //Confirme la trajectoire
                    for (var i=0; i<trajectoire.length; i++)
                        trajectoire[i]=false;

                trajectoire[4]=true;
                lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
                var cel = info_cell(grilleTab, $(element).data("numero"));
                celSelect.push(cel);
                $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }
            else  if (celSelect[length-1].x ==cel.x-1 && celSelect[length-1].y ==cel.y+1 && trajectoire[5]==true)
            {
                // Déplacement haut droite
                //Confirme la trajectoire
                    for (var i=0; i<trajectoire.length; i++)
                        trajectoire[i]=false;

                trajectoire[5]=true;
                lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
                var cel = info_cell(grilleTab, $(element).data("numero"));
                celSelect.push(cel);
                $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }
            else  if (celSelect[length-1].x ==cel.x+1 && celSelect[length-1].y ==cel.y-1 && trajectoire[6]==true)
            {
                // Déplacement bas gauche 
                //Confirme la trajectoire
                    for (var i=0; i<trajectoire.length; i++)
                        trajectoire[i]=false;

                trajectoire[6]=true;
                lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
                var cel = info_cell(grilleTab, $(element).data("numero"));
                celSelect.push(cel);
                $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }
            else  if (celSelect[length-1].x ==cel.x+1 && celSelect[length-1].y ==cel.y+1 && trajectoire[7]==true)
            {
                // Déplacement bas droite
                //Confirme la trajectoire
                    for (var i=0; i<trajectoire.length; i++)
                        trajectoire[i]=false;

                trajectoire[7]=true;
                lettresSelect+=$(element).text(); // ajoute la lettre de la case dans la chaine de caractère courante
                var cel = info_cell(grilleTab, $(element).data("numero"));
                celSelect.push(cel);
                $(element).css({"color":couleurs[rd], "font-weight": "bolder"});
            }

        }
   
    }
}

function match_mot (mot, repertoire)
{
    for (var i=0; i<repertoire.length; i++)
    {
        if (mot==repertoire[i]) return true;
    }
    return false;
}

function indice_mot (mot, repertoire)
{
    for (var i=0; i<repertoire.length; i++)
    {
        if (mot==repertoire[i]) return i;
    }
    
}

function souligner_mot (mot, colonne)
{
    for (var i=0; i<colonne.length; i++)
        if (mot==$(colonne[i]).text())
        {
            $(colonne[i]).css({"text-decoration" : "underline"});
            break;
        }  
}

var tabComparaison = new Array(); // Contient l'indice des mots des 2 grilles pour comparer s'ils s'ont correspondants
var tab_celSelect = new Array();
function mouseup (repertoire, colonne, grilleTab){
    selection=false;
    if (match_mot(lettresSelect, repertoire))
    {
        tabComparaison.push(indice_mot(lettresSelect, repertoire));
        tab_celSelect.push(celSelect);
        souligner_mot(lettresSelect, colonne);
        return true;
    }
    else 
    {
        for (var i=0; i<celSelect.length; i++)
        $(grilleTab[celSelect[i].x][celSelect[i].y]).css({"color" : celSelect[i].color , "font-weight": celSelect[i].weight });
        return false;

    } 
 }

 function comparaison (grille1, grille2, colonne1, colonne2){
    console.log("ye");
     if (tabComparaison.length==2)
     {
         console.log("ye");
         if (tabComparaison[0]==tabComparaison[1])
         {
            $( colonne1[tabComparaison[0]]).css({"text-decoration" : "line-through"});
            $( colonne2[tabComparaison[0]]).css({"text-decoration" : "line-through"});
           
         }
         else
         {
            for (var i=0; i<tab_celSelect[0].length; i++)
            $(grille1[tab_celSelect[0][i].x][tab_celSelect[0][i].y]).css({"color" : tab_celSelect[0][i].color , "font-weight": tab_celSelect[0][i].weight });
            $( colonne1[tabComparaison[0]]).css({"text-decoration" : "none"});

            for (var i=0; i<tab_celSelect[1].length; i++)
            $(grille2[tab_celSelect[1][i].x][tab_celSelect[1][i].y]).css({"color" : tab_celSelect[1][i].color , "font-weight": tab_celSelect[1][i].weight });
            $( colonne2[tabComparaison[1]]).css({"text-decoration" : "none"});

         }
     }
     if (tabComparaison.length==1)
     {
        for (var i=0; i<tab_celSelect[0].length; i++)
            $(grille1[tab_celSelect[0][i].x][tab_celSelect[0][i].y]).css({"color" : tab_celSelect[0][i].color , "font-weight": tab_celSelect[0][i].weight });
            $( colonne1[tabComparaison[0]]).css({"text-decoration" : "none"});
            $( colonne2[tabComparaison[0]]).css({"text-decoration" : "none"});
            
     }
        tabComparaison = new Array();
        tab_celSelect = new Array();
 }