/* Contact : ouverture « titre + plan d'accès dessiné » (route et distances qui se tracent), coordonnées,
   accueil et Calinette, question courte (formulaire simulé du socle). */
import { html } from '../../outils/gabarit.mjs';
import { CRETE } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'accueil-1000.webp' };

export default (c) => html`
<section class="ouv-carte" id="debut">
  <div class="conteneur ouv-carte-grille">
    <div class="ouv-carte-texte">
      <p class="surtitre">${c.t('contact.hero.surtitre')}</p>
      <h1 class="ouv-titre-int" data-anime="lignes">${c.tb('contact.hero.titre')}</h1>
      <p class="masque-ecran-tres-bas" data-anime>${c.t('contact.hero.texte')}</p>
      <address class="ouv-adresse" data-info-cle data-anime>${c.t('commun.adresseLigne1')}<br>${c.t('commun.adresseLigne2')}</address>
      <p class="ouv-actions-int" data-anime><a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale>${c.t('contact.hero.action')} · ${c.site.contact.telephone}</a></p>
    </div>
    <figure class="carte-acces" data-iris-centre data-visuel>
      <svg viewBox="0 0 800 560" role="img" aria-labelledby="carte-titre carte-desc" data-effet="carte-acces">
        <title id="carte-titre">${c.t('contact.hero.carteTitre')}</title>
        <desc id="carte-desc">${c.t('contact.hero.camping')} : ${c.t('contact.hero.d1')} ${c.t('contact.hero.village')} ; ${c.t('contact.hero.d2')} ${c.t('contact.hero.capucin')}.</desc>
        <rect width="800" height="560" rx="28" class="carte-fond"/>
        <path class="carte-courbe" d="M40 150 C 200 120, 360 170, 520 130 S 720 110, 770 140"/>
        <path class="carte-courbe" d="M30 230 C 180 210, 330 260, 500 220 S 700 200, 780 230"/>
        <g transform="translate(0 440) scale(.8 .42)"><g class="carte-crete-groupe"><path class="carte-crete-fond" d="${CRETE} L1000 260 L0 260Z"/><path class="carte-crete" d="${CRETE}" vector-effect="non-scaling-stroke"/></g></g>
        <text class="carte-texte carte-texte--doux" x="560" y="530">${c.t('contact.hero.sancy')}</text>
        <path class="carte-route-fond" d="M160 300 C 260 300, 330 250, 430 260 S 590 300, 650 250"/>
        <path class="carte-route" data-carte-trace d="M160 300 C 260 300, 330 250, 430 260 S 590 300, 650 250" pathLength="1"/>
        <path class="carte-sentier" data-carte-trace d="M160 300 C 170 350, 220 380, 255 410" pathLength="1"/>
        <g class="carte-point carte-point--camping" data-carte-point transform="translate(160 300)"><circle r="26"/><circle r="9" class="carte-coeur"/></g>
        <text class="carte-texte carte-texte--fort" x="160" y="250" text-anchor="middle" data-carte-point>${c.t('contact.hero.camping')}</text>
        <g class="carte-point" data-carte-point transform="translate(650 250)"><circle r="14"/></g>
        <text class="carte-texte" x="650" y="210" text-anchor="middle" data-carte-point>${c.t('contact.hero.village')}</text>
        <text class="carte-texte carte-texte--doux" x="650" y="292" text-anchor="middle" data-carte-point>${c.t('contact.hero.villageDetail')}</text>
        <g class="carte-pic" data-carte-point transform="translate(262 420)"><path d="M-22 18 L0 -22 L22 18Z"/></g>
        <text class="carte-texte" x="300" y="430" data-carte-point>${c.t('contact.hero.capucin')}</text>
        <text class="carte-texte carte-texte--doux" x="300" y="456" data-carte-point>${c.t('contact.hero.capucinDetail')}</text>
        <text class="carte-distance" x="430" y="236" text-anchor="middle" data-carte-point>${c.t('contact.hero.d1')}</text>
        <text class="carte-distance" x="150" y="370" text-anchor="middle" data-carte-point>${c.t('contact.hero.d2')}</text>
      </svg>
      <figcaption class="media-legende">${c.t('contact.hero.carteNote')}</figcaption>
    </figure>
  </div>
</section>

<section class="coord" id="coordonnees">
  <div class="conteneur coord-grille">
    <div class="coord-photos">
      ${c.media({ nom: 'accueil', alt: c.s('accueil.bienvenue.accueil'), classe: 'coord-accueil', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-anime="rideau"' })}
      ${c.media({ nom: 'calinette', alt: c.s('accueil.bienvenue.calinette'), cadrage: '42% 40%', classe: 'coord-calinette', sizes: '(max-width: 760px) 40vw, 14vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
    </div>
    <div>
      <p class="surtitre">${c.t('contact.coord.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('contact.coord.titre')}</h2>
      <p data-anime>${c.t('contact.coord.texte')}</p>
      <dl class="coord-liste" data-anime="cascade">
        <div><dt>${c.t('commun.telFixe')}</dt><dd><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></dd></div>
        <div><dt>${c.t('commun.telMobile')}</dt><dd><a href="tel:${c.site.contact.mobileLien}">${c.site.contact.mobile}</a></dd></div>
        <div><dt>${c.t('commun.ecrire')}</dt><dd><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></dd></div>
        <div><dt>${c.t('contact.coord.horairesTitre')}</dt><dd>${c.t('contact.coord.horaires')}</dd></div>
        <div><dt>${c.t('contact.coord.adresseTitre')}</dt><dd>${c.t('commun.adresseLigne1')}, ${c.t('commun.adresseLigne2')}</dd></div>
        <div><dt>${c.t('commun.paiementsTitre')}</dt><dd>${c.t('commun.paiements')}</dd></div>
      </dl>
    </div>
  </div>
</section>

<section class="question" id="question">
  <div class="conteneur question-grille">
    <div>
      <h2 data-anime="lignes">${c.tb('contact.question.titre')}</h2>
      <p data-anime>${c.t('contact.question.texte')} ${c.lien('reserver', { texte: c.t('pages.reserver.nav') })}</p>
    </div>
    <form data-formulaire class="formulaire" action="#" novalidate data-anime data-visuel>
      <div class="champ"><label for="q-nom">${c.t('contact.question.nom')}</label><input id="q-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="q-email">${c.t('contact.question.email')}</label><input id="q-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ champ--large"><label for="q-message">${c.t('contact.question.message')}</label><textarea id="q-message" name="message" rows="4" required></textarea></div>
      <p class="mention-donnees">${c.t('contact.question.donnees')}</p>
      <button type="submit" class="bouton">${c.t('contact.question.envoyer')}</button>
      <p data-message-envoi role="status" tabindex="-1" hidden></p>
    </form>
  </div>
</section>
`;
