import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import {Content, Card, CardItem, Body } from "native-base";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AppStyles } from "../../AppStyles";

var { height, width } = Dimensions.get('window');


export default class HistoryScreen extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        const { notify } = this.state
        return (
            <View>
                 <Text style={{ fontFamily: 'TitilliumWeb-SemiBold', color: '#797979',padding:10,textAlign:'center', fontSize: 18, letterSpacing: 0 }} >Recommendations Based on Previous History</Text>
            
            <ScrollView>
                <Content padder>
                    <Card style={styles.card} >
                        <CardItem header bordered>
                            <Text style={{ fontFamily: 'TitilliumWeb-SemiBold', color: '#797979', fontSize: 24, letterSpacing: 4 }} >NativeBase</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text style={{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 1, color: '#7b7b7b' }} >- ReactJS</Text>
                                <Text style={{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 1, color: '#7b7b7b' }} >- Java</Text>
                                <Text style={{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 1, color: '#7b7b7b' }} >- Python</Text>
                                <Text style={{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 1, color: '#7b7b7b' }} >- C#</Text>
                                <Text style={{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 1, color: '#7b7b7b' }} >- R</Text>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="map-marker" size={22} color="gray" />
                            <Text style={{ fontFamily: 'TitilliumWeb-Light', color: '#bab6b6', fontSize: 14, letterSpacing: 4 }} >Mumbai,Maharahstra</Text>
                        </CardItem>
                        <View style={{ display: 'flex' }} >
                            <TouchableOpacity
                                style={{
                                    flex: 1, justifyContent: 'center', alignItems: 'center',
                                    height: 40,
                                    width: 160,
                                    borderRadius: 10,
                                    backgroundColor: "#ff5a66",
                                    marginTop: 20,
                                    shadowColor: 'rgba(0,0,0, .4)', // IOS
                                    shadowOffset: { height: 1, width: 1 }, // IOS
                                    shadowOpacity: 1, // IOS
                                    shadowRadius: 1,
                                    padding: 25,
                                    elevation: 10
                                }}>
                                <Text style={{ color: '#eee', fontFamily: 'TitilliumWeb-Light', color: '#fff', letterSpacing: 2 }} >Apply Now</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                </Content>
                </ScrollView>
                </View>
                )
            }
        }
        
const styles = StyleSheet.create({
    card: {
        borderRadius: 14,
        fontFamily: 'TitilliumWeb',
        backgroundColor: '#fff',
        padding: 22,
        shadowColor: "#888",
        shadowOffset: {
            width: 10,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 10,
    },
    homepage: {
        flex: 1,
    },
    introHome: {
        height: "42%",
        width: "170%",
        alignSelf: "center",
        display: "flex",
        alignItems: 'center',
        marginTop: "-10%",
        paddingTop: "13%",
        backgroundColor: '#ff5a66'
    },
    Title: {
        color: 'rgb(245,245,245)',
        fontSize: 34,
        fontWeight: '700',
        letterSpacing: 4,
        fontFamily: 'TitilliumWeb-Light'
    },
    Titleinfo: {
        color: 'rgb(245,245,245)',
        fontSize: 10,
        letterSpacing: 2,
        fontFamily: 'TitilliumWeb-Light'
        // marginBottom: 10,
    },
    intro: {
        color: 'rgb(245,245,245)',
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        letterSpacing: 2,
        fontFamily: 'TitilliumWeb-Light'
    },
    Pickers: {
        flexDirection: 'column'
    },
    picker: {
        color: '#ffff',
        letterSpacing: 2,
        fontFamily: 'TitilliumWeb-Light'
    },
    picker2: {
        color: '#ffff',
        fontSize: 16,
        marginLeft: '2%',
        marginBottom: 15,
    },
    loginContainer: {
        width: '90%',
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 10,
        borderWidth: 1,
        borderColor: '#cc8d91',
        alignItems: 'center',
        alignSelf: 'center'
        // marginTop: 30
    },
    skills: {
        width: '50%',
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 8,
        fontSize: 15,
        textAlign: 'center'
        // marginTop: 30
    },
    cardButton: {
        width: '60%',
        backgroundColor: AppStyles.color.tint,
        borderRadius: AppStyles.borderRadius.main,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
        // marginTop: 30
    },
    loginText: {
        color: AppStyles.color.white
    },
});