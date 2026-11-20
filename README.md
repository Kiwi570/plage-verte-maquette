# Camping La Plage Verte : maquette v1

Maquette du futur site du camping La Plage Verte (Le Mont-Dore), direction « Prairie et pouzzolane ».
Adresse prévue : https://plage-verte-maquette.vercel.app

Site statique (HTML, CSS, JavaScript), sans étape de construction. Les pages sont générées à partir de `donnees/` par `node outils/generer.mjs` ; ne jamais modifier les fichiers `.html` à la main.

## Pages de la v1

| Page | Ouverture | Sections |
|---|---|---|
| Accueil `/` | Vue aérienne plein cadre, cachet rond « Camping ★★★ » | bienvenue et chiffres, quatre façons de dormir, le camping de près (galerie), spa en plein écran, le matin et les services, le Sancy en 4 profils, engagements, frise de la saison, appel final |
| Emplacements `/emplacements` | Scindée : titre à gauche, prairie à droite | détail, calculateur de nuitée (redevances 2026), forfait curiste et navette, équipements, groupes |
| Locations `/locations` | Grand titre puis bandeau photo | filtre par nombre de personnes et par type, 6 fiches (cabanes, mobil-homes Éco, Confort, Premium, gîte, appartements), ce qui est fourni |
| Réserver `/reserver` | Le formulaire d'abord | demande en 3 étapes et récapitulatif, préremplie par l'adresse ; bon à savoir |
| Contact `/contact` | Titre et plan d'accès dessiné | coordonnées, horaires d'accueil, question courte |
| 404 | Sardine de tente dans l'herbe | retour à l'accueil |

Pages du site actuel non reprises en v1 (possibles en v2) : une page « Le Sancy et bien-être » (alentours, spa, engagements, aujourd'hui sur l'accueil), une page « Groupes » à part (aujourd'hui une section des Emplacements), une page Engagements durables à part.

## Fiche : informations à fournir par le client

À compléter :
- Mentions légales (éditeur, responsable de publication, SIRET, hébergeur Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis : adresse vérifiée le 20 novembre 2026 dans les conditions d’utilisation de Vercel).
- Politique de confidentialité (formulaires de demande et de question).
- Conditions générales de vente (le PDF actuel n'est pas relié : la maquette ne pointe jamais vers l'ancien site).
- Assurances et classements : préfecture et date du classement 3 étoiles, numéro Gîtes de France du gîte, classement 2 étoiles des appartements.
- Crédits photo des quatre images « Partez à la découverte du Sancy » (thermes, tyrolienne, caves d'affinage, vallée) : elles semblent venir de l'office de tourisme du Sancy, droits à vérifier.
- Crédits des illustrations générées (7 images Grok, voir plus bas).

Retiré ou remplacé faute d'information :
- Dates de la saison 2027 : non publiées. La maquette affiche « Saison 2026 terminée · dates 2027 à venir » ; le statut se met à jour seul d'après `donnees/saison.json`.
- Tarifs de haute saison des cabanes et des mobil-homes : seuls les prix « dès » 2026 sont affichés.
- Capacité maximale des groupes, conditions d'acompte et d'annulation : absentes du site actuel, non affichées.
- Plans détaillés des mobil-homes (modèles Riviera, Super Titania, Savanah, Pacifique) : non repris faute de savoir quel plan correspond à quel modèle.
- Avis clients : aucun avis publié sur le site actuel, aucun n'est affiché.
- Logo : le camping n'en a pas ; la maquette propose un petit pictogramme (crête du Sancy et soleil) et le nom en Epilogue, à valider.

Incohérences relevées sur le site actuel, à trancher :
- Deux e-mails : campinglaplageverte@orange.fr (accueil) et contact@plage-verte.com (page contact). La maquette affiche le premier (le second porte le domaine du site actuel, auquel la maquette ne renvoie jamais).
- Deux jeux de dates 2026 : page d'accueil « 26 avril – 14 octobre » et « 7 mai – 29 septembre », grille tarifaire « 26 avril – 11 octobre » et « 7 mai – 13 septembre ». La maquette reprend la grille tarifaire.
- Gîte : « 2 à 6 personnes » sur l'accueil, « 1 à 5 personnes » sur sa page (repris : 1 à 5).
- « 100 emplacements de camping et locatifs » alors que le détail en compte 105 (84 + 2 + 16 + 3).
- La page /accueil double la page d'accueil, avec d'autres dates.

## Illustrations générées

Images créées avec Grok, chacune marquée « Illustration générée » sur le site (à garder sur le site final) : vapeur du spa, crêtes à l'aube, café du matin, rosée, prairie de la page Réserver, linge fourni, page 404. Aucune ne représente le camping, un hébergement ou un plat du camping.

## À la mise en ligne définitive

À retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), formulaires simulés (demande de séjour, question) à brancher sur un vrai envoi, mentions « à compléter » du pied de page, phrase « dates 2027 à venir » à remplacer par les vraies dates dans `donnees/saison.json`.
À garder : la mention « Illustration générée ».

## Commandes

```
node outils/generer.mjs                  pages
node _audit/audit.mjs                    audit standard
```
Images : pipeline de la bibliothèque des maquettes (`plan-images.json`, `images/produire.mjs`, `images/partage.mjs`).
