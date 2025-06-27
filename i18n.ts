import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
      translation: {
        fontSize: "Adjust Font Size",
        description:
          "React Native lets you build apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components. You can write once and run on both iOS and Android platforms.",
      },
    },
    fr: {
      translation: {
        fontSize: "Ajuster la taille de la police",
        description:
          "React Native vous permet de créer des applications en utilisant uniquement JavaScript. Il utilise la même conception que React, vous permettant de composer une interface utilisateur mobile riche à partir de composants déclaratifs. Vous pouvez écrire une seule fois et exécuter sur iOS et Android.",
      },
    },
    es: {
      translation: {
        fontSize: "Ajustar tamaño de fuente",
        description:
          "React Native te permite crear aplicaciones usando solo JavaScript. Utiliza el mismo diseño que React, permitiéndote componer una interfaz móvil rica a partir de componentes declarativos. Puedes escribir una vez y ejecutar tanto en iOS como en Android.",
      },
    },
    hi: {
        translation: {
          fontSize: "फ़ॉन्ट आकार समायोजित करें",
          description:
            "React Native आपको केवल JavaScript का उपयोग करके ऐप्स बनाने की अनुमति देता है। यह React के समान डिज़ाइन का उपयोग करता है, जिससे आप घोषणात्मक घटकों से एक समृद्ध मोबाइल UI बना सकते हैं। आप एक बार लिख सकते हैं और iOS और Android दोनों प्लेटफ़ॉर्म पर चला सकते हैं।",
        },
      },
  };
  

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
