import { Guide, Platform } from '../types/guide';

const base = import.meta.env.BASE_URL;

export const platforms: Platform[] = [
  { id: 'minecraft', name: 'Minecraft', icon: `${base}icons/minecraft.png`, iconWidth: 32 },
  { id: 'discord', name: 'Discord', icon: `${base}icons/discord.png`, iconWidth: 32 },
  { id: 'steam', name: 'Steam', icon: `${base}icons/steam.png`, iconWidth: 32 },
  { id: 'twitter', name: 'Twitter', icon: `${base}icons/twitter.png`, iconWidth: 42 },
  { id: 'playstation', name: 'Playstation', icon: `${base}icons/playstation.png`, iconWidth: 32 },
  { id: 'instagram', name: 'Instagram', icon: `${base}icons/instagram.png`, iconWidth: 32 },
  { id: 'twitch', name: 'Twitch', icon: `${base}icons/twitch.png`, iconWidth: 32 },
  { id: 'valorant', name: 'Valorant', icon: `${base}icons/valorant.png`, iconWidth: 42 },
  { id: 'epic', name: 'Fortnite', icon: `${base}icons/epic.png`, iconWidth: 32 },
  { id: 'kick', name: 'Kick', icon: `${base}icons/kick.png`, iconWidth: 32 },
  { id: 'tiktok', name: 'TikTok', icon: `${base}icons/tiktok.png`, iconWidth: 42 },
  { id: 'snapchat', name: 'Snapchat', icon: `${base}icons/snapchat.png`, iconWidth: 42 },
];

