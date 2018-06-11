import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './Common';
import firebase from 'firebase'

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onButtonPress = () => {
        const { email, password } = this.state

        this.setState({error: '', loading: true})

        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then( this.onLoginSuccess )
            .catch( (e) => {
                console.log('Auth failed', e)
                firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then( this.onLoginSuccess )
                .catch( (e) => {
                    console.log('Create user failed', e)
                    this.setState({error: 'Authentication Failed.', loading: false})
                })
            })
    }

    onLoginSuccess = () => {
        this.setState({
            error: '',
            email: '',
            password: '',
            loading: false
        })
    }

    renderButton = () => {
        const button = <Button onPress={this.onButtonPress}>Log in</Button>

        return this.state.loading ? 
            <Spinner size="large"/> : button
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={ email => this.setState({ email: email.trim() }) }
                        value={this.state.email}
                        label="Email"
                        placeholder="user@gmail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        onChangeText={ password => this.setState({ password }) }
                        value={this.state.password}
                        label="Password"
                        placeholder="your password here"
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;