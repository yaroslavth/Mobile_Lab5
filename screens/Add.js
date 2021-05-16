import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { ButtonTheme } from "../conststants/global";
import { Button } from "react-native-elements";
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Loader from "./Loader";

const Add = ({ navigation, route }) => {

    const { mainData } = route.params;
    const { setMainData } = route.params;

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');

    function parsedCall(getData, set) {
        let itemId = 100
        try {
            const number = parseInt(price);
            if (isNaN(number)) { setPrice('enter number')
                setTimeout(() => {setPrice('')}, 2000);
            } else {
                const newItem = { image: '', isbn13: itemId, price: price, subtitle: subtitle, title: title,}
                const newMainData = [...getData, newItem]
                set(newMainData)
                navigation.navigate('Library')
            }
        } catch(error) {
            console.log('error', error);
        }
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled" style={{backgroundColor: "#eee"}}>
            <Loader loading={true}/>
            <View style={{padding: 50, flex: 1}}>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Title'}
                        value={title}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{setTitle('')}}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(data) => setTitle(data)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Subtitle'}
                        value={subtitle}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{setSubtitle('')}}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(data) => setSubtitle(data)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        hintTextColor={'#000'}
                        underlineColorAndroid={'#000'}
                        keyboardType="numeric"
                        label={'Price'}
                        value={price}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{setPrice('')}}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(data) => setPrice(data)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button
                        onPress={() => { parsedCall(mainData, setMainData)} }
                        theme={ ButtonTheme }
                        title="Add"
                        buttonStyle={{ width: 150 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default Add
