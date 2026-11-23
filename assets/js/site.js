/* La Plage Verte : effets propres au client. Le socle gère l'ouverture, les transitions, l'en-tête, le menu,
   les boucles, les mesures et la bibliothèque d'effets (posés par attributs dans les pages).
   Effets du plan (data-effet) : crete, soleil, saison, vapeur, carte-acces, prairie, bandeau. */
import { demarrer, boucle, etat, versObjet, quand, rafraichir } from './socle/index.js?v=2';
import { init as initFormulaireEtapes } from './modules/formulaire-par-etapes.js?v=2';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const parametres = new URLSearchParams(location.search);

/* ---------- Saison : statut recalculé au jour du visiteur, heure du Mont-Dore ---------- */
const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const dateLongue = (iso) => { const [, m, j] = iso.split('-').map(Number); return `${j === 1 ? '1er' : j} ${MOIS[m - 1]}`; };
const jourMontDore = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const remplir = (t, v) => t.replace(/\{(\w+)\}/g, (_, k) => v[k] ?? '');
function statuts() {
  const jour = jourMontDore();
  $$('[data-saison]').forEach((el) => {
    let s; try { s = JSON.parse(el.dataset.saison); } catch { return; }
    const debut = s.periodes.map((p) => p.debut).sort()[0];
    const fin = s.periodes.map((p) => p.fin).sort().reverse()[0];
    let texte;
    if (jour < debut) texte = remplir(s.textes.avant, { date: dateLongue(debut) });
    else if (jour <= fin) {
      const p = s.periodes.filter((x) => jour <= x.fin).sort((a, b) => (a.fin < b.fin ? 1 : -1))[0];
      texte = remplir(s.textes.pendant, { libelle: p.libelle.toLowerCase(), date: dateLongue(p.fin) });
    } else texte = remplir(s.textes.apres, { annee: s.annee, suivante: s.annee + 1 });
    const cible = el.querySelector('[data-saison-texte]');
    if (cible && cible.textContent !== texte) cible.textContent = texte;
  });
}

/* Frise de la saison : les périodes se remplissent au défilement, le jour du visiteur est repéré. */
function frise() {
  const f = $('[data-frise]');
  if (!f || !gsap || !ST()) return;
  const barres = $$('.frise-barre', f), jour = $('[data-frise-jour]', f);
  try {
    const { debut, fin } = JSON.parse(f.dataset.frise);
    const [a, m, j] = jourMontDore().split('-').map(Number);
    const t = Date.UTC(a, m - 1, j);
    if (jour) {
      if (t < debut || t >= fin) jour.hidden = true;
      else { const x = ((t - debut) / (fin - debut)) * 100; jour.hidden = false; jour.style.setProperty('--x', x.toFixed(2)); jour.classList.toggle('frise-jour--droite', x > 50); }
    }
  } catch { /* la position écrite à la génération reste */ }
  const tl = gsap.timeline({ scrollTrigger: { trigger: f, start: 'top 85%', end: 'top 35%', scrub: 0.5, invalidateOnRefresh: true } });
  tl.fromTo(barres, { scaleX: 0 }, { scaleX: 1, ease: 'power2.out', stagger: 0.15, duration: 1 }, 0);
  if (jour && !jour.hidden) tl.fromTo(jour, { scaleY: 0, transformOrigin: '50% 0%' }, { scaleY: 1, duration: 0.4 }, 0.7);
}

