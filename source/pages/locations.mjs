/* Locations : ouverture « grand titre puis bandeau » (cabane face aux sommets), filtre par nombre de personnes
   et par type (gardé dans l'adresse), fiches des six logements, ce qui est fourni, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal, statutSaison, saisonAttrs, icone } from '../gabarits/blocs.mjs';

export const page = { cle: 'locations', fichier: 'locations', imagePartage: 'cabane-capucin-1280.webp' };

const ICONE_TYPE = { cabane: 'cabane', 'mobil-home': 'mobilhome', gite: 'gite' };

export default (c) => html`
<section class="ouv-bandeau" id="debut">
  <div class="conteneur ouv-bandeau-tete">
    <p class="surtitre">${c.t('locations.hero.surtitre')}</p>
    <h1 class="ouv-titre-geant" data-anime="lignes">${c.tb('locations.hero.titre')}</h1>
    <div class="ouv-bandeau-bas">
      <p class="masque-ecran-tres-bas" data-anime>${c.t('locations.hero.texte')}</p>
      <p class="ouv-actions-int" data-anime>${c.lien('reserver', { params: 'hebergement=mobil-home', classe: 'bouton', texte: c.t('locations.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
      <p class="ouv-info-int" data-info-cle data-anime${saisonAttrs(c, 'mh')}>${icone('mobilhome')}<span data-saison-texte>${statutSaison(c, 'mh')}</span></p>
    </div>
  </div>
  ${c.media({ nom: 'cabane-capucin', alt: c.s('pages.locations.partageAlt'), priorite: true, classe: 'ouv-bandeau-media', sizes: '100vw', legende: c.s('locations.hero.legende'), attrs: 'data-iris-centre data-effet="bandeau"' })}
</section>

<section class="logements" id="logements">
  <div class="conteneur">
    <div class="filtre" data-filtre data-modele-resultat="${c.s('locations.filtre.resultat')}">
      <h2 data-anime="lignes">${c.t('locations.filtre.titre')}</h2>
      <div class="filtre-rangee" role="group" aria-label="${c.s('locations.filtre.personnes')}">
        ${[1, 2, 3, 4, 5, 6].map((n) => html`<button type="button" class="filtre-n" data-personnes="${n}" aria-pressed="false">${n}</button>`)}
      </div>
      <div class="filtre-rangee" role="group" aria-label="${c.s('locations.filtre.type')}">
        ${[['tous', 'tous'], ['cabane', 'cabane'], ['mobil-home', 'mobilhome'], ['gite', 'gite']].map(([v, k], i) => html`<button type="button" class="puce-bouton" data-type="${v}" aria-pressed="${i === 0 ? 'true' : 'false'}">${c.t(`locations.filtre.${k}`)}</button>`)}
      </div>
      <p class="filtre-resultat" role="status" data-filtre-resultat>${c.s('locations.filtre.resultat', { n: c.donnees.hebergements.length })}</p>
      <p class="filtre-vide" data-filtre-vide hidden>${c.t('locations.filtre.aucun')} ${c.lien('reserver', { params: 'hebergement=groupe', texte: c.t('emplacements.groupes.action') })}</p>
    </div>
    <ul class="fiches" data-fiches>
      ${c.donnees.hebergements.map((h) => html`<li class="fiche" id="${h.id}" data-type="${h.type}" data-max="${h.max}">
        <div class="fiche-photos">
          ${c.media({ nom: h.images[0], alt: h.nom, classe: 'fiche-media', sizes: '(max-width: 760px) 100vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
          ${c.media({ nom: h.images[1], alt: `${h.nom} : ${c.s('locations.fiche.autrePhoto').toLowerCase()}`, classe: 'fiche-media-2', sizes: '(max-width: 760px) 40vw, 14vw' })}
        </div>
        <div class="fiche-corps">
          <p class="fiche-type">${icone(ICONE_TYPE[h.type])}<span>${c.s('locations.filtre.jusqua', { n: h.max })}</span></p>
          <h3>${h.nom}</h3>
          <p class="fiche-sur">${h.sur}</p>
          <dl class="fiche-specs">
            <div><dt>${c.t('locations.fiche.surface')}</dt><dd>${h.surface}</dd></div>
            <div><dt>${c.t('locations.fiche.capacite')}</dt><dd>${c.s('locations.fiche.personnes', { min: h.min, max: h.max })}</dd></div>
            <div><dt>${c.t('locations.fiche.couchage')}</dt><dd>${h.couchage}</dd></div>
          </dl>
          <ul class="coches coches--petit">${h.points.map((p) => html`<li>${p}</li>`)}</ul>
          <table class="fiche-prix"><tbody>${h.prix.map(([k, v]) => html`<tr><th scope="row">${k}</th><td data-prix>${v}</td></tr>`)}</tbody></table>
          <p class="fiche-note">${h.note}</p>
          ${c.lien('reserver', { params: `hebergement=${h.formulaire}&logement=${h.id}`, classe: 'bouton', texte: c.t('locations.fiche.action') })}
        </div>
      </li>`)}
    </ul>
  </div>
</section>

<section class="fourni" id="fourni">
  <div class="conteneur fourni-grille">
    ${c.media({ nom: 'grok/linge-fourni', alt: c.s('locations.fourni.fournis'), classe: 'fourni-media', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-fx="zoom"' })}
    <div>
      <p class="surtitre">${c.t('locations.fourni.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('locations.fourni.titre')}</h2>
      <dl class="fourni-liste" data-anime="cascade">
        <div><dt>${c.t('locations.fourni.fournisTitre')}</dt><dd>${c.t('locations.fourni.fournis')}</dd></div>
        <div><dt>${c.t('locations.fourni.apporterTitre')}</dt><dd>${c.t('locations.fourni.apporter')}</dd></div>
        <div><dt>${c.t('locations.fourni.animauxTitre')}</dt><dd>${c.t('locations.fourni.animaux')}</dd></div>
      </dl>
    </div>
  </div>
</section>

${appelFinal(c, { params: 'hebergement=mobil-home' })}
`;
