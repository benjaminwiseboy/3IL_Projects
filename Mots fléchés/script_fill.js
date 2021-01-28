
var n=15;
function creationColMots (tabMots, tabClasse, repertoire)
{
    for (var i=0; i<repertoire.length; i++)
     {
         var bloc = document.createElement("div");
         $(bloc).data("numero", i);
         bloc.className="bloc";
         $(bloc).text(repertoire[i]);
         $(tabClasse).append(bloc);

         tabMots.push(bloc);
         
     }
}
function creationGrille (grilleTab, grilleClasse)
{
    var nbrCol="";
    var j=0;
    for (var i=0; i<n*n; i++)
     {
        // Création graphique de la grille en HTML
        var cel= document.createElement("div");
        cel.className="cellule";
        $(cel).data("numero", i);
        cel.innerHTML="0";
        $(grilleClasse).append(cel);

        // Création d'une matrice grille représentant les différentes cases de la grille réelle
    if (i!=0 && i%n==0) j++;
    if (!grilleTab[j]) grilleTab [j] = new Array(n);
        grilleTab[j][i%n]=cel;
    
    }

        // Création graphique de la grille CSS
     for (var i=0; i<n; i++)
     {
        nbrCol+="1fr "; 
     }        
     $(grilleClasse).css("grid-template-columns", nbrCol);
     
}
// Associe chaque cellule à un objet
function info_cell(grilleTab, numero)
{
    var cell = {
        x : 0,
        y : 0,
        color : "",
        weight : ""
    }
        for (var i=0; i<grilleTab.length; i++)
            for (var j=0; j<grilleTab[i].length; j++ )
                if ($(grilleTab[i][j]).data("numero")==numero)
                    {
                        cell.x=i;
                        cell.y=j;
                        cell.color= $(grilleTab[i][j]).css ("color");
                        cell.weight= $(grilleTab[i][j]).css ("font-weight");
                    }
    
        return cell;
}



function correspH(grilleTab, lettresTab)
{
    var correspond=true;
    var tab_possib= new Array(), matrice_possib=new Array();
    for (var i=0; i<grilleTab.length; i++)
    {
        for (var j=0; j<grilleTab[i].length; j++ )
        {
            correspond=true;
            if (lettresTab.length> (grilleTab.length-j)) correspond=false;
            else 
            {
                for (var k=j, l=0; k<lettresTab.length, l<lettresTab.length; k++, l++ )
                    if ( $(grilleTab[i][k]).text()!=lettresTab[l] && $(grilleTab[i][k]).text()!="0") correspond=false;
            }
            if (correspond==true)
            {
                tab_possib.push(i);
                tab_possib.push(j);
            } 
        }
    }
    var a=0;
    for (var i=0; i<tab_possib.length; i++)
    {
    if (i!=0 && i%2==0)
        a++;
    if (!matrice_possib[a]) matrice_possib [a] = new Array();
        matrice_possib[a][i%2]=tab_possib[i];
        
    }  
    return matrice_possib;
}
function remplH(grilleTab, lettresTab)
{
    var possibH=correspH(grilleTab, lettresTab);
    var indiceH= parseInt(Math.random()*possibH.length);
    var x= possibH[indiceH][0];
    var y= possibH[indiceH][1];
    for(var i=0; i<lettresTab.length; i++)
    {
        $(grilleTab[x][y]).text(lettresTab[i]);
        y++;
    }
}




function correspV(grilleTab, lettresTab)
{
    var correspond=true;
    var tab_possib= new Array(), matrice_possib=new Array();
    for (var i=0; i<grilleTab.length; i++)
    {
        for (var j=0; j<grilleTab.length; j++ )
        {
           
            correspond=true;
            if (lettresTab.length> (grilleTab.length-j)) correspond=false;
            else 
            {
                for (var k=j, l=0; k<lettresTab.length, l<lettresTab.length; k++, l++ )
                    if ( $(grilleTab[k][i]).text()!=lettresTab[l] && $(grilleTab[k][i]).text()!="0") correspond=false;

            }
            if (correspond==true)
            {
                tab_possib.push(i);
                tab_possib.push(j);
            } 
        }
    }
    var a=0;
    for (var i=0; i<tab_possib.length; i++)
    {
    if (i!=0 && i%2==0)
        a++;
    if (!matrice_possib[a]) matrice_possib [a] = new Array();
        matrice_possib[a][i%2]=tab_possib[i];
        
    }  
    return matrice_possib;
}

function remplV(grilleTab, lettresTab)
{
    var possibV=correspV(grilleTab, lettresTab);
    var indiceV= parseInt(Math.random()*possibV.length);
    var x= possibV[indiceV][1];
    var y= possibV[indiceV][0];
    for(var i=0; i<lettresTab.length; i++)
    {
        $(grilleTab[x][y]).text(lettresTab[i]);
        x++;
    }
}



function correspD(grilleTab, lettresTab)
{
    var correspond=true;
    var tab_possib= new Array(), matrice_possib=new Array();
    for (var i=0; i<grilleTab.length; i++)
    {
        for (var j=0; j<grilleTab.length; j++ )
        {
            // compte le nombre de cases de la diagonale
            var nbCases=0, a=i, b=j ;
            while(a<grilleTab.length && b<grilleTab.length)
            {
                nbCases++;
                a++;
                b++;
            }
           
            correspond=true;
            if (lettresTab.length> nbCases) correspond=false;
            else 
            {
                for (var k1=i,k2=j, l=0; k1<lettresTab.length,  k2<lettresTab.length, l<lettresTab.length; k1++, k2++, l++ )
                    if ( $(grilleTab[k1][k2]).text()!=lettresTab[l] && $(grilleTab[k1][k2]).text()!="0") correspond=false;

            }
            if (correspond==true)
            {
                tab_possib.push(i);
                tab_possib.push(j);
            } 
        }
    }
    var a=0;
    for (var i=0; i<tab_possib.length; i++)
    {
    if (i!=0 && i%2==0)
        a++;
    if (!matrice_possib[a]) matrice_possib [a] = new Array();
        matrice_possib[a][i%2]=tab_possib[i];
        
    }  
    return matrice_possib;
}

