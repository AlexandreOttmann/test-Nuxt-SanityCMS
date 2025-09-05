# Recommandation CMS pour Votre Agence de Voyage

## Résumé Exécutif 
Nous souhaitions recommander un CMS moderne, effectuer un comparatif pertinent entre les principaux CMS ressortant sur le marché actuellement.
Cet audit se présente en 2 parties : 
- Un comparatif des CMS, 
- une partie sur les optimisations / évolution possible en gardant Nuxt Content/Studio.
---

## PainPoints Actuels 
- Publication lente (constructions de sites statiques, déploiements longs)
- Rédaction en Markdown, trop technique, trop compliqué à prendre en main
- Contenu riche limité (difficile d'intégrer des galeries, cartes ou blocs complexes), pas de champs de texte riche (avec de l'édition de texte)
- Aucun moyen facile de lier le contenu (ex : Voyage ↔ Destination ↔ Thématique)
- Pas de log d'erreur convenable (le site peut planter sans message, warning préalable)
- Compliqué/impossible d'éditer en même temps et de manière indépendante les fichiers

Ce dont vous avez besoin à la place : aperçu/publication instantanés, texte riche avec médias/blocs intégrés, interface d'édition conviviale, et relations de première classe entre contenus.
CMS AUDITÉS ET TESTÉS : [Sanity](https://www.sanity.io/), [Storyblok](https://www.storyblok.com/), [Strapi](https://strapi.io/), [Prismic](https://prismic.io/), [Directus](https://directus.io/)

Vidéo de présentation de l'audit 🚀: [Lien 1](https://www.loom.com/share/d2bf360930624131a3bb8e7db5d8605b?sid=5ff60fd0-e492-4a6d-b28f-fda1799c3c9f)

---

## TL;DR 
- Vous souhaitez un CMS moderne avec publication rapide, contenu riche (images, blocs, relations), et une expérience d'édition que les non‑développeurs peuvent utiliser confortablement.
- Trois meilleures options globales : Sanity (le plus flexible et évolutif pour les développeurs et équipes d'Odysway, moins cher, moins complexe), Storyblok (le plus visuel, le plus facile pour les éditeurs) et Strapi (le plus solide d'auto‑hébergement ou cloud avec relations fortes et rôles ; ressemble à un CMS traditionnel).
- Classement mis à jour (basé sur vos besoins et budget) :
  1) Sanity, 2) StoryBlok, 3) Strapi, 4) Prismic, 5) Directus


### Pourquoi ces trois ?
- Storyblok : édition vraiment visuelle (ce‑que‑vous‑voyez‑est‑ce‑que‑vous‑obtenez), excellent pour le marketing et les landing pages.
- Sanity : modélisation de contenu puissante et relations, texte riche avec blocs intégrés, excellente intégration Nuxt et aperçus rapides.
- Strapi : option solide d'auto‑hébergement ou cloud avec relations fortes et rôles ; ressemble à un CMS traditionnel.


- Meilleur fonctionnalités générales pour vos besoins : Sanity ou Storyblok
  - Voulez l'éditeur le plus visuel et l'intégration non‑dev la plus rapide ? Choisissez Storyblok
  - Voulez une flexibilité maximale, une simplicité dans l'editeur malgré une présentation austère, des relations fortes entre les types de contenus/données, limiter les possibilités supperficielles et aller à l'essentiel ? Choisissez Sanity
- Préférez le contrôle auto‑hébergé avec un admin traditionnel et des rôles forts ? Choisissez Strapi 

---


## Aperçus des Plateformes (Business‑First)

### 1) SANITY
Ce que c'est : Plateforme de contenu moderne utilisée par des marques comme PUMA, Figma, Nike

