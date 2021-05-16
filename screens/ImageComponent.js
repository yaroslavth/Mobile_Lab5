import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-image-progress';

const ImageComponent = ({ data, width, height}) => {
    const style = {
        width: width,
        height: height
    }
    const style2 = {
        width: width * 3,
        height: height * 3
    };
    const createElem = (uri, optionsStyles = style) => (
        <Image
            style={optionsStyles}
            source={uri}
            threshold={150}
        />
    );
    return (
        <View>
            <View style={{ display: "flex", flexDirection: "row"}}>
                <View style={{display: "flex", flexDirection: "column"}}>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        {data[0] && createElem(data[0])}
                        {data[2] && createElem(data[2])}
                        {data[3] && createElem(data[3])}
                        {data[4] && createElem(data[4])}
                    </View>
                </View>
                <View style={{display: "flex", flexDirection: "column"}}>
                    {data[1] && createElem(data[1], style2)}
                    <View style={{display: "flex", flexDirection: "row"}}>
                        {data[5] && createElem(data[5])}
                        {data[6] && createElem(data[6])}
                        {data[7] && createElem(data[7])}
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ImageComponent

