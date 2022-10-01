import React from 'react'
import {View,Text, ScrollView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../const/data';

export default class Training extends React.Component{
  state = {
    training:[]
}
componentDidMount(){
  this.setState({training:data[this.props.route.params.selectedCategoryIndex][this.props.route.params.pet.id - 1][3]})
}
    render(){
        return(
          <View style={{flex:1,}}>
          <View style={{flexDirection: 'row',
padding: 20,
justifyContent: 'space-between',}}>
     <Icon
       name="arrow-left"
       size={28}
       color={"black"}
       onPress={()=>this.props.navigation.goBack(null)}
     />
     <Icon name="dots-vertical" size={28} color={"black"} />
     
   </View>

   <View>
   <Image
                style={{width: 300, height: 240, alignSelf: 'center'}}
                source={require('../../assets/animaltraining.png')}
              />
   </View>



         <ScrollView>

         <View style={{padding:20}}>
         <Text style={{color:"orange",fontWeight:"bold",fontSize:22}}>{this.state.training[0]}</Text>

         <Text style={{color:"black",fontWeight:"bold"}}>{this.state.training[2]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[3]}</Text>
         <Text style={{width:"90%",color:"black",fontWeight:"bold"}}>{this.state.training[4]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[5]}</Text>
         <Text style={{width:"90%",color:"black",fontWeight:"bold"}}>{this.state.training[6]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[7]}</Text>
         <Text style={{width:"90%",color:"black",fontWeight:"bold"}}>{this.state.training[8]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[9]}</Text>
         <Text style={{width:"90%",color:"black",fontWeight:"bold"}}>{this.state.training[10]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[11]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[12]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[13]}</Text>
         <Text style={{width:"90%"}}>{this.state.training[14]}</Text>

         </View>
         </ScrollView>

     </View>
        )
    }
}