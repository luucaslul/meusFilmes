import react, {useState} from "react";

import {View, Text, Input, TouchableOpacity, StyleSheet, TextInput, FlatList} from 'react-native';


export default function Home(){


    let[listaFilmes, setLista] = useState([
        {
            'id':1,
            'nome': 'João Amorim: Obrigado a matar'
        },

        {
            'id':2,
            'nome': 'Interstellar'
        },

        {
            'id':2,
            'nome': 'Interstellar'
        },

        {
            'id':2,
            'nome': 'Interstellar'
        },

        {
            'id':2,
            'nome': 'Interstellar'
        },

        {
            'id':2,
            'nome': 'Interstellar'
        },


        {
            'id':3,
            'nome': 'A Saga Crepúsculo: Amanhecer - Parte II'
        },
        
        
    ]);

    

    return(
        <View style = {styles.container}>
            <View style = {styles.bodyBox}>
                <Text style = {styles.titulo}>Meus filmes 🎬</Text>
                <Text style = {styles.subtitulo}>Boa noite, usuário</Text>

                <TextInput style = {styles.input} placeholder = "Digite seu filme...">

                </TextInput>
                <TouchableOpacity  style = {styles.botao}>
                    <Text style = {styles.textoBotao}>Adicionar</Text>
                </TouchableOpacity>

            </View>

            <View style = {styles.bodyBoxMovies}>
                <FlatList
                    data  ={listaFilmes}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>(
                    <TouchableOpacity style ={styles.movieButton}>
                         <Text style = {styles.tituloMovie}>{item.nome}</Text>
                    </TouchableOpacity>
                    )}
                />
            
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
        width: '300px',
        alignItems: 'left',
        padding:'25px',
        backgroundColor:'#2a3042',
        borderRadius:'20px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 30,
        margin:'10px',
        },
        
        bodyBoxMovies: {
            width: '300px',
            alignItems: 'left',
            padding:'15px',
            backgroundColor:'#2a3042',
            borderRadius:'20px',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.5,
            shadowRadius: 30,
            margin:'10px',
            },

    titulo: {
        fontSize: '22px',
        color: '#fff',
        fontWeight: 'bold',
        
    },

    tituloMovie: {
        fontSize: '18px',
        color: '#fff',
        fontWeight: 'bold',
        
    },

    subtitulo: {
        fontSize: '10px',
        color: '#fff',
    },

    botao:{
        backgroundColor:'#eb38a3',
        paddingHorizontal:'20px',
        paddingVertical:'10px',
        borderRadius:'20px',
        marginTop:'10px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },



      textoBotao: {
        color:'#000',
        fontSize: '15px',
        color: '#fff',
        fontWeight: 'bold',
    },

    input:{
        backgroundColor:'#13131a',
        padding:'5px',
        marginVertical:'15px',
        width:'250px',
        paddingHorizontal: '10px',
        borderRadius:'5px',
        fontSize: '18px',
        color:'#fff',
        fontWeight: 'bold',
    },

    movieButton:{
        paddingHorizontal: '10px',
        backgroundColor:'#181b25',
        padding:'5px',
        paddingVertical:'10px',
        margin:'5px',
        borderRadius:'12px',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.6,
        shadowRadius: 2,
    }
    
  });
  
  