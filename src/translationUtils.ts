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
    trigger: '官话',
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
    trigger: '日本語',
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

export const limitMap = new Map<TargetLanguageCode, string>([
  [
    'en-US',
    'Cannot translate: character limit for the month has been reached.',
  ],
  [
    'en-GB',
    'Cannot translate: character limit for the month has been reached.',
  ],
  [
    'bg',
    'Не може да се преведе: ограничението на символите за месеца е достигнато.',
  ],
  ['zh', '无法翻译：已达到该月的字符限制。'],
  ['cs', 'Nelze přeložit: byl dosažen limit znaků pro daný měsíc.'],
  ['da', 'Kan ikke oversættes: Tegnebegrænsningen for denne måned er nået.'],
  ['nl', 'Kan niet vertalen: karakterlimiet voor de maand is bereikt.'],
  ['et', 'Ei saa tõlkida: kuu tähemärkide arv on saavutatud.'],
  ['fi', 'Ei voida kääntää: kuukauden merkkiraja on saavutettu.'],
  [
    'fr',
    'Impossible de traduire : la limite de caractères pour le mois a été atteinte.',
  ],
  [
    'de',
    'Kann nicht übersetzt werden: Das Zeichenlimit für diesen Monat wurde erreicht.',
  ],
  [
    'el',
    'Δεν είναι δυνατή η μετάφραση: το όριο χαρακτήρων για τον μήνα έχει επιτευχθεί.',
  ],
  [
    'hu',
    'Nem lehet lefordítani: a hónapra vonatkozó karakterhatár elérte a határt.',
  ],
  [
    'id',
    'Tidak dapat menerjemahkan: batas karakter untuk bulan tersebut telah tercapai.',
  ],
  [
    'it',
    'Impossibile tradurre: è stato raggiunto il limite di caratteri per il mese.',
  ],
  ['ja', '翻訳できません: 今月の文字数制限に達しました。'],
  ['ko', '번역할 수 없음: 해당 월의 글자 수 제한에 도달했습니다.'],
  ['lv', 'Nevar tulkot: ir sasniegts mēneša rakstzīmju limits.'],
  ['lt', 'Negalima išversti: pasiektas mėnesio simbolių limitas.'],
  ['nb', 'Kan ikke oversette: tegngrensen for måneden er nådd.'],
  [
    'pl',
    'Nie można przetłumaczyć: limit znaków dla danego miesiąca został osiągnięty.',
  ],
  [
    'pt-BR',
    'Não é possível traduzir: o limite de caracteres para o mês foi atingido.',
  ],
  [
    'pt-PT',
    'Não é possível traduzir: o limite de caracteres para o mês foi atingido.',
  ],
  [
    'ro',
    'Nu se poate traduce: a fost atinsă limita de caractere pentru luna respectivă.',
  ],
  ['ru', 'Невозможно перевести: достигнут лимит символов для данного месяца.'],
  ['sk', 'Nemožno preložiť: dosiahol sa limit znakov pre daný mesiac.'],
  ['sl', 'Ni mogoče prevesti: omejitev znakov za mesec je bila dosežena.'],
  [
    'es',
    'No se puede traducir: se ha alcanzado el límite de caracteres para el mes.',
  ],
  ['sv', 'Kan inte översättas: teckengränsen för månaden har uppnåtts.'],
  ['tr', 'Çevrilemiyor: ay için karakter sınırına ulaşıldı.'],
  ['uk', 'Неможливо перекласти: досягнуто ліміт символів для місяця.'],
]);
