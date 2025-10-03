const translation = {
  common: {
    goToAddDocuments: 'Přejít na přidání dokumentů',
    publishAs: 'Publikovat jako vlastní šablonu pipeline',
    confirmPublish: 'Potvrdit publikaci',
    confirmPublishContent: 'Po úspěšném publikování znalostní pipeline nebude možné upravovat strukturu chunků této znalostní báze. Opravdu chcete publikovat?',
    publishAsPipeline: {
      name: 'Název a ikona pipeline',
      namePlaceholder: 'Zadejte název této znalostní pipeline. (Povinné) ',
      description: 'Popis znalostí',
      descriptionPlaceholder: 'Zadejte popis této znalostní pipeline. (Volitelné) ',
    },
    testRun: 'Testovací běh',
    preparingDataSource: 'Příprava datového zdroje',
    reRun: 'Spustit znovu',
    processing: 'Zpracovávání',
  },
  inputField: {
    create: 'Vytvořit uživatelské vstupní pole',
    manage: 'Spravovat',
  },
  publishToast: {
    title: 'Tato pipeline ještě nebyla publikována',
    desc: 'Pokud pipeline není publikovaná, můžete upravit strukturu chunků v uzlu znalostní báze. Orchestrace pipeline a změny se automaticky uloží jako koncept.',
  },
  result: {
    resultPreview: {
      loading: 'Zpracovávání... Prosím čekejte',
      error: 'Během provádění došlo k chybě',
      viewDetails: 'Zobrazit podrobnosti',
      footerTip: 'V testovacím režimu lze zobrazit náhled až {{count}} chunků',
    },
  },
  ragToolSuggestions: {
    title: 'Doporučení pro RAG',
    noRecommendationPluginsInstalled: 'Žádné doporučené pluginy nejsou nainstalovány, najděte více v <CustomLink>Marketplace</CustomLink>',
  },
}

export default translation
