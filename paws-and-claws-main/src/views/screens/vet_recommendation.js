import React from 'react'
import {View,Text, ScrollView, Image} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import data from '../../const/data';

export default class VetRecommendation extends React.Component{
  state = {
    vet_recommendation:[]
}
componentDidMount(){
  this.setState({vet_recommendation:data[this.props.route.params.selectedCategoryIndex][this.props.route.params.pet.id - 1][1]})
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
                source={require('../../assets/vet_recommendation.png')}
              />
   </View>



         <ScrollView>

         <View style={{padding:20}}>
         <Text style={{color:"orange",fontWeight:"bold",fontSize:22}}>{this.state.vet_recommendation[0]}</Text>

         <Text style={{width:"90%"}}>{this.state.vet_recommendation[1]}</Text>
         <Text style={{color:"black",fontWeight:"bold"}}>{this.state.vet_recommendation[2]}</Text>
         <Text style={{width:"90%"}}>{this.state.vet_recommendation[3]}</Text>
         <Text style={{width:"90%"}}>{this.state.vet_recommendation[4]}</Text>
         <Text style={{width:"90%"}}>{this.state.vet_recommendation[5]}</Text>
         <Text style={{width:"90%"}}>{this.state.vet_recommendation[6]}</Text>
         <Text style={{width:"90%"}}>{this.state.vet_recommendation[7]}</Text>

         </View>
         </ScrollView>

     </View>
        )
    }
}