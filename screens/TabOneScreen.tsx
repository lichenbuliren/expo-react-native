import { useNavigation } from '@react-navigation/native';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import * as React from 'react';
import { useCallback } from 'react';
import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const TabOneScreen: React.FC<StackNavigationHelpers> = ({ navigate }) => {
  const navigation = useNavigation()
  const toProfile = useCallback(
    () => {
      navigation.navigate('Profile')
    },
    [],
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      <View>
        <Button title="toProfile" onPress={toProfile}>navigator to profile screens</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabOneScreen;
