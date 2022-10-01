import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../../const/colors';
import { Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';
import { Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const Adoption = ({navigation}) => {

  const [name, SetName] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      SetSubmitted(!submitted);
    } else {
      // Alert.alert(
      //   'Warning',
      //   'The name must be longer than 3 characters', [
      //   {
      //     text: 'Do not show again',
      //     onPress: () => console.warn('Do not show Pressed!')
      //   },
      //   {
      //     text: 'Cancel',
      //     onPress: () => console.warn('Cancel Pressed!')
      //   },
      //   {
      //     text: 'OK',
      //     onPress: () => console.warn('OK Pressed!')
      //   },
      // ],
      //   {
      //     cancelable: true,
      //     onDismiss: () => console.warn('Alert dismissed!')
      //   })
      ToastAndroid.showWithGravity(
        'Enter Fields!!',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      )
    }
  }

  return (
    

    
     

/**********OTHER CODE */
    <View style={style.body}>

<View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack
              }
            />
            
          </View>

          
          <Image
                style={{
                  width: 300, 
                  height: 240, 
                  alignSelf: 'center',
                  marginTop:-70,
                 }}
                source={require('../../assets/paws&clawslogo.png')}
              />
          
      <Text style={{
    color: COLORS.dark,
    fontSize: 20,
    margin: -30,
    color: COLORS.dark,
    paddingLeft: -10,
    paddingRight:250,
    flex: 1,
    fontSize: 18,}}>
        Name:
      </Text>
      <TextInput
        style={ {marginTop: 200, position: 'absolute'}}
        placeholder='Enter Name'
        onChangeText={(value) => SetName(value)}
        />

<Text style={{
    color: COLORS.dark,
    paddingLeft: -80,
    flex: 1,
    fontSize: 18,
    paddingRight:255,
    marginBottom:30,
    marginTop:20,
  }} >
        Email:
      </Text>
      <TextInput
        style={ {marginTop: 250, position: 'absolute'}}
        placeholder='Enter Email'
        onChangeText={(value) => SetName(value)}
        />

<Text style={{
    color: COLORS.dark,
    paddingLeft: -80,
    flex: 1,
    fontSize: 18,
    paddingRight:255,
    marginBottom:30,
    marginTop:-30,
  }} >
        Phone No:
      </Text>
      <TextInput
        style={ {marginTop: 330, position: 'absolute'}}
        placeholder='Enter Phone No'
        onChangeText={(value) => SetName(value)}
        />

<Text style={{
    color: COLORS.dark,
    paddingLeft: -80,
    flex: 1,
    fontSize: 18,
    paddingRight:255,
    marginBottom:30,
    marginTop:-30,
  }} >
        Address:
      </Text>
      <TextInput
        style={ {marginTop: 395, position: 'absolute'}}
        placeholder='Enter Address'
        onChangeText={(value) => SetName(value)}
        />
        
        <Text style={{
    color: COLORS.dark,
    paddingLeft: -80,
    flex: 1,
    fontSize: 18,
    paddingRight:255,
    marginBottom:30,
    marginTop:-30,
  }} >
        Reason of Adoption:
      </Text>
      <TextInput
        style={ {marginTop: 470, position: 'absolute'}}
        placeholder='Enter Reason'
        onChangeText={(value) => SetName(value)}
        />
        



        {/** Button  */}

      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          style.button
        ]}
      >
        <Text style={style.buttontext}>
          {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={{
          color: COLORS.dark,
          fontSize: 20,
          color: COLORS.dark,
          paddingLeft: 10,
          paddingRight:10,
          flex: 1,
          fontSize: 18,
          marginTop:-80,}}>
          Your Adoption Request is Generated!!
        </Text>
        :
        null
      }
    </View>

    
  );
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: COLORS.dark,
    fontSize: 20,
    margin: -30,
    color: COLORS.dark,
    paddingLeft: -10,
    paddingRight:250,
    flex: 1,
    fontSize: 18,
  },
  input: {
    width: 200,
    height:30,
    borderWidth: 1,
    borderColor:COLORS.dark,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 300,
    paddingLeft:30,
    paddingRight:-50,

    
  },

  
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    marginBottom: 100,
    backgroundColor: COLORS.primary,

  },

  buttontext: {
    width: 150,
    height: 50,
    alignItems: 'center',
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18,
    marginLeft:90,
    marginTop:10,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    marginLeft:-150,
    marginRight:160

  },
});

export default Adoption;