/* ---------- Appel final : la crête se trace et le soleil monte au défilement ---------- */
function crete() {
  $$('.fin-appel').forEach((s) => {
    const trait = $('.fin-crete-trait', s), soleil = $('.fin-soleil', s);
    if (!trait || !gsap || !ST()) return;
    const tl = gsap.timeline({ scrollTrigger: { trigger: s, start: 'top 90%', end: 'top 25%', scrub: 0.6, invalidateOnRefresh: true } });
    tl.fromTo(trait, { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)
      .fromTo(soleil, { y: 90, scale: 0.7 }, { y: 0, scale: 1, ease: 'power2.out', duration: 0.8 }, 0.2);
  });
}

/* ---------- Le camping de près : la rangée glisse vers la gauche pendant que la section traverse l'écran
   (sans épinglage : rien ne saute à l'entrée ni à la sortie). Sur écran tactile, elle défile au doigt. ---------- */
function rangee() {
  const piste = $('[data-effet="rangee"]');
  if (!piste || !gsap || !ST()) return;
  gsap.matchMedia().add('(hover: hover) and (min-width: 761px)', () => {
    const fenetre = piste.parentElement;
    const distance = () => Math.max(0, piste.scrollWidth - fenetre.clientWidth);
    const tw = gsap.fromTo(piste, { x: 0 }, { x: () => -distance(), ease: 'none', scrollTrigger: { trigger: piste.closest('section'), start: 'top 75%', end: 'bottom 15%', scrub: 0.5, invalidateOnRefresh: true } });
    /* Au clavier : la carte qui reçoit le focus est ramenée à l'écran. */
    const focus = (e) => { const c = [...piste.children].find((x) => x.contains(e.target)); if (!c || !distance()) return; const st = tw.scrollTrigger; window.scrollTo({ top: st.start + Math.min(1, c.offsetLeft / distance()) * (st.end - st.start), behavior: 'instant' }); };
    piste.addEventListener('focusin', focus);
    return () => piste.removeEventListener('focusin', focus);
  });
}

/* ---------- Spa : la vapeur monte pendant qu'on fait défiler la scène, puis retombe (jamais en continu) ---------- */
function vapeur() {
  const c = $('.spa-vapeur');
  if (!c) return;
  const ctx = c.getContext('2d');
  const tache = document.createElement('canvas'); tache.width = tache.height = 128;
  const tc = tache.getContext('2d'), g = tc.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,.34)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  tc.fillStyle = g; tc.fillRect(0, 0, 128, 128);
  let W = 0, H = 0, dpr = 1, dernierDefilement = -10, alea = 7;
  const hasard = () => { alea = (alea * 16807) % 2147483647; return alea / 2147483647; };
  const brins = [];
  const taille = () => { dpr = Math.min(1.25, window.devicePixelRatio || 1); W = c.clientWidth; H = c.clientHeight; c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); };
  taille(); new ResizeObserver(taille).observe(c);
  const b = boucle(c, (dt, t) => {
    if (t - dernierDefilement < 2.5 && brins.length < (W < 760 ? 18 : 34)) {
      brins.push({ x: hasard() * W, y: H * (0.7 + hasard() * 0.35), r: 60 + hasard() * 110, v: 18 + hasard() * 26, vie: 0, duree: 4 + hasard() * 3, d: hasard() * 6 });
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    for (let i = brins.length - 1; i >= 0; i--) {
      const p = brins[i];
      p.vie += dt; p.y -= p.v * dt; p.x += Math.sin((t + p.d) * 0.7) * 8 * dt;
      const k = p.vie / p.duree;
      if (k >= 1) { brins.splice(i, 1); continue; }
      ctx.globalAlpha = Math.sin(Math.PI * k) * 0.9;
      const r = p.r * (0.7 + k * 0.8);
      ctx.drawImage(tache, p.x - r, p.y - r, r * 2, r * 2);
    }
    ctx.globalAlpha = 1;
    if (!brins.length && t - dernierDefilement > 2.5) b.pause(true);
  }, { lourde: true });
  b.pause(true);
  if (ST()) ST().create({ trigger: c.closest('[data-fx="plein-ecran"]') || c, start: 'top 80%', end: 'bottom top', onUpdate: () => { dernierDefilement = performance.now() / 1000; b.pause(false); } });
}

