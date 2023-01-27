# S3 Début formulaires
Temps estimé : env. 3h

## Objectifs
- Créer et valider un formulaire à l'aide d'HTML et de JS
- Inspecter son travail

## Contexte
Dans cet exercice vous allez recréer le formulaire présenté ci-dessous
![image](https://user-images.githubusercontent.com/7990942/151484192-a94029f2-be24-4ef0-b51c-8545d4dda198.png)

Ce formulaire permet de commander des pommes et des patates à un fermier local.
On peut aussi laisser un commentaire pour dire à quel point on tient à son fermier de famille.

## Instructions
1. Faire un repository sur GitHub, le clôner et faire votre projet dedans.
2. Créer le formulaire à partir de la maquette ci-dessus. Il n'est pas nécessaire d'ajouter toutes les bordures.

    Attention: dans le champ compagnie des suggestions sont fournies, mais on peut entrer d'autres données.
    ![image](https://user-images.githubusercontent.com/7990942/151485066-79c0d755-2bd1-43a6-84b6-8c558b142702.png)

3. Les données entrées doivent respecter les restrictions suivantes (ajouter la validation nécessaire, ainsi que les messages aux utilisateurs) :
    - Le nom doit comporter entre 2 et 100 caractères. Il s'agit du seul champ obligatoire
    - On suppose que le courriel a déjà été enregistré dans le système : on ne peut pas le modifier
    - La province sélectionnée doit être l'Ontario, le Québec ou le Manitoba
    - Si la province sélectionnée est l'Ontario, le numéro de téléphone doit commencer par 613
    - Si la province sélectionnée est le Québec, le numéro de téléphone doit commencer par 819
    - Le nombre de pommes est compris entre 0 et 40, inclusivement.
    - Le nombre de patates est 0 ou un multiple de 5 compris entre 5 et 40 inclusivement.
    - On doit avoir plus de patates que de pommes
    - Le pseudonyme comporte de 3-9 caractères
  
5. Afficher le nombre de patates sélectionné à l'aide de JavaScript
6. Vérifier les éléments suivants et corriger au besoin votre travail

    - [ ] Toutes les données sont validées
    - [ ] Les utilisatrices et les utilisateurs sont informés des restrictions
    - [ ] Les entrées obligatoires sont clairement indiquées (guidage et traitement des erreurs)
    - [ ] Des messages d'erreurs clairs et précis, situés près de l'erreur, sont affichés au besoin

## Partie 2 :
- Le téléphone peut être entré sous le format 555-555-5555 ou (555) 555-5555 ou 5555555555
- Le pseudonyme (3-9 caractères) doit :
   - Débuter par une lettre majuscule
   - Se terminer par un des symboles suivants : !,$ ou ? 
