import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Metrics from './pages/Metrics/index.js';
import MeasuresHistory from './pages/Measures-history/index.js';
import Favorites from './pages/Favorites/index';
import Profile from './pages/Profile/index';
import UserForm from './pages/UserForm/index';
import { Ionicons } from '@expo/vector-icons';
import Measures from './pages/Measures/index.js';

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bacgroundcolor: '#fefbd8',
        },
      }}>
      <Tab.Screen
        name="Metrics"
        component={Metrics}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="barbell" size={size} color={color} />;
            }
            return <Ionicons name="barbell-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Measuares History"
        component={MeasuresHistory}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Measures"
        component={Measures}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="bookmark" size={size} color={color} />;
            }
            return (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="UserForm"
        component={UserForm}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="person" size={size} color={color} />;
            }
            return <Ionicons name="person-add-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
