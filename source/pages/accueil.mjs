/* Accueil : ouverture sur la vue aérienne (cachet rond = objet d'ouverture), bienvenue et chiffres,
   quatre façons de dormir, le camping de près (galerie épinglée), spa en plein écran, le matin et les services,
   le Sancy en quatre profils, engagements (mots géants), frise de saison, appel final avec la crête. */
import { html, brut } from '../../outils/gabarit.mjs';
import { appelFinal, statutSaison, saisonAttrs, icone, nombre, aujourdhui, dateLongue } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'aerienne-1280.webp' };

/* « Trouvez votre façon de dormir » : nombre de personnes, toile ou au sec, cure. Les cartes qui conviennent
   restent en avant, les autres s'effacent ; la réponse donne le vrai prix « dès » 2026 et mène à la bonne page. */
const nombrePrix = (v) => parseInt(String(v).replace(/[^0-9]/g, ''), 10) || null;
function choix(c) {
  const logements = c.donnees.hebergements.map((h) => {
    const p = Object.fromEntries(h.prix.map(([k, v]) => [k.toLowerCase(), nombrePrix(v)]));
    return { nom: h.nom.replace(/[«»]/g, '').replace(/\s+/g, ' ').trim(), type: h.type, max: h.max, semaine: p.semaine, cure: p['cure ou 3 semaines'] || p.cure };
  });
  const textes = ['depart', 'toileReponse', 'toileCure', 'secReponse', 'secCure', 'secAucun', 'voirEmplacements', 'voirLogements', 'voirGroupe', 'unePersonne', 'personnesN', 'unLogement', 'logementsN'].reduce((o, k) => (o[k] = c.s(`accueil.choix.${k}`), o), {});
  const donnees = JSON.stringify({ logements, textes, liens: { emplacements: c.url('emplacements'), locations: c.url('locations'), reserver: c.url('reserver') } }).replace(/'/g, '&#39;');
  return html`<div class="choix" data-choix='${brut(donnees)}' data-visuel>
    <p class="choix-titre">${c.t('accueil.choix.titre')}</p>
    <div class="choix-ligne">
      <span class="choix-libelle" id="choix-n">${c.t('accueil.choix.combien')}</span>
      <div class="choix-boutons" role="group" aria-labelledby="choix-n">${[1, 2, 3, 4, 5, 6].map((n) => html`<button type="button" class="filtre-n" data-choix-n="${n}" aria-pressed="false">${n}${n === 6 ? '+' : ''}</button>`)}</div>
    </div>
    <div class="choix-ligne">
      <span class="choix-libelle" id="choix-f">${c.t('accueil.choix.facon')}</span>
      <div class="choix-boutons" role="group" aria-labelledby="choix-f">
        <button type="button" class="puce-bouton" data-choix-f="toile" aria-pressed="false">${icone('tente', 'icone choix-icone')}${c.t('accueil.choix.toile')}</button>
        <button type="button" class="puce-bouton" data-choix-f="sec" aria-pressed="false">${icone('mobilhome', 'icone choix-icone')}${c.t('accueil.choix.sec')}</button>
      </div>
      <label class="choix-cure"><input type="checkbox" data-choix-cure><span>${c.t('accueil.choix.cure')}</span></label>
    </div>
    <p class="choix-reponse" role="status" data-choix-reponse>${c.t('accueil.choix.depart')}</p>
  </div>`;
}

function frise(c) {
  const s = c.donnees.saison, an = s.annee;
  const debut = Date.UTC(an, 3, 1), fin = Date.UTC(an, 11, 1), etendue = fin - debut;
  const pos = (iso) => { const [a, m, j] = iso.split('-').map(Number); return Math.max(0, Math.min(100, ((Date.UTC(a, m - 1, j) - debut) / etendue) * 100)); };
  const jour = aujourdhui();
  const ici = pos(jour);
  const mois = c.s('accueil.saison.mois').split(','), courts = c.s('accueil.saison.moisCourts').split(',');
  return html`<div class="frise" data-effet="saison" data-visuel data-frise='${JSON.stringify({ debut, fin })}'>
    <ol class="frise-mois" aria-hidden="true">${mois.map((m, i) => html`<li><span class="mois-long">${m}</span><span class="mois-court">${courts[i]}</span></li>`)}</ol>
    ${s.periodes.map((p) => html`<div class="frise-ligne">
      <p class="frise-libelle">${p.libelle}<span>du ${dateLongue(p.debut)} au ${dateLongue(p.fin)}</span></p>
      <div class="frise-piste"><span class="frise-barre" style="--g:${pos(p.debut).toFixed(2)}%;--d:${(100 - pos(p.fin)).toFixed(2)}%"></span></div>
    </div>`)}
    <span class="frise-jour${ici > 50 ? ' frise-jour--droite' : ''}" data-frise-jour style="--x:${ici.toFixed(2)}" ${jour < `${an}-04-01` || jour >= `${an}-12-01` ? 'hidden' : ''}><span>${c.t('accueil.saison.aujourdhui')}</span></span>
  </div>`;
}

export default (c) => html`
<section class="ouv-accueil" id="debut">
  ${c.media({ nom: 'aerienne', alt: c.s('pages.accueil.partageAlt'), priorite: true, classe: 'ouv-accueil-media', sizes: '100vw', attrs: 'data-effet="survol"' })}
  <div class="ouv-accueil-voile" aria-hidden="true"></div>
  <div class="cachet" data-iris-centre="disque" aria-hidden="true">
    <span class="cachet-etoiles">★★★</span><span class="cachet-mot">${c.t('accueil.hero.cachet')}</span><span class="cachet-lieu">${c.t('accueil.hero.cachetLieu')}</span>
  </div>
  <div class="conteneur ouv-accueil-texte">
    <p class="surtitre surtitre--clair ouv-apparait">${c.t('commun.classement')} · ${c.t('accueil.hero.cachetLieu')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="ligne-masque"><span class="ouv-ligne">${c.tb('accueil.hero.titre1')}</span></span><span class="ligne-masque"><span class="ouv-ligne">${c.t('accueil.hero.titre2')}</span></span></h1>
    <p class="ouv-texte ouv-apparait masque-ecran-tres-bas">${c.t('accueil.hero.texte')}</p>
    <div class="ouv-actions ouv-apparait">
      ${c.lien('reserver', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="bouton bouton--contour bouton--sur-photo" href="#dormir" data-sans-transition>${c.t('accueil.hero.secondaire')}</a>
    </div>
    <p class="ouv-info ouv-apparait" data-info-cle${saisonAttrs(c)}><span class="pastille" aria-hidden="true"></span><span data-saison-texte>${statutSaison(c)}</span></p>
  </div>
  <a class="defiler ouv-apparait" href="#bienvenue" data-sans-transition aria-label="${c.s('accueil.hero.defilerAria')}"><span>${c.t('accueil.hero.defiler')}</span><i aria-hidden="true"></i></a>
</section>

<section class="bienvenue" id="bienvenue">
  <div class="conteneur bienvenue-grille">
    <div class="bienvenue-texte">
      <p class="surtitre">${c.t('accueil.bienvenue.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.bienvenue.titre')}</h2>
      <p data-anime>${c.t('accueil.bienvenue.texte')}</p>
      <p data-anime>${c.t('accueil.bienvenue.texte2')}</p>
    </div>
    <div class="bienvenue-photos">
      ${c.media({ nom: 'accueil', alt: c.s('accueil.bienvenue.accueil'), classe: 'bienvenue-accueil', sizes: '(max-width: 760px) 70vw, 30vw', legende: c.s('accueil.bienvenue.accueil'), attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'calinette', alt: c.s('accueil.bienvenue.calinette'), cadrage: '42% 40%', classe: 'bienvenue-calinette', sizes: '(max-width: 760px) 50vw, 20vw', legende: c.s('accueil.bienvenue.calinette'), attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    </div>
  </div>
  <ul class="conteneur chiffres" data-anime="cascade">${c.donnees.chiffres.map((x) => html`<li><strong><span data-compteur="${x.valeur}">${nombre(x.valeur)}</span>${x.unite ? html`<small>${x.unite}</small>` : ''}</strong><span>${x.texte}</span></li>`)}</ul>
</section>

<section class="dormir" id="dormir">
  <div class="conteneur">
    <div class="section-tete">
      <div><p class="surtitre">${c.t('accueil.dormir.surtitre')}</p><h2 data-anime="lignes">${c.tb('accueil.dormir.titre')}</h2></div>
      <p data-anime>${c.t('accueil.dormir.texte')}</p>
    </div>
    ${choix(c)}
    <ul class="dormir-grille" data-anime="cascade">
      ${[['emplacements', 'emplacements', 'emplacements', '', 'tente', 'toile'], ['cabanes', 'cabane-carte', 'locations', 'cabane', 'cabane', 'cabane'], ['mobilhomes', 'mobil-home-terrasse', 'locations', 'mh-eco', 'mobilhome', 'mobil-home'], ['gite', 'gite-ferme', 'locations', 'gite', 'gite', 'gite']].map(([k, img, pageCle, ancre, ic, type]) => html`<li class="dormir-carte" data-survol="incline" data-survol-force="5" data-choix-carte="${type}">
        ${c.media({ nom: img, alt: c.s(`accueil.dormir.${k}`).replace(/<[^>]+>/g, ''), classe: 'dormir-media', sizes: '(max-width: 760px) 46vw, 24vw' })}
        <div class="dormir-corps">
          ${icone(ic, 'icone dormir-icone')}
          <h3>${c.lien(pageCle, { ancre, texte: c.tb(`accueil.dormir.${k}`), classe: 'dormir-lien', attrs: 'data-superpose' })}</h3>
          <p class="dormir-texte">${c.t(`accueil.dormir.${k}Texte`)}</p>
          <p class="dormir-prix" data-prix>${c.t(`accueil.dormir.${k}Prix`)}</p>
        </div>
      </li>`)}
    </ul>
  </div>
</section>

<section class="pres" id="sur-place">
  <div class="conteneur pres-tete">
    <div><p class="surtitre">${c.t('accueil.pres.surtitre')}</p><h2 data-anime="lignes">${c.tb('accueil.pres.titre')}</h2></div>
    <p class="pres-consigne">${c.tb('accueil.pres.texte')}</p>
  </div>
  <div class="pres-fenetre" tabindex="0" role="region" aria-label="${c.s('accueil.pres.region')}">
  <div class="pres-piste" data-effet="rangee" data-galerie>
    ${[['accueil', 'c1'], ['barnum', 'c2'], ['mh-exterieur', 'c3'], ['laverie', 'c4'], ['sanitaires', 'c5']].map(([img, k], i) => html`<article class="pres-carte" id="sur-place-${i + 1}" data-fx="vitesse" data-fx-force="2">
      ${c.media({ nom: img, alt: c.s(`accueil.pres.${k}t`), classe: 'pres-media', sizes: '(max-width: 760px) 80vw, 34vw' })}
      <h3>${c.t(`accueil.pres.${k}`)}</h3>
      <p>${c.t(`accueil.pres.${k}t`)}</p>
    </article>`)}
  </div>
  </div>
</section>

<section class="spa" id="bien-etre" data-fx="plein-ecran" data-fx-depart="inset(22% 26% 22% 26% round 999px)">
  <div data-collant>
    ${c.media({ nom: 'grok/spa-vapeur', alt: c.s('accueil.spa.titre'), classe: 'spa-media', sizes: '100vw' })}
    <canvas class="spa-vapeur" data-effet="vapeur" aria-hidden="true"></canvas>
    <p class="spa-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.spa.mot1')}</span> <span data-fx-ecarte="d">${c.t('accueil.spa.mot2')}</span></p>
    <div class="spa-legende" data-fx-apres>
      ${c.media({ nom: 'spa', alt: c.s('accueil.spa.photo'), classe: 'spa-photo', sizes: '160px' })}
      <div>
        <h2>${c.t('accueil.spa.titre')}</h2>
        <p>${c.t('accueil.spa.texte')}</p>
        <p class="spa-petit">${c.t('accueil.spa.texte2')}</p>
      </div>
    </div>
  </div>
</section>

<section class="matin" id="matin">
  <div class="conteneur matin-grille">
    ${c.media({ nom: 'grok/matin-cafe', alt: c.s('accueil.matin.titre'), classe: 'matin-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="zoom"' })}
    <div>
      <p class="surtitre">${c.t('accueil.matin.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.matin.titre')}</h2>
      <p data-anime>${c.t('accueil.matin.texte')}</p>
      <h3 class="matin-sous" data-anime>${c.t('accueil.matin.servicesTitre')}</h3>
      <ul class="services" data-anime="cascade">${c.donnees.services.map((x) => html`<li>${icone(x.icone, 'icone', 'data-fx="trace"')}<div><strong>${x.titre}</strong><span>${x.texte}</span></div></li>`)}</ul>
    </div>
  </div>
</section>

<section class="sancy" id="sancy">
  <div class="sancy-bandeau">
    ${c.media({ nom: 'grok/crete-aube', alt: c.s('accueil.sancy.titre').replace(/<[^>]+>/g, ''), classe: 'sancy-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
    <div class="conteneur sancy-tete">
      <p class="surtitre surtitre--clair">${c.t('accueil.sancy.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.sancy.titre')}</h2>
    </div>
  </div>
  <div class="conteneur sancy-corps">
    <p class="sancy-intro" data-anime>${c.t('accueil.sancy.texte')}</p>
    <div class="profils">
      <div class="profils-onglets" role="tablist" aria-label="${c.s('accueil.sancy.onglets')}">
        ${c.donnees.sancy.map((p, i) => html`<button type="button" role="tab" id="onglet-${p.id}" aria-controls="profil-${p.id}" aria-selected="${i === 0 ? 'true' : 'false'}" tabindex="${i === 0 ? '0' : '-1'}">${p.titre}</button>`)}
      </div>
      ${c.donnees.sancy.map((p, i) => html`<article class="profil" id="profil-${p.id}" role="tabpanel" aria-labelledby="onglet-${p.id}" ${i === 0 ? '' : 'data-replie'}>
        ${c.media({ nom: p.image, alt: p.titre + ' : ' + p.liste.join(', '), classe: 'profil-media', sizes: '(max-width: 760px) 100vw, 45vw' })}
        <div class="profil-texte">
          <h3>${p.titre}</h3>
          <p>${p.texte}</p>
          <ul class="profil-liste">${p.liste.map((x) => html`<li>${x}</li>`)}</ul>
        </div>
      </article>`)}
    </div>
    <p class="sancy-lien"><a href="https://www.sancy.com/" target="_blank" rel="noopener" aria-label="${c.s('accueil.sancy.lienAria')}">${c.t('accueil.sancy.lien')} ↗</a></p>
  </div>
</section>

<section class="engagements" id="engagements">
  <div class="mots-bandeau" data-fx="mots-geants" aria-hidden="true" data-ruban data-visuel data-audit-ignorer>
    <p data-fx-rangee>${c.donnees.engagements.map((e) => e.mot).join(' · ')} · ${c.donnees.engagements.map((e) => e.mot).join(' · ')} ·</p>
    <p data-fx-rangee data-sens="-1">${c.donnees.engagements.map((e) => e.mot).reverse().join(' · ')} · ${c.donnees.engagements.map((e) => e.mot).reverse().join(' · ')} ·</p>
  </div>
  <div class="conteneur engagements-grille">
    <div class="engagements-tete">
      <p class="surtitre">${c.t('accueil.engagements.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.engagements.titre')}</h2>
      <p data-anime>${c.t('accueil.engagements.texte')}</p>
      ${c.media({ nom: 'grok/rosee', alt: c.s('accueil.engagements.photo'), classe: 'engagements-media', sizes: '(max-width: 760px) 100vw, 35vw', attrs: 'data-anime="rideau"' })}
    </div>
    <ul class="engagements-liste" data-anime="cascade" tabindex="0" aria-label="${c.s('accueil.engagements.liste')}">${c.donnees.engagements.map((e) => html`<li>${icone(e.icone, 'icone engagements-icone', 'data-fx="trace"')}<h3>${e.titre}</h3><ul>${e.liste.map((x) => html`<li>${x}</li>`)}</ul></li>`)}</ul>
  </div>
</section>

<section class="saison" id="saison">
  <div class="conteneur saison-grille">
    <div>
      <p class="surtitre">${c.t('accueil.saison.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.saison.titre')}</h2>
      <p data-anime>${c.t('accueil.saison.texte')}</p>
      <p class="saison-statut" data-anime${saisonAttrs(c)}><span class="pastille" aria-hidden="true"></span><span data-saison-texte>${statutSaison(c)}</span></p>
      <p data-anime>${c.t('accueil.saison.suite')}</p>
    </div>
    ${frise(c)}
  </div>
</section>

${appelFinal(c)}
`;
