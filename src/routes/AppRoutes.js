import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Welcome } from '../pages/Welcome';
import { Login } from '../pages/Login';
import { colors } from '../theme/colors';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        animation: 'slide_from_right',
        contentStyle: { backgroundColor: colors.canvas },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}
