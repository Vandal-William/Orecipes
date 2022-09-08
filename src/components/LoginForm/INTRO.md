# Ce que je veut faire

- Gérer les champs controlés
  - Eventuellement initialiser un state pour l'email et le mot de passe
  - Lire ce state via useSelector dans le composant
  - Vérifier que la valeur issue du state contrôlé la valeur de l'input
  - Executer une fonction au onChange sur l'input
  - Dispatcher une action pour traduire la volonté de changer la valeur d'un champ
  - Traduire cette action par un nouveau state dans un reducer
- Gérer la connexion au submit
  - Réagir au submit du formulaire
  - dispatcher une action pour traduire la volonté de se connecter
  - Traduire cette action dans un middleware pour faire un appel à l'api
  - Au retour de l'api dispatcher une action pour traduire la volonté de mémoriser l'utilisateur
  - Traduire cette action dans un reducer pour décrire un nouveau state avec l'utilisateur
- Gérer la déconnexion au click sur le bouton prévu
  - Dispatcher une action au clic pour traduire la volonté de se déconnecter
  - Traduire cette action par un état déconnecté dans un reducer
