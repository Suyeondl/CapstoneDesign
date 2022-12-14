import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import Test from './Screens/Test';
import StartTest from './Screens/StartTest';
import Strategy from './Screens/Strategy';
import Prompt from './Screens/Prompt';
import ReviewNote from './Screens/ReviewNote';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerStyle:{backgroundColor:"#F6F0E0"},
          geaderTitleStyle:{fontWeight:"bold", color:'black'}
        }}
      >
        <Stack.Screen 
          name ="SignUp"
          component={SignUp}
          options = {{title:"SignUp Screen"}}
        />
        <Stack.Screen 
          name='Home'
          component={Home}
          options = {{title:"Home Screen"}}
        />
        <Stack.Screen 
          name='Login' 
          component={Login}
          options = {{title:"Login Screen"}}
        />
        <Stack.Screen 
          name='Test' 
          component={Test}
          options = {{title:"Test Screen"}}
        />
        <Stack.Screen 
          name='StartTest' 
          component={StartTest}
          options = {{title:"StartTest Screen"}}
        />
        <Stack.Screen 
          name='Strategy' 
          component={Strategy}
          options = {{title:"Strategy Screen"}}
        />
        <Stack.Screen 
          name='Prompt' 
          component={Prompt}
          options = {{title:"Prompt Screen"}}
        />
        <Stack.Screen 
          name='ReviewNote' 
          component={ReviewNote}
          options = {{title:"ReviewNote Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}