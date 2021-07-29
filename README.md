# Expo React Native 探索

文档地址：https://docs.expo.io/tutorial

# 导航

## 导航根容器

``` tsx
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
```

## Tab 页面导航

``` tsx
import { createStackNavigator } from '@react-navigation/stack';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
```

## 页面之间跳转

1、使用 `useNavigation` hook 来做命令式跳转

``` tsx
const navigation = useNavigation()
navigation.navigate('Profile')
```

2、函数式组件，提前声明注入属性类型

``` tsx
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';

const TabOneScreen: React.FC<StackNavigationHelpers> = ({ navigate }) => {}
```

3、打开 web 浏览器

``` tsx
import * as WebBrowser from 'expo-web-browser';

WebBrowser.openBrowserAsync(
  'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
);
```

# 点击
1、任意元素可点击，通过 `TouchableOpacity` 组件包裹

# TODO

- [ ] 闪屏
- [ ] 前后台切换事件监听
- [ ] 打包构建
- [ ] 页面切换动画
- [ ] 网络请求
- [ ] 路由组织最佳实践
# 遇到问题
1. 控制台扫码，无法打开 Expo 项目：先在控制台通过 `expo login` 登录
2. 全局安装 `npm install -g @expo/ngrok`，来支持 `tunnel` 方式启动
3. 启动命令改成 `yarn start --tunnel`