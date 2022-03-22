// Pessoa A -> Tainara 
// Pessoa B -> João Guilherme

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native'

export default function App() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const handleSubmit = () => {
        if (peso == '' || altura == '') {
            Alert.alert('Erro', 'Preencha todos os campos!')
        } else {
            const imc = peso / (altura * altura);
            if (imc < 18.6) {
                Alert.alert('Abaixo do peso', 'IMC: ' + imc.toFixed(2))
            } else if (imc >= 18.6 && imc <= 24.9) {
                Alert.alert('Peso normal', 'IMC: ' + imc.toFixed(2))
            } else if (imc >= 25) {
                Alert.alert('Sobrepeso', 'IMC: ' + imc.toFixed(2))
            }
        }
    };

    return (
      <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>
            <TextInput style={styles.input} placeholder="Peso(Kg)" placeholderTextColor="#999" keyboardType="numeric" maxLength={3} value={peso} onChangeText={setPeso} />
            <TextInput style={styles.input} placeholder="Altura(m)" placeholderTextColor="#999" keyboardType="numbers-and-punctuation" maxLength={4} value={altura} onChangeText={setAltura} />
            <Button title="Calcular" onPress={handleSubmit} />
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