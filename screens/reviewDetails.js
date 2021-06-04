import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles } from "../styles/global";
import Card from "../shared/card"

export default function ReviewDetails({route}) {

    const {title, body, rating} = route.params;

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>Nombre: {title}</Text>
                <Text style={globalStyles.titleText}>Tipo: {body}</Text>
                <View style={styles.rating}>
                    <Text >Puntaje: </Text>
                    {Array(Number(rating)).fill().map( () => <Image key={Math.random()} source={require('../assets/rating-1.png')} /> )}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 2,
        borderTopColor: '#eee'
    },
    ratingHearts:{
        flexDirection: 'row'
    }
})