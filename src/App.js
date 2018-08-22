import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
       firebase.initializeApp({
	    apiKey: 'AIzaSyAYjl-3freC7tO-3yyhkLpAPgqywWpWiUY',
	    authDomain: 'authentication-947fa.firebaseapp.com',
	    databaseURL: 'https://authentication-947fa.firebaseio.com',
	    projectId: 'authentication-947fa',
	    storageBucket: 'authentication-947fa.appspot.com',
	    messagingSenderId: '798036027055'
	  });
    }

	render() {
        return (
        	<View>
        	   <Header headerText='Authentication' />
        	   <LoginForm />
        	</View>
        );
	}
}


export default App; 