function remplD(grilleTab, lettresTab)
{
    var possibD=correspD(grilleTab, lettresTab);
    var indiceD= parseInt(Math.random()*possibD.length);
    var x= possibD[indiceD][0];
    var y= possibD[indiceD][1];
    for(var i=0; i<lettresTab.length; i++)
    {
        $(grilleTab[x][y]).text(lettresTab[i]);
        x++;
        y++;
    }
}




function correspAntiD(grilleTab, lettresTab)
{
    var correspond=true;
    var tab_possib= new Array(), matrice_possib=new Array();
    for (var i=0; i<grilleTab.length; i++)
    {
        for (var j=0; j<grilleTab.length; j++ )
        {
            // compte le nombre de cases de l'anti diagonale
            var nbCases=0, a=i, b=j ;
            while(a>0 && b<grilleTab.length)
            {
                nbCases++;
                a--;
                b++;
            }
           
            correspond=true;
            if (lettresTab.length> nbCases) correspond=false;
            else 
            {
                for (var k1=0,k2=j, l=0; k1<lettresTab.length,  k2<lettresTab.length, l<lettresTab.length; k1++, k2++, l++ )
                    if ( $(grilleTab[i-k1][k2]).text()!=lettresTab[l] && $(grilleTab[i-k1][k2]).text()!="0") correspond=false;

            }
            if (correspond==true)
            {
                tab_possib.push(i);
                tab_possib.push(j);
            } 
        }
    }
    var a=0;
    for (var i=0; i<tab_possib.length; i++)
    {
    if (i!=0 && i%2==0)
        a++;
    if (!matrice_possib[a]) matrice_possib [a] = new Array();
        matrice_possib[a][i%2]=tab_possib[i];
        
    }  
    return matrice_possib;
}

function remplAntiD(grilleTab, lettresTab)
{
    var possibAntiD=correspAntiD(grilleTab, lettresTab);
    var indiceAntiD= parseInt(Math.random()*possibAntiD.length);
    var x= possibAntiD[indiceAntiD][0];
    var y= possibAntiD[indiceAntiD][1];
    for(var i=0; i<lettresTab.length; i++)
    {
        $(grilleTab[x][y]).text(lettresTab[i]);
        x--;
        y++;
    }
}
// Fonction prise sur le net pour génerer des caractères aléatoirement en js
function strRandom(o) {
    var a = 10,
        b = 'abcdefghijklmnopqrstuvwxyz',
        c = '',
        d = 0,
        e = ''+b;
    if (o) {
      if (o.startsWithLowerCase) {
        c = b[Math.floor(Math.random() * b.length)];
        d = 1;
      }
      if (o.length) {
        a = o.length;
      }
      if (o.includeUpperCase) {
        e += b.toUpperCase();
      }
      if (o.includeNumbers) {
        e += '1234567890';
      }
    }
    for (; d < a; d++) {
      c += e[Math.floor(Math.random() * e.length)];
    }
    return c;
  }
function remplissageGrille(grilleTab, repertoire_mots)
{
    
    
    for (var i=0; i<repertoire_mots.length; i++)
    {
        
        var lettres = repertoire_mots[i].split('');
        var check=true;
        
        
        do
        {
        var renverse = Math.random()<0.5;
        var typeRemplissage = parseInt(Math.random()*4+1);
        if (renverse) lettres=lettres.reverse();
        switch(typeRemplissage)
        {
            case 1 :
                var tab=correspH(grilleTab, lettres)
                if (tab.length==0)
                {
                    check=false;
                    console.log(check);
                }                  
                else
                {
                    remplH(grilleTab, lettres);
                    check=true;
                    console.log(check);
                }
                
                break;
            case 2 :
                var tab=correspV(grilleTab, lettres)
                if (tab.length==0)
                {
                    check=false;
                    console.log(check);
                }      
                else
                {
                    remplV(grilleTab, lettres);
                    check=true;
                    console.log(check);
                }
                 
                 break;
            case 3 :
                var tab=correspD(grilleTab, lettres)
                if (tab.length==0)
                {
                    check=false;
                    console.log(check);
                }
                else
                {
                    remplD(grilleTab, lettres);
                    check=true;
                    console.log(check);
                }
               
                break;
            case 4 :
                var tab=correspAntiD(grilleTab, lettres)
                if (tab.length==0)
                {
                    check=false;
                    console.log(check);
                }
                    
                else
                {
                    remplAntiD(grilleTab, lettres);
                    check=true;
                    console.log(check);
                }
                
                break;
            
        }
        } while(check==false);
    }

    // Remplis le reste des cases du tableau de lettres aléatoires
    for (var i=0; i<grilleTab.length; i++)
    {
        for (var j=0; j<grilleTab.length; j++ )
        {
            if ($(grilleTab[i][j]).text()=="0")
            $(grilleTab[i][j]).text(strRandom({
                includeUpperCase: true,
                includeNumbers: false,
                length: 1,
                startsWithLowerCase: true
              }).toUpperCase());
        }
    }

}
