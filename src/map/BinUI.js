import React, { Component } from "react";
import { Text, View } from "react-native";

class BinUI extends Component {
    render() {
        return(
            <View>
                <Text>
                    {this.props.user.username}
                </Text>
            </View>
        );
    }
}

export default BinUI;