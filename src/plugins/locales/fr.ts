export default {
  logIn: {
    subtitle: 'Connectez-vous pour commencer !',
    username_textfield_label: "Nom d'utilisateur",
    password_textfield_label: 'Mot de passe',
    button_label: 'Se connecter',
    question: 'Nouveau?',
    alternative: "S'inscrire",
    snackbar_message_success: 'Connexion réussie',
    snackbar_message_error: 'Identifiants incorrects',
  },
  logOut: {
    title: 'Déconnexion',
    message: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    accept: 'Déconnectez-moi',
    cancel: 'Annuler',
  },
  signUp: {
    subtitle: 'Entrez vos informations pour vous inscrire',
    username_textfield_label: "Nom d'utilisateur",
    email_textfield_label: 'Adresse e-mail',
    password_textfield_label: 'Mot de passe',
    password_confirmation_textfield_label: 'Confirmez votre mot de passe',
    button_label: "S'inscrire",
    question: 'Déjà membre ?',
    alternative: 'Se connecter',
    snackbar_message_success:
      'Inscription réussie. Vous pouvez maintenant vous connecter.',
    snackbar_message_error: "Une erreur s'est produite, veuillez réessayer.",
  },
  rules: {
    required: 'Obligatoire',
    valid_email: 'Veuillez entrer une adresse e-mail valide.',
    password_length:
      'Le mot de passe doit contenir au moins {length} caractères.',
    password_capital_letters:
      'Le mot de passe doit contenir au moins 1 lettre majuscule',
    password_lower_case_letters:
      'Le mot de passe doit contenir au moins 1 lettre minuscule',
    password_numbers: 'Le mot de passe doit contenir au moins 1 chiffre',
    password_special_characters:
      "Le mot de passe doit contenir au moins 1 caractère spécial (!?@#$%^&*)(+=.<>{}[],/¿¡:;'|~`_-)",
    password_no_space: "Le mot de passe ne peut pas contenir d'espaces",
    password_match: 'Les mots de passe ne correspondent pas',
  },
}
