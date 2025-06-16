
import React from 'react';
import { Platform, View, StyleSheet, Pressable } from 'react-native';
import { Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import Header from '../components/navbar';
import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props: any) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.drawerHeader}>
                <View style={styles.headerIcons}>
                    <Pressable
                        onPress={() => {}}
                        style={({ pressed }) => [
                            styles.iconButton,
                            pressed && styles.iconButtonPressed
                        ]}
                    >
                        <Ionicons name="search" size={24} color="#000" />
                    </Pressable>
                    <Pressable
                        onPress={() => props.navigation.closeDrawer()}
                        style={({ pressed }) => [
                            styles.iconButton,
                            pressed && styles.iconButtonPressed
                        ]}
                    >
                        <Ionicons name="close" size={24} color="#000" />
                    </Pressable>
                </View>
            </View>
            <DrawerContentScrollView {...props}>
                <View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    );
}

export default function RootLayout() {
    if (Platform.OS === 'web') {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <Slot />
                </View>
            </View>
        );
    }

    return (
        <Drawer
            screenOptions={{
                headerShown: true,
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="pages/answers/calculator"
                options={{
                    title: 'Adding Two Numbers',
                    drawerLabel: 'Adding Two Numbers'
                }}
            />
            <Drawer.Screen
                name="pages/answers/twosum"
                options={{
                    title: 'Two Sum',
                    drawerLabel: 'Two Sum'
                }}
            />
        </Drawer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        marginTop: 60,
    },
    drawerHeader: {
        marginTop: 36,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },

    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
    },
    iconButton: {
        padding: 8,
        marginLeft: 8,
    },
    iconButtonPressed: {
        opacity: 0.7,
    },
});