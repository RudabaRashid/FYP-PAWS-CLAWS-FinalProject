import React, { useState } from 'react';
import { Button, 
    Text, 
    View, 
    StyleSheet, 
    Dimensions, 
    FlatList, 
    TouchableOpacity, 
    SafeAreaView, 
    TextInput, 
    Image} from 'react-native';


import 'react-native-gesture-handler';

import COLORS from '../../const/colors';
import {ScrollView} from 'react-native-gesture-handler';



const SplashScreen =({navigation}) =>{
    return (

        <SafeAreaView>

         {/* my code splash screen */}   
        <Image
                style={{
                    width: 400, 
                    height: 240, 
                    alignSelf: 'center',
                    marginTop:200
                }}
                source={require('../../assets/paws&clawslogo.png')}
              />
        
        <View>
        <Image
                style={{width: 40, 
                    height: 40, 
                    alignSelf: 'center',
                    marginTop:200,
                    marginRight:150,
                 }}
                source={require('../../assets/next.png')}
              />
              <Text style={{ 
                    alignSelf: 'center',
                    marginTop:-30,
                    marginRight:-35,
                    marginBottom:10,
                    fontSize:15,
                 }} onPress={()=>navigation.navigate("SignIn")}>GET STARTED!!</Text>
        </View>

              
              
        </SafeAreaView>
    
    );
};


export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:10,
        justifyContent: 'center'
    },
    ListTab:{
          
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: 20
    },
    btnTab:{
        width:Dimensions.get('window').width/3.5,
        flexDirection:'row',
        borderWidth:0.5,
        borderColor: '#EBEBEB',
        padding:10,
        justifyContent: 'center'
    },
    textTab:{
        fontSize:16
    },
    btnTabActive:
    {
        backgroundColor: '#E6838D'
    }
})