export const guides: Record<string, Guide> = {
  minecraft: {
    id: 'minecraft',
    name: 'Minecraft',
    icon: `${base}icons/minecraft.png`,
    description: 'A Minecraft account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Sign in to your account [here](https://login.live.com/)',
          'If asked, get your 2FA code from [Zyger](https://zyger.net/middleman/2fa/) using the secret key provided',
          'Go to the [Devices](https://account.microsoft.com/devices) tab',
          'Remove all devices and refresh'
        ]
      },
      {
        points: [
          'Open a new browser tab',
          'Go to the [Activity](https://account.live.com/Activity) page',
          'Monitor for any new sessions'
        ]
      },
      {
        points: [
          'Go to the [Security](https://account.microsoft.com/security) tab',
          'Click on [Manage how I sign in](https://account.live.com/proofs/manage/additional)',
          'Add your own recovery email'
        ]
      },
      {
        points: [
          'Turn off 2FA',
          'Remove old recovery methods',
          'Enable 2FA with an [authenticator](/2fa)'
        ]
      },
      {
        points: [
          'Click on \'Sign out everywhere\'',
          'Reset Windows Hello (exploit)',
          'Generate a new recovery code'
        ]
      },
      {
        points: [
          '[Change the password](https://account.live.com/password/Change)',
          'Make sure your password is secure',
          'Click [here](https://password.click) to generate a password'
        ]
      },
      {
        points: [
          'Turn off email forwarding [here](https://outlook.live.com/mail/options/mail/forwarding)',
          'Go to the [Your Info](https://account.microsoft.com/profile) tab',
          'Click on [Edit account info](https://account.live.com/names/manage)'
        ]
      },
      {
        points: [
          'Add a new email address',
          'Make your new alias primary',
          'Remove all other aliases'
        ]
      },
      {
        points: [
          'Change the name [here](https://account.microsoft.com/profile/edit-name)',
          'Change the DOB and location [here](https://account.live.com/editprof.aspx)',
          'Remove yourself from [Microsoft Family](https://account.microsoft.com/family)'
        ]
      },
      {
        points: [
          'Remove all apps from [this page](https://account.microsoft.com/privacy/app-access)',
          'Remove all devices from [this page](https://account.microsoft.com/devices/content)',
          'Check IGN/cape on [minecraft.net](https://www.minecraft.net/en-us/msaprofile)'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Minecraft account!'
        ]
      }
    ]
  },
  discord: {
    id: 'discord',
    name: 'Discord',
    icon: `${base}icons/discord.png`,
    description: 'A Discord account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Sign in to your account [here](https://discord.com/login)',
          'Go to User Settings > My Account',
          'Change the email if not on OGE'
        ]
      },
      {
        points: [
          'Secure the OGE if provided',
          'Find the account creation email',
          'Ensure the creation dates match'
        ]
      },
      {
        points: [
          'Change the password',
          'Make sure your password is secure',
          'Click [here](https://password.click) to generate a password'
        ]
      },
      {
        points: [
          'Check for a linked phone number',
          'If a number exists, change it',
          'Use your own number if possible'
        ]
      },
      {
        points: [
          'Turn off 2FA',
          'Remove SMS backup and security keys',
          'Enable 2FA with an [authenticator](/2fa)'
        ]
      },
      {
        points: [
          'Go back to User Settings',
          'Click on \'Authorized Apps\'',
          'Remove all third-party apps'
        ]
      },
      {
        points: [
          'Go to User Settings > Devices',
          'Click on \'Log out all known devices\'',
          'Wait 48h for dispute links to expire'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Discord account!'
        ]
      }
    ]
  },
  steam: {
    id: 'steam',
    name: 'Steam',
    icon: `${base}icons/steam.png`,
    description: 'A Steam account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Sign in to your account [here](https://steamcommunity.com/login/home)',
          'Go to [Account](https://store.steampowered.com/account) > Contact info',
          'Change email and remove phone number'
        ]
      },
      {
        points: [
          'Secure the OGE if provided',
          'Find the account creation email',
          'Ensure the creation dates match'
        ]
      },
      {
        points: [
          'Change the password [here](https://help.steampowered.com/en/wizard/HelpChangePassword)',
          'Make sure your password is secure',
          'Click [here](https://password.click) to generate a password'
        ]
      },
      {
        points: [
          'Go to the [Manage Steam Guard](https://store.steampowered.com/twofactor/manage) page',
          'Set up Steam Guard in the [mobile app](https://store.steampowered.com/twofactor/add_authenticator?authenticatortype=steam)',
          'Alternatively, set up SDA [here](https://github.com/Jessecar96/SteamDesktopAuthenticator/releases/tag/1.0.13)'
        ]
      },
      {
        points: [
          'Search for a "Retail" acquisition [here](https://store.steampowered.com/account/licenses)',
          'If found, ask for the product key',
          'Otherwise, redeem your own product key'
        ]
      },
      {
        points: [
          'Download/save license history [here](https://store.steampowered.com/account/licenses)',
          'Download/save purchase history [here](https://store.steampowered.com/account/history)',
          'Find/save your SteamID64 [here](/steam-id)'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Steam account!'
        ]
      }
    ]
  },
  twitter: {
    id: 'twitter',
    name: 'Twitter',
    icon: `${base}icons/twitter.png`,
    iconWidth: 42,
    description: 'A Twitter account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Sign in to your account [here](https://x.com/login/)',
          'Go to [Account](https://x.com/settings/account) > Account info',
          'Change email if not on OGE'
        ]
      },
      {
        points: [
          'Secure the OGE if provided',
          'Find the account creation email',
          'Ensure the creation dates match'
        ]
      },
      {
        points: [
          'Secure the account',
          'Remove phone [here](https://x.com/settings/phone)',
          '[Clear all sessions](https://x.com/settings/apps_and_sessions)'
        ]
      },
      {
        points: [
          'Change the password [here](https://x.com/settings/password)',
          'Click [here](https://password.click) to generate a password',
          'Make sure your password is secure'
        ]
      },
      {
        points: [
          'Enable 2FA with an [authenticator](/2fa)',
          'Enable Password Reset Protection [here](https://x.com/settings/security)',
          'Ensure your 2FA is secure'
        ]
      },
      {
        points: [
          'Download data to check OGE [here](https://x.com/settings/account)',
          'Don\'t change the DOB as it will lock.',
          'Don\'t change the user you will lose it.'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Twitter account!'
        ]
      }
    ]
  },
  playstation: {
    id: 'playstation',
    name: 'Playstation',
    icon: `${base}icons/playstation.png`,
    description: 'A Playstation account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Sign in to your account [here](https://www.playstation.com/en-us/)',
          'Go to Account > Security',
          'Change email if not on OGE'
        ]
      },
      {
        points: [
          'Secure the OGE if provided',
          'Find the account creation email',
          'Note it down'
        ]
      },
      {
        points: [
          'Secure the account',
          'Check PSN > Family Management',
          'Remove all if any'
        ]
      },
      {
        points: [
          'Ensure no console\'s are connected',
          'Check Device MGMT > Consoles',
          'Remove all if any'
        ]
      },
      {
        points: [
          'Change the password Account > security',
          'Click [here](https://password.click) to generate a password',
          'Make sure your password is secure'
        ]
      },
      {
        points: [
          'Enable 2FA with an [authenticator](/2fa)',
          'Enable MFA or a security question',
          'Ensure your 2FA is secure'
        ]
      },
      {
        points: [
          'Take screenshots of transactions',
          'Ensure your 2fa is safely stored',
          'Add a prepaid PSN payment method'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Playstation account!'
        ]
      }
    ]
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    icon: `${base}icons/instagram.png`,
    description: 'An Instagram account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Login on mobile',
          'Verify the trusted email(s) on mobile',
          'Logout > Forgot Pass > Need More Help'
        ]
      },
      {
        points: [
          'Have seller remove all 2FA',
          'Secure the OGE',
          'Update Email/Phone, Password, and 2FA'
        ]
      },
      {
        points: [
          'Have the seller swap to your email',
          'Swap the phone and enable SMS 2FA',
          '[Clear all sessions](https://accountscenter.instagram.com/password_and_security/)'
        ]
      },
      {
        points: [
          'Wait 5-7 days, change password and 2FA',
          'Click [here](https://password.click) to generate a password',
          'Make sure your password is secure'
        ]
      },
      {
        points: [
          'Enable 2FA with an [authenticator](/2fa)',
          'If not already, add a passkey',
          'Ensure your 2FA is secure'
        ]
      },
      {
        points: [
          'Download data to check OGE [here](https://accountscenter.instagram.com/info_and_permissions/dyi/)',
          'Export to phone',
          'Logout of all devices [here](https://accountscenter.instagram.com/password_and_security/login_activity/)'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Instagram account!'
        ]
      }
    ]
  },
  twitch: {
    id: 'twitch',
    name: 'Twitch',
    icon: `${base}icons/twitch.png`,
    description: 'A Twitch account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Secure the OGE',
          'Change the email [here](https://www.twitch.tv/settings/security)',
          'Delete the 24 hour revert link'
        ]
      },
      {
        points: [
          'Change the password [here](https://www.twitch.tv/settings/security)',
          'Click [here](https://password.click) to generate a password',
          'Make sure it\'s safe and secure'
        ]
      },
      {
        points: [
          'Turn on 2FA [here](https://www.twitch.tv/settings/security)',
          'Enable 2FA with an [authenticator](/2fa)',
          'Ensure your 2FA is secure'
        ]
      },
      {
        points: [
          'Retrieve the DOB from the seller',
          'Don\'t swap the user, you\'ll lose it',
          'Make sure the 24 hour link was deleted'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Twitch account!'
        ]
      }
    ]
  },
  valorant: {
    id: 'valorant',
    name: 'Valorant',
    icon: `${base}icons/valorant.png`,
    iconWidth: 42,
    description: 'A Valorant account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Secure the OGE from seller',
          'Sign in to your account [here](https://auth.riotgames.com/login)',
          'Change email and click verify link'
        ]
      },
      {
        points: [
          'Personal information > Change Password',
          'Click [here](https://password.click) to generate a password',
          'Make sure your password is secure'
        ]
      },
      {
        points: [
          'Remove any connected accounts',
          'this can be Google or Apple. [Here](https://account.riotgames.com/#connected-accounts)',
          'Ensure they\'re all removed.'
        ]
      },
      {
        points: [
          'Turn on 2FA [here](https://account.riotgames.com/#mfa-card)',
          'Enable 2FA with an [authenticator](/2fa)',
          'Ensure your 2FA is stored safe.'
        ]
      },
      {
        points: [
          'Log everyone out of your account',
          'Clear all sessions [here](https://account.riotgames.com/#login-management)',
          'Check if the region is correct [here](https://account.riotgames.com/#personal-information)'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Valorant account!'
        ]
      }
    ]
  },
  epic: {
    id: 'epic',
    name: 'Fortnite / Epic',
    icon: `${base}icons/epic.png`,
    description: 'A Fortnite/Epic account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Ask seller to [unlink external accounts](https://www.epicgames.com/account/connections)',
          'Secure the OGE from seller',
          'Be cautious with email changes'
        ]
      },
      {
        points: [
          'Have seller remove all 2FA',
          'Enable your own 2FA [here](https://www.epicgames.com/account/password)',
          'Secure 2FA with an [authenticator](/2fa)'
        ]
      },
      {
        points: [
          'Change the password [here](https://www.epicgames.com/account/password)',
          'Click [here](https://password.click) to generate a password',
          'Make sure your password is secure'
        ]
      },
      {
        points: [
          'Download PDF containing history [here](https://www.epicgames.com/account/personal)',
          'Obtain pullback information from seller',
          'Don\'t use multiple ip\'s to avoid locks'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Fortnite account!'
        ]
      }
    ]
  },
  kick: {
    id: 'kick',
    name: 'Kick',
    icon: `${base}icons/kick.png`,
    description: 'A Kick account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Secure the OGE',
          'Change the email [here](https://dashboard.kick.com/settings/profile)',
          'If there\'s a phone, remove it'
        ]
      },
      {
        points: [
          'Change the password [here](https://dashboard.kick.com/settings/security)',
          'Click [here](https://password.click) to generate a password',
          'Make sure it\'s safe and secure'
        ]
      },
      {
        points: [
          'Turn on 2FA [here](https://dashboard.kick.com/settings/security)',
          'Enable 2FA with an [authenticator](/2fa)',
          'Ensure your 2FA is secure'
        ]
      },
      {
        points: [
          'Reset your stream keys [here](https://dashboard.kick.com/channel/stream)',
          'Don\'t change user, you\'ll lose it',
          'Keep account creation email'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Kick account!'
        ]
      }
    ]
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok',
    icon: `${base}icons/tiktok.png`,
    iconWidth: 42,
    description: 'A TikTok account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Check if the user is a dupe, use search',
          'Secure on mobile first, limited on web',
          'Check if there\'s external recovery'
        ]
      },
      {
        points: [
          'If google exists, acc vuln to pullback',
          'Ask seller to move the Email to yours',
          'Settings > Privacy > Manage Acc > Email'
        ]
      },
      {
        points: [
          'Reset the password using your email',
          'Click [here](https://password.click) to generate a password',
          'Settings > Privacy > Security > Devices'
        ]
      },
      {
        points: [
          'Remove sessions that don\'t belong',
          'Enable 2FA with an [authenticator](/2fa)',
          'Secure without a VPN to avoid limits'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your TikTok account!'
        ]
      }
    ]
  },
  snapchat: {
    id: 'snapchat',
    name: 'Snapchat',
    icon: `${base}icons/snapchat.png`,
    iconWidth: 42,
    description: 'A Snapchat account securing guide. Get better account security to make sure your accounts don\'t get stolen!',
    steps: [
      {
        points: [
          'Ask seller to remove phone and 2fa',
          'Ask seller to add your email',
          'For 48 Hours you can\'t update password'
        ]
      },
      {
        points: [
          'Forgot Pass > Reset password via email',
          'Click [here](https://password.click) to generate a password',
          'Make sure it\'s safe and secure'
        ]
      },
      {
        points: [
          'Turn on 2FA in [Settings](https://accounts.snapchat.com/settings)',
          'Enable 2FA with an [authenticator](/2fa)',
          'Ensure your 2FA is secure'
        ]
      },
      {
        points: [
          'Download old snapchat data package [here](http://accounts.snapchat.com/accounts/downloadmydata)',
          'In case of Try again later error',
          'Wait 24 hours and try again'
        ]
      },
      {
        points: [
          '🎉 You\'re all done!',
          'Your account is now fully secured',
          'Enjoy your Snapchat account!'
        ]
      }
    ]
  }
};

export const twoFaApps = [
  { name: 'Microsoft Authenticator', url: 'https://www.microsoft.com/en-us/security/mobile-authenticator-app' },
  { name: 'Google Authenticator', url: 'https://support.google.com/accounts/answer/1066447' },
  { name: 'Proton Authenticator', url: 'https://proton.me/authenticator' },
  { name: 'Ente Auth', url: 'https://ente.io/auth/' },
  { name: '2FAGuard', url: 'https://2faguard.app/en' },
  { name: 'Authy', url: 'https://authy.com/download' },
];

