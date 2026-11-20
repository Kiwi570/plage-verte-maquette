/* Page 404 : la sardine de tente toute seule dans l'herbe. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv-404" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.texte'), priorite: true, classe: 'ouv-404-media', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="10"' })}
  <div class="conteneur ouv-404-texte">
    <p class="surtitre surtitre--clair">${c.t('introuvable.surtitre')}</p>
    <h1 data-anime="lignes" data-iris-centre>${c.tb('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="ouv-actions-int" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('reserver', { classe: 'bouton bouton--contour bouton--sur-photo', texte: c.t('introuvable.reserver') })}</p>
  </div>
</section>
`;
