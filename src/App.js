import React, { Component } from 'react';
import firebase from 'firebase'
import {
  StyleSheet,
  View,
} from 'react-native';
import { Header, Button, Spinner } from './Components/Common'
import LoginForm from './Components/LoginForm'

export default class App extends Component {
  state = {
    loggedIn: null
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyATt9TR6UbnZF7wMxfGkMQs7H1svgBjdac",
      authDomain: "authreactnative-932b5.firebaseapp.com",
      databaseURL: "https://authreactnative-932b5.firebaseio.com",
      projectId: "authreactnative-932b5",
      storageBucket: "authreactnative-932b5.appspot.com",
      messagingSenderId: "45196708205"
    };
    firebase.initializeApp(config);


    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  logOut = () => {
    firebase.auth().signOut()
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <Button
            onPress={this.logOut}>Log Out
          </Button>
        </View>)
      case false:
        return <LoginForm />
      default: 
        return <Spinner size='large'/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
       <Header headerText="Authentification"/>
       {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});
