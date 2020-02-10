import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, StatusBar, ActivityIndicator, Linking, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { normalize } from '../../Static/Functions/NormalizeFont'
import { Icon, Picker, Form, Content, Card, CardItem, Text, Body } from "native-base";
import { Overlay, CheckBox } from 'react-native-elements';
import { AppStyles } from "../../AppStyles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Axios from 'axios';

const array = ['machinelearning', 'deeplearning', 'tensorflow', 'scala', 'sql', 'hqdoop', 'flutter', 'django', 'kotlin'];
const array2 = ['Database Manager', 'Graphic Designer', 'Mobile App Development', 'Software Developer', 'Web Developer', 'Data Engineer', 'ML Developer'
    , 'Blockchain Developer', 'Data Scientist', 'AR Developer', 'Game Developer'];

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: 'jobtitle',
            selectedItems: [],
            selectedItems2: '',
            isVisible: false,
            checked: false,
            component: [false, false, false, false, false, false, false, false, false],
            components: [false, false, false, false, false, false, false, false, false, false, false],
            loading: false,
            searched: false,
            results: []
        };
    }


    onValueChange(value) {
        this.setState({
            sort: value
        })
    }

    getList = (text) => {
        const { component } = this.state;
        console.log(component[array.indexOf(text.props.value)])
        if (!component[array.indexOf(text.props.value)]) {
            const newArr = [...this.state.selectedItems, text.props.value]
            component[array.indexOf(text.props.value)] = !component[array.indexOf(text.props.value)],
                this.setState({
                    selectedItems: newArr,
                    [component[array.indexOf(text.props.value)]]: component[array.indexOf(text.props.value)]
                })
        }
        else {
            const index = this.state.selectedItems.indexOf(text.props.value);
            if (index > -1) {
                const x = this.state.selectedItems;
                x.splice(index, 1);
                this.setState({
                    selectedItems: x
                })


            }
            component[array.indexOf(text.props.value)] = !component[array.indexOf(text.props.value)],
                this.setState({
                    [component[array.indexOf(text.props.value)]]: component[array.indexOf(text.props.value)]
                })
        }
    }
    getList2 = (text) => {
        const { components } = this.state;
        components[array.indexOf(text)] = !components[array.indexOf(text)],
            this.setState({
                isVisible: false,
                selectedItems2: text,
                [components[array.indexOf(text)]]: components[array.indexOf(text)]
            })
    }


    pickerFunctionSkill = () => {
        return (
            <View>
                <CheckBox
                    // center
                    title='Machine Learning'
                    // iconRight
                    value='machinelearning'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[0]}
                    ref={ref => this.d1 = ref}
                    onPress={() =>
                        this.getList(this.d1)
                    }
                />
                <CheckBox
                    // center
                    title='Deep Learning'
                    // iconRight
                    value='deeplearning'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[1]}
                    ref={ref => this.d2 = ref}
                    onPress={() => this.getList(this.d2)}
                />
                <CheckBox
                    // center
                    title='Tensor Flow'
                    // iconRight
                    value='tensorflow'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[2]}
                    ref={ref => this.d3 = ref}
                    onPress={() => this.getList(this.d3)}
                />
                <CheckBox
                    // center
                    title='Scala'
                    // iconRight
                    value='scala'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[3]}
                    ref={ref => this.d4 = ref}
                    onPress={() => this.getList(this.d4)}
                />
                <CheckBox
                    // center
                    title='SQL'
                    // iconRight
                    value='sql'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[4]}
                    ref={ref => this.d5 = ref}
                    onPress={() => this.getList(this.d5)}
                />
                <CheckBox
                    // center
                    title='Hadoop'
                    // iconRight
                    value='hadoop'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[5]}
                    ref={ref => this.d6 = ref}
                    onPress={() => this.getList(this.d6)}
                />
                <CheckBox
                    // center
                    title='Flutter'
                    // iconRight
                    value='flutter'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[6]}
                    ref={ref => this.d7 = ref}
                    onPress={() => this.getList(this.d7)}
                />
                <CheckBox
                    // center
                    title='Django'
                    // iconRight
                    value='django'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[7]}
                    ref={ref => this.d8 = ref}
                    onPress={() => this.getList(this.d8)}
                />
                <CheckBox
                    // center
                    title='Kotlin'
                    // iconRight
                    value='kotlin'
                    iconType='material'
                    checkedIcon='clear'
                    uncheckedIcon='add'
                    checkedColor='red'
                    checked={this.state.component[8]}
                    ref={ref => this.d9 = ref}
                    onPress={() => this.getList(this.d9)}
                />
                <TouchableOpacity
                    style={{
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        // height: '10%',
                        width: '80%',
                        borderRadius: 10,
                        backgroundColor: "#fff",
                        // marginTop :20,
                        shadowColor: 'rgba(0,0,0, .4)', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1,
                        padding: 25,
                        elevation: 10,
                        // marginBottom: 20,
                        marginTop: 10,
                        alignItems: 'center',
                        alignSelf: 'center',

                    }}>
                    <Text style={{ color: '#ff5a66', fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }} onPress={() =>{this.setState({ isVisible: false })}}>Done</Text>
                </TouchableOpacity>
            </View>
        )
    }


    pickerFunctionJob = () => {
        return (
            <ScrollView>
                <CheckBox
                    title='Database Manager'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Database Manager'
                    checked={this.state.components[0]}
                    onPress={() => this.getList2('Database Manager')}
                />
                <CheckBox
                    title='Graphic Designer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Graphic Designer'
                    checked={this.state.components[1]}
                    onPress={() => this.getList2('Graphic Designer')}
                />
                <CheckBox
                    title='Mobile App Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Mobile App Developer'
                    checked={this.state.components[2]}
                    onPress={() => this.getList2('Mobile App Developer')}
                />
                <CheckBox
                    title='Software Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Software Developer'
                    checked={this.state.components[3]}
                    onPress={() => this.getList2('Software Developer')}
                />
                <CheckBox
                    title='Web Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Web Developer'
                    checked={this.state.components[4]}
                    onPress={() => this.getList2('Web Developer')}
                />
                <CheckBox
                    title='Data Engineer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Data Engineer'
                    checked={this.state.components[5]}
                    onPress={() => this.getList2('Data Engineer')}
                />
                <CheckBox
                    title='ML Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='ML Developer'
                    checked={this.state.components[6]}
                    onPress={() => this.getList2('ML Developer')}
                />
                <CheckBox
                    title='Blockchain Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Blockchain Developer'
                    checked={this.state.components[7]}
                    onPress={() => this.getList2('Blockchain Developer')}
                />
                <CheckBox
                    title='Data Scientist'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Data Scientist'
                    checked={this.state.components[8]}
                    onPress={() => this.getList2('Data Scientist')}
                />
                <CheckBox
                    title='AR Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='AR Developer'
                    checked={this.state.components[9]}
                    onPress={() => this.getList2('AR Developer')}
                />
                <CheckBox
                    title='Game Developer'
                    // iconRight
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    value='Game Developer'
                    checked={this.state.components[10]}
                    onPress={() => this.getList2('Game Developer')}
                />

            </ScrollView>
        )
    }

    capitalizeFirstLetter = (string) => {
        const arr = string.split()
        var answer = ""
        arr.forEach(elm => {
            answer += elm.charAt(0).toUpperCase() + elm.slice(1) + " ";
            console.log(answer)
        })
        return answer;
    }

    search = () => {
        this.state.sort == 'jobtitle' ?
            Axios.get(`http://192.168.43.148:5000/search?param=${this.state.selectedItems2}&typeOfParam=${0}`)
                .then(res => {
                    console.log(res)
                    const results = res.data.ranks
                    this.setState({
                        results
                    })
                })
            :
            Axios.get(`http://192.168.43.148:5000/search?param=${this.state.selectedItems}&typeOfParam=${1}`)
                .then(res => {
                    console.log(res)
                    const results = res.data.ranks
                    this.setState({
                        results
                    })
                })

    }


    dispOverlay = () => {
        this.setState({ isVisible: true })
    }


    render() {
        return (
            <View style={styles.homepage} >
                <StatusBar backgroundColor="#ff5a66" barStyle="light-content" />
                <View style={[styles.introHome]} elevation={15} >
                    <Text style={styles.Title}>Jobiffy</Text>
                    <Text style={styles.Titleinfo}>Connecting employers and employees</Text>
                    <View>
                        <Text style={styles.intro}>Let's find your preferred candidate !!</Text>
                        <Content>
                            <Form style={styles.Pickers}>
                                <Picker
                                    placeholder="Select One"
                                    placeholderStyle={{ color: "#2874F0" }}
                                    mode="dropdown"
                                    style={styles.picker}
                                    selectedValue={this.state.sort}
                                    onValueChange={this.onValueChange.bind(this)}
                                >
                                    <Picker.Item label="Job Title" value="jobtitle" />
                                    <Picker.Item label="Skillset" value="skillset" />
                                </Picker>
                                <TouchableOpacity onPress={() => this.dispOverlay()}>
                                    <View style={{ flexDirection: 'row' }} >
                                        <Text style={styles.picker2}
                                            onPress={() => this.dispOverlay()}
                                        >
                                            {this.state.sort == 'jobtitle' ? this.state.selectedItems2 == '' ? 'Select preferred job title' : this.state.selectedItems2
                                                : 'Select preferred skill set'}
                                        </Text>
                                        <View style={{ flex: 0.94 }}></View>
                                        <MaterialCommunityIcons name="menu-down" size={22} />
                                    </View>
                                </TouchableOpacity>
                                <Overlay
                                    isVisible={this.state.isVisible}
                                    height='auto'
                                    onBackdropPress={() => this.setState({ isVisible: false })}
                                >
                                    {this.state.sort

                                        == 'jobtitle' ? this.pickerFunctionJob() : this.pickerFunctionSkill()}
                                </Overlay>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
                                    <TouchableOpacity
                                        onPress={() => console.warn(this.state.selectedValue)}
                                        style={{
                                            flex: 1, justifyContent: 'center', alignItems: 'center',
                                            height: 40,
                                            width: 200,
                                            borderRadius: 10,
                                            backgroundColor: "#fff",
                                            // marginTop :20,
                                            shadowColor: 'rgba(0,0,0, .4)', // IOS
                                            shadowOffset: { height: 1, width: 1 }, // IOS
                                            shadowOpacity: 1, // IOS
                                            shadowRadius: 1,
                                            padding: 25,
                                            elevation: 10,
                                            marginBottom: 20
                                        }}>
                                        <Text style={{ color: '#ff5a66', fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }} onPress={() => this.search()}>Search</Text>
                                    </TouchableOpacity>
                                </View>
                            </Form>
                        </Content>
                    </View>

                </View>
                <ScrollView>
                    {
                        this.state.results.ranked == undefined ? (
                            <ActivityIndicator size="small" color="#00ff00" />
                        ) : (
                                this.state.results.ranked.map(elm => {
                                    return (
                                        <Content padder>
                                            <Card style={styles.card} >
                                                <CardItem header bordered>
                                                    <Text style={{ fontFamily: 'TitilliumWeb-SemiBold', color: '#797979', fontSize: 24, letterSpacing: 4 }} >{this.capitalizeFirstLetter(elm)}</Text>
                                                </CardItem>
                                                <CardItem bordered>
                                                    <Body>
                                                        <View style={{ height: 10 }} ></View>
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
                                                        }}
                                                        onPress={() => {
                                                            Linking.openURL(`http://192.168.43.148:5000/Resumes/${elm}.pdf`).catch((err) => {
                                                                console.log(err)
                                                            })
                                                        }
                                                        }
                                                    >
                                                        <Text style={{ color: '#eee', fontFamily: 'TitilliumWeb-Light', color: '#fff', letterSpacing: 2 }} >View Profile</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </Card>
                                        </Content>
                                    )
                                })
                            )
                    }
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
    btn: {

    },
    userPlusGreet: {
        display: "flex",
        flexDirection: "column"
    },
    userName: {
        fontSize: normalize(23),
        color: "white"
    },
    IconBorder: {
        padding: 5,
        borderRadius: 30,
        backgroundColor: "white"
    },
    setCurrHome: {
        fontSize: normalize(10),
        color: "rgb(235,235,235)",
    },
    locView: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 25,
    },
    touchableHelp: {
        borderRadius: 10
    },
    Help: {
        alignSelf: "center",
        width: 0.85 * Dimensions.get('window').width,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 20,
        marginBottom: 10,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    HelpInner: {
        padding: 30,
        flex: 1,
        alignItems: 'center'
    },
    lowerHome: {
        flex: 1
    }
})
