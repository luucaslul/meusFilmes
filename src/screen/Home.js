import react from "react";

import {View, Text, Input, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


export default function Home(){
    return(
        <View style = {styles.container}>
            <View style = {styles.bodyBox}>
                <Text style = {styles.titulo}>🎬Meus filmes🎬</Text>
                <Text style = {styles.subtitulo}>Boa noite, Luquinhas... </Text>

                <TextInput style = {styles.input} placeholder = "Digite seu filme...">

                </TextInput>
                <TouchableOpacity  style = {styles.botao}>
                    <Text style = {styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.bodyBox}>
            <Text style = {styles.titulo}>Nome do filme:</Text>
            </View>
            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#161921',
      alignItems: 'center',
      justifyContent: 'center',
    },

    bodyBox: {
        width: '400px',
        alignItems: 'center',
        padding:'50px',
        backgroundColor:'#2a3042',
        borderRadius:'20px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 30,
        margin:'20px',
    },

    titulo: {
        fontSize: '35px',
        color: '#fff',
        fontWeight: 'bold',
        
    },

    subtitulo: {
        fontSize: '15px',
        color: '#fff',
    },

    botao:{
        backgroundColor:'#eb38a3',
        paddingHorizontal:'30px',
        paddingVertical:'10px',
        borderRadius:'20px',
        margin:'15px',
        marginTop:'10px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },

    image: {
        flex: 1,
        justifyContent: "center"
      },

      textoBotao: {
        color:'#000',
        fontSize: '20px',
        color: '#fff',
        fontWeight: 'bold',
    },

    input:{
        backgroundColor:'#13131a',
        padding:'8px',
        margin:'15px',
        paddingHorizontal: '50px',
        borderRadius:'5px',
        fontSize: '20px',
        color:'#fff',
        fontWeight: 'bold',
    }
    
  });
  
  