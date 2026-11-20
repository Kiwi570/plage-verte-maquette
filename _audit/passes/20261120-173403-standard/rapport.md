# Rapport d’audit

Projet : `plage-verte-maquette` · 20/11/2026 18:51:04 · 17 min · 6 page(s) · audit standard

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261120-173403-standard` · version ?v=1
- Échecs : **9**
- À regarder : **15**
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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-171304-standard | standard | toutes | toutes | 59 | 39 | 1 | échecs |
| **20261120-173403-standard** (celle-ci) | standard | toutes | toutes | 9 | 15 | 1 | échecs |

## Échecs

### texte sous 12 px (1)

- **texte sous 12 px** — `/` — section#debut > div.cachet:nth-of-type(2) > span.cachet-etoiles:nth-of-type(1) « ★★★ » — 11.2 px _(320×568 normal, 320×568 sansJs)_

### élément recouvert (4)

- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(1) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « 5,50 € par personne et par nuit » — par li.dormir-carte:nth-of-type(1) > div.dormir-corps > h3 > a.dormir-lien « Emplacements » _(768×1024 normal, 390×844 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(2) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 65 € la nuit » — par li.dormir-carte:nth-of-type(2) > div.dormir-corps > h3 > a.dormir-lien « Cabanes » _(768×1024 normal, 390×844 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(3) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 440 € la semaine » — par li.dormir-carte:nth-of-type(3) > div.dormir-corps > h3 > a.dormir-lien « Mobil-homes » _(768×1024 normal, 390×844 normal, 1920×1080 normal, 1366×768 normal)_
- **élément recouvert** — `/` — ul.dormir-grille.fx-fini > li.dormir-carte:nth-of-type(4) > div.dormir-corps > p.dormir-prix:nth-of-type(2) « dès 360 € la semaine » — par li.dormir-carte:nth-of-type(4) > div.dormir-corps > h3 > a.dormir-lien « Gîte et appartements » _(768×1024 normal, 390×844 normal, 1920×1080 normal, 1366×768 normal)_

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/emplacements` — section#detail > figure.media.detail-media > picture > img « Une allée du camping entre les emplacements. » — emplacements (3/5, faible, 27 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_

### épinglage : image isolée différente (flash) (2)

- **épinglage : image isolée différente (flash)** — `/` — à 483 ms (films/epinglage-1.png) _(1366×768)_
- **épinglage : image isolée différente (flash)** — `/` — à 1617 ms (films/epinglage-1.png) _(1366×768)_

### épinglage : changement brusque (1)

- **épinglage : changement brusque** — `/` — à 1733 ms (différence 21 %) (films/epinglage-1.png) _(1366×768)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

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

### section sans visuel (1)

- **section sans visuel** — `/reserver` — section#formulaire « Maquette : cette demande est simulée, rien n'est e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (3)

- **retour avant : changement brusque** — `/emplacements` — à 57 ms (différence 52 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/emplacements` — à 74 ms (différence 25 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/emplacements` — à 59 ms (différence 29 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 83 ms (différence 45 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 116 ms (différence 27 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/contact` — écran différent à la même position après rechargement (8.1 %), voir comparaisons/rechargement-contact-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/emplacements` — écran différent à la même position après rechargement (32.1 %), voir comparaisons/rechargement-emplacements-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2675 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2436 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /emplacements (1366×768) : 2470 ms depuis le premier octet
- film de l'ouverture /emplacements 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /locations (1366×768) : 2493 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2421 ms depuis le premier octet
- film de l'ouverture /reserver 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture / (390×844) : 2647 ms depuis le premier octet
- Ouverture /contact (390×844) : 2396 ms depuis le premier octet
- Ouverture /emplacements (390×844) : 2453 ms depuis le premier octet
- Ouverture /locations (390×844) : 2467 ms depuis le premier octet
- film de l'ouverture /locations 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (390×844) : 2425 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 509 images d’intro, 16 de voile et 137 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /emplacements : aucune section épinglée ou plein écran.
- Tient dans l'écran /locations : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 473, tâche la plus longue 55 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 128, tâche la plus longue 0 ms
- Fluidité /emplacements 1366×768 (molette) : 0 % d'images lentes sur 279, tâche la plus longue 0 ms
- Fluidité /locations 1366×768 (molette) : 0 % d'images lentes sur 272, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 111, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1374, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Fluidité /emplacements 390×844 (doigt) : 0 % d'images lentes sur 1335, tâche la plus longue 0 ms
- Fluidité /locations 390×844 (doigt) : 0 % d'images lentes sur 1332, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1333, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /emplacements : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /locations : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.24 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/emplacements --seulement=fichiers,mesures,ecran
```
