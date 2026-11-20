# Rapport d’audit

Projet : `plage-verte-maquette` · 20/11/2026 19:16:36 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261120-181028-complet-partiel` · version ?v=1
- Échecs : **7**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (8)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-171304-standard | standard | toutes | toutes | 59 | 39 | 1 | échecs |
| 20261120-173403-standard | standard | toutes | toutes | 9 | 15 | 1 | échecs |
| 20261120-175240-standard | standard | toutes | toutes | 1 | 14 | 1 | échecs |
| 20261120-180957-standard-cible-partiel | standard | / | fichiers, mesures | 0 | 2 | 0 | complet |
| **20261120-181028-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 7 | 1 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(3) > p.ouv-info.ouv-apparait:nth-of-type(3) « Saison 2026 terminée · dates 2027 à venir » _(844×390 sansJs, 1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/emplacements` — section#debut > div.ouv-scindee-texte > p.ouv-info-int:nth-of-type(4) « Arrivée dès 14 h · départ avant 12 h » _(1000×560 normal, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.conteneur.ouv-accueil-texte:nth-of-type(3) > div.ouv-actions.ouv-apparait > a.bouton:nth-of-type(1) « Demander un séjour » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-texte > p.ouv-actions-int:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(844×390 sansJs, 1000×560 sansJs)_

### texte coupé (3)

- **texte coupé** — `/reserver` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Hébergement » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/reserver` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/reserver` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(1000×560 normal, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (1)

- **section sans visuel** — `/reserver` — section#formulaire « Maquette : cette demande est simulée, rien n'est e » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /emplacements : aucune section épinglée ou plein écran.
- Tient dans l'écran /locations : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/emplacements,/reserver --seulement=fichiers,mesures
```
