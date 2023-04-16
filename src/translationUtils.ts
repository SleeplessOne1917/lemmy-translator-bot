import { TargetLanguageCode } from 'deepl-node';

type TriggerInfo = {
  trigger: string;
  language: TargetLanguageCode;
};

export const translateTriggers: TriggerInfo[] = [
  {
    trigger: 'English',
    language: 'en-US',
  },
  {
    trigger: 'Български',
    language: 'bg',
  },
  {
    trigger: '中国',
    language: 'zh',
  },
  {
    trigger: 'Česky',
    language: 'cs',
  },
  {
    trigger: 'Český',
    language: 'cs',
  },
  {
    trigger: 'Čeština',
    language: 'cs',
  },
  {
    trigger: 'Česká',
    language: 'cs',
  },
  {
    trigger: 'Dansk',
    language: 'da',
  },
  {
    trigger: 'Nederlands',
    language: 'nl',
  },
  {
    trigger: 'Nederlandse',
    language: 'nl',
  },
  {
    trigger: 'Eesti',
    language: 'et',
  },
  {
    trigger: 'Suomalainen',
    language: 'fi',
  },
  {
    trigger: 'Français',
    language: 'fr',
  },
  {
    trigger: 'Deutsch',
    language: 'de',
  },
  {
    trigger: 'Ελληνική',
    language: 'el',
  },
  {
    trigger: 'Ελληνικό',
    language: 'el',
  },
  {
    trigger: 'Ελληνικά',
    language: 'el',
  },
  {
    trigger: 'Ελληνικές',
    language: 'el',
  },
  {
    trigger: 'Magyar',
    language: 'hu',
  },
  {
    trigger: 'Indonesia',
    language: 'id',
  },
  {
    trigger: 'Italiano',
    language: 'it',
  },
  {
    trigger: 'やまと',
    language: 'ja',
  },
  {
    trigger: '大和',
    language: 'ja',
  },
  {
    trigger: 'やまとことば',
    language: 'ja',
  },
  {
    trigger: '倭',
    language: 'ja',
  },
  {
    trigger: '한국어',
    language: 'ko',
  },
  {
    trigger: '한국말',
    language: 'ko',
  },
  {
    trigger: 'Latviešu',
    language: 'lv',
  },
  {
    trigger: 'Lietuviškas',
    language: 'lt',
  },
  {
    trigger: 'Lietuvių',
    language: 'lt',
  },
  {
    trigger: 'Norsk',
    language: 'nb',
  },
  {
    trigger: 'Norsk',
    language: 'nb',
  },
  {
    trigger: 'Polska',
    language: 'pl',
  },
  {
    trigger: 'Polski',
    language: 'pl',
  },
  {
    trigger: 'Polskie',
    language: 'pl',
  },
  {
    trigger: 'Português',
    language: 'pt-PT',
  },
  {
    trigger: 'Portuguesa',
    language: 'pt-PT',
  },
  {
    trigger: 'Portugueses',
    language: 'pt-PT',
  },
  {
    trigger: 'Românesc',
    language: 'ro',
  },
  {
    trigger: 'Русский',
    language: 'ru',
  },
  {
    trigger: 'Slovenská',
    language: 'sk',
  },
  {
    trigger: 'Slovensky',
    language: 'sk',
  },
  {
    trigger: 'Slovenské',
    language: 'sk',
  },
  {
    trigger: 'Slovenský',
    language: 'sk',
  },
  {
    trigger: 'Slovenski',
    language: 'sl',
  },
  {
    trigger: 'Español',
    language: 'es',
  },
  {
    trigger: 'Svenska',
    language: 'sv',
  },
  {
    trigger: 'Svensk',
    language: 'sv',
  },
  {
    trigger: 'Svenskt',
    language: 'sv',
  },
  {
    trigger: 'Türkçe',
    language: 'tr',
  },
  {
    trigger: 'Українська',
    language: 'uk',
  },
];

export const signoffMap = new Map<TargetLanguageCode, string>([
  ['en-US', 'This text was translated using DeepL.'],
  ['en-GB', 'This text was translated using DeepL.'],
  ['bg', 'Този текст е преведен с помощта на DeepL.'],
  ['zh', '这段文字是用DeepL。'],
  ['cs', 'Tento text byl přeložen pomocí DeepL.'],
  ['da', 'Denne tekst blev oversat ved hjælp af DeepL.'],
  ['nl', 'Deze tekst is vertaald met behulp van DeepL.'],
  ['et', 'See tekst on tõlgitud kasutades DeepL.'],
  ['fi', 'Tämä teksti on käännetty käyttäen DeepL.'],
  ['fr', "Ce texte a été traduit à l'aide de DeepL."],
  ['de', 'Dieser Text wurde mit DeepL übersetzt.'],
  ['el', 'Αυτό το κείμενο μεταφράστηκε χρησιμοποιώντας το DeepL.'],
  ['hu', 'Ezt a szöveget a DeepL segítségével fordítottuk le.'],
  ['id', 'Teks ini diterjemahkan dengan menggunakan DeepL.'],
  ['it', 'Questo testo è stato tradotto utilizzando DeepL.'],
  ['ja', 'この文章はDeepLを使用して翻訳されました。'],
  ['ko', '이 텍스트는 DeepL 을 사용하여 번역되었습니다.'],
  ['lv', 'Šis teksts tika tulkots, izmantojot DeepL.'],
  ['lt', 'Šis tekstas buvo išverstas naudojant DeepL.'],
  ['nb', 'Denne teksten ble oversatt ved hjelp av DeepL.'],
  ['pl', 'Ten tekst został przetłumaczony przy użyciu strony DeepL.'],
  ['pt-PT', 'Este texto foi traduzido utilizando DeepL.'],
  ['pt-BR', 'Este texto foi traduzido utilizando DeepL.'],
  ['ro', 'Acest text a fost tradus folosind DeepL.'],
  ['ru', 'Этот текст был переведен с помощью DeepL.'],
  ['sk', 'Tento text bol preložený pomocou stránky DeepL.'],
  ['sl', 'To besedilo je bilo prevedeno z uporabo spletne strani DeepL.'],
  ['es', 'Este texto ha sido traducido con DeepL.'],
  ['sv', 'Den här texten har översatts med hjälp av DeepL.'],
  ['tr', 'Bu metin DeepL kullanılarak çevrilmiştir.'],
  ['uk', 'Цей текст перекладено за допомогою DeepL.'],
]);
