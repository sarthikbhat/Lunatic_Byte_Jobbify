import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity, StatusBar } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../AppStyles";
import Axios from 'axios'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  setLogin = (e) => {
    const { email, password } = this.state;

    if (!email && !password) {
      Alert.alert(
        'Enter Credentials',
        'Invalid login credentials , please enter your login details',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      // Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&APPID=7150e5c228fa88d468d0be54047b2d56`)
      // Axios.get(`http://192.168.43.148:5000/login?email=${this.state.email}&password=${this.state.password}`)
      //   .then(res => {
      //     console.log(res)
      //     if (res.data.status == 200) {
      //       this.props.navigation.navigate('App')
      //     } else {
      //       alert('Invalid credentials')
      //     }
      //   })
      if (email == 'sagarbagwe' && password == 'aaaaaaaa')
        this.props.navigation.navigate('App')
      else
        alert('Invalid credentials')
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={AppStyles.color.background} barStyle="dark-content" />
        <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="E-mail or phone number"
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.setLogin()}
        >
          Log in
        </Button>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text style={styles.or}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  or: {
    fontFamily: AppStyles.fontName.main,
    color: "black",
    textDecorationLine: 'underline',
    color: '#6999c9',
    marginTop: '4%',
    fontSize: 20
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20
  },
  leftTitle: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center",
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  placeholder: {
    fontFamily: AppStyles.fontName.text,
    color: "red"
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text
  },
  facebookContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});