/* ---------- Ouvertures des pages intérieures ---------- */
/* Emplacements et Réserver : la prairie se découvre de droite à gauche, puis s'arrondit au défilement. */
function prairie() {
  $$('[data-effet="prairie"]').forEach((fig) => {
    const img = fig.querySelector('img');
    if (!gsap || !img) return;
    if (etat.arrivee !== 'retour') gsap.set(fig, { clipPath: 'inset(0% 0% 0% 100%)' });
    const jouer = () => {
      gsap.fromTo(fig, { clipPath: 'inset(0% 0% 0% 100%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power3.inOut', clearProps: 'clipPath' });
      gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.6, ease: 'power3.out' });
    };
    fig.__jouer = jouer;
    if (ST()) gsap.fromTo(img, { yPercent: 0 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: fig, start: 'top top', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true } });
  });
}
/* Locations : le bandeau s'élargit jusqu'aux bords et la photo glisse au défilement. */
function bandeau() {
  const fig = $('[data-effet="bandeau"]');
  if (!fig || !gsap || !ST()) return;
  const img = fig.querySelector('img');
  const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: 0.4, invalidateOnRefresh: true } });
  tl.fromTo(fig, { clipPath: 'inset(0% 4% 0% 4% round 28px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'power1.out', duration: 0.5 }, 0)
    .fromTo(img, { scale: 1.12, yPercent: -4 }, { scale: 1.12, yPercent: 4, ease: 'none', duration: 1 }, 0);
}
/* Contact : la route et le sentier se tracent, les lieux apparaissent. */
function carteAcces() {
  const svg = $('[data-effet="carte-acces"]');
  if (!svg || !gsap) return;
  const traits = $$('[data-carte-trace]', svg), points = $$('[data-carte-point]', svg);
  gsap.set(points, { opacity: 0 });
  svg.__jouer = () => {
    gsap.timeline({ defaults: { ease: 'power2.out' } })
      .fromTo(traits, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.4, stagger: 0.5 }, 0)
      .to(points, { opacity: 1, duration: 0.5, stagger: 0.06, clearProps: 'opacity' }, 0.2)
      .call(() => { const v = $('[data-carte-voyageur]', svg), m = v && v.querySelector('animateMotion'); if (m && m.beginElement) { v.setAttribute('opacity', '1'); m.beginElement(); setTimeout(() => v.setAttribute('opacity', '0'), 2700); } }, null, 1.6);
  };
  if (ST()) gsap.fromTo($('.carte-crete-groupe', svg), { y: 0 }, { y: -18, ease: 'none', scrollTrigger: { trigger: svg, start: 'top top', end: 'bottom top', scrub: 0.4 } });
}
const ouvertures = () => {
  $$('[data-effet="prairie"]').forEach((f) => f.__jouer && f.__jouer());
  const s = $('[data-effet="carte-acces"]'); if (s && s.__jouer) s.__jouer();
};
const ouverturesFinales = () => {
  $$('[data-effet^="prairie"]').forEach((f) => gsap && gsap.set(f, { clearProps: 'clipPath' }));
  const s = $('[data-effet="carte-acces"]');
  if (s && gsap) { gsap.set($$('[data-carte-point]', s), { clearProps: 'opacity' }); gsap.set($$('[data-carte-trace]', s), { strokeDashoffset: 0 }); }
};

/* ---------- Sancy : onglets des quatre profils ---------- */
function profils() {
  const zone = $('.profils');
  if (!zone) return;
  const onglets = $$('[role="tab"]', zone), panneaux = $$('[role="tabpanel"]', zone);
  const choisir = (i, focus = false) => {
    onglets.forEach((o, k) => { o.setAttribute('aria-selected', String(k === i)); o.tabIndex = k === i ? 0 : -1; });
    panneaux.forEach((p, k) => { if (k === i) p.removeAttribute('data-replie'); else p.setAttribute('data-replie', ''); });
    if (focus) onglets[i].focus();
    if (gsap) gsap.fromTo(panneaux[i], { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'transform,opacity' });
  };
  onglets.forEach((o, i) => {
    o.addEventListener('click', () => choisir(i));
    o.addEventListener('keydown', (e) => {
      const n = onglets.length;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); choisir((i + 1) % n, true); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); choisir((i - 1 + n) % n, true); }
      if (e.key === 'Home') { e.preventDefault(); choisir(0, true); }
      if (e.key === 'End') { e.preventDefault(); choisir(n - 1, true); }
    });
  });
}

