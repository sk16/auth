import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header,Button,Spinner,Card, CardSection  } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = {loggedIn : null};

    componentWillMount() {
       firebase.initializeApp({
	    apiKey: 'AIzaSyAYjl-3freC7tO-3yyhkLpAPgqywWpWiUY',
	    authDomain: 'authentication-947fa.firebaseapp.com',
	    databaseURL: 'https://authentication-947fa.firebaseio.com',
	    projectId: 'authentication-947fa',
	    storageBucket: 'authentication-947fa.appspot.com',
	    messagingSenderId: '798036027055'
	  });

      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
        	this.setState({loggedIn : true});
        } else {
        	this.setState({loggedIn : false});
        }
      });
    }

    renderContent() {
        switch (this.state.loggedIn) {
        	case true:
	        	return (
	        		<Card><CardSection><Button onPress = { () => firebase.auth().signOut() }>
	        		Log Out</Button></CardSection></Card>
	        	);
        	case false:
        	    return <LoginForm />;
        	default:
        	    return <Card><CardSection><Spinner size="large" /></CardSection></Card>;
        } 
    }

	render() {
        return (
        	<View>
        	   <Header headerText='Authentication' />
        	   { this.renderContent() }
        	</View>
        );
	}
}


export default App; 