async function translateWord() {
    const word = document.getElementById('inputWord').value;
    if (!word) {
        alert('Please enter a word!');
        return;
    }

    // Add your Google Translate API key here
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';
    const targetLanguages = {
        german: 'de',
        french: 'fr',
        korean: 'ko',
        tamil: 'ta',
        hindi: 'hi',
        japanese: 'ja',
        chinese: 'zh'
    };

    for (const [lang, code] of Object.entries(targetLanguages)) {
        const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${word}&target=${code}`;
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById(lang).textContent = data.data.translations[0].translatedText;
    }
}
