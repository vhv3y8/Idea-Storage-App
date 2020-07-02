import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class MainScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>this is Test</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
})