import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    titleText: {
        fontFamily: "Raleway",
        fontSize: 20,
        left: 10
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    button: {
        top: 100,
        backgroundColor: "red",
        marginTop: 30
    },  
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
      },
      errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center',
      }
})