import react from "react";

import {View, Text, Input, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    return(
        <View>
        <Text>Meus filmes</Text>
        <Text>Boa noite, Luquinhas... </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  