/* ---------- Accueil : « Trouvez votre façon de dormir » ---------- */
function choixDormir() {
  const z = $('[data-choix]');
  if (!z) return;
  let d; try { d = JSON.parse(z.dataset.choix); } catch { return; }
  const T = d.textes, rep = $('[data-choix-reponse]', z), cure = $('[data-choix-cure]', z);
  const cartes = $$('[data-choix-carte]');
  const euros = (n) => new Intl.NumberFormat('fr-FR').format(n).replace(/[\u202f\u00a0]/g, '\u00a0') + '\u00a0€';
  let n = 0, f = '';
  const qui = () => (n === 1 ? T.unePersonne : T.personnesN.replace('{n}', n >= 6 ? '6 ou plus' : n));
  const lien = (href, texte) => { const a = document.createElement('a'); a.href = href; a.textContent = texte; a.className = 'choix-lien'; return a; };
  const montrer = () => {
    $$('[data-choix-n]', z).forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.choixN === n)));
    $$('[data-choix-f]', z).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.choixF === f)));
    let ok = () => true, texte = T.depart, a = null;
    if (f === 'toile') {
      ok = (t) => t === 'toile';
      texte = cure.checked ? T.toileCure : T.toileReponse.replace('{n}', n ? qui() : T.personnesN.replace('{n}', '2'));
      a = lien(d.liens.emplacements + (cure.checked ? '#cure' : '#tarifs'), T.voirEmplacements);
    } else if (f === 'sec') {
      const besoin = n || 1;
      const possibles = d.logements.filter((l) => l.max >= besoin);
      ok = (t) => possibles.some((l) => l.type === t);
      if (!possibles.length || (n >= 6 && !possibles.length)) { texte = T.secAucun; a = lien(d.liens.reserver + '?hebergement=groupe', T.voirGroupe); }
      else {
        const cle = cure.checked ? 'cure' : 'semaine';
        const moins = possibles.filter((l) => l[cle]).sort((x, y) => x[cle] - y[cle])[0];
        texte = (cure.checked ? T.secCure : T.secReponse).replace('{n}', n ? qui() : T.unePersonne).replace('{k}', possibles.length === 1 ? T.unLogement : T.logementsN.replace('{k}', possibles.length)).replace('{prix}', euros(moins[cle])).replace('{nom}', moins.nom);
        a = lien(d.liens.locations + (n ? `?personnes=${Math.min(n, 6)}` : '') + '#logements', T.voirLogements);
      }
    } else if (n) {
      ok = (t) => t === 'toile' || d.logements.some((l) => l.type === t && l.max >= n);
    }
    rep.textContent = texte;
    if (a) { rep.append(' '); rep.append(a); }
    cartes.forEach((c) => {
      const garde = ok(c.dataset.choixCarte);
      if (garde === !c.hasAttribute('data-ecartee')) return;
      if (garde) c.removeAttribute('data-ecartee'); else c.setAttribute('data-ecartee', '');
      if (gsap) gsap.fromTo(c, { y: garde ? 10 : 0 }, { y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'transform' });
    });
  };
  $$('[data-choix-n]', z).forEach((b) => b.addEventListener('click', () => { const v = +b.dataset.choixN; n = n === v ? 0 : v; montrer(); }));
  $$('[data-choix-f]', z).forEach((b) => b.addEventListener('click', () => { f = f === b.dataset.choixF ? '' : b.dataset.choixF; montrer(); }));
  cure.addEventListener('change', montrer);
}

/* ---------- Emplacements : l'emplacement dessiné en direct (abri, personnes, animaux, électricité) ---------- */
const SVGNS = 'http://www.w3.org/2000/svg';
function dessinerEmplacement(svg, e) {
  if (!svg) return;
  $$('[data-abri]', svg).forEach((g) => { g.hidden = g.dataset.abri !== e.abri; });
  const borne = $('[data-elec]', svg);
  borne.style.display = e.elec === 'sans' ? 'none' : '';
  const lib = svg.closest('figure') && svg.closest('figure').querySelector('[data-elec-texte]');
  if (lib) lib.textContent = e.elec === 'sans' ? ' · sans électricité' : e.elec === '10a' ? ' · 10 A' : ' · 6 A';
  const gens = $('[data-gens]', svg);
  const voulu = [...Array(e.adultes).fill('a'), ...Array(e.enfants).fill('e'), ...Array(e.animaux).fill('c')];
  const actuels = [...gens.children];
  actuels.slice(voulu.length).forEach((g) => g.remove());
  voulu.forEach((k, i) => {
    let g = gens.children[i];
    if (g && g.dataset.k === k) return;
    if (g) g.remove();
    g = document.createElementNS(SVGNS, 'g'); g.dataset.k = k;
    const x = 30 + i * 17, y = 116;
    if (k === 'c') g.innerHTML = `<path class="pitch-chien" d="M${x - 8} ${y} l0 -7 q0 -4 5 -4 l8 0 l2 -5 l4 1 l-1 5 q2 2 1 4 l-2 0 l0 6 l-3 0 l0 -5 l-8 0 l0 5 z"/>`;
    else { const s = k === 'a' ? 1 : 0.72; g.innerHTML = `<circle class="pitch-tete" cx="${x}" cy="${y - 22 * s}" r="${5 * s}"/><path class="pitch-corps" d="M${x - 6 * s} ${y} q0 -${14 * s} ${6 * s} -${14 * s} q${6 * s} 0 ${6 * s} ${14 * s} z"/>`; }
    const avant = gens.children[i];
    gens.insertBefore(g, avant || null);
    if (gsap) gsap.fromTo(g, { scale: 0, svgOrigin: `${x} ${y}` }, { scale: 1, svgOrigin: `${x} ${y}`, duration: 0.4, ease: 'back.out(2)' });
  });
}

