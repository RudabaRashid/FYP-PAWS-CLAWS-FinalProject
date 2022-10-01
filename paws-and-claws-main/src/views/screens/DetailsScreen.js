import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../const/colors';

const DetailsScreen = ({navigation, route}) => {
  const pet = route.params.pet;
  const selectedCategoryIndex = route.params.selectedCategoryIndex
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.background} />


      <ScrollView>

      <View style={{height: 400, backgroundColor: COLORS.background}}>
        <ImageBackground
          resizeMode="contain"
          source={pet?.image}
          style={{
            height: 280,
            top: 20,
          }}>
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          {/* Pet name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontSize: 20, color: COLORS.dark, fontWeight: 'bold'}}>
              {pet.name}
            </Text>
            <Icon name="gender-male" size={25} color={COLORS.grey} />
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 12, color: COLORS.dark}}>{pet.type}</Text>
            <Text style={{fontSize: 13, color: COLORS.dark}}>{pet.age}</Text>
          </View>

          {/* Render location and icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="map-marker" color={COLORS.primary} size={20} />
            <Text style={{fontSize: 14, color: COLORS.grey, marginLeft: 5}}>
              5 Bulvarna-Kudriavska Street, Kyiv
            </Text>
          </View>
        </View>

        
      </View>

      <View style={{marginTop:50,flexDirection:'row',justifyContent:"space-between",padding:40}}>
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate("Good Chart", {"selectedCategoryIndex":selectedCategoryIndex, "pet":pet})} 
            style={{width:60,height:60,borderRadius:5,borderColor:'#F2F3F5',backgroundColor:"#F2F3F5",padding:10,marginLeft:-10}}>
              <Image source={require('../../assets/pet-food.png')} style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-10}}>Food</Text>
            </View>



            
            <View>

            <TouchableOpacity onPress={()=>{
             navigation.navigate("Vet Recommendation", {"selectedCategoryIndex":selectedCategoryIndex, "pet":pet})
            }} style={{width:60,height:60,borderRadius:5,borderWidth:1,borderColor:'#F2F3F5',backgroundColor:"#F2F3F5",padding:10,marginLeft:1}}>
              <Image source={require('../../assets/veterinarian.png')} style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:'bold', marginLeft:-1}}>Vet Reco</Text>

            </View>


              <View>
            <TouchableOpacity  onPress={()=>{
             navigation.navigate("Medicines", {"selectedCategoryIndex":selectedCategoryIndex, "pet":pet})

            }} style={{width:60,height:60,borderRadius:5,borderColor:'#F2F3F5',backgroundColor:"#F2F3F5",padding:10,marginLeft:-1}}>
              <Image source={require('../../assets/syringe.png')} style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-1}}>Medicines</Text>
            </View>
{/*training */}
            <View>
            <TouchableOpacity  onPress={()=>{
             navigation.navigate("Training", {"selectedCategoryIndex":selectedCategoryIndex, "pet":pet})

            }} style={{width:60,height:60,borderRadius:5,borderColor:'#F2F3F5',backgroundColor:"#F2F3F5",padding:10,marginLeft:-5}}>
              <Image source={require('../../assets/training.png')} style={{width:'100%',height:'100%'}}/>
            </TouchableOpacity>
            <Text style={{textAlign:"center",fontWeight:"bold", marginLeft:-5}}>Training</Text>
            </View>

      </View>


      {/* Comment container */}
      <View style={{marginTop: -1, justifyContent: 'space-between', flex: 1}}>
        <View>
          {/* Render user image , name and date */}
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <Image
              source={require('../../assets/person.jpg')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
            <View style={{flex: 1, paddingLeft: 10}}>
              <Text
                style={{color: COLORS.dark, fontSize: 12, fontWeight: 'bold'}}>
                 Usama
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 11,
                  fontWeight: 'bold',
                  marginTop: 2,
                }}>
                Owner
              </Text>
            </View>
            <Text style={{color: COLORS.grey, fontSize: 12}}>May 25, 2020</Text>
          </View>
          <Text style={style.comment}>
            My job requires moving to another country. I don't have the
            opputurnity to take the cat with me. I am looking for good people
            who will shelter my Lily. My job requires moving to another country. I don't have the
            opputurnity to take the cat with me. I am looking for good people
            who will shelter my Lily. My job requires moving to another country. I don't have the
            opputurnity to take the cat with me. I am looking for good people
            who will shelter my Lily. 
          </Text>
        </View>

        {/* Render footer */}
        <View style={style.footer}>
          <View style={style.iconCon}>
            <Icon name="heart-outline" size={22} color={COLORS.white} />
          </View>
          <View style={style.btn}>
            <Text style={{color: COLORS.white, fontWeight: 'bold'}} onPress={()=>navigation.navigate("Adoption")}>
              ADOPTION
            </Text>
          </View>
        </View>
      </View>

      </ScrollView>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    flex: 1,
    bottom: -60,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
  },
  comment: {
    marginTop: 10,
    fontSize: 12.5,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    height: 100,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
export default DetailsScreen;
