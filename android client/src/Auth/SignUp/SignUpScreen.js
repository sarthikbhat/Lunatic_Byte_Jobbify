import React from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import Button from "react-native-button";
import { AppStyles } from "../../AppStyles";
import Axios from 'axios'

export default class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        fullname:'',
        phone:'',
        email:'',
        password:''
    };
  }

  setOTP=(e)=>{
    const {fullname} = this.state;

    if(!fullname){
        Alert.alert(
            'Enter Credentials',
            'Invalid adhaar credentials , please enter your adhaar number',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    else{
      Axios.get(`http://192.168.43.148:5000/signup?email=${this.state.phone}&fname=${this.state.fullname}&pass=${this.state.password}`)
        .then(res => {
          console.log(res)
          if (res.data.status == 200) {
            this.props.navigation.goBack()
          } else {
            alert('Invalid credentials')
          }
        })
        
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Full Name"
            onChangeText={text => this.setState({ fullname: text })}
            value={this.state.fullname}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Email"
            onChangeText={text => this.setState({ phone: text })}
            value={this.state.phone}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.InputContainer}>
          <TextInput
            style={styles.body}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
            placeholderTextColor={AppStyles.color.grey}
            underlineColorAndroid="transparent"
          />
        </View>
        <Button
          containerStyle={[styles.facebookContainer, { marginTop: 50 }]}
          style={styles.facebookText}
          onPress={() => this.setOTP()}
        >
          Sign Up
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
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
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  facebookText: {
    color: AppStyles.color.white
  }
});