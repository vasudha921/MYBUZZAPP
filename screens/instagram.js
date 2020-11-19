import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class instagram extends React.Component{
    render(){
        return(
            <View style = {styles.Insta}>
                <Text>Your Instagram Account!</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    Insta:{
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1,
    }
})