- 2 vidéos de présentation : 
  - Lien 1: [Vidéo présentation](https://www.loom.com/share/aaa76c2baeae48a28b96bc1f0998ec95?sid=e94cd11b-3a75-4823-b7a8-7848da34dc6e)
  - Lien 2: [Vidéo complémentaire](https://www.loom.com/share/d73c2ae76ec14ee19072f56598fe4e61?sid=147ecda8-9d35-4441-9bb5-43956b6c8613)

Avantages
- Aperçu en temps réel ; les changements s'affichent instantanément
- Excellente gestion d'images et CDN
- Relations puissantes et Portable Text (intégrer blocs/références) : Editeur de texte riche (très utile pour les blogs/articles)
- Évolue bien, excellente intégration Nuxt (@nuxtjs/sanity)

Inconvénients
- Interface d'édition basée sur des formulaires (moins visuelle que Storyblok)
- Langage de requête GROQ ajoute une petite courbe d'apprentissage

Prix indicatifs (10 personnes)
- Plan gratuit pour commencer ; Croissance autour de 150€/mois
- Total typique avec actifs : ~170–180€/mois

Meilleur pour vous si
- Vous voulez une modélisation flexible (circuits, destinations, guides) et un aperçu rapide, et votre équipe est OK avec un éditeur basé sur des formulaires simples au lieu de la construction de pages par Drag&Drop par exemple.

--- 

### 2) STORYBLOK
Ce que c'est : Plateforme de contenu visuelle utilisée par Adidas, Tesla, Marc O'Polo


- 1 vidéo de présentation : 
  - Lien: [Vidéo présentation](https://www.loom.com/share/1f5f2c0f90724f19b6bc53fc94c65a6b?sid=637b7e78-4210-4c88-9d55-2214d8302c9c)

Avantages
- Éditeur visuel : preview les pages pendant l'édition
- Blocs de contenu par drag&drop ; excellent pour les landing pages, et campagnes, etc...
- Localisation forte et réutilisation de composants (Facilité de traduction par IA, création de composants customs qu'on pourra intégrer dans l'outil)

Inconvénients
- Plus orienté autour des composants/blocs ; nécessite une planification préalable (A la manière du markdown Nuxt Content/Studio)
- Moins de requêtes ad‑hoc vs GROQ

Prix indicatifs (10 personnes)
- Plan Équipe ≈ 299€/mois (~330$) avec 10 utilisateurs et 100GB d'actifs

Meilleur pour vous si
- Les équipes marketing ont besoin d'autonomie maximale et de vitesse pour construire des pages visuellement (Nous ne sommes par certains que ce soit votre besoin même si vous aimez que le site soit déployé rapidement).

---

### 3) STRAPI 
Ce que c'est : CMS open‑source que vous pouvez auto‑héberger ou utiliser Strapi Cloud

- 2 vidéos de présentation : 
  - Lien 1: [Vidéo présentation](https://www.loom.com/share/0ceef9bd79004e9a849075daefb46797?sid=a6233219-8a8e-47ae-a780-23b88f5974a5)
  - Lien 2: [Vidéo complémentaire](https://www.loom.com/share/373e7c2bc7484c9a8fccb3ddb4167b01?sid=8ab5287-3d6f-48cf-b1ea-599722d730eb)


Avantages
- Panneau d'administration traditionnel ; relations fortes des données, composants, zones dynamiques
- RBAC (Role-Based Access Control) : Gestion fine des rôles et permissions pour contrôler qui peut faire quoi dans le CMS
- Workflows personnalisables : Création de processus de validation et de publication (ex: brouillon → révision → publication)
- Large écosystème de plugins : Extensions disponibles pour ajouter des fonctionnalités (SEO, import/export, etc.)
- Fonctionnalités entreprise : Audit logs, authentification SSO, API tokens, webhooks pour l'intégration avec d'autres systèmes
- Fonctionne avec SQL/SQLite/Postgres ; APIs REST/GraphQL

Inconvénients
- Si auto‑hébergé, vous gérez les opérations, l'évolutivité, sauvegardes, mises à jour de sécurité
- Aperçu en temps réel et intégration de blocs riches nécessitent une configuration

Prix indicatifs (10 personnes)
- Auto‑hébergé : coûts d'infrastructure (~50–200€/mois) + maintenance
- Strapi Cloud Pro ≈ 99$/mois (10 sièges) ; Équipe/Entreprise plus élevé

Meilleur pour vous si
- Vous voulez la propriété/contrôle et une sensation CMS familière, et vous êtes OK avec soit gérer l'infrastructure soit payer pour le cloud.

---

### 4) PRISMIC
Ce que c'est : CMS axé marketing avec édition basée sur des slices

Avantages
- Slices pour sections de page réutilisables ; bonne UX d'éditeur
- Aperçus solides, CDN hébergé, fast, Nuxt integration, etc...

Inconvénients
- Modélisation de contenu plus contraignante pour les relations complexes de données 
- Limites d'utilisateurs et de dépôts peuvent vous pousser vers des palliers de tarifs plus élevés 

Prix indicatifs (10 personnes)
- Souvent nécessite un niveau plus élevé (~450€/mois) pour les sièges/fonctionnalités dont vous auriez besoin

Meilleur pour vous si
- Votre priorité est les pages de campagne/marketing avec des bibliothèques de slices prévisibles et vous êtes à l'aise avec le prix.

---

### 5) DIRECTUS
Ce que c'est : CMS headless axé données, piloté par base de données

Avantages
- Fonctionne sur votre base de données ; modélisation relationnelle forte et permissions
- Bon pour les outils internes et tableaux de bord riches en données

Inconvénients
- Texte riche et blocs intégrés nécessitent des patterns et une configuration
- Pas axé sur la construction de pages visuelles pour les marketeurs

Prix indicatifs
- Auto‑hébergé (coût d'infrastructure) ou Directus Cloud Équipe ≈ 349$/mois pour 15 utilisateurs

Meilleur pour vous si
- Vous voulez un CMS axé données sur une DB existante et êtes moins axés sur les workflows marketing.

---

## Comparaison des Fonctionnalités (Langage Simple)

| Fonctionnalité | Sanity | Storyblok | Strapi | Prismic | Directus |
|---------|--------|-----------|--------|---------|----------|
| Facilité d'utilisation pour non‑devs | ⭐⭐⭐ Bon | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Bon | ⭐⭐⭐⭐ Très Bon | ⭐⭐ Modéré |
| Construction de pages visuelles | ❌ Non | ✅ Oui | ❌ Non | 🔶 Limité | ❌ Non |
| Vitesse de publication | ⚡ Instantané | ⚡ Instantané | 🔶 Dépend | ⚡ Instantané | 🔶 Dépend |
| Gestion d'images (7GB) | ✅ Excellent | ✅ Excellent | 🔶 Basique | ✅ Bon | 🔶 Basique |
| Multi‑langue | ✅ Excellent | ✅ Excellent | ✅ Bon | ✅ Très Bon | ✅ Bon |
| Relations de contenu | ✅ Excellent | ✅ Excellent | ✅ Excellent | 🔶 Limité | ✅ Excellent |
| Collaboration d'équipe | ✅ Bon | ✅ Excellent | ✅ Bon | ✅ Bon | 🔶 Basique |
| Édition mobile | ✅ Oui | ✅ Oui | ✅ Oui | ✅ Oui | 🔶 Limité |
| Planification | ✅ Oui | ✅ Oui | ✅ Oui | ✅ Oui | ❌ Non |

Notes
- "Construction de pages visuelles" = éditer comme PowerPoint avec changements immédiats à l'écran. Sanity est basé sur des formulaires, mais avec l'aperçu en direct, cela reste rapide.
- "Vitesse de publication" dépend de votre architecture d'hébergement ; toutes les options hébergées recommandées sont rapides avec aperçu.

---

## Coût Total de Possession (Approximatif, Mensuel)

| Plateforme | Coût Logiciel | Stockage Supplémentaire | Total Mensuel |
|----------|----------------|--------------------|--------------------|
| Sanity | ~150€ | ~20–30€ | ~170–180€ |
| Storyblok | ~330€ | Inclus | ~330€ |
| Strapi (Cloud) | 99–499$ | Varie | 99–499$ |
| Prismic | ~450€ | Inclus | ~450€ |
| Directus (Cloud) | ~349$ | Inclus | ~349$ |

---

## Migration & Calendrier (Depuis Nuxt Content/Studio)

| Cible | Difficulté | Calendrier | Perturbation Business |
|--------|------------|----------|---------------------|
| Sanity | Modérée | 4–6 semaines | Minimale |
| Storyblok | Facile–Modérée | 3–4 semaines | Minimale |
| Strapi | Difficile (si auto‑hébergé) | 6–8 semaines | Modérée |
| Prismic | Modérée | 4–5 semaines | Minimale |
| Directus | Difficile | 6–8 semaines | Modérée |

Tâches de migration clés
- Créer les modèles de données (collections/types)
- Migrer le contenu actuel(voyages, destinations, guides, avis) vers le nouveau modèle
- Définir texte riche + blocs intégrés  ( composants custom, images, encadrés, code, galeries, etc...)
- Configurer les workflows d'aperçu et rôles éditoriaux tôt
- Remplir le contenu et valider les URLs avant la mise en ligne

---

## Recommandation Finale (Classement Mis à Jour)

1) Sanity — Meilleur équilibre de flexibilité, performance et coût. Si vous avez besoin de relations riches et de contenu évolutif avec une excellente stack Nuxt, choisissez ceci.
2) Storyblok — Meilleur pour les éditeurs non‑techniques et la construction rapide de pages. Si votre équipe valorise le plus l'édition visuelle et l'autonomie, cela délivre une productivité immédiate.
3) Strapi — CMS traditionnel fort avec rôles/permissions ; bon choix si vous préférez plus de contrôle ou l'auto‑hébergement (ou un Strapi Cloud géré) et acceptez plus de configuration.
4) Prismic — Workflows marketing polis et slices ; prix continu plus élevé au niveau dont vous auriez probablement besoin.
5) Directus — Meilleur si vous êtes vraiment pilotés par base de données et moins axés sur la construction de pages marketing/éditoriales.

---

## Contre-Recommandation, garder l'utilisation de Nuxt Content

### Pourquoi considérer garder Nuxt Content ?

**Avantages de la solution actuelle à court/moyen terme :**
- **Coût zéro** : Aucun abonnement mensuel quand Nuxt Content/Studio sera passé en open source (fin d'année 2025), aucune limite d'utilisateurs
- **Contrôle total** : Possibilité de personnaliser entièrement l'expérience (Interface d'édition, workflow, etc...)
- **Nuxt Studio open source** : Possibilité de fork et personnalisation complète
- **Intégration native** : Déjà configuré et fonctionnel dans votre projet...
- **Performance** : Génération statique native, le site est déjà très rapide, une solution par api externe pourra le ralentir.

---
### Analyse des points de douleur actuels et solutions

#### 1. Publication lente → Implémentation ISR (Incremental Static Regeneration)
**Solution technique :**
- Mise en place d'ISR avec revalidation automatique
- Passage du SSR (Server-Side Rendering) actuel à l'ISR (Incremental Static Regeneration): au lieu de regénérer toutes les pages à chaque déploiement, l'ISR permet de mettre à jour uniquement les pages modifiées et de servir les autres depuis un cache, réduisant le temps de déploiement de plusieurs minutes à ~30-60 secondes normalement.

#### 2. Interface d'édition technique → Optimisation de Nuxt Studio
**Avantages du fork open source qui devrait se dérouler en fin d'année 2025 :**
- Personnalisation complète de l'interface utilisateur
- Pouvoir répondre exactement à vos besoins en full customisation
- Ajout de composants d'édition visuels, editeur de texte riche simplifiés...
- Workflows de validation personnalisés

#### 3. Optimisation Vercel pour le déploiement
**Stratégies de réduction du temps de build :**
- **Build caching** : Réduction de 40-60% du temps de build
- **Parallel builds** : Déploiements simultanés, les limiter à la prod et preprod. Empêchant le spam de builds et le queueing.
- **Estimation gain de temps (non testé) : 3-5 minutes → 1-2 minutes voir moins**

#### 4. Limitation de l'édition simultanée des fichiers
**Remise en question :**
Est-ce vraiment un problème ?
Actuellement il y a rarement la création d'un nouveau voyage, d'une nouvelle donnée. Il s'agit principalement de modifications légères sur les voyages, destinations, experiences, etc...
Si vous souhaitez créer un nouveau voyage, vous pouvez dupliquer et rapidement éditer celui-ci. Est-ce vraiment nécessaire d'avoir de l'édition simultanée des fichiers et une vitesse de déploiement rapide ?
Sur les dernières semaines, le nombre de grosses modifications a été relativement faible et il s'agissait principalement de modifications d'un champs à la fois ou d'un texte, l'ajout d'une destination...

**Solution technique une fois que Nuxt Content/Studio sera passé en open source :**
- Ajout d'un système de notification lors de l'édition simultanée des fichiers
- Ajout d'un système de validation des fichiers, gestion d'erreurs, logs, etc...
- Ajout d'un système de rollback des fichiers, d'un état de draft / publication
- Ajout de la possibilité d'éditer en même temps et de manière indépendante les fichiers
- Ajout de la possibilité de publier individuellement des modifications
**Remarque :**
- Estimation temps de mise en place : 2 mois de développement


### Plan d'optimisation Nuxt Content (Alternative)

#### Phase 1 : Optimisation immédiate (1 semaine)
- [ ] Configuration ISR pour toutes les pages dynamiques
- [ ] Optimisation des builds Vercel
- [ ] Mise en place du cache intelligent

#### Phase 2 : Amélioration de l'expérience éditeur (2-3 semaines)
- [ ] Fork et personnalisation de Nuxt Studio
- [ ] Ajout de composants d'édition visuels, editeur de texte riche simplifiés...
- [ ] Workflows de validation personnalisés
- [ ] Interface d'aperçu en temps réel


### Risques et limitations de l'approche Nuxt Content

**Risques :**
- **Dépendance technique** : Équipe doit maintenir les optimisations
- **Complexité** : Plus de code à maintenir vs solution SaaS
- **Évolutivité** : Limites techniques de Nuxt Content pour très gros volumes

**Limitations actuelles :**
- Pas de relations complexes natives entre contenus (possibilité d'évolution future)
- Interface d'édition moins intuitive que les CMS spécialisés
- Gestion des médias basique

### Recommandation finale révisée

**Pour votre cas d'usage actuel, nous recommandons :**

1. **Court terme (1-2 mois)** : Optimiser Nuxt Content avec ISR et Vercel
   - Coût : sur devis
   - Gain immédiat : Déploiements 3-5x plus rapides
   - Risque : Faible

2. **Moyen terme (3ème mois)** : Évaluer si les optimisations suffisent
   - Si oui : Continuer avec Nuxt Content
   - Si non : Migrer vers Sanity (notre recommandation principale)

3. **Long terme** : Considérer la migration uniquement si :
   - L'équipe éditoriale dépasse 15-20 personnes
   - Les besoins de relations entre contenus deviennent critiques
   - Trop de frictions sur les workflows d'édition, l'utilisation de Nuxt Studio

### Conclusion

**Garder Nuxt Content est économiquement avantageux** si vous acceptez :
- Un nouvel investissement initial de 2-3 semaines de développement
- Une maintenance technique continue
- Des limitations fonctionnelles sur les relations complexes
- Vous acceptez finalement la limitation de l'édition simultanée des fichiers à court/moyen terme

**La migration vers un CMS externe est justifiée** si vous préférez :
- (A court terme) Une solution plus performante en terme de workflows et développement et plus stable
- Une solution clé en main sans maintenance technique
- Des fonctionnalités avancées immédiatement disponibles (relations complexes, édition simultanée, traduction IA, etc...)
- Une équipe éditoriale importante (>15 personnes)
- Souhaitez absolument pour éditer en même temps et de manière indépendante les fichiers
- Avoir un contrôle total sur l'expérience d'édition

**Notre recommandation :** 
- Si vous estimez que le déploiement instantané et l'édition simultanée des fichiers par plusieurs personnes sont une priorité par dessus le reste, et les coûts actuels tout en ayant en tête le prix de la migration vers un CMS externe, alors migrer vers Sanity ou Storyblok.
- Sinon commencer par l'optimisation Nuxt Content pour valider que cela répond à 80% de vos besoins, puis réévaluer dans 3mois selon l'évolution de votre équipe et de vos besoins et décider de migrer vers un CMS externe ou non.



