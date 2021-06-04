import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Header({navigation, title}) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require("../assets/game_bg.png")} style={styles.header}>
            <Feather name="menu" size={24} color="black" onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image source={require("../assets/heart_logo.png")} style={styles.headerHeart}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get("screen").width,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
    },
    icon: {
        position: "absolute",
        left: 16
    },
    headerTitle: {
        flexDirection: "row"
    },
    headerHeart: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
});