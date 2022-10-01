/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import DrawerNavigator from './src/views/navigators/DrawerNavigator';
 import DetailsScreen from './src/views/screens/DetailsScreen';
 import SignIn from './src/views/screens/SignIn';
 import HomeScreen from './src/views/screens/HomeScreen';
 import SignUp from './src/views/screens/SignUp';
 import UserProfile from './src/views/screens/UserProfile';
import GoodChart from './src/views/screens/good_chart';
import VetRecommendation from './src/views/screens/vet_recommendation';
import Medicines from './src/views/screens/medicines';
import SplashScreen from './src/views/screens/SplashScreen';
import Adoption from './src/views/screens/Adoption';
import Training from './src/views/screens/Training';
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
         <Stack.Screen name="SignIn" component={SignIn} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="UserProfile" component={UserProfile} />
         <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
         <Stack.Screen name="Good Chart" component={GoodChart} />
         <Stack.Screen name="Adoption" component={Adoption} />
         <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
         <Stack.Screen name="Training" component={Training} />



         <Stack.Screen name="Vet Recommendation" component={VetRecommendation} />

         <Stack.Screen name="Medicines" component={Medicines} />


       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
