
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native'

class Header extends PureComponent {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
      fontSize: 30,
      textAlign: 'center',
      margin: 20,
      color: '#fff'
    },
    headerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#00e5ff',
        elevation: 2.4
    }
  });

export { Header };