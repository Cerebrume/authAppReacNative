import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={this.props.onPress}
            >
                <Text style={styles.textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#449dff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#449dff',
        marginLeft: 5,
        marginRight: 5
    }
}

export { Button };