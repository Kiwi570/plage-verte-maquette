/* Blocs partagés entre les pages : statut de la saison, appel final avec la crête, icônes de services. */
import { html, brut } from '../../outils/gabarit.mjs';

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
export const dateLongue = (iso) => { const [a, m, j] = iso.split('-').map(Number); return `${j === 1 ? '1er' : j} ${MOIS[m - 1]}`; };

/* Date du jour au Mont-Dore (Europe/Paris), au format AAAA-MM-JJ. */
export const aujourdhui = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

/* Statut de la saison calculé au moment de la génération ; assets/js/site.js le recalcule à l'heure du visiteur
   (même règle, à partir de data-saison). Jamais de date inventée pour la saison suivante. */
export function statutSaison(c, periodeId = null) {
  const s = c.donnees.saison, jour = aujourdhui();
  const periodes = periodeId ? s.periodes.filter((p) => p.id === periodeId) : s.periodes;
  const debut = periodes.map((p) => p.debut).sort()[0];
  const fin = periodes.map((p) => p.fin).sort().reverse()[0];
  if (jour < debut) return c.s('commun.saison.avant', { date: dateLongue(debut) });
  if (jour <= fin) {
    const p = periodes.filter((x) => jour <= x.fin).sort((a, b) => (a.fin < b.fin ? 1 : -1))[0];
    return c.s('commun.saison.pendant', { libelle: p.libelle.toLowerCase(), date: dateLongue(p.fin) });
  }
  return c.s('commun.saison.apres', { annee: s.annee, suivante: s.annee + 1 });
}

export function saisonAttrs(c, periodeId = null) {
  const s = c.donnees.saison;
  const periodes = periodeId ? s.periodes.filter((p) => p.id === periodeId) : s.periodes;
  return brut(` data-saison='${JSON.stringify({ annee: s.annee, periodes: periodes.map((p) => ({ libelle: p.libelle, debut: p.debut, fin: p.fin })), textes: { avant: c.s('commun.saison.avant'), pendant: c.s('commun.saison.pendant'), apres: c.s('commun.saison.apres') } }).replace(/'/g, '&#39;')}'`);
}

export const CRETE = 'M0 200 L70 176 L130 188 L190 150 L250 160 L310 120 L360 136 L420 84 L470 108 L520 62 L575 118 L640 104 L700 138 L770 112 L840 152 L910 140 L1000 162';

export function appelFinal(c, { titre = 'commun.fin.titre', texte = 'commun.fin.texte', params = '' } = {}) {
  return html`<section class="fin-appel" id="appel">
  <div class="fin-ciel" aria-hidden="true">
    <span class="fin-soleil" data-effet="soleil"></span>
    <svg class="fin-crete" viewBox="0 0 1000 260" preserveAspectRatio="none" data-effet="crete" data-visuel><path class="fin-crete-fond" d="${CRETE} L1000 260 L0 260Z"/><path class="fin-crete-trait" d="${CRETE}" fill="none" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke" pathLength="1"/></svg>
  </div>
  <div class="conteneur fin-appel-texte">
    <p class="surtitre">${c.t('commun.fin.surtitre')}</p>
    <h2 data-anime="lignes">${c.tb(titre)}</h2>
    <p data-anime>${c.t(texte)}</p>
    <p class="fin-actions" data-anime>
      ${c.lien('reserver', { params, classe: 'bouton bouton--clair', texte: c.t('commun.fin.action'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.fin.appeler')}</a>
    </p>
  </div>
</section>`;
}

/* Icônes au trait (24 × 24), dessinées au défilement par data-fx="trace". */
export const ICONES = {
  wifi: '<path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M5.5 12.5a9.5 9.5 0 0 1 13 0"/><path d="M8.7 16a5 5 0 0 1 6.6 0"/><path d="M12 19.5h.01"/>',
  navette: '<rect x="3" y="5" width="18" height="11" rx="2"/><path d="M3 11h18M7 16v3M17 16v3M7 8h3M14 8h3"/>',
  borne: '<rect x="5" y="3" width="10" height="18" rx="2"/><path d="M11 7l-2.5 4h3L9 15M15 9h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0v-7l-2-2"/>',
  laverie: '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="4.5"/><path d="M7 6.5h2M12 6.5h5"/>',
  barnum: '<path d="M2 11 12 4l10 7"/><path d="M4 10v10M20 10v10M2 11h20M8 20v-5h8v5"/>',
  jeux: '<path d="M4 21V9M20 21V9M4 9l8-5 8 5M8 13l4 4 4-4M12 17v4"/>',
  tente: '<path d="M3 20 12 4l9 16M12 4v16M8 20l4-6 4 6M2 20h20"/>',
  cabane: '<path d="M3 11 12 4l9 7M5 10v10h14V10M10 20v-5h4v5"/>',
  mobilhome: '<rect x="2" y="7" width="16" height="10" rx="1.5"/><path d="M18 11h4v6h-4M6 17v2M14 17v2M6 10h4v3H6z"/>',
  gite: '<path d="M3 20V10l6-5 6 5v10M15 10l3-3 3 3v10M7 20v-5h4v5M2 20h20"/>',
  groupe: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 20c0-3.5 2.7-6 6-6s6 2.5 6 6M12 20c0-3.5 1.8-6 4-6s6 2.5 6 6"/>',
};
export const icone = (nom, classe = 'icone') => brut(`<svg class="${classe}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONES[nom] || ''}</svg>`);

export const nombre = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[  ]/g, ' ');
