export interface VocabularyTerm {
  term: string;
  definition: string;
  category: string;
}

export const vocabularyTerms: VocabularyTerm[] = [
  {
    term: '2FA (Two-Factor Authentication)',
    definition: 'Méthode de sécurité qui nécessite deux facteurs de vérification pour accéder à un compte (généralement un mot de passe + un code généré par une application ou envoyé par SMS).',
    category: 'Sécurité'
  },
  {
    term: 'OGE (Original Gmail Email)',
    definition: "L'adresse email Gmail originale utilisée lors de la création du compte. Elle est cruciale pour la récupération et la sécurité du compte.",
    category: 'Sécurité'
  },
  {
    term: 'MFA (Multi-Factor Authentication)',
    definition: 'Authentification à plusieurs facteurs, similaire à la 2FA mais pouvant utiliser plus de deux méthodes de vérification (mot de passe, SMS, email, biométrie, etc.).',
    category: 'Sécurité'
  },
  {
    term: 'Authenticator App',
    definition: "Application mobile qui génère des codes de vérification temporaires pour l'authentification à deux facteurs (ex: Google Authenticator, Microsoft Authenticator).",
    category: 'Sécurité'
  },
  {
    term: 'Secret Key / Secret Code',
    definition: 'Code alphanumérique unique (généralement 16 ou 32 caractères) utilisé pour configurer un authentificateur. À conserver en lieu sûr car il permet de recréer les codes 2FA.',
    category: 'Sécurité'
  },
  {
    term: 'Recovery Code',
    definition: "Codes de secours uniques permettant d'accéder à un compte si l'authentificateur est perdu ou inaccessible. À sauvegarder impérativement.",
    category: 'Sécurité'
  },
  {
    term: 'Session',
    definition: "Connexion active à un compte depuis un appareil ou un navigateur. Il est recommandé de surveiller et de supprimer les sessions non autorisées.",
    category: 'Sécurité'
  },
  {
    term: 'Pullback',
    definition: 'Action par laquelle l\'ancien propriétaire d\'un compte tente de récupérer le contrôle en utilisant des informations de récupération (email, téléphone) encore liées au compte.',
    category: 'Sécurité'
  },
  {
    term: 'Alias Email',
    definition: 'Adresse email secondaire associée à un compte principal. Permet de recevoir des emails à plusieurs adresses tout en gérant un seul compte.',
    category: 'Gestion de compte'
  },
  {
    term: 'Device Management',
    definition: "Gestion des appareils connectés à un compte. Permet de voir et supprimer les appareils autorisés à accéder au compte.",
    category: 'Gestion de compte'
  },
  {
    term: 'Authorized Apps',
    definition: "Applications tierces qui ont reçu l'autorisation d'accéder à certaines données du compte. Il est recommandé de les révoquer régulièrement.",
    category: 'Gestion de compte'
  },
  {
    term: 'Steam Guard',
    definition: "Système de sécurité de Steam utilisant un authentificateur mobile ou des codes par email pour protéger les transactions et les connexions.",
    category: 'Platformes'
  },
  {
    term: 'SDA (Steam Desktop Authenticator)',
    definition: 'Application de bureau alternative pour gérer Steam Guard, permettant de générer des codes d\'authentification sur ordinateur.',
    category: 'Platformes'
  },
  {
    term: 'SteamID64',
    definition: "Identifiant numérique unique à 17 chiffres associé à un compte Steam. Utilisé pour identifier de manière unique un profil Steam.",
    category: 'Platformes'
  },
  {
    term: 'Password Reset Protection',
    definition: 'Fonctionnalité qui empêche la réinitialisation du mot de passe sans vérification supplémentaire, renforçant la sécurité du compte.',
    category: 'Sécurité'
  },
  {
    term: 'Email Forwarding',
    definition: "Fonctionnalité qui redirige automatiquement les emails reçus vers une autre adresse. À désactiver lors de la sécurisation d'un compte pour éviter l'interception.",
    category: 'Sécurité'
  },
  {
    term: 'Passkey',
    definition: "Méthode d'authentification moderne utilisant la cryptographie à clé publique. Plus sécurisée que les mots de passe traditionnels.",
    category: 'Sécurité'
  },
  {
    term: 'Retail Key / Product Key',
    definition: "Clé de produit physique ou numérique achetée en magasin (par opposition à une clé achetée directement en ligne). Souvent requise pour la récupération de compte.",
    category: 'Platformes'
  },
  {
    term: 'DOB (Date of Birth)',
    definition: 'Date de naissance associée à un compte. Souvent utilisée pour la vérification d\'identité. Attention : la modifier peut verrouiller le compte.',
    category: 'Gestion de compte'
  },
  {
    term: 'Linked Accounts',
    definition: "Comptes externes (Google, Apple, Facebook, etc.) connectés à un compte principal. Peuvent être utilisés pour la connexion ou la récupération.",
    category: 'Gestion de compte'
  },
  {
    term: 'Account Creation Email',
    definition: "Email initial reçu lors de la création du compte. Contient souvent des informations importantes sur la date et l'origine du compte.",
    category: 'Gestion de compte'
  }
];

