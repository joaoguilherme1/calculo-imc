
// Pessoa A linha 15
// Pessoa B linha 29

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'

export default function App() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    function handleSubmit() {

        //           Pessoa A

        // nesta função primeiramente calcule o imc
        // depois coloque para cada caso uma frase 
        // abaixo de 18.6
        // entre 18.6 e 24.9
        // acima de 24.9
    }

    

    return (

      <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>
            <TextInput style={styles.input} placeholder="Peso" placeholderTextColor="#999" keyboardType="numeric" maxLength={3} value={peso} onChangeText={setPeso} />
            <TextInput style={styles.input} placeholder="Altura" placeholderTextColor="#999" keyboardType="numeric" maxLength={3} value={altura} onChangeText={setAltura} />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 30,
    },
    input: {
        backgroundColor: '#121212',
        borderRadius: 10,
        margin: 15,
        padding: 10,
        color: '#FFF',
        fontSize: 23,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        backgroundColor: '#41Aef4',
        padding: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 25,
    }
})

/*
                Pessoa B

<View style={styles.container}>
    <Text style={styles.title}>Calculadora de IMC</Text>
    <TextInput style={styles.input} placeholder="Peso" placeholderTextColor="#999" keyboardType="numeric" maxLength={3} value={peso} onChangeText={setPeso} />
    <TextInput style={styles.input} placeholder="Altura" placeholderTextColor="#999" keyboardType="numeric" maxLength={3} value={altura} onChangeText={setAltura} />
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
    </TouchableOpacity>
</View>
Coloque aqui View, Text, TextInput, TouachableOpacity,
quando utilizar o textInput pode mudar a cor do placeholder
passando a seguinte propriedade >>> placeholderTextColor='#785463'
*/