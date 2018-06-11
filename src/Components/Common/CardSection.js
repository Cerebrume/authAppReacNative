import React, { Component } from 'react';
import { View } from 'react-native';

class CardSection extends Component {
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
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#99adaf',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
}

export { CardSection };