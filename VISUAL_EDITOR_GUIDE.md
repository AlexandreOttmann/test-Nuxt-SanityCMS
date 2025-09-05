# 🎨 Guide de l'éditeur visuel Sanity

## 🚀 Vue d'ensemble

Votre projet est maintenant configuré avec un **éditeur visuel complet** qui permet à vos clients de créer du contenu riche sans écrire de code. Voici comment tout fonctionne ensemble.

## 📱 Pages de démonstration

### 1. **`/test`** - Page de test générale
- Affiche tous les types de contenu (posts, voyages, catégories)
- Démontre les relations entre contenus
- Statistiques en temps réel

### 2. **`/demo-editor`** - Démo de l'éditeur visuel
- Instructions d'utilisation
- Affichage du contenu riche créé dans Studio
- Démonstration des fonctionnalités

## ✍️ Comment utiliser l'éditeur visuel

### **Étape 1 : Ouvrir Sanity Studio**
```bash
cd studio-hello-world
npm run dev
```

### **Étape 2 : Créer du contenu**
1. **Posts** : Créez des articles avec formatage riche
2. **Voyages** : Ajoutez des descriptions détaillées
3. **Images** : Utilisez les hotspots pour le recadrage
4. **Relations** : Liez les contenus entre eux

### **Étape 3 : Voir le résultat**
- Retournez sur vos pages Nuxt
- Le contenu s'affiche automatiquement avec le formatage
- Les relations sont préservées et affichées

## 🎯 Fonctionnalités de l'éditeur

### **Barre d'outils de formatage**
- **Styles** : Normal, H2, H3, H4, Citation
- **Formatage** : Gras, Italique, Code, Souligné, Barré
- **Listes** : Puces et numérotées
- **Liens** : Avec option "nouvel onglet"

### **Blocs spéciaux**
- **Images** : Avec hotspots et légendes
- **Encadrés** : Info (bleu), Attention (orange), Succès (vert)
- **Code** : Avec coloration syntaxique
- **Citations** : Formatage automatique

### **Relations automatiques**
- **Auteurs** : Liés aux posts
- **Catégories** : Liées aux posts et voyages
- **Destinations** : Liées aux voyages
- **Expériences** : Liées aux voyages

## 🔧 Configuration technique

### **Composants créés**
- **`SanityContent.vue`** : Affiche le contenu riche
- **`test.vue`** : Page de test avec relations
- **`demo-editor.vue`** : Démo de l'éditeur

### **Dépendances installées**
- **`@portabletext/vue`** : Rendu du contenu Sanity
- **Types TypeScript** : Pour la sécurité des données

### **GROQ queries**
- **Relations** : Utilisation de `->` pour les références
- **Filtres** : `published == true`, `order()`
- **Limites** : `[0...5]` pour limiter les résultats

## 📊 Exemples de requêtes

### **Posts avec relations**
```groq
*[_type == "post"] | order(publishedAt desc)[0...5] {
  _id,
  title,
  excerpt,
  publishedAt,
  author->{_id, name, username},
  categories[]->{_id, title}
}
```

### **Voyages avec relations**
```groq
*[_type == "voyage" && published == true] {
  _id,
  title,
  duration,
  destinations[]->{_id, title},
  experienceType->{_id, title},
  categories[]->{_id, title}
}
```

## 🎨 Personnalisation de l'affichage

### **Styles CSS**
- **Tailwind CSS** : Classes utilitaires
- **Prose** : Typographie automatique pour le contenu
- **Responsive** : S'adapte à tous les écrans

### **Composants personnalisés**
- **Images** : Avec légendes et hotspots
- **Encadrés** : Couleurs selon le type
- **Code** : Coloration syntaxique
- **Liens** : Gestion des nouveaux onglets

## 🚀 Workflow recommandé

### **Pour votre client :**
1. **Créer** du contenu dans Sanity Studio
2. **Formater** avec l'éditeur visuel
3. **Lier** les contenus entre eux
4. **Publier** pour rendre visible

### **Pour vous (développeur) :**
1. **Configurer** les schémas Sanity
2. **Créer** les composants d'affichage
3. **Tester** les relations et le formatage
4. **Déployer** le Studio et l'application

## 🔍 Dépannage

### **Contenu qui ne s'affiche pas**
- Vérifiez que le contenu est publié dans Studio
- Contrôlez les requêtes GROQ
- Vérifiez les relations entre contenus

### **Formatage qui ne fonctionne pas**
- Assurez-vous que `SanityContent` est importé
- Vérifiez que `@portabletext/vue` est installé
- Contrôlez les types de blocs dans le schéma

### **Relations cassées**
- Vérifiez que les contenus référencés existent
- Contrôlez les IDs dans les références
- Utilisez la validation Sanity

## 📚 Ressources

- **Documentation Sanity** : https://www.sanity.io/docs
- **Portable Text** : https://portabletext.dev
- **GROQ** : https://www.sanity.io/docs/groq
- **Vue 3** : https://vuejs.org

---

## 💡 Conseils pour votre client

1. **Commencez simple** : Créez d'abord du contenu basique
2. **Explorez les outils** : Testez tous les types de blocs
3. **Utilisez les relations** : Liez vos contenus pour plus de cohérence
4. **Prévisualisez** : Vérifiez le rendu avant de publier
5. **Sauvegardez** : Le Studio sauvegarde automatiquement

Votre client aura maintenant une expérience d'édition professionnelle qui rivalise avec les meilleurs CMS du marché ! 🎉
