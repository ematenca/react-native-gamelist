import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 5,
        backgroundColor: "white",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 8,
        paddingRight: 19
    },
    cardContent: {
        marginHorizontal: 25,
        marginVertical: 15,
        marginLeft: 20
    }
})
