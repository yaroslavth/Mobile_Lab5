import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";
import ImageComponent from "./ImageComponent";
import { useScreenDimensions, Top } from '../conststants/global'

const ImageLibrary = () => {

    const [imageData, setImageData] = useState([]);

    const screenDimensions = useScreenDimensions();
    const landscape = screenDimensions.isLandscape

    const pickImage = async () => {

        const pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });

        if (pickedImage.cancelled) {
            console.log('cancelled')
        } else {
            setImageData(prevState => [...prevState, { uri: pickedImage.uri }])
        }

    };

    const mergeArrays = (arr = [], maxArrSize = 8) => {
        const result = [];
        for (let i = 0; i < Math.ceil(arr.length / maxArrSize); i++) {
            result[i] = arr.slice(i * maxArrSize, (i * maxArrSize) + maxArrSize);
        }
        return result;
    };

    const CrateImage = mergeArrays(imageData).map(
        item => (
            <ImageComponent
                key={item[0].uri}
                data={item}
                width={screenDimensions.width / 4}
                height={landscape ? screenDimensions.height / 2.5 : screenDimensions.height / 6.5}
            />
        )
    );

    return (
        <>
            <View>
                <Appbar.Header theme={Top}>
                    <Appbar.Action icon="home"/>
                    <SearchBar
                        placeholder='Search'
                        style={{flex: 1}}
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={pickImage}
                    />
                </Appbar.Header>
            </View>
            <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
                {
                    imageData.length === 0 ?
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center", height: "100%"}}>
                            <Text style={{fontStyle: "bold", fontSize: 20}}>
                                Add something
                            </Text>
                        </View> :
                        <ScrollView style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
                            { CrateImage }
                        </ScrollView>
                }
            </View>
        </>
    );
};

export default ImageLibrary
