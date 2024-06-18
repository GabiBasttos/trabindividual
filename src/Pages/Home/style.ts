import { StyleSheet } from "react-native";

export const stylehome = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff5d8',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },

    container2: {
        backgroundColor: '#fff5d8',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        height: 250,
    },

    logo: {
        width: 340, 
        height: 340,
        marginTop: 180,
    },


    title: {
        fontSize: 18,
        color: "#2f4a7d",
        fontWeight: 'bold',
        marginTop: -150,
             
    },


    button:{
        backgroundColor: '#0063ff',
        borderWidth: 0.5,
        borderColor: '#5c9af3',
        width: 450,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 12,
    },

    button2:{
        borderWidth: 1.5,
        borderColor: '#5c9af3',
        width: 450,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 12,
    },

    textButton:{
        fontSize: 15,
        color: "#fff"
    },

    textButton2:{
        fontSize: 15,
        color: "#1b51bd"
    },


});