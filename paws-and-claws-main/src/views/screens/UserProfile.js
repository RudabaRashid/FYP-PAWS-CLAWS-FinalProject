import React from 'react';
import { Button, Text, View, } from 'react-native';

const UserProfile =({navigation}) =>{
    return (
        <View>
        <Text>UserProfile</Text>
        <Button title="UserProfile" onPress={()=>navigation.navigate("SignUp")}></Button>
    </View>
    );
};


export default UserProfile;

