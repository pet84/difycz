const translation = {
  welcome: {
    firstStepTip: 'Začněte tím, že',
    enterKeyTip: 'níže zadáte svůj OpenAI API klíč',
    getKeyTip: 'Získejte API klíč v rozhraní OpenAI (dashboard)',
    placeholder: 'Váš OpenAI API klíč (např. sk-xxxx)',
  },
  apiKeyInfo: {
    cloud: {
      trial: {
        title: 'Používáte zkušební kvótu poskytovatele {{providerName}}.',
        description:
          'Zkušební kvóta je určena k testování. Než se vyčerpá, nastavte prosím vlastního poskytovatele modelu, nebo si pořiďte dodatečnou kvótu.',
      },
      exhausted: {
        title: 'Vaše zkušební kvóta byla vyčerpána, nastavte prosím svůj API klíč.',
        description:
          'Zkušební kvótu jste vyčerpali. Nastavte si vlastního poskytovatele modelu, nebo zakupte dodatečnou kvótu.',
      },
    },
    selfHost: {
      title: {
        row1: 'Abyste mohli začít,',
        row2: 'nejprve nastavte poskytovatele modelu.',
      },
    },
    callTimes: 'Počet volání',
    usedToken: 'Spotřebované tokeny',
    setAPIBtn: 'Přejít na nastavení poskytovatele modelu',
    tryCloud: 'Nebo vyzkoušejte cloudovou verzi Dify s bezplatnou kvótou',
  },
  overview: {
    title: 'Přehled',
    appInfo: {
      explanation: 'Připravená AI webová aplikace',
      accessibleAddress: 'Veřejná URL',
      preview: 'Náhled',
      launch: 'Spustit',
      regenerate: 'Znovu vygenerovat',
      regenerateNotice: 'Chcete znovu vygenerovat veřejnou URL?',
      preUseReminder: 'Před pokračováním prosím povolte webovou aplikaci.',
      settings: {
        entry: 'Nastavení',
        title: 'Nastavení webové aplikace',
        modalTip: 'Nastavení klientské (front-end) webové aplikace.',
        webName: 'Název webové aplikace',
        webDesc: 'Popis webové aplikace',
        webDescTip:
          'Tento text se zobrazí na straně klienta a poskytne základní návod, jak aplikaci používat.',
        webDescPlaceholder: 'Zadejte popis webové aplikace',
        language: 'Jazyk',
        workflow: {
          title: 'Workflow',
          subTitle: 'Detaily workflow',
          show: 'Zobrazit',
          hide: 'Skrýt',
          showDesc: 'Zobrazit nebo skrýt detaily workflow ve webové aplikaci',
        },
        chatColorTheme: 'Barevné téma chatu',
        chatColorThemeDesc: 'Nastavte barevné téma chatbota',
        chatColorThemeInverted: 'Invertované',
        invalidHexMessage: 'Neplatná hex hodnota',
        invalidPrivacyPolicy:
          'Neplatný odkaz na zásady ochrany soukromí. Použijte platný odkaz začínající http nebo https.',
        sso: {
          label: 'Vynucení SSO',
          title: 'SSO webové aplikace',
          description:
            'Všichni uživatelé se musí před použitím webové aplikace přihlásit přes SSO.',
          tooltip: 'Požádejte administrátora o povolení SSO pro webovou aplikaci.',
        },
        more: {
          entry: 'Zobrazit více nastavení',
          copyright: 'Copyright',
          copyrightTip: 'Zobrazit informace o copyrightu ve webové aplikaci',
          copyrightTooltip:
            'Prosím upgradujte na tarif Professional nebo vyšší',
          copyRightPlaceholder: 'Zadejte jméno autora nebo organizace',
          privacyPolicy: 'Zásady ochrany soukromí',
          privacyPolicyPlaceholder: 'Zadejte odkaz na zásady ochrany soukromí',
          privacyPolicyTip:
            'Pomáhá návštěvníkům pochopit, jaká data aplikace shromažďuje; viz <privacyPolicyLink>Zásady ochrany soukromí Dify</privacyPolicyLink>.',
          customDisclaimer: 'Vlastní prohlášení',
          customDisclaimerPlaceholder: 'Zadejte text vlastního prohlášení',
          customDisclaimerTip:
            'Vlastní prohlášení se zobrazí na straně klienta a poskytne doplňující informace o aplikaci.',
        },
      },
      embedded: {
        entry: 'Embed',
        title: 'Vložit na web',
        explanation: 'Zvolte způsob vložení chatovací aplikace na váš web.',
        iframe:
          'Chcete-li umístit chat kamkoli na webu, přidejte tento iframe do HTML.',
        scripts:
          'Chcete-li přidat chat do pravého dolního rohu webu, vložte tento kód do HTML.',
        chromePlugin: 'Nainstalovat rozšíření Dify Chatbot pro Chrome',
        copied: 'Zkopírováno',
        copy: 'Kopírovat',
      },
      qrcode: {
        title: 'QR kód odkazu',
        scan: 'Skenovat pro sdílení',
        download: 'Stáhnout QR kód',
      },
      customize: {
        way: 'způsob',
        entry: 'Přizpůsobit',
        title: 'Upravit AI webovou aplikaci',
        explanation:
          'Můžete si přizpůsobit frontend webové aplikace podle svého scénáře a stylu.',
        way1: {
          name: 'Forkněte klientský kód, upravte ho a nasazujte na Vercel (doporučeno)',
          step1: 'Fork kódu klienta a úpravy',
          step1Tip:
            'Kliknutím zde forkněte zdrojový kód do svého GitHubu a upravte ho',
          step1Operation: 'Dify-WebClient',
          step2: 'Nasazení na Vercel',
          step2Tip: 'Kliknutím sem importujte repozitář do Vercelu a nasaďte',
          step2Operation: 'Importovat repozitář',
          step3: 'Nastavit proměnné prostředí',
          step3Tip: 'Na Vercelu přidejte následující proměnné prostředí',
        },
        way2: {
          name: 'Napište klientský kód využívající API a nasaďte ho na server',
          operation: 'Dokumentace',
        },
      },
    },
    apiInfo: {
      title: 'Backend Service API',
      explanation: 'Snadno integrujte do své aplikace',
      accessibleAddress: 'Endpoint Service API',
      doc: 'API reference',
    },
    status: {
      running: 'V provozu',
      disable: 'Vypnuto',
    },
  },
  analysis: {
    title: 'Analýza',
    ms: 'ms',
    tokenPS: 'Token/s',
    totalMessages: {
      title: 'Celkem zpráv',
      explanation: 'Denní počet interakcí s AI.',
    },
    totalConversations: {
      title: 'Celkem konverzací',
      explanation:
        'Denní počet AI konverzací; nezahrnuje prompt engineering/ladění.',
    },
    activeUsers: {
      title: 'Aktivní uživatelé',
      explanation:
        'Jedineční uživatelé zapojení do Q&A s AI; nezahrnuje prompt engineering/ladění.',
    },
    tokenUsage: {
      title: 'Využití tokenů',
      explanation:
        'Denní spotřeba tokenů jazykového modelu pro aplikaci – vhodné pro kontrolu nákladů.',
      consumed: 'Spotřebováno',
    },
    avgSessionInteractions: {
      title: 'Prům. interakcí na sezení',
      explanation:
        'Počet souvislých výměn uživatel–AI; pro konverzační aplikace.',
    },
    avgUserInteractions: {
      title: 'Prům. interakcí na uživatele',
      explanation:
        'Odraz denní frekvence používání uživateli. Tento ukazatel vyjadřuje „stickiness“.',
    },
    userSatisfactionRate: {
      title: 'Míra spokojenosti uživatelů',
      explanation:
        'Počet „like“ na 1 000 zpráv. Udává podíl odpovědí, se kterými jsou uživatelé velmi spokojeni.',
    },
    avgResponseTime: {
      title: 'Prům. doba odezvy',
      explanation:
        'Čas (ms) potřebný AI pro zpracování/odpověď; pro textové aplikace.',
    },
    tps: {
      title: 'Rychlost výstupu tokenů',
      explanation:
        'Měří výkon LLM. Počítá rychlost výstupu tokenů LLM od začátku požadavku do dokončení výstupu.',
    },
  },
}

export default translation
