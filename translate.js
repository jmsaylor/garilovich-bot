const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
const { IamAuthenticator } = require("ibm-watson/auth");
const { apikey, url } = require("./config");

const languageTranslator = new LanguageTranslatorV3({
  version: "2018-05-01",
  authenticator: new IamAuthenticator({
    apikey: apikey,
  }),
  url: url,
});

const translateParams = {
  text: "the internet",
  modelId: "en-es",
};

const translate = async () => {
  try {
    const result = await languageTranslator.translate(translateParams);
    console.log(result.result.translations);
  } catch (error) {
    console.error(error);
  }
};

translate();
