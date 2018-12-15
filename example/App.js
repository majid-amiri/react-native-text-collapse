/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextCollapse from "react-native-text-collapse";

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 25 }}>react-native-text-collapse</Text>
                    <TextCollapse/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 45,
        paddingHorizontal: 15
    },
});
