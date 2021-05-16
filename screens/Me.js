import React from "react";
import {View, Text, Dimensions} from 'react-native'

const Me = () => {
    const dim = Dimensions.get("screen")
    return (
        <View style={{backgroundColor: "rgb(242, 242, 242)", height: dim.height}}>
            <View style={{ flex: 1,  justifyContent: 'center', flexDirection:'column', alignItems:'center' }}>
                <Text style={{ fontSize: 20 }}>Ткаченко Ярослав</Text>
                <Text style={{ fontSize: 20 }}>Група ІВ-83</Text>
                <Text style={{ fontSize: 20 }}>ЗК ІВ-8317</Text>
            </View>
        </View>
    )
}

export default Me
