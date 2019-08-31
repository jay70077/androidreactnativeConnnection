import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,NativeModules } from 'react-native';

export default class App extends Component {
    renderImage=(imgURI) =>{
        return (
            <Image source={{uri: imgURI}} />
        );
    }
        render()
        {
            return (

                <View style={styles.container}>


                    <Text style={styles.scores}>Hello Words</Text>
                </View>
            );
        }
    }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',

    },
    scores: {
        textAlign: 'center',
        color:'white',
        marginBottom:5
    },

});
