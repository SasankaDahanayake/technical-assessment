import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CalculatorScreen() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [total, setTotal] = useState<number | null>(null);

    const calculateSum = (first: string, second: string): number => {
        const num1 = parseFloat(first) || 0;
        const num2 = parseFloat(second) || 0;
        return num1 + num2;
    };

    const handleCalculate = () => {
        const result = calculateSum(firstNumber, secondNumber);
        setTotal(result);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adding Two Numbers</Text>

            <TextInput
                style={styles.input}
                placeholder="First Number"
                keyboardType="numeric"
                value={firstNumber}
                onChangeText={setFirstNumber}
            />

            <TextInput
                style={styles.input}
                placeholder="Second Number"
                keyboardType="numeric"
                value={secondNumber}
                onChangeText={setSecondNumber}
            />

            <TouchableOpacity style={styles.button} onPress={handleCalculate}>
                <Text style={styles.buttonText}>Calculate</Text>
            </TouchableOpacity>

            {total !== null && <Text style={styles.result}>Total: {total}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f2f2f2',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
    },
    input: {
        width: '80%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        marginBottom: 24,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
