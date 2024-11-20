/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddTaskScreen from '../screens/AddTask';
import ScreenName from '../router/ScreenName';
import TaskListScreen from '../screens/TaskListScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SplashScreen from '../screens/SplashScreen';
import PomodoroTimerScreen from '../screens/PomodoroTimerScreen';
import Colors from '../theme/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Separate TabNavigator component
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.background.primary,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text.primary,
        headerStyle: {backgroundColor: Colors.background.primary},
        headerTitleStyle: {color: Colors.primary},
      }}>
      <Tab.Screen
        name={ScreenName.TaskList}
        component={TaskListScreen}
        options={{
          headerShown: false,
          headerStyle: {
            borderWidth: 2,
            borderColor: 'red',
            padding: 10,
            width: 40,
          },
          tabBarIcon: ({focused, size}) => (
            <FontAwesome5
              name="tasks"
              size={size}
              color={focused ? Colors.primary : Colors.text.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenName.AddTask}
        component={AddTaskScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, size}) => (
            <Octicons
              name="tasklist"
              size={size}
              color={focused ? Colors.primary : Colors.text.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Main navigation component
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenName.TaskList}
        screenOptions={{
          headerStyle: {backgroundColor: Colors.background.primary},
        }}>
        <Stack.Screen
          name={ScreenName.Splash}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.Onboarding}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.TaskList}
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenName.PomodoroTimer}
          component={PomodoroTimerScreen}
          options={{
            headerTintColor: Colors.text.primary,
            headerBackTitle: 'Back',
            headerTitleStyle: {color: Colors.primary},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
