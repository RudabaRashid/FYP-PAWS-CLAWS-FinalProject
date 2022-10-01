import React, {useState, useEffect} from 'react';
import { Button, Text, View, } from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/colors';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({})

const SignIn =({navigation}) =>{

  const userData = async () => {
    const userInfo = await AsyncStorage.getItem('user')
    const user = JSON.parse(userInfo)

    if(user != null){
      navigation.reset({
        index:0,
        routes:[{name:'HomeScreen'}],
       
    });
    }
  }

  useEffect(() => {
    userData()
  }, [])

  const HomeScreen = () => {
    navigation.navigate('HomeScreen')
  }

  const loginWithGoogle = async () => {
    try{
      await GoogleSignin.hasPlayServices()
    const userInfo = await GoogleSignin.signIn()
    await AsyncStorage.setItem('user', JSON.stringify({"email":userInfo.user.email, 
                "first_name":userInfo.user.email.givenName, 
                "last_name":userInfo.user.familyName, "image":userInfo.user.photo}))
                navigation.reset({
                  index:0,
                  routes:[{name:'HomeScreen'}],
                 
              });
    }catch(error){
      console.log(error.message)
    }
    
  }
    return (

        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <Image
                style={{width: 300, height: 260, alignSelf: 'center'}}
                source={require('../../assets/paws&clawslogo.png')}
              />
        {/* <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 32, color: COLORS.extra}}>
            PAWS AND CLAWS
          </Text>
        </View> */}

        <View style={{marginTop: -40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', textAlign: 'center', color: COLORS.dark}}>
            Welcome Back
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'center', color: COLORS.primary}}>
            Sign in to continue
          </Text>
        </View>
        
        <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="mail-outline"
              color={COLORS.dark}
              size={20}
              style={{marginTop: 15, position: 'absolute', paddingLeft: 10}}
            />
            <TextInput placeholder="Email" style={{color: COLORS.dark,
    paddingLeft: 50,
    borderBottomWidth: 1,
    borderColor: COLORS.dark,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,}} />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="lock-outline"
              color={COLORS.dark}
              size={20}
              style={{marginTop: 15, position: 'absolute', paddingLeft: 10}}
            />
            <TextInput
              placeholder="Password"
              style={{
                color: COLORS.dark,
                paddingLeft: 50,
                borderBottomWidth: 1,
                borderColor: COLORS.dark,
                borderBottomWidth: 0.5,
                flex: 1,
                fontSize: 18,
              }}
              secureTextEntry
            />
          </View>
          <TouchableOpacity onPress={() => HomeScreen()} style={{
              backgroundColor: COLORS.primary,
              height: 50,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
              width:300,
              marginLeft:35,
              
  }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18, textAlign:'center'}}>
              Sign In
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{height: 1, width: 30, backgroundColor: '#a5a5a5'}}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={{height: 1, width: 30, backgroundColor: '#a5a5a5'}}></View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <TouchableOpacity onPress={() => loginWithGoogle()} style={{
    height: 50,
    borderWidth: 1,
    borderColor: '#a5a5a5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
  }}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/google.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.dark, fontWeight: 'bold'}} 
            onPress={()=>navigation.navigate("SignUp")}>
              Sign up
            </Text>
          </TouchableOpacity>




        </View>


        
            </ScrollView>


{/*        my code 
            <View>
        <Text>SignInPage</Text>
        <Button title="SignIn" onPress={()=>navigation.navigate("HomeScreen")}></Button>
        <Button title="SignUp" onPress={()=>navigation.navigate("SignUp")}></Button>
            </View>*/}
        </SafeAreaView>

        











    );
};






export default SignIn;

