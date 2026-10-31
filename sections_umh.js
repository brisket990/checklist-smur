const SECTIONS_UMH=[
 {key:"ext",title:"Extérieur",dysf:594951105,groups:[
  g("Carrosserie, pare-brise, feux, plaques",OK2,[[1256418221,"Carrosserie"],[1210808495,"Pare-brise"],[746229853,"Feux"],[728473262,"Plaques d'immatriculation"]]),
  g("Rétroviseurs",["Fonctionnel","Dommages constatés"],[[234278902,"Droit (coque, miroirs, répétiteur)"],[1758394666,"Gauche (coque, miroirs, répétiteur)"]]),
  g("Pneumatiques",["Pas d'anomalie","Anomalies constatées"],[[1188680941,"Avant"],[1060115745,"Arrière"]]),
  s(152331360,"Trousseau de clés complet",ON),
  s(162416715,"Ouvrants et centralisation",["La commande centralisée fonctionne correctement","Dysfonctionnement constaté"])]},
 {key:"cab",title:"Cabine de conduite",dysf:1666272693,groups:[
  g("Niveaux",["Niveau correct","Autre"],[[754052419,"Huile"],[1100824517,"Liquide de refroidissement"],[774534022,"Liquide de frein"]]),
  s(26226311,"Carte carburant présente",ON),
  s(2075092397,"Ceintures cabine",FCD),
  s(1537642895,"Anomalie au démarrage",["Non","Oui (prévenir le cadre)"]),
  s(1776979519,"Voyant allumé après démarrage",["Non","Oui"]),
  s(1745355450,"Suspensions pneumatiques opérationnelles",["Oui","Non (prévenir le cadre )"]),
  s(976372694,"Frein à main fonctionnel",["Oui","Non (prévenir le cadre )"]),
  s(908590740,"GPS fonctionnel",ON),
  s(1990007051,"Documents de bord",ON),
  s(923992433,"Essai radio ANTARES",["Oui","Non","Pas de radio"]),
  s(545990755,"Gilet + triangle",ON),
  s(1010715509,"Ensemble des feux",ON),
  g("Avertisseurs lumineux",FC,[[1357858210,"Avant"],[235163406,"Arrière"],[852649899,"Latéraux"]]),
  s(752824467,"Avertisseurs sonores",["Fonctionnement correct","Dysfonctionnement constaté","Non réalisé"])]},
 {key:"tech",title:"Vérifications techniques",dysf:226010228,groups:[
  s(1843373358,"Tension batteries ≥ 12 V",ON),
  g("Prise Maréchal",ON,[[1704576891,"En bon état"],[363920779,"Voyant de présence allumé"]]),
  g("Prise DEFA",ON,[[144197717,"En bon état"],[1801467815,"Voyant de présence allumé"]]),
  g("Convertisseur",ON,[[670469855,"Branché : voyant charger"],[2006114969,"Moteur tournant : voyants inverter"]]),
  g("Trappe batteries auxiliaires",["oui","non","Non concerné"],[[1812431726,"Extincteur"],[838003111,"Rallonge DEFA"],[2122562629,"Rallonge Maréchal"],[913830129,"Tablette hoverboard"]]),
  g("Coffre technique",["Conforme","Non conforme","Absent"],[[487386083,"Lampe torche"],[1456331378,"Chargeur et batterie Stryker"],[1339595687,"Poste ANTARES TPH700"]]),
  g("Chaise portoir",ON,[[1670345500,"Chaise présente"],[2099138672,"Sangles présentes"],[1794357991,"Fonctionnement correct"]])]},
 {key:"cel",title:"Cellule sanitaire",dysf:1610253187,groups:[
  s(2012960360,"Éclairage",FC),
  g("Ventilation",FCD,[[1826347904,"Climatisation additionnelle"],[1576730776,"Chauffage additionnel"],[2084919961,"Aérateur"],[804554268,"Extracteur"]]),
  g("Sièges et ceintures",FCD,[[1664608336,"Rotation des sièges"],[1645612026,"Assises"],[1366709664,"Ceintures"]]),
  g("Réfrigérateur",FCD,[[1597973623,"Ouverture / fermeture"],[331375373,"Température (2–8 °C)"]]),
  g("Placards et tiroirs",FCD,[[293629216,"Tiroirs"],[1775711898,"Placards"],[1135315575,"Sangles maintien matériel"]]),
  g("Dispositifs médicaux",FCD,[[1741786643,"Mise en charge"],[314749919,"Fixation"]]),
  g("Immobilisation",ON,[[218827186,"MID"],[1057130220,"Colliers cervicaux"],[1506183739,"Attelles"]])]},
 {key:"bra",title:"Brancardage",dysf:1470284666,groups:[
  g("Table de brancard",["Fonctionne correctement","Dysfonctionnement constaté","Option non disponible"],[[1668485006,"Mode réanimation"],[895987680,"Mode amorti"],[317559945,"Latéralisation"]]),
  g("Power Load",FCD,[[1448732248,"Entrée / sortie"],[737831803,"Alimentation électrique"],[846660755,"Ancrage brancard"]]),
  s(382792176,"Brancard adulte",FCD)]},
 {key:"hyg",title:"Hygiène",dysf:null,groups:[
  s(1599317433,"Cabine de conduite",["Propre","Sale"]),
  g("Cellule sanitaire",["Propre","Sale"],[[1738866349,"Brancard / module"],[1747441855,"Table brancard"],[2003588848,"Parois"],[62840121,"Sol"]]),
  s(779481034,"Propreté de l'ambulance compatible accueil patient",ON)]}
];