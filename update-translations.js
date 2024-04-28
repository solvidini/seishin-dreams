const { promises: fs } = require('fs');
const path = require('path');

async function updateTranslations(pathToUpdate, translations) {
  const dictionariesPath = path.join(__dirname, 'src/dictionaries');
  const languages = Object.keys(translations);

  try {
    for (const lang of languages) {
      const translationFilePath = path.join(dictionariesPath, `${lang}.json`);
      const translationFileContent = await fs.readFile(translationFilePath, 'utf-8');
      const currentTranslation = JSON.parse(translationFileContent);

      let currentLevel = currentTranslation;
      const pathParts = pathToUpdate.split('.');
      for (let i = 0; i < pathParts.length; i++) {
        const key = pathParts[i];
        if (i === pathParts.length - 1) {
          currentLevel[key] = translations[lang];
        } else {
          if (!currentLevel[key]) {
            currentLevel[key] = {};
          }
          currentLevel = currentLevel[key];
        }
      }

      await fs.writeFile(translationFilePath, JSON.stringify(currentTranslation, null, 2));
    }

    console.log('Translations updated successfully!');
  } catch (err) {
    console.error('Error updating translations:', err);
  }
}

// const translations = {
//   en: 'This is testing text in English!',
//   fr: "C'est un texte de test en français!",
//   it: 'Questo è un testo di prova in italiano!',
//   pl: 'To jest tekst testowy po polsku!',
//   es: '¡Este es un texto de prueba en español!',
//   de: 'Dies ist ein Testtext auf Deutsch!',
//   cs: 'Toto je testovací text v češtině!',
//   uk: 'Це тестовий текст українською мовою!',
//   empty: '',
// };

const translations = {
  en: 'This website embeds external content from platforms like YouTube and SoundCloud, which may use cookies. By using this website, you acknowledge and consent to the use of cookies by these third-party services.',
  fr: 'Ce site web intègre du contenu externe provenant de plateformes telles que YouTube et SoundCloud, qui peuvent utiliser des cookies. En utilisant ce site web, vous reconnaissez et consentez à l\'utilisation de cookies par ces services tiers.',
  it: 'Questo sito web incorpora contenuti esterni da piattaforme come YouTube e SoundCloud, che potrebbero utilizzare i cookie. Utilizzando questo sito web, riconosci e acconsenti all\'utilizzo dei cookie da parte di questi servizi di terze parti.',
  pl: 'Ta strona internetowa osadza zewnętrzne treści z platform takich jak YouTube i SoundCloud, które mogą używać plików cookie. Korzystając z tej strony internetowej, potwierdzasz i wyrażasz zgodę na korzystanie z plików cookie przez te usługi stron trzecich.',
  es: 'Este sitio web incrusta contenido externo de plataformas como YouTube y SoundCloud, que pueden utilizar cookies. Al utilizar este sitio web, reconoces y aceptas el uso de cookies por parte de estos servicios de terceros.',
  de: 'Diese Website bindet externe Inhalte von Plattformen wie YouTube und SoundCloud ein, die möglicherweise Cookies verwenden. Durch die Nutzung dieser Website erkennen Sie an und stimmen der Verwendung von Cookies durch diese Drittanbieterdienste zu.',
  cs: 'Tato webová stránka vkládá externí obsah z platforem jako YouTube a SoundCloud, které mohou používat soubory cookie. Používáním této webové stránky uznáváte a souhlasíte s použitím souborů cookie těmito službami třetích stran.',
  uk: 'Цей веб-сайт вбудовує зовнішній вміст з платформ, таких як YouTube і SoundCloud, які можуть використовувати файли cookie. Використовуючи цей веб-сайт, ви підтверджуєте та погоджуєтеся з використанням файлів cookie цими сторонніми службами.',
  empty: '',
};


updateTranslations('common.cookies', translations);
