import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import { setDefaultTheme } from '@/Store/Theme';
import { navigateAndSimpleReset } from '@/Navigators/utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const StartupContainer = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();

  const { t } = useTranslation();

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true);
      }, 2000),
    );
    await setDefaultTheme({ theme: 'default', darkMode: null });
    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <FontAwesomeIcon
        icon={faComments}
        style={{ color: Colors.mainColor }}
        size={300}
      />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <Text
        style={[Fonts.textCenter, { color: Colors.mainColor, fontSize: 40 }]}
      >
        {t('welcome')}
      </Text>
    </View>
  );
};

export default StartupContainer;