/* ---------- Emplacements : calculateur de nuitée (redevances 2026) ---------- */
function calculateur() {
  const f = $('[data-calculateur]');
  if (!f) return;
  const euros = (n) => new Intl.NumberFormat('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n).replace(/[  ]/g, ' ') + ' €';
  const taxe = parseFloat(f.dataset.taxe) || 0;
  const val = (n) => { const i = f.querySelector(`input[name="${n}"]`); return i ? Math.max(+i.min || 0, Math.min(+i.max || 99, parseInt(i.value, 10) || 0)) : 0; };
  const lien = $('[data-calc-lien]', f), pour = $('[data-calc-pour]', f);
  const calculer = () => {
    const adultes = val('adultes'), enfants = val('enfants'), animaux = val('animaux'), nuits = Math.max(1, val('nuits'));
    const majeurs = Math.min(val('majeurs'), adultes);
    const mj = f.querySelector('input[name="majeurs"]'); if (mj && +mj.value !== majeurs) mj.value = majeurs;
    const abri = f.querySelector('input[name="abri"]:checked'), elec = f.querySelector('input[name="electricite"]:checked');
    const parNuit = adultes * 5.5 + enfants * 3.6 + animaux * 1.5 + (abri ? +abri.dataset.prix : 0) + (elec ? +elec.dataset.prix : 0);
    const taxes = majeurs * taxe;
    $('[data-calc-nuit]', f).textContent = euros(parNuit);
    $('[data-calc-taxes]', f).textContent = euros(taxes);
    $('[data-calc-total]', f).textContent = euros((parNuit + taxes) * nuits);
    if (pour) pour.textContent = pour.dataset.modele.replace('{n}', nuits);
    dessinerEmplacement($('[data-pitch]', f), { abri: abri ? abri.value : 'tente', elec: elec ? elec.value : 'sans', adultes: Math.min(adultes, 8), enfants: Math.min(enfants, 6), animaux: Math.min(animaux, 3) });
    if (lien) {
      const u = new URL(lien.href, location.href);
      u.searchParams.set('hebergement', elec && elec.value === 'sans' ? 'emplacement-sans' : 'emplacement-electricite');
      u.searchParams.set('personnes', String(adultes)); u.searchParams.set('enfants', String(enfants));
      u.searchParams.set('animaux', String(animaux)); u.searchParams.set('nuits', String(nuits));
      lien.href = u.pathname + u.search;
    }
  };
  $$('[data-calc-ligne]', f).forEach((l) => {
    const i = $('input', l);
    $('[data-moins]', l).addEventListener('click', () => { i.value = Math.max(+i.min, (parseInt(i.value, 10) || 0) - 1); if (l.dataset.calcLigne === 'adultes') { const m = f.querySelector('input[name="majeurs"]'); if (+m.value > +i.value) m.value = i.value; } calculer(); });
    $('[data-plus]', l).addEventListener('click', () => { i.value = Math.min(+i.max, (parseInt(i.value, 10) || 0) + 1); if (l.dataset.calcLigne === 'adultes') { const m = f.querySelector('input[name="majeurs"]'); m.value = Math.min(+m.max, +m.value + 1); } calculer(); });
  });
  f.addEventListener('input', calculer);
  f.addEventListener('change', calculer);
  f.addEventListener('submit', (e) => e.preventDefault());
  calculer();
}

/* ---------- Locations : filtre par nombre de personnes et par type, gardé dans l'adresse ---------- */
function filtre() {
  const zone = $('[data-filtre]'), liste = $('[data-fiches]');
  if (!zone || !liste) return;
  const fiches = $$('.fiche', liste), boutonsN = $$('[data-personnes]', zone), boutonsT = $$('[data-type]', zone);
  const res = $('[data-filtre-resultat]', zone), vide = $('[data-filtre-vide]', zone);
  let n = parseInt(parametres.get('personnes'), 10) || 0, type = parametres.get('type') || 'tous';
  if (!boutonsT.some((b) => b.dataset.type === type)) type = 'tous';
  const appliquer = (anime) => {
    boutonsN.forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.personnes === n)));
    boutonsT.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.type === type)));
    let visibles = 0;
    fiches.forEach((f) => {
      const ok = (!n || +f.dataset.max >= n) && (type === 'tous' || f.dataset.type === type);
      if (ok) { visibles++; if (f.hasAttribute('data-masquee')) { f.removeAttribute('data-masquee'); if (anime && gsap) gsap.fromTo(f, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'transform,opacity' }); } }
      else f.setAttribute('data-masquee', '');
    });
    if (zone.dataset.modeleResultat) res.textContent = zone.dataset.modeleResultat.replace('{n}', visibles);
    vide.hidden = visibles > 0;
    const u = new URL(location.href);
    if (n) u.searchParams.set('personnes', n); else u.searchParams.delete('personnes');
    if (type !== 'tous') u.searchParams.set('type', type); else u.searchParams.delete('type');
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    if (anime) requestAnimationFrame(() => { try { rafraichir(); } catch { /* le socle recalcule aussi seul */ } });
  };
  boutonsN.forEach((b) => b.addEventListener('click', () => { const v = +b.dataset.personnes; n = n === v ? 0 : v; appliquer(true); }));
  boutonsT.forEach((b) => b.addEventListener('click', () => { type = b.dataset.type; appliquer(true); }));
  appliquer(false);
}

