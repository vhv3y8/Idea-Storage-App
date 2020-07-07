import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import IO from "./IO";

export default class AddScreen extends React.Component {
    

    state = {
        title1: "이것은 타이틀입니다",
        body1: "이것은 body입니다"
    };
    
    
    _saveButtonClicked = () => {
        console.log(this.state);
    };

    render() {
        const { route } = this.props;

        return (
            <View style={styles.container}>
                <Text>this is AddScreen!!</Text>
                <Text> {route.params.title}, {route.params.body} </Text>
                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={this._saveButtonClicked}
                >
                    <Text>저장하기 버튼</Text>
                </TouchableOpacity>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    saveButton: {
        width: 100,
        height: 30,
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    }
})