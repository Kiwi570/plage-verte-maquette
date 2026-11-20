/* Emplacements : ouverture scindée (titre à gauche, prairie à droite qui se découvre), détail des emplacements,
   calculateur de nuitée avec les redevances 2026, forfait curiste et navette (trait qui se dessine),
   équipements, groupes, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal, icone } from '../gabarits/blocs.mjs';

export const page = { cle: 'emplacements', fichier: 'emplacements', imagePartage: 'prairie-1280.webp' };

const euros = (n) => new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n).replace(/[  ]/g, ' ') + ' €';

function calculateur(c) {
  const r = c.donnees.redevances;
  const compteur = (l) => html`<div class="calc-compteur" data-calc-ligne="${l.id}" data-prix-unitaire="${l.prix}">
      <span class="calc-libelle" id="calc-${l.id}-l">${l.libelle}<small>${euros(l.prix)} / nuit</small></span>
      <span class="calc-pas">
        <button type="button" data-moins aria-label="${c.s('emplacements.calcul.moins')} : ${l.libelle}">−</button>
        <input type="number" id="calc-${l.id}" name="${l.id}" value="${l.defaut}" min="${l.min}" max="${l.max}" inputmode="numeric" aria-labelledby="calc-${l.id}-l">
        <button type="button" data-plus aria-label="${c.s('emplacements.calcul.plus')} : ${l.libelle}">+</button>
      </span>
    </div>`;
  const initial = (2 * 5.5 + r.abris[0].prix + r.electricite[1].prix);
  const taxes = 2 * (r.taxes.sejour + r.taxes.departementale);
  return html`<form class="calc" data-visuel data-calculateur aria-label="${c.s('emplacements.calcul.region')}" data-taxe="${r.taxes.sejour + r.taxes.departementale}">
    <div class="calc-champs">
      ${r.lignes.map(compteur)}
      <div class="calc-compteur" data-calc-ligne="majeurs" data-prix-unitaire="0">
        <span class="calc-libelle" id="calc-majeurs-l">${c.t('emplacements.calcul.majeurs')}</span>
        <span class="calc-pas">
          <button type="button" data-moins aria-label="${c.s('emplacements.calcul.moins')} : ${c.s('emplacements.calcul.majeurs')}">−</button>
          <input type="number" id="calc-majeurs" name="majeurs" value="2" min="0" max="8" inputmode="numeric" aria-labelledby="calc-majeurs-l">
          <button type="button" data-plus aria-label="${c.s('emplacements.calcul.plus')} : ${c.s('emplacements.calcul.majeurs')}">+</button>
        </span>
      </div>
      <fieldset class="calc-choix"><legend>${c.t('emplacements.calcul.abri')}</legend>
        ${r.abris.map((a, i) => html`<label class="puce"><input type="radio" name="abri" value="${a.id}" data-prix="${a.prix}" ${i === 0 ? 'checked' : ''}><span>${a.libelle}<small>${a.detail}</small></span></label>`)}
      </fieldset>
      <fieldset class="calc-choix"><legend>${c.t('emplacements.calcul.electricite')}</legend>
        ${r.electricite.map((e, i) => html`<label class="puce"><input type="radio" name="electricite" value="${e.id}" data-prix="${e.prix}" ${i === 1 ? 'checked' : ''}><span>${e.libelle}${e.prix ? html`<small>${euros(e.prix)} / nuit</small>` : ''}</span></label>`)}
      </fieldset>
      <div class="calc-compteur" data-calc-ligne="nuits" data-prix-unitaire="0">
        <span class="calc-libelle" id="calc-nuits-l">${c.t('emplacements.calcul.nuits')}</span>
        <span class="calc-pas">
          <button type="button" data-moins aria-label="${c.s('emplacements.calcul.moins')} : ${c.s('emplacements.calcul.nuits')}">−</button>
          <input type="number" id="calc-nuits" name="nuits" value="7" min="1" max="30" inputmode="numeric" aria-labelledby="calc-nuits-l">
          <button type="button" data-plus aria-label="${c.s('emplacements.calcul.plus')} : ${c.s('emplacements.calcul.nuits')}">+</button>
        </span>
      </div>
    </div>
    <div class="calc-total" aria-live="polite">
      <p class="calc-ligne"><span>${c.t('emplacements.calcul.parNuit')}</span><strong data-prix data-calc-nuit>${euros(initial)}</strong></p>
      <p class="calc-ligne"><span>${c.t('emplacements.calcul.taxes')}</span><strong data-prix data-calc-taxes>${euros(taxes)}</strong></p>
      <p class="calc-grand"><span>${c.t('emplacements.calcul.total')} <small data-calc-pour data-modele="${c.s('emplacements.calcul.pourNuits')}">${c.s('emplacements.calcul.pourNuits', { n: 7 })}</small></span><strong data-prix data-calc-total>${euros((initial + taxes) * 7)}</strong></p>
      ${c.lien('reserver', { params: 'hebergement=emplacement-electricite&personnes=2&nuits=7', classe: 'bouton', texte: c.t('emplacements.calcul.action'), attrs: 'data-calc-lien' })}
      <p class="calc-note">${c.t('emplacements.calcul.note')}</p>
    </div>
  </form>`;
}

export default (c) => html`
<section class="ouv-scindee" id="debut">
  <div class="ouv-scindee-texte">
    <p class="surtitre">${c.t('emplacements.hero.surtitre')}</p>
    <h1 class="ouv-titre-int" data-anime="lignes">${c.tb('emplacements.hero.titre')}</h1>
    <p class="masque-ecran-tres-bas" data-anime>${c.t('emplacements.hero.texte')}</p>
    <p class="ouv-actions-int" data-anime>${c.lien('reserver', { params: 'hebergement=emplacement-electricite', classe: 'bouton', texte: c.t('emplacements.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    <p class="ouv-info-int" data-info-cle data-anime>${icone('tente')}<span>${c.t('emplacements.hero.info')}</span></p>
  </div>
  ${c.media({ nom: 'prairie', alt: c.s('pages.emplacements.partageAlt'), priorite: true, classe: 'ouv-scindee-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-iris-centre data-effet="prairie"' })}
</section>

<section class="detail conteneur" id="detail">
  <div>
    <p class="surtitre">${c.t('emplacements.detail.surtitre')}</p>
    <h2 data-anime="lignes">${c.tb('emplacements.detail.titre')}</h2>
    <ul class="coches" data-anime="cascade">${['l1', 'l2', 'l3', 'l4', 'l5'].map((k) => html`<li>${c.t(`emplacements.detail.${k}`)}</li>`)}</ul>
  </div>
  ${c.media({ nom: 'emplacements', alt: c.s('emplacements.detail.photo'), classe: 'detail-media', sizes: '(max-width: 760px) 100vw, 40vw', legende: c.s('emplacements.detail.photo'), attrs: 'data-anime="rideau"' })}
</section>

<section class="tarifs" id="tarifs">
  <div class="conteneur">
    <div class="section-tete">
      <div><p class="surtitre">${c.t('emplacements.calcul.surtitre')}</p><h2 data-anime="lignes">${c.tb('emplacements.calcul.titre')}</h2></div>
      <p data-anime>${c.t('emplacements.calcul.texte')}</p>
    </div>
    ${calculateur(c)}
    <details class="autres-tarifs">
      <summary>${c.t('emplacements.calcul.autres')}</summary>
      <dl>${c.donnees.redevances.autres.map(([k, v]) => html`<div><dt>${k}</dt><dd>${v}</dd></div>`)}</dl>
    </details>
  </div>
</section>

<section class="cure" id="cure">
  <div class="conteneur cure-grille">
    <div>
      <p class="surtitre surtitre--clair">${c.t('emplacements.cure.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('emplacements.cure.titre')}</h2>
      <p data-anime>${c.t('emplacements.cure.texte')}</p>
      <p data-anime>${c.lien('reserver', { params: 'hebergement=emplacement-electricite&cure=oui', classe: 'bouton bouton--clair', texte: c.t('emplacements.cure.action') })}</p>
    </div>
    <div class="navette" data-visuel>
      <p class="navette-titre">${c.t('emplacements.cure.navette')}</p>
      <svg class="navette-trace" viewBox="0 0 400 120" aria-hidden="true" data-fx="trace"><path data-fx-trait d="M30 80 C 110 20, 200 120, 280 50 S 360 40, 370 60" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="30" cy="80" r="9" fill="currentColor"/><circle cx="370" cy="60" r="9" fill="currentColor"/></svg>
      <div class="navette-points">
        <p><strong>${c.t('emplacements.cure.camping')}</strong><span>${c.t('emplacements.cure.aller')}</span><b data-prix>${c.t('emplacements.cure.allerH')}</b></p>
        <p class="navette-duree">${c.t('emplacements.cure.duree')}</p>
        <p><strong>${c.t('emplacements.cure.thermes')}</strong><span>${c.t('emplacements.cure.retour')}</span><b data-prix>${c.t('emplacements.cure.retourH')}</b></p>
      </div>
    </div>
  </div>
</section>

<section class="equipements conteneur" id="equipements">
  <div class="equipements-texte">
    <p class="surtitre">${c.t('emplacements.equipements.surtitre')}</p>
    <h2 data-anime="lignes">${c.tb('emplacements.equipements.titre')}</h2>
    <ul class="coches" data-anime="cascade">${['l1', 'l2', 'l3', 'l4', 'l5', 'l6'].map((k) => html`<li>${c.t(`emplacements.equipements.${k}`)}</li>`)}</ul>
  </div>
  <div class="equipements-photos" data-anime="cascade">
    ${c.media({ nom: 'sanitaires', alt: c.s('accueil.pres.c5t'), classe: 'eq-1', sizes: '(max-width: 760px) 50vw, 22vw' })}
    ${c.media({ nom: 'laverie', alt: c.s('accueil.pres.c4t'), classe: 'eq-2', sizes: '(max-width: 760px) 50vw, 26vw' })}
  </div>
</section>

<section class="groupes" id="groupes">
  <div class="conteneur groupes-grille">
    ${c.media({ nom: 'barnum', alt: c.s('emplacements.groupes.photo'), classe: 'groupes-media', sizes: '(max-width: 760px) 100vw, 50vw', legende: c.s('emplacements.groupes.photo'), attrs: 'data-anime="rideau"' })}
    <div>
      <p class="surtitre">${c.t('emplacements.groupes.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('emplacements.groupes.titre')}</h2>
      <p data-anime>${c.t('emplacements.groupes.texte')}</p>
      <p class="groupes-preciser" data-anime>${c.t('emplacements.groupes.preciser')}</p>
      <ul class="coches" data-anime="cascade">${['p1', 'p2', 'p3', 'p4'].map((k) => html`<li>${c.t(`emplacements.groupes.${k}`)}</li>`)}</ul>
      <p data-anime>${c.lien('reserver', { params: 'hebergement=groupe', classe: 'bouton', texte: c.t('emplacements.groupes.action') })}</p>
    </div>
  </div>
</section>

${appelFinal(c, { params: 'hebergement=emplacement-electricite' })}
`;
