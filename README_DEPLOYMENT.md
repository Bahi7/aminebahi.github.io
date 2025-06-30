# Guide de Déploiement - Site Personnel d'Amine Bahi

## 🚀 Configuration pour GitHub Pages

Votre site Jekyll est maintenant configuré pour être déployé sur GitHub Pages. Voici les étapes pour le mettre en ligne :

### 1. Vérification de la Configuration

✅ **Fichiers configurés :**
- `_config.yml` - Configuration principale avec vos informations
- `_pages/about.md` - Page d'accueil personnalisée
- `.nojekyll` - Empêche GitHub de traiter le site avec Jekyll
- `CNAME` - Pour votre domaine personnalisé (aminebahi.com)
- `.github/workflows/deploy.yml` - Workflow de déploiement automatique

### 2. Test Local (Optionnel)

Pour tester votre site localement avant de le déployer :

```bash
# Sur Windows PowerShell
bundle install
bundle exec jekyll serve
```

Ou utilisez le script de test :
```bash
bash test_build.sh
```

### 3. Déploiement sur GitHub Pages

1. **Créez un nouveau dépôt GitHub** nommé `aminebahi.github.io`
   
2. **Initialisez Git et poussez votre code :**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Amine Bahi personal website"
   git branch -M main
   git remote add origin https://github.com/aminebahi/aminebahi.github.io.git
   git push -u origin main
   ```

3. **Activez GitHub Pages :**
   - Allez dans Settings → Pages
   - Source : "Deploy from a branch"
   - Branch : `gh-pages` (sera créée automatiquement par le workflow)
   - Dossier : `/ (root)`

4. **Configuration du domaine personnalisé (aminebahi.com) :**
   - Dans les paramètres DNS de votre domaine, ajoutez :
     - Un enregistrement A pointant vers : `185.199.108.153`
     - Un enregistrement A pointant vers : `185.199.109.153`
     - Un enregistrement A pointant vers : `185.199.110.153`
     - Un enregistrement A pointant vers : `185.199.111.153`
     - Un enregistrement CNAME de `www` vers `aminebahi.github.io`

### 4. Vérification du Déploiement

Le workflow GitHub Actions se déclenchera automatiquement à chaque push sur la branche `main`. Vous pouvez suivre le déploiement dans l'onglet "Actions" de votre dépôt.

Votre site sera accessible à :
- https://aminebahi.github.io (temporairement)
- https://aminebahi.com (une fois le DNS configuré)

### 5. Personnalisation Supplémentaire

- **Photo de profil** : Remplacez `assets/img/prof_pic.jpg` par votre photo
- **Publications** : Ajoutez vos publications dans `_bibliography/papers.bib`
- **Projets** : Modifiez les fichiers dans `_projects/`
- **Blog** : Ajoutez des articles dans `_posts/`

### 📝 Notes Importantes

- Le site utilise le thème al-folio avec vos personnalisations
- Les builds sont automatiques via GitHub Actions
- Le HTTPS est activé automatiquement par GitHub Pages
- Les changements prennent généralement 5-10 minutes pour être visibles

### 🛠️ En Cas de Problème

1. Vérifiez l'onglet "Actions" sur GitHub pour les erreurs de build
2. Assurez-vous que le nom du dépôt est exactement `aminebahi.github.io`
3. Vérifiez que la branche `gh-pages` a été créée après le premier déploiement

---

Bonne chance avec votre site ! 🚀 