/* ---------- Locations : la vignette échange sa photo avec la grande ; détails repliés sur téléphone ---------- */
function fiches() {
  $$('[data-echange]').forEach((b) => {
    const fiche = b.closest('.fiche-photos');
    b.addEventListener('click', () => {
      const a = $('.fiche-media img', fiche), v = $('.fiche-media-2 img', fiche);
      if (!a || !v) return;
      const attrs = ['src', 'srcset', 'alt'];
      const echanger = () => attrs.forEach((k) => { const x = a.getAttribute(k), y = v.getAttribute(k); if (y != null) a.setAttribute(k, y); if (x != null) v.setAttribute(k, x); });
      if (!gsap) { echanger(); return; }
      gsap.timeline().to([a, v], { opacity: 0, duration: 0.18 }).call(echanger).to([a, v], { opacity: 1, duration: 0.35, clearProps: 'opacity' });
    });
  });
  if (matchMedia('(max-width: 760px)').matches) $$('.fiche-plus[open]').forEach((d) => d.removeAttribute('open'));
}

/* ---------- Réserver : formulaire par étapes prérempli par l'adresse ---------- */
const LOGEMENTS = { cabane: 'Cabane', 'mh-eco': 'Mobil-home Éco', 'mh-confort': 'Mobil-home Confort', 'mh-premium': 'Mobil-home Premium', gite: 'Gîte « Le Cantou d\'Émile »', appartements: 'Appartements « Les Champs Fleuris »' };
function reservation() {
  const root = $('.fpe');
  if (!root) return;
  const form = $('form', root);
  const h = parametres.get('hebergement');
  if (h) { const r = form.querySelector(`input[name="hebergement"][value="${CSS.escape(h)}"]`); if (r) r.checked = true; }
  const lg = parametres.get('logement');
  if (lg && LOGEMENTS[lg]) form.querySelector('input[name="logement"]').value = LOGEMENTS[lg];
  [['personnes', 'personnes'], ['enfants', 'enfants'], ['animaux', 'animaux']].forEach(([p, n]) => { const v = parametres.get(p); if (v != null && /^\d+$/.test(v)) form.querySelector(`input[name="${n}"]`).value = v; });
  if (parametres.get('cure') === 'oui') form.querySelector('input[name="cure"]').checked = true;
  const nuits = parametres.get('nuits');
  if (nuits && /^\d+$/.test(nuits)) { const t = form.querySelector('textarea[name="commentaires"]'); if (!t.value) t.value = `Séjour d'environ ${nuits} nuit${+nuits > 1 ? 's' : ''}.`; }
  initFormulaireEtapes(root, { sujet: 'Demande de séjour' }).catch((e) => console.error('[formulaire]', e));
  root.addEventListener('formulaire:envoye', () => {
    setTimeout(() => { const fin = $('.fpe__fin', root); if (fin && !fin.hidden) { const r = fin.getBoundingClientRect(); if (r.top < 0 || r.bottom > innerHeight) window.scrollBy({ top: r.top - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72) - 24, behavior: 'smooth' }); } }, 60);
  });
}

