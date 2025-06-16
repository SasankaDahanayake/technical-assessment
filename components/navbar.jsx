import React from 'react';
import { Platform, StyleSheet, View, TextInput, Text } from 'react-native';
import { Link, usePathname } from 'expo-router';

export default function Header() {
    if (Platform.OS !== 'web') return null;
    const pathname = usePathname();

    return (
        <View style={styles.header}>
            <View style={styles.nav}>
                <Link href="/pages/answers/calculator">
                    <Text style={[
                        styles.linkText,
                        pathname === '/pages/answers/calculator' && styles.activeLinkText
                    ]}>
                        Adding Two Numbers
                    </Text>
                </Link>
                <Link href="/pages/answers/twosum">
                    <Text style={[
                        styles.linkText,
                        pathname === '/pages/answers/twosum' && styles.activeLinkText
                    ]}>
                        Two Sum
                    </Text>
                </Link>
            </View>
            <TextInput
                placeholder="Search..."
                style={styles.search}
                placeholderTextColor="#a6a2a1"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        zIndex: 1000,
    },
    nav: {
        flexDirection: 'row',
        gap: 16,
    },
    linkText: {
        fontSize: 16,
        color: '#555',
    },
    activeLinkText: {
        color: '#007AFF',
        fontWeight: 'bold',
    },
    search: {
        width: 300,
        paddingVertical: 8,
        paddingHorizontal: 8,
        color: '#000',
        marginVertical: 16,
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
});