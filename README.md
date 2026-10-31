# Check-list SMUR

Petite appli Android pour remplir plus vite les check-lists de prise de poste du SMUR Beaujon (Google Forms).

À l'ouverture, on choisit **UMH** (ambulance de réanimation, BJN 02 à 04) ou **VL** (VRIM, BJN 01). On saisit les relevés (APH, UMH, kilométrage, O2, Entonox, carburant…) et on ne touche que les points non conformes : tout le reste est coché conforme par défaut. Le bouton ouvre le formulaire Google entièrement pré-rempli dans le navigateur ; il reste à faire Suivant jusqu'à Envoyer.

L'appli ne contrôle rien à ta place : elle sert à saisir le résultat d'un contrôle réellement fait.

Le numéro APH et l'UMH sont retenus sur le téléphone après la première saisie.

## Contenu

- `template.html` : l'écran de saisie et la configuration des deux formulaires (`FORMS`)
- `sections_umh.js`, `sections_vl.js` : les questions de chaque formulaire, avec leurs identifiants `entry.*`
- `src/…/MainActivity.java` : la WebView qui affiche la page et ouvre les liens dans le navigateur

## Compiler

Sur Ubuntu / Debian, sans Gradle :

```bash
sudo apt install aapt apksigner dalvik-exchange android-sdk-platform-23 zipalign default-jdk
KS_PASS=motdepasse ./build.sh
```

L'APK signée sort dans `out/check-list-smur.apk`. La clé de signature (`smur.keystore`) est créée au premier build et n'est pas versionnée : garde-la, une mise à jour doit être signée avec la même clé pour s'installer par-dessus.

## Si un formulaire change

Ouvrir le formulaire dans un navigateur, lire `FB_PUBLIC_LOAD_DATA_` dans la console pour récupérer les nouveaux identifiants et libellés, puis mettre à jour le fichier `sections_*.js` concerné.
