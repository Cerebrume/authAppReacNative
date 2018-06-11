import React, { Component } from 'react';
import { View } from 'react-native';

class Card extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#99adaf',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export { Card };
