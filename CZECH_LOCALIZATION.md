# Přidání české lokalizace do Dify

## Co bylo uděláno

### 1. Vytvořena složka pro českou lokalizaci
- Vytvořena složka `/web/i18n/cs-CZ/`
- Zkopírovány všechny soubory z `/web/i18n/en-US/`

### 2. Přeloženy hlavní soubory
- **common.ts** - Kompletně přeložen do češtiny (základní UI prvky, tlačítka, zprávy)
- **app.ts** - Částečně přeložen (vytváření aplikací, typy aplikací)
- Ostatní soubory (app-*.ts, dataset-*.ts, workflow.ts, atd.) - zkopírovány a připraveny k překladu

### 3. Aktualizovány konfigurační soubory
- **`/web/i18n-config/languages.json`** - Přidán záznam pro češtinu:
  ```json
  {
    "value": "cs-CZ",
    "name": "Čeština (Česká republika)",
    "prompt_name": "Czech",
    "example": "Ahoj, Dify!",
    "supported": true
  }
  ```

- **`/web/i18n-config/language.ts`** - Aktualizovány typy a překlady:
  - Přidán `'cs-CZ': string` do `I18nText` typu
  - Přidán `cs_CZ: 'Důležité oznámení'` do `NOTICE_I18N.title`
  - Přidán popis do `NOTICE_I18N.desc`

- **`/web/i18n/en-US/common.ts`** - Přidána čeština do seznamu jazyků

## Co ještě zbývá udělat

### Dokončit překlady
Následující soubory v `/web/i18n/cs-CZ/` jsou zatím pouze zkopírované z angličtiny a čekají na překlad:

1. `app-api.ts` - API nastavení
2. `app-annotation.ts` - Anotace
3. `app-debug.ts` - Debugování
4. `app-log.ts` - Protokoly aplikace
5. `app-overview.ts` - Přehled aplikace
6. `billing.ts` - Fakturace
7. `dataset-*.ts` - Správa znalostí
8. `explore.ts` - Prozkoumat
9. `layout.ts` - Rozvržení
10. `login.ts` - Přihlášení
11. `oauth.ts` - OAuth
12. `pipeline.ts` - Pipeline
13. `plugin-*.ts` - Pluginy
14. `register.ts` - Registrace
15. `run-log.ts` - Protokoly běhu
16. `share.ts` - Sdílení
17. `time.ts` - Čas
18. `tools.ts` - Nástroje
19. `workflow.ts` - Workflow

### Testování
Po dokončení překladů:
1. Spustit frontend: `cd web && pnpm install && pnpm dev`
2. Otevřít aplikaci a vybrat češtinu v nastavení
3. Projít všechny stránky a zkontrolovat překlady
4. Opravit případné chyby

### Kontrola kvality
- Zkontrolovat konzistenci terminologie
- Ověřit, že všechny řetězce jsou přeloženy
- Zkontrolovat gramatiku a stylistiku

## Jak přidat/upravit překlady

1. Otevřít příslušný soubor v `/web/i18n/cs-CZ/`
2. Najít anglický text
3. Nahradit ho českým překladem
4. Zachovat stejnou strukturu a formátování
5. Zachovat placeholdery typu `{{variable}}`

## Příklad překladu

```typescript
// Před:
createApp: 'CREATE APP',

// Po:
createApp: 'VYTVOŘIT APLIKACI',
```

## Jak otestovat

```bash
cd web
pnpm install
pnpm dev
```

Poté v aplikaci:
1. Přejít do Settings → Language
2. Vybrat "Čeština (Česká republika)"
3. Zkontrolovat UI

## Poznámky

- Některé technické termíny (jako "Workflow", "Agent", "Chatbot") jsou ponechány v angličtině, protože jsou běžně používány
- DSL, API, LLM a podobné zkratky zůstávají v angličtině
- Názvy modelů (GPT-4, Claude, atd.) zůstávají v angličtině
