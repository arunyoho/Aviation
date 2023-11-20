import { View,Text, TouchableOpacity,} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../HomeScreen";
import SearchScreen from "../SearchScreen"

import { Entypo } from '@expo/vector-icons';

import {SIZES, COLORS} from "../../constants"
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useStateContext } from "../../context/StateContext/StateContext";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Icon from "../../components/Icons";
import { Icons } from "../../components/Icons";
import { StyleSheet } from "react-native";
import ColorScreen from "../../components/ColorScreen";

import Colors from "../../constants/Colors";
import Styles from "../../Common/Style";

import * as Animatable from 'react-native-animatable';

import React, { useEffect, useRef } from 'react'




const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: HomeScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
  { route: 'Search', label: 'Search', type: Icons.Feather, icon: 'search', component:SearchScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
//   { route: 'Categories', label: 'Categories', type: Icons.Feather, icon: 'plus-square', component:CategoriesScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
//   { route: 'Cart', label: 'Cart', type: Icons.FontAwesome, icon: 'shopping-cart', component:CartScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
//   { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: AccountScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
];


const Tab = createBottomTabNavigator();


const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]} />
        <View style={[styles.btn, { backgroundColor: focused ? null : item.alphaClr }]}>
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
          <Animatable.View
            ref={textViewRef}>
            {focused && <Text style={{
              color: Colors.white, paddingHorizontal: 2
            }}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  }
})

const BottomTabs=({navigation})=>{



    const { colors, toggleDarkMode } = useStateContext();

    const screenOptions1 = {
        tabBarStyle:{
          // backgroundColor:colors.background,
          
        },
        tabBarItemStyle:{
          borderRadius:10,
        }
      };  


      
    return(
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          padding:6,
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        }
      }}
       >


    {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}

     
      </Tab.Navigator>
    )
}
export default BottomTabs;