/* ---------- Intro et arrivées ---------- */
const titreAccueil = () => $('.ouv-titre');
let survol = null;
function poserAccueil() {
  const t = titreAccueil(); if (!t) return;
  t.classList.add('vu', 'ouv-pose');
  $('.ouv-accueil').classList.add('ouv-posee');
  if (gsap) gsap.set(['.ouv-ligne', '.ouv-apparait'], { clearProps: 'transform,opacity' });
  /* Après l'intro, la vue aérienne continue de s'approcher lentement (une seule fois), puis glisse au défilement. */
  const img = $('.ouv-accueil-media img');
  if (!gsap || !img || survol) return;
  if (ST()) gsap.fromTo($('.ouv-accueil-media'), { yPercent: 0 }, { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.ouv-accueil', start: 'top top', end: 'bottom top', scrub: 0.3, invalidateOnRefresh: true } });
  if (etat.arrivee === 'retour') { survol = true; return; }
  survol = gsap.fromTo(img, { scale: 1 }, { scale: 1.07, xPercent: -1.2, duration: 12, ease: 'sine.inOut' });
}

demarrer({
  preparer() {
    statuts();
    frise(); crete(); rangee(); vapeur(); prairie(); bandeau(); carteAcces();
    profils(); choixDormir(); calculateur(); filtre(); fiches(); reservation();
    quand('pret', () => statuts());
  },
  /* Intro (≈ 2,4 s) : la crête du Sancy se trace, le soleil monte, puis glisse sur l'objet d'ouverture de la page
     (le cachet rond de l'accueil) et le panneau s'ouvre en cercle depuis lui. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-crete path', { strokeDashoffset: 1600 }, { strokeDashoffset: 0, duration: 1.0, ease: 'power2.inOut' }, 0.05)
      .fromTo('.ouverture-nom, .ouverture-ligne', { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.08 }, 0.25)
      .fromTo('.ouverture-soleil', { opacity: 0, y: 70, scale: 0.6 }, { opacity: 1, y: 0, scale: 1, duration: 0.6 }, 0.4)
      .to('.ouverture-nom, .ouverture-ligne, .ouverture-crete', { opacity: 0, duration: 0.3 }, 0.95);
    versObjet(tl, { a: 1.0, duree: 0.5, ouverture: 0.8 });
    const t = titreAccueil();
    if (t) {
      tl.call(() => t.classList.add('vu'), null, 0)
        .fromTo('.ouv-accueil-media img', { scale: 1.14 }, { scale: 1, duration: 1.1, ease: 'power2.out' }, 1.4)
        .fromTo('.ouv-ligne', { yPercent: 135, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.12 }, 1.55)
        .fromTo('.ouv-apparait', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, 1.7)
        .call(poserAccueil, null, 2.5);
    } else {
      tl.call(ouvertures, null, 1.5);
    }
    return tl;
  },
  etatFinal() { poserAccueil(); ouverturesFinales(); statuts(); },
  arrivee() {
    const t = titreAccueil();
    if (t && gsap) {
      t.classList.add('vu');
      gsap.timeline({ onComplete: poserAccueil })
        .fromTo('.ouv-accueil-media img', { scale: 1.08 }, { scale: 1, duration: 1.1, ease: 'power2.out' }, 0)
        .fromTo('.ouv-ligne', { yPercent: 135, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, 0.1)
        .fromTo('.ouv-apparait', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, 0.3);
    } else ouvertures();
  },
});
