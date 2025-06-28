import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Slider from '@react-native-community/slider';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';

export default function Home() {
  const { t, i18n } = useTranslation();

  const [fontSize, setFontSize] = useState(16);
  const [secondaryLang, setSecondaryLang] = useState('fr'); 
  const [isPrimaryLang, setIsPrimaryLang] = useState(true); 

  const handleLanguageToggle = () => {
    const newLang = isPrimaryLang ? secondaryLang : 'en';
    i18n.changeLanguage(newLang);
    setIsPrimaryLang(!isPrimaryLang);
  };

  const handleSecondaryLanguageSelect = (lang: string) => {
    setSecondaryLang(lang);
    if (!isPrimaryLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.leftTop}>
          <Text style={[styles.label, { fontSize }]}>Select Secondary Language:</Text>
          <Picker
            selectedValue={secondaryLang}
            onValueChange={handleSecondaryLanguageSelect}
            style={styles.picker}
          >
            <Picker.Item label="French" value="fr" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="Hindi" value="hi" />
          </Picker>
          <View style={{ marginTop: 10, width:160 }}>
            <Button 
              title={isPrimaryLang ? 'Switch Language' : 'Switch to English'}
              onPress={handleLanguageToggle}
            />
          </View>
        </View>

        <View style={styles.rightTop}>
          <Text style={styles.label}>{t('fontSize')}</Text>
          <Slider
            style={styles.slider}
            minimumValue={12}
            maximumValue={30}
            step={1}
            value={fontSize}
            onValueChange={(value) => setFontSize(value)}
          />
          <Text style={{ fontSize }}>Font Size: {fontSize}</Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <Text style={[styles.title, { fontSize }]}>{t('description')}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  leftTop: {
    flex: 1,
    minWidth: 160,
  },
  rightTop: {
    alignItems: 'flex-end',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  picker: {
    height: 50,
    width: 160,
    backgroundColor: '#f0f0f0',
  },
  slider: {
    width: 150,
    height: 40,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 30,
    textAlign: 'center',
  },
  btn:{
    marginTop: 10,
    width: 220
  }
});
