import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class facebook extends React.Component{
    render(){
        return(
            <View style = {styles.FB}>
                <Text>Your Facebook Account!</Text>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    FB:{
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1,
    }
})