import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function TwoSumScreen() {
    const [numbersInput, setNumbersInput] = useState('');
    const [target, setTarget] = useState('');
    const [result, setResult] = useState<[number, number] | null>(null);

    const handleTwoSum = () => {
        const nums = numbersInput.split(',').map(n => parseFloat(n.trim()) || 0);
        const t = parseFloat(target) || 0;
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === t) {
                setResult([left + 1, right + 1]);
                return;
            } else if (sum < t) left++;
            else right--;
        }
        setResult(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Two Sum Finder</Text>
            <TextInput
                style={styles.input}
                placeholder="Numbers"
                value={numbersInput}
                onChangeText={setNumbersInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Target"
                keyboardType="numeric"
                value={target}
                onChangeText={setTarget}
            />
            <TouchableOpacity style={styles.button} onPress={handleTwoSum}>
                <Text style={styles.buttonText}>Find Two Sum</Text>
            </TouchableOpacity>
            {result !== null && <Text style={styles.result}>Indices: [{result[0]}, {result[1]}]</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, backgroundColor: '#f2f2f2'},
    title: {fontSize: 24, marginBottom: 24},
    input: {
        width: '80%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#fff'
    },
    button: {paddingVertical: 12, paddingHorizontal: 32, backgroundColor: '#007AFF', borderRadius: 8, marginBottom: 24},
    buttonText: {color: '#fff', fontSize: 16},
    result: {fontSize: 20, fontWeight: '600'},
});