import React from "react";
import { View, Text } from "react-native";

export default class IO extends React.Component {

    static input = (JSONdata) => {
        console.log(JSONdata);
    };

    render() {
        return (
            {
                title: "title body",
                body: "body body"
            }
        )
    };
}