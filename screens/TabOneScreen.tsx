import { useNavigation } from '@react-navigation/native';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import * as React from 'react';
import { useCallback } from 'react';
import { Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import Toast from 'react-native-root-toast';
import { Text, View } from '../components/Themed';

// StackNavigationHelpers 提供注入组件 `navigate` 属性声明
const TabOneScreen: React.FC<StackNavigationHelpers> = ({ navigate }) => {
  const navigation = useNavigation()
  const toProfile = useCallback(
    () => {
      navigation.navigate('Profile')
    },
    [],
  )

  const pickImages = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (!permissionResult) {
        Toast.show('请求授权失败');
        return;
      }

      if (permissionResult.granted === false) {
        Toast.show('获取授权失败，请重新授权');
        return;
      }

      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        Toast.show('取消获取图片')
        return;
      }

      Toast.show(pickerResult.uri, {
        position: Toast.positions.CENTER
      });
    } catch (error) {
      Toast.show(error?.message);
    }
    
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://heaven-blog-1255884785.cos.ap-guangzhou.myqcloud.com/github-avatar.jpeg?q-sign-algorithm=sha1&q-ak=AKIDWeudt6EGIBR8N1BfDtDPY7HHH7gDgXe5&q-sign-time=1627542244;1627549444&q-key-time=1627542244;1627549444&q-header-list=&q-url-param-list=&q-signature=45cbb925141f750110b4dabfc8c97ec8ade11950&x-cos-security-token=c5d0424cb2c0c2491fea1805f306e812756a459e20001"}} style={{ width: 64, height: 64 }} />
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Button title="Pick Images" onPress={pickImages} />
      </View>
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
