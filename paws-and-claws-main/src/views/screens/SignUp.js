import React from 'react';
import { Button, Text, View, } from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaView, TextInput, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const SignUp =({navigation}) =>{
    return (

        <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <Image
                style={{width: 300, height: 240, alignSelf: 'center' }}
                source={require('../../assets/paws&clawslogo.png')}
              />
        {/* <View style={{flexDirection: 'row', marginTop: 40}}>
        <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.extra}}>
            PAWS AND CLAWS
          </Text>
        </View> */}
        <View style={{marginTop: -40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', textAlign: 'center', color: COLORS.extra}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'center', color: COLORS.primary}}>
            Sign up to continue
          </Text>
        </View>
        <View style={{marginTop: 2}}>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="person-outline"
              color={COLORS.dark}
              size={20}
              style={{marginTop: 15, position: 'absolute'}}
            />
            <TextInput placeholder="Name" style={{
    color: COLORS.dark,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  }} />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="mail-outline"
              color={COLORS.dark}
              size={20}
              style={{marginTop: 15, position: 'absolute'}}
            />
            <TextInput placeholder="Email" style={{
    color: COLORS.dark,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  }} />
          </View>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Icon
              name="lock-outline"
              color={COLORS.dark}
              size={20}
              style={{marginTop: 15, position: 'absolute'}}
            />
            <TextInput
              placeholder="Password"
              style={{
                color: COLORS.dark,
                paddingLeft: 30,
                borderBottomWidth: 1,
                borderColor: COLORS.light,
                borderBottomWidth: 0.5,
                flex: 1,
                fontSize: 18,
              }}
              secureTextEntry
            />
          </View>
          <View style={{
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}onPress={()=>navigation.navigate("SignIn")}>
              Sign Up
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
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
                Sign up with
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
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
                Sign up with
              </Text>
              <Image
                style={{width: 20, height: 20, marginLeft: 5}}
                source={require('../../assets/google.png')}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.dark, fontWeight: 'bold'}}>
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}onPress={()=>navigation.navigate("SignIn")}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
 );
};



        {/*My code
        <View>
        <Text>SignUpPage</Text>
        <Button title="SigUp" onPress={()=>navigation.navigate("UserProfile")}></Button>
        </View>
    );
};*/}


export default SignUp;

