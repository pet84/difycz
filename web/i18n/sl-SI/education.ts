const translation = {
  toVerified: 'Získejte ověření vzdělání',
  toVerifiedTip: {
    front: 'Nyní máte nárok na status Education Verified. Zadejte níže své vzdělávací údaje a dokončete proces, abyste obdrželi',
    coupon: 'exkluzivní 100% slevový kupón',
    end: 'na plán Dify Professional.',
  },
  currentSigned: 'AKTUÁLNĚ PŘIHLÁŠEN JAKO',
  form: {
    schoolName: {
      title: 'Název vaší školy',
      placeholder: 'Zadejte oficiální, nezkrácený název vaší školy',
    },
    schoolRole: {
      title: 'Vaše role ve škole',
      option: {
        student: 'Student',
        teacher: 'Učitel',
        administrator: 'Školní administrátor',
      },
    },
    terms: {
      title: 'Podmínky a ujednání',
      desc: {
        front: 'Vaše údaje a používání statusu Education Verified podléhají našim',
        and: 'a',
        end: '. Odesláním:',
        termsOfService: 'Podmínkám služby',
        privacyPolicy: 'Zásadám ochrany osobních údajů',
      },
      option: {
        age: 'Potvrzuji, že mi je alespoň 18 let',
        inSchool: 'Potvrzuji, že jsem zapsán nebo zaměstnán v uvedené instituci. Dify může požadovat důkaz o zápisu/zaměstnání. Pokud nesprávně uvedu svou způsobilost, souhlasím s úhradou všech poplatků původně odpuštěných na základě mého statusu.',
      },
    },
  },
  submit: 'Odeslat',
  submitError: 'Odeslání formuláře se nezdařilo. Zkuste to prosím znovu později.',
  learn: 'Zjistěte, jak získat ověření vzdělání',
  successTitle: 'Získali jste ověření Dify Education',
  successContent: 'Na váš účet jsme vydali 100% slevový kupón na plán Dify Professional. Kupón je platný jeden rok, prosím využijte ho během této doby.',
  rejectTitle: 'Vaše ověření Dify Education bylo zamítnuto',
  rejectContent: 'Bohužel nesplňujete podmínky pro status Education Verified, a proto nemůžete získat exkluzivní 100% slevový kupón na plán Dify Professional s touto e-mailovou adresou.',
  emailLabel: 'Váš aktuální e-mail',
  notice: {
    dateFormat: 'DD.MM.YYYY',
    expired: {
      title: 'Váš status vzdělání vypršel',
      summary: {
        line1: 'Stále můžete Dify používat. ',
        line2: 'Už ale nemáte nárok na nové slevové kupóny pro vzdělávání.',
      },
    },
    isAboutToExpire: {
      title: 'Váš status vzdělání vyprší dne {{date}}',
      summary: 'Nemusíte se bát — toto neovlivní vaše aktuální předplatné, ale při obnově nezískáte slevu pro vzdělávání, pokud znovu nepotvrdíte svůj status.',
    },
    stillInEducation: {
      title: 'Stále studujete?',
      expired: 'Ověřte se znovu a získejte nový kupón pro nadcházející akademický rok. Přidáme ho na váš účet a můžete ho využít při příštím upgradu.',
      isAboutToExpire: 'Ověřte se znovu a získejte nový kupón pro nadcházející akademický rok. Bude uložen na vašem účtu a připraven k použití při příštím obnovení.',
    },
    alreadyGraduated: {
      title: 'Už jste absolvovali?',
      expired: 'Neváhejte upgradovat kdykoli, abyste získali plný přístup k placeným funkcím.',
      isAboutToExpire: 'Vaše aktuální předplatné zůstane aktivní. Po jeho skončení budete převedeni na plán Sandbox, nebo můžete kdykoli upgradovat a obnovit plný přístup k placeným funkcím.',
    },
    action: {
      dismiss: 'Zavřít',
      upgrade: 'Upgradovat',
      reVerify: 'Ověřit znovu',
    },
  },
}

export default translation
