const {Translate} = require('@google-cloud/translate').v2;

const translate = new Translate({
    key: 'YOUR_API_KEY', // 여기에 API 키를 입력합니다.
});

async function translateText(text, targetLanguage) {
    try {
        const [translation] = await translate.translate(text, targetLanguage);
        return translation;
    } catch (error) {
        console.error('Translation error:', error);
        return null;
    }
}

module.exports = translateText;
