import React from "react";
import CreateNativeStackNavigator, { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTabs from "../Screens/BottomTabs";

import {
  
   HomeScreen,
   CounselingScreen,
   SearchScreen
} from "../Screens"

const Navigation =( ) => {

    const Stack = createNativeStackNavigator();

    return(


        <Stack.Navigator screenOptions={{
            headerShown:false
        }} > 

         <Stack.Screen name="BottomTabs"  component={BottomTabs} />
         <Stack.Screen name="HomeScreen"  component={HomeScreen} />

       
       
    
        
         <Stack.Screen name="SearchScreen"  component={SearchScreen} />
      
         <Stack.Screen name="CounselingScreen"  component={CounselingScreen} />

        </Stack.Navigator>
    )
}



export default Navigation