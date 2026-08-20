import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Welcome } from '../pages/Welcome';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
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
