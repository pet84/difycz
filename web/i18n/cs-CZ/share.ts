const translation = {
  common: {
    welcome: '',
    appUnavailable: 'Aplikace není dostupná',
    appUnknownError: 'Aplikace není dostupná',
  },
  chat: {
    newChat: 'Začít nový chat',
    newChatTip: 'Již v novém chatu',
    chatSettingsTitle: 'Nastavení nového chatu',
    chatFormTip: 'Nastavení chatu nelze upravit po zahájení chatu.',
    pinnedTitle: 'Připnuté',
    unpinnedTitle: 'Nedávné',
    newChatDefaultName: 'Nová konverzace',
    resetChat: 'Resetovat konverzaci',
    viewChatSettings: 'Zobrazit nastavení chatu',
    poweredBy: 'Poháněno',
    prompt: 'Prompt',
    privatePromptConfigTitle: 'Nastavení konverzace',
    publicPromptConfigTitle: 'Počáteční prompt',
    configStatusDes: 'Před zahájením můžete upravit nastavení konverzace',
    configDisabled:
      'Pro tuto relaci byla použita nastavení z předchozí relace.',
    startChat: 'Začít chat',
    privacyPolicyLeft:
      'Prosím přečtěte si ',
    privacyPolicyMiddle:
      'zásady ochrany osobních údajů',
    privacyPolicyRight:
      ' poskytnuté vývojářem aplikace.',
    deleteConversation: {
      title: 'Smazat konverzaci',
      content: 'Jste si jistí, že chcete smazat tuto konverzaci?',
    },
    tryToSolve: 'Zkusit vyřešit',
    temporarySystemIssue: 'Omlouváme se, dočasný problém se systémem.',
    expand: 'Rozbalit',
    collapse: 'Sbalit',
  },
  generation: {
    tabs: {
      create: 'Spustit jednou',
      batch: 'Dávkové spuštění',
      saved: 'Uložené',
    },
    savedNoData: {
      title: 'Zatím jste neuložili žádný výsledek!',
      description: 'Začněte generovat obsah a najděte zde vaše uložené výsledky.',
      startCreateContent: 'Začít vytvářet obsah',
    },
    title: 'AI dokončení',
    queryTitle: 'Obsah dotazu',
    completionResult: 'Výsledek dokončení',
    queryPlaceholder: 'Napište obsah vašeho dotazu...',
    run: 'Spustit',
    execution: 'SPUŠTĚNÍ',
    executions: '{{num}} SPUŠTĚNÍ',
    copy: 'Kopírovat',
    resultTitle: 'AI dokončení',
    noData: 'AI vám zde dá to, co chcete.',
    csvUploadTitle: 'Přetáhněte váš CSV soubor sem, nebo ',
    browse: 'procházet',
    csvStructureTitle: 'CSV soubor musí odpovídat následující struktuře:',
    downloadTemplate: 'Stáhnout šablonu zde',
    field: 'Pole',
    batchFailed: {
      info: '{{num}} neúspěšných spuštění',
      retry: 'Zkusit znovu',
      outputPlaceholder: 'Žádný výstupní obsah',
    },
    errorMsg: {
      empty: 'Prosím zadejte obsah do nahraného souboru.',
      fileStructNotMatch: 'Nahraný CSV soubor neodpovídá struktuře.',
      emptyLine: 'Řádek {{rowIndex}} je prázdný',
      invalidLine: 'Řádek {{rowIndex}}: hodnota {{varName}} nemůže být prázdná',
      moreThanMaxLengthLine: 'Řádek {{rowIndex}}: hodnota {{varName}} nemůže být delší než {{maxLength}} znaků',
      atLeastOne: 'Prosím zadejte alespoň jeden řádek do nahraného souboru.',
    },
  },
  login: {
    backToHome: 'Zpět na domů',
  },
}

export default translation
