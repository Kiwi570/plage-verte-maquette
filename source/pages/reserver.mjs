/* Réserver : le formulaire d'abord (module formulaire-par-etapes de la bibliothèque), prérempli par l'adresse
   (?hebergement=cabane&logement=cabane&personnes=2&nuits=7&cure=oui), image de la prairie à côté, bon à savoir. */
import { html } from '../../outils/gabarit.mjs';
import { statutSaison, saisonAttrs, icone } from '../gabarits/blocs.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'mh-exterieur-640.webp' };

const CHOIX = [
  ['emplacement-electricite', 'Emplacement avec électricité', 'Tente, caravane, van ou camping-car, 6 ou 10 A.', 'tente'],
  ['emplacement-sans', 'Emplacement sans électricité', 'Le calme de la prairie, sans branchement.', 'tente'],
  ['mobil-home', 'Mobil-home', 'Éco, Confort ou Premium, de 1 à 6 personnes.', 'mobilhome'],
  ['cabane', 'Cabane', '20 m² en bois, de 1 à 3 personnes.', 'cabane'],
  ['gite', 'Gîte et appartements', 'Le Cantou d\'Émile ou les Champs Fleuris.', 'gite'],
  ['groupe', 'Séjour de groupe', 'Tentes, marabouts, emplacements sur devis.', 'groupe'],
];

