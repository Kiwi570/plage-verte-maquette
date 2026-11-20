# Rapport d’audit

Projet : `plage-verte-maquette` · 20/11/2026 18:30:05 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **59 échec(s)**
- Passe : `20261120-171304-standard` · version ?v=1
- Échecs : **59**
- À regarder : **39**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (6), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (5), films des épinglages (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (8), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en vague |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | ⚠ à regarder | galerie générique sur / |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:contact@plage-verte.com
- **lien vers le site actuel** — `contact.html` — mailto:contact@plage-verte.com
- **lien vers le site actuel** — `emplacements.html` — mailto:contact@plage-verte.com
- **lien vers le site actuel** — `index.html` — mailto:contact@plage-verte.com
- **lien vers le site actuel** — `locations.html` — mailto:contact@plage-verte.com
- **lien vers le site actuel** — `reserver.html` — mailto:contact@plage-verte.com

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(3) > p.ouv-info.ouv-apparait:nth-of-type(3) « Saison 2026 terminée · dates 2027 à venir » _(320×568 normal, 390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### texte coupé (13)

- **texte coupé** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(6) « Septembre » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(7) « Octobre » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(8) « Novembre » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/` — li.dormir-carte:nth-of-type(1) > div.dormir-corps > h3 > a.dormir-lien « Emplacements » — coupé par section#dormir > div.conteneur > ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(1) « Emplacements 5,50 € par personne et par nuit » _(320×568 normal)_
- **texte coupé** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(1) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « 5,50 € par personne et par nuit » — coupé par section#dormir > div.conteneur > ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(1) « Emplacements 5,50 € par personne et par nuit » _(320×568 normal)_
- **texte coupé** — `/` — li.dormir-carte:nth-of-type(4) > div.dormir-corps > h3 > a.dormir-lien « Gîte et appartements » — coupé par section#dormir > div.conteneur > ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(4) « Gîte et appartements dès 360 € la semaine » _(320×568 normal)_
- **texte coupé** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(4) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 360 € la semaine » — coupé par section#dormir > div.conteneur > ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(4) « Gîte et appartements dès 360 € la semaine » _(320×568 normal)_
- **texte coupé** — `/` — section#bien-etre > div > p.spa-mots > span:nth-of-type(1) « Spa » — coupé par section#bien-etre > div « Illustration générée Spa & sauna » _(320×568 normal)_
- **texte coupé** — `/` — section#bien-etre > div > p.spa-mots > span:nth-of-type(2) « & sauna » — coupé par section#bien-etre > div « Illustration générée Spa & sauna » _(320×568 normal)_
- **texte coupé** — `/` — li.dormir-carte:nth-of-type(1) > div.dormir-corps > h3 > a.dormir-lien « Emplacements » — coupé par section#dormir > div.conteneur > ul.dormir-grille > li.dormir-carte:nth-of-type(1) « Emplacements 5,50 € par personne et par nuit » _(320×568 sansJs)_
- **texte coupé** — `/` — ul.dormir-grille > li.dormir-carte:nth-of-type(1) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « 5,50 € par personne et par nuit » — coupé par section#dormir > div.conteneur > ul.dormir-grille > li.dormir-carte:nth-of-type(1) « Emplacements 5,50 € par personne et par nuit » _(320×568 sansJs)_
- **texte coupé** — `/` — li.dormir-carte:nth-of-type(4) > div.dormir-corps > h3 > a.dormir-lien « Gîte et appartements » — coupé par section#dormir > div.conteneur > ul.dormir-grille > li.dormir-carte:nth-of-type(4) « Gîte et appartements dès 360 € la semaine » _(320×568 sansJs)_
- **texte coupé** — `/` — ul.dormir-grille > li.dormir-carte:nth-of-type(4) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 360 € la semaine » — coupé par section#dormir > div.conteneur > ul.dormir-grille > li.dormir-carte:nth-of-type(4) « Gîte et appartements dès 360 € la semaine » _(320×568 sansJs)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(6) « Septembre » — avec div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(7) « Octobre » _(768×1024 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(7) « Octobre » — avec div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(8) « Novembre » _(768×1024 normal)_
- **textes qui se chevauchent** — `/` — section#debut > div.cachet:nth-of-type(2) > span.cachet-etoiles:nth-of-type(1) « ★★★ » — avec section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(3) > p.surtitre.surtitre--clair:nth-of-type(1) « Camping 3 étoiles · Le Mont-Dore » _(320×568 normal, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(8) « Novembre » — avec div.conteneur.saison-grille > div.frise:nth-of-type(2) > span.frise-jour > span « Aujourd'hui » _(390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_

### contraste insuffisant (1)

- **contraste insuffisant** — `/` — section#engagements > div.mots-bandeau:nth-of-type(1) > p:nth-of-type(2) « Réduire · Économiser · Préserver · Respecter · Réd » — 1.00:1 (minimum 3:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte sous 12 px (8)

- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(1) « Avril » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(2) « Mai » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(3) « Juin » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(4) « Juillet » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(5) « Août » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(6) « Septembre » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(7) « Octobre » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.conteneur.saison-grille > div.frise:nth-of-type(2) > ol.frise-mois > li:nth-of-type(8) « Novembre » — 0.0 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### photo faible affichée en grand (8)

- **photo faible affichée en grand** — `/` — div.conteneur.matin-grille > figure.media.matin-media > picture > img « Pain et viennoiseries <em>cuits sur place</em> » — grok/matin-cafe (4/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — div.conteneur.matin-grille > figure.media.matin-media > picture > img « Pain et viennoiseries <em>cuits sur place</em> » — grok/matin-cafe (4/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/emplacements` — section#detail > figure.media.detail-media > picture > img « Une allée du camping entre les emplacements. » — emplacements (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/emplacements` — section#detail > figure.media.detail-media > picture > img « Une allée du camping entre les emplacements. » — emplacements (3/5, faible, 50 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/emplacements` — section#detail > figure.media.detail-media > picture > img « Une allée du camping entre les emplacements. » — emplacements (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_
- **photo faible affichée en grand** — `/locations` — div.conteneur.fourni-grille > figure.media.fourni-media > picture > img « Oreillers, couettes, couvertures, alèses et protèg » — grok/linge-fourni (3/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/locations` — div.fiche-photos:nth-of-type(1) > figure.media.fiche-media:nth-of-type(1) > picture > img « Mobil-home Éco » — mh-exterieur (3/5, faible, 28 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/locations` — div.conteneur.fourni-grille > figure.media.fourni-media > picture > img « Oreillers, couettes, couvertures, alèses et protèg » — grok/linge-fourni (3/5, faible, 44 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### élément recouvert (4)

- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(1) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « 5,50 € par personne et par nuit » — par li.dormir-carte:nth-of-type(1) > div.dormir-corps > h3 > a.dormir-lien « Emplacements » _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(2) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 65 € la nuit » — par li.dormir-carte:nth-of-type(2) > div.dormir-corps > h3 > a.dormir-lien « Cabanes » _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(3) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 440 € la semaine » — par li.dormir-carte:nth-of-type(3) > div.dormir-corps > h3 > a.dormir-lien « Mobil-homes » _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(4) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 360 € la semaine » — par li.dormir-carte:nth-of-type(4) > div.dormir-corps > h3 > a.dormir-lien « Gîte et appartements » _(768×1024 normal, 390×844 normal, 1366×768 normal, 1920×1080 normal)_

### contraste sur image (1)

- **contraste sur image** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(3) > p.surtitre.surtitre--clair:nth-of-type(1) « Camping 3 étoiles · Le Mont-Dore » — 1.60:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-actions-int:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(844×390 normal, 768×1024 normal, 1920×1080 normal, 1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.ouv-carte-grille > div.ouv-carte-texte > p.ouv-actions-int:nth-of-type(3) > a.bouton « Appeler l'accueil · 04 73 65 04 30 » _(844×390 normal)_
- **premier écran : bouton principal hors de l’écran** — `/reserver` — div.fpe__carton > form.fpe__form > div.fpe__nav:nth-of-type(2) > button.fpe__bouton:nth-of-type(2) « Continuer » _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +4)_

### lien profond (4)

- **lien profond** — `/ → /locations#cabane` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /locations#mh-eco` — section cachée sous l'en-tête (17 px) _(1366×768 lien profond, 390×844 lien profond)_
- **lien profond** — `/ → /locations#gite` — section cachée sous l'en-tête (16 px) _(1366×768 lien profond)_
- **lien profond** — `/ → /locations#gite` — section cachée sous l'en-tête (17 px) _(390×844 lien profond)_

### positions non recalculées après un changement de hauteur (2)

- **positions non recalculées après un changement de hauteur** — `/locations` — 1 — décalage de 28 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/locations` — 2 — décalage de 9 px _(1366×768)_

### ne tient pas dans l’écran (3)

- **ne tient pas dans l’écran** — `/` — section#bien-etre > div > p.spa-mots « Spa & sauna » — coupé en bas de 4 px (à 4 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#bien-etre > div > p.spa-mots « Spa & sauna » — coupé en bas de 4 px (à 50 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#bien-etre > div > p.spa-mots « Spa & sauna » — coupé en bas de 4 px (à 96 % de la scène) _(1000×560 épinglé, 1280×720 épinglé, 1366×768 épinglé, 1440×900 épinglé, 1920×1080 épinglé)_

### épinglage : image isolée différente (flash) (1)

- **épinglage : image isolée différente (flash)** — `/` — à 1450 ms (films/epinglage-1.png) _(1366×768)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : galerie horizontale générique (point 6) (1)

- **grille : galerie horizontale générique (point 6)** — `/` — le métier a-t-il son geste (feuilleter un bac, empiler des planches, tourner les pages, ouvrir un tiroir) ? Modules bac-a-feuilleter, planches-empilees ; si la rangée qui défile est le geste du métier, ajouter data-grille="scene"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/reserver` — 0 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(1366×768, 390×844)_

### section sans visuel (5)

- **section sans visuel** — `/` — section#saison « Saison 2026 Quand venir Arrivées à partir de 14 h, » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#question « Une question ? Pour une demande de dates, passez p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/emplacements` — section#tarifs « Tarifs 2026 Combien coûte une nuit ? Les redevance » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/reserver` — section#debut « Réservation Demander un séjour Pas de réservation  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +4)_
- **section sans visuel** — `/reserver` — section#bon-a-savoir « Bon à savoir Arrivées à partir de 14 h, départs av » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 320×568 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (11)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.cachet:nth-of-type(2) > span.cachet-lieu:nth-of-type(3) « Le Mont-Dore » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#bien-etre > div > figure.media.spa-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#matin > div.conteneur.matin-grille > figure.media.matin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#sancy > div.sancy-bandeau:nth-of-type(1) > figure.media.sancy-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.engagements-grille:nth-of-type(2) > div.engagements-tete > figure.media.engagements-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/locations` — section#fourni > div.conteneur.fourni-grille > figure.media.fourni-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — div.conteneur.ouv-outil-grille > div.ouv-outil-tete > figure.media.ouv-outil-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — section#debut > div.conteneur.ouv-outil-grille > section.fpe.fpe--actif > p.fpe__note « Maquette : cette demande est simulée, rien n'est e » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · HÉBERGEMENT » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — section#debut > div.conteneur.ouv-outil-grille > section.fpe > p.fpe__note « Maquette : cette demande est simulée, rien n'est e » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### typographie française (6)

- **typographie française** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/emplacements` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/locations` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/reserver` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(1) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (3)

- **retour arrière : changement brusque** — `/` — à 82 ms (différence 44 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 64 ms (différence 45 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 148 ms (différence 27 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (3)

- **retour avant : changement brusque** — `/emplacements` — à 51 ms (différence 52 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/emplacements` — à 84 ms (différence 25 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/emplacements` — à 54 ms (différence 46 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (8.1 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/emplacements` — écran différent à la même position après rechargement (22.8 %), voir comparaisons/rechargement-emplacements-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 58 min de travail pour 115 min de budget, 22 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /contact, /emplacements, /locations, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2711 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2438 ms depuis le premier octet
- Ouverture /emplacements (1366×768) : 2465 ms depuis le premier octet
- Ouverture /locations (1366×768) : 2535 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2452 ms depuis le premier octet
- Ouverture / (390×844) : 2646 ms depuis le premier octet
- Ouverture /contact (390×844) : 2399 ms depuis le premier octet
- Ouverture /emplacements (390×844) : 2465 ms depuis le premier octet
- film de l'ouverture /emplacements 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /locations (390×844) : 2507 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2515 ms depuis le premier octet
- Bords de l’écran : 543 images d’intro, 20 de voile et 137 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /emplacements : aucune section épinglée ou plein écran.
- Tient dans l'écran /locations : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 471, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 130, tâche la plus longue 0 ms
- Fluidité /emplacements 1366×768 (molette) : 0 % d'images lentes sur 279, tâche la plus longue 0 ms
- Fluidité /locations 1366×768 (molette) : 0 % d'images lentes sur 275, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 119, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1377, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /emplacements 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /locations 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.53 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /emplacements : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /locations : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.22 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,parcours,ecran
```
