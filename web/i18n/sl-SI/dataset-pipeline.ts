const translation = {
  creation: {
    backToKnowledge: 'Zpět na Znalosti',
    createFromScratch: {
      title: 'Prázdný znalostní kanál',
      description: 'Vytvořte si vlastní kanál od začátku s plnou kontrolou nad zpracováním dat a strukturou.',
    },
    importDSL: 'Importovat z DSL souboru',
    createKnowledge: 'Vytvořit znalosti',
    errorTip: 'Nepodařilo se vytvořit znalostní bázi',
    successTip: 'Znalostní báze byla úspěšně vytvořena',
    caution: 'Upozornění',
  },
  templates: {
    customized: 'Přizpůsobené',
  },
  operations: {
    choose: 'Vybrat',
    details: 'Detaily',
    editInfo: 'Upravit informace',
    useTemplate: 'Použít tento znalostní kanál',
    backToDataSource: 'Zpět na zdroj dat',
    process: 'Zpracovat',
    dataSource: 'Zdroj dat',
    saveAndProcess: 'Uložit a zpracovat',
    preview: 'Náhled',
    exportPipeline: 'Exportovat kanál',
    convert: 'Převést',
  },
  knowledgeNameAndIcon: 'Název a ikona znalostí',
  knowledgeNameAndIconPlaceholder: 'Zadejte název znalostní báze',
  knowledgeDescription: 'Popis znalostí',
  knowledgeDescriptionPlaceholder: 'Popište, co obsahuje tato znalostní báze. Podrobný popis umožňuje AI přesněji pracovat s obsahem. Pokud je prázdný, Dify použije výchozí strategii zásahu. (Volitelné)',
  knowledgePermissions: 'Oprávnění',
  editPipelineInfo: 'Upravit informace o kanálu',
  pipelineNameAndIcon: 'Název a ikona kanálu',
  deletePipeline: {
    title: 'Opravdu chcete smazat tuto šablonu kanálu?',
    content: 'Smazání šablony kanálu je nevratné.',
  },
  publishPipeline: {
    success: {
      message: 'Znalostní kanál byl publikován',
      tip: '<CustomLink>Přejít na Dokumenty</CustomLink> pro přidání nebo správu dokumentů.',
    },
    error: {
      message: 'Nepodařilo se publikovat znalostní kanál',
    },
  },
  publishTemplate: {
    success: {
      message: 'Šablona kanálu byla publikována',
      tip: 'Tuto šablonu můžete použít na stránce pro vytváření.',
      learnMore: 'Dozvědět se více',
    },
    error: {
      message: 'Nepodařilo se publikovat šablonu kanálu',
    },
  },
  exportDSL: {
    successTip: 'Export DSL kanálu proběhl úspěšně',
    errorTip: 'Export DSL kanálu se nezdařil',
  },
  details: {
    createdBy: 'Autor: {{author}}',
    structure: 'Struktura',
    structureTooltip: 'Struktura chunků určuje, jak jsou dokumenty rozděleny a indexovány — nabízí Obecný, Parent-Child a Q&A režim — a je unikátní pro každou znalostní bázi.',
  },
  testRun: {
    title: 'Testovací běh',
    tooltip: 'V testovacím režimu lze importovat pouze jeden dokument najednou, aby bylo snazší ladění a sledování.',
    steps: {
      dataSource: 'Zdroj dat',
      documentProcessing: 'Zpracování dokumentů',
    },
    dataSource: {
      localFiles: 'Lokální soubory',
    },
    notion: {
      title: 'Vyberte Notion stránky',
      docTitle: 'Notion dokumenty',
    },
  },
  inputField: 'Vstupní pole',
  inputFieldPanel: {
    title: 'Uživatelská vstupní pole',
    description: 'Uživatelská vstupní pole se používají k definování a sběru proměnných potřebných během zpracování kanálu. Uživatelé mohou přizpůsobit typ pole a flexibilně nastavit vstupní hodnoty pro různé zdroje dat nebo kroky zpracování dokumentů.',
    uniqueInputs: {
      title: 'Unikátní vstupy pro jednotlivé zdroje',
      tooltip: 'Unikátní vstupy jsou přístupné pouze vybranému zdroji dat a jeho následným uzlům. Nebudou potřeba při výběru jiných zdrojů. Pouze proměnné použité zdrojem dat se zobrazí v prvním kroku (Zdroj dat). Všechna ostatní pole se zobrazí v druhém kroku (Zpracování dokumentů).',
    },
    globalInputs: {
      title: 'Globální vstupy pro všechny zdroje',
      tooltip: 'Globální vstupy jsou sdíleny napříč všemi uzly. Uživatelé je musí vyplnit při výběru jakéhokoli zdroje dat. Například pole jako oddělovač nebo maximální délka chunku lze aplikovat jednotně. Proměnné použité zdrojem dat se zobrazí v prvním kroku (Zdroj dat). Všechna ostatní pole v druhém (Zpracování dokumentů).',
    },
    addInputField: 'Přidat vstupní pole',
    editInputField: 'Upravit vstupní pole',
    preview: {
      stepOneTitle: 'Zdroj dat',
      stepTwoTitle: 'Zpracování dokumentů',
    },
    error: {
      variableDuplicate: 'Název proměnné již existuje. Vyberte prosím jiný.',
    },
  },
  addDocuments: {
    title: 'Přidat dokumenty',
    steps: {
      chooseDatasource: 'Vyberte zdroj dat',
      processDocuments: 'Zpracujte dokumenty',
      processingDocuments: 'Zpracovávání dokumentů',
    },
    backToDataSource: 'Zdroj dat',
    stepOne: {
      preview: 'Náhled',
    },
    stepTwo: {
      chunkSettings: 'Nastavení chunků',
      previewChunks: 'Náhled chunků',
    },
    stepThree: {
      learnMore: 'Dozvědět se více',
    },
    characters: 'znaky',
    selectOnlineDocumentTip: 'Zpracovat až {{count}} stránek',
    selectOnlineDriveTip: 'Zpracovat až {{count}} souborů, max {{fileSize}} MB každý',
  },
  documentSettings: {
    title: 'Nastavení dokumentu',
  },
  onlineDocument: {
    pageSelectorTitle: 'Stránky {{name}}',
  },
  onlineDrive: {
    notConnected: '{{name}} není připojen',
    notConnectedTip: 'Pro synchronizaci s {{name}} musíte nejprve připojit účet.',
    breadcrumbs: {
      allBuckets: 'Všechny cloudové úložiště',
      allFiles: 'Všechny soubory',
      searchResult: 'Nalezeno {{searchResultsLength}} položek ve složce "{{folderName}}"',
      searchPlaceholder: 'Hledat soubory...',
    },
    notSupportedFileType: 'Tento typ souboru není podporován',
    emptyFolder: 'Tato složka je prázdná',
    emptySearchResult: 'Nenalezeny žádné položky',
    resetKeywords: 'Obnovit klíčová slova',
  },
  credentialSelector: {
    name: '{{credentialName}} – {{pluginName}}',
  },
  configurationTip: 'Nakonfigurujte {{pluginName}}',
  conversion: {
    title: 'Převést na znalostní kanál',
    descriptionChunk1: 'Nyní můžete převést svou stávající znalostní bázi na použití znalostního kanálu pro zpracování dokumentů',
    descriptionChunk2: ' — otevřenější a flexibilnější přístup s přístupem k pluginům z našeho marketplace. Tento způsob se použije pro všechny budoucí dokumenty.',
    warning: 'Tato akce je nevratná.',
    confirm: {
      title: 'Potvrzení',
      content: 'Tato akce je trvalá. Nebudete se moci vrátit k předchozímu způsobu. Potvrďte převod.',
    },
    errorMessage: 'Nepodařilo se převést dataset na kanál',
    successMessage: 'Dataset byl úspěšně převeden na kanál',
  },
}

export default translation
