// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Aviation Counseling App</Text>
      <Button
        title="Go to Counseling"
        onPress={() => navigation.navigate('Counseling')}
      />
    </View>
  );
}

export default HomeScreen;
