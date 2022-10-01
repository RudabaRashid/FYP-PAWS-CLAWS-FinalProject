import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pets from '../../const/pets';
const {height} = Dimensions.get('window');
const petCategories = [
  {name: 'CATS', icon: 'cat'},
  {name: 'DOGS', icon: 'dog'},
  {name: 'BIRDS', icon: 'ladybug'},
  {name: 'MAMMALS', icon: 'cow'},
];

const Card = ({pet, navigation, selectedCategoryIndex}) => {
  const details = () => {
    navigation.navigate('DetailsScreen',{"selectedCategoryIndex":selectedCategoryIndex, "pet":pet})
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => details()}>
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
          <Image
            source={pet.image}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{fontWeight: 'bold', color: COLORS.dark, fontSize: 20}}>
              {pet?.name}
            </Text>
            <Icon name="gender-male" size={22} color={COLORS.grey} />
          </View>

          {/* Render the age and type */}
          <Text style={{fontSize: 12, marginTop: 5, color: COLORS.dark}}>
            {pet?.type}
          </Text>
          <Text style={{fontSize: 10, marginTop: 5, color: COLORS.grey}}>
            {pet?.age}
          </Text>

          {/* Render distance and the icon */}
          <View style={{marginTop: 5, flexDirection: 'row'}}>
            <Icon name="map-marker" color={COLORS.primary} size={18} />
            <Text style={{fontSize: 12, color: COLORS.grey, marginLeft: 5}}>
              Distance:7.8km
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);
  const [user_info, setUser_info] = React.useState({})

  const logout = async () => {
    await AsyncStorage.removeItem('user')
    navigation.navigate('SignIn')
  }

  const fliterPet = index => {
    const currentPets = pets.filter(
      item => item?.pet?.toUpperCase() == petCategories[index].name,
    )[0]?.pets;
    setFilteredPets(currentPets);
  };

  const userData = async () => {
    const userInfo = await AsyncStorage.getItem('user')
    const user = JSON.parse(userInfo)
    setUser_info(user)
  }

  React.useEffect(() => {
    userData()
    navigation.addListener("focus", () => {
      userData()
    })
    fliterPet(0);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, color: COLORS.white}}>
      <View style={style.header}>
        <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon name="sort-variant" size={28} />
        </TouchableOpacity>
        <Text style={{color: COLORS.primary, fontWeight: 'bold', fontSize: 16}}>
          PAWS&CLAWS
        </Text>
        
          {user_info && user_info.image ? 
          <TouchableOpacity onPress={() => logout()}>
            <Image
          source={{uri:user_info.image}}
          style={{height: 30, width: 30, borderRadius: 25}}
        />
          </TouchableOpacity>:
          <TouchableOpacity onPress={() => logout()}>
          <Image
        source={require('../../assets/personprofile.jpg')}
        style={{height: 30, width: 30, borderRadius: 25}}
      />
        </TouchableOpacity>
          }
        
        
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={style.searchInputContainer}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Search pet to adopt"
              style={{flex: 1}}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>
         
          {/* Render all the categories */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            {petCategories.map((item, index) => (
              <View key={'pet' + index} style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    fliterPet(index);
                  }}
                  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}>
                  <Icon
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Render the cards with map function */}
          <View style={{marginTop: 20}}>
            {filteredPets.map((item) => (
              <Card selectedCategoryIndex={selectedCategoryIndex} key={item.id} pet={item} navigation={navigation} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    backgroundColor: COLORS.background,
    borderRadius: 20,
  },
});
export default HomeScreen;