export default (c) => html`
<section class="ouv-outil" id="debut">
  <div class="conteneur ouv-outil-grille">
    <div class="ouv-outil-tete">
      <p class="surtitre">${c.t('reserver.hero.surtitre')}</p>
      <h1 class="ouv-titre-int" data-anime="lignes" data-iris-centre>${c.tb('reserver.hero.titre')}</h1>
      <p data-anime>${c.t('reserver.hero.texte')}</p>
      <p class="ouv-info-int" data-info-cle data-anime${saisonAttrs(c)}>${icone('tente')}<span data-saison-texte>${statutSaison(c)}</span></p>
      <p class="ouv-actions-int" data-anime><a class="bouton" href="#formulaire" data-sans-transition data-action-principale>${c.t('reserver.hero.commencer')}</a></p>
      ${c.media({ nom: 'grok/reserver-prairie', alt: c.s('pages.reserver.partageAlt'), priorite: true, classe: 'ouv-outil-media', sizes: '(max-width: 760px) 100vw, 34vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
    </div>

    <section class="fpe" id="formulaire" data-module="formulaire-par-etapes" aria-labelledby="fpe-titre-1" data-visuel>
      <p class="fpe__note">${c.t('reserver.hero.note')}</p>
      <div class="fpe__carton">
        <form class="fpe__form" action="#" method="post" novalidate>
          <div class="fpe__progression">
            <ol class="fpe__reperes" aria-label="Progression"></ol>
            <div class="fpe__barre" aria-hidden="true"><span></span></div>
            <p class="fpe__etat" aria-live="polite"></p>
          </div>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.e1')}">
            <legend class="fpe__legende"><h2 class="fpe__titre" id="fpe-titre-1">${c.t('reserver.form.e1t')}</h2></legend>
            <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('reserver.form.e1')}">
              ${CHOIX.map(([v, t, d, ic], i) => html`<label class="fpe__carte"><input type="radio" name="hebergement" value="${v}" ${i === 0 ? 'required' : ''}>
                ${icone(ic, 'fpe__icone')}
                <span class="fpe__carte-titre">${t}</span><span class="fpe__carte-texte">${d}</span></label>`)}
            </div>
            <input type="hidden" name="logement" value="" data-libelle="Logement souhaité">
          </fieldset>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.e2')}">
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.e2t')}</h2></legend>
            <div class="fpe__grille">
              <div class="fpe__champ"><label for="f-arrivee">${c.t('reserver.form.arrivee')} <i aria-hidden="true">*</i></label><input id="f-arrivee" name="arrivee" type="date" required></div>
              <div class="fpe__champ"><label for="f-depart">${c.t('reserver.form.depart')}</label><input id="f-depart" name="depart" type="date"></div>
              <div class="fpe__champ"><label for="f-personnes">${c.t('reserver.form.personnes')} <i aria-hidden="true">*</i></label><input id="f-personnes" name="personnes" type="number" min="1" max="60" value="2" inputmode="numeric" required></div>
              <div class="fpe__champ"><label for="f-enfants">${c.t('reserver.form.enfants')}</label><input id="f-enfants" name="enfants" type="number" min="0" max="30" value="0" inputmode="numeric"></div>
              <div class="fpe__champ"><label for="f-animaux">${c.t('reserver.form.animaux')}</label><input id="f-animaux" name="animaux" type="number" min="0" max="5" value="0" inputmode="numeric"></div>
            </div>
            <label class="fpe__case"><input type="checkbox" name="cure" value="oui" data-libelle="Cure"><span class="fpe__choix-texte">${c.t('reserver.form.cure')}</span></label>
            <div class="fpe__champ"><label for="f-commentaires">${c.t('reserver.form.commentaires')}</label><textarea id="f-commentaires" name="commentaires" rows="4" aria-describedby="f-commentaires-aide"></textarea><p class="fpe__aide" id="f-commentaires-aide">${c.t('reserver.form.commentairesAide')}</p></div>
          </fieldset>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.e3')}">
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.e3t')}</h2></legend>
            <div class="fpe__grille">
              <div class="fpe__champ"><label for="f-prenom">${c.t('reserver.form.prenom')} <i aria-hidden="true">*</i></label><input id="f-prenom" name="prenom" autocomplete="given-name" required></div>
              <div class="fpe__champ"><label for="f-nom">${c.t('reserver.form.nom')} <i aria-hidden="true">*</i></label><input id="f-nom" name="nom" autocomplete="family-name" required></div>
              <div class="fpe__champ"><label for="f-email">${c.t('reserver.form.email')} <i aria-hidden="true">*</i></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
              <div class="fpe__champ"><label for="f-tel">${c.t('reserver.form.tel')}</label><input id="f-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}"></div>
            </div>
            <div class="fpe__champ"><label for="f-adresse">${c.t('reserver.form.adresse')}</label><input id="f-adresse" name="adresse" autocomplete="street-address"></div>
            <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${c.t('reserver.form.accord')} <i aria-hidden="true">*</i></span></label>
            <p class="fpe__aide">${c.t('reserver.form.donnees')} ${c.t('reserver.form.obligatoires')}</p>
          </fieldset>

          <fieldset class="fpe__etape" data-etape="${c.s('reserver.form.e4')}" data-recap>
            <legend class="fpe__legende"><h2 class="fpe__titre">${c.t('reserver.form.e4t')}</h2></legend>
            <div class="fpe__recap"><p>${c.t('reserver.form.recap')}</p></div>
          </fieldset>

          <div class="fpe__nav">
            <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${c.t('reserver.form.retour')}</button>
            <button class="fpe__bouton" type="button" data-suivant data-retour="${c.s('reserver.form.revenir')}">${c.t('reserver.form.continuer')}</button>
            <button class="fpe__bouton" type="submit">${c.t('reserver.form.envoyer')}</button>
          </div>
        </form>
        <div class="fpe__fin" hidden>
          <h2 class="fpe__titre" tabindex="-1">${c.t('reserver.form.merci')}</h2>
          <p data-resume></p>
          <p class="fpe__aide">${c.t('reserver.form.simule')}</p>
          <button type="button" class="fpe__bouton fpe__bouton--ligne" data-recommencer>${c.t('reserver.form.recommencer')}</button>
        </div>
      </div>
    </section>
  </div>
</section>

<section class="savoir" id="bon-a-savoir">
  <div class="conteneur savoir-grille">
    <h2 data-anime="lignes">${c.tb('reserver.savoir.titre')}</h2>
    <ul class="savoir-liste" data-anime="cascade" data-visuel>
      <li>${icone('tente')}<span>${c.t('reserver.savoir.horaires')}</span></li>
      <li>${icone('cabane')}<span>${c.t('reserver.savoir.accueil')}</span></li>
      <li>${icone('mobilhome')}<span>${c.t('reserver.savoir.fourni')}</span></li>
      <li class="savoir-paiement"><span class="savoir-logos"><img src="/assets/images/logo-ancv-240.webp" alt="${c.s('commun.ancv')}" width="72" height="53" loading="lazy"><img src="/assets/images/logo-vacaf-240.webp" alt="${c.s('commun.vacaf')}" width="70" height="53" loading="lazy"></span><span>${c.t('commun.paiements')}</span></li>
    </ul>
  </div>
</section>
`;
