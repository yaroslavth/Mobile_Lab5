import React, {useEffect, useState} from 'react';
import { Dimensions } from "react-native";

export const Bottom = {
    dark: false,
    colors: {
        primary: '#000',
        card: '#000',
        text: '#fff',
        border: 'none',
        notification: 'rgb(255, 69, 58)',
    },
};

export const Top = {
    dark: false,
    colors: {
        primary: '#000',
        card: '#000',
        border: 'none',
        text: '#fff',
        notification: 'rgb(255, 69, 58)',
    },
};

export const ButtonTheme = {
    dark: false,
    colors: {
        primary: '#000',
    },
};

export const getImages = (img) => {
    switch (img) {
        case 'Image_01.png':
            return require('../assets/images/Image_01.png');
        case 'Image_02.png':
            return require('../assets/images/Image_02.png');
        case 'Image_03.png':
            return require('../assets/images/Image_03.png');
        case 'Image_05.png':
            return require('../assets/images/Image_05.png');
        case 'Image_06.png':
            return require('../assets/images/Image_06.png');
        case 'Image_07.png':
            return require('../assets/images/Image_07.png');
        case 'Image_08.png':
            return require('../assets/images/Image_08.png');
        case 'Image_10.png':
            return require('../assets/images/Image_10.png');
        default:
            return require('../assets/images/pastel.jpeg');
    }
};

export const getInfo = (id) => {
    switch (id) {
        case '9780321856715':
            return require('../assets/info/9780321856715.json');
        case '9780321862969':
            return require('../assets/info/9780321862969.json');
        case '9781118841471':
            return require('../assets/info/9781118841471.json');
        case '9781430236054':
            return require('../assets/info/9781430236054.json');
        case '9781430237105':
            return require('../assets/info/9781430237105.json');
        case '9781430238072':
            return require('../assets/info/9781430238072.json');
        case '9781430245124':
            return require('../assets/info/9781430245124.json');
        case '9781430260226':
            return require('../assets/info/9781430260226.json');
        case '9781449308360':
            return require('../assets/info/9781449308360.json');
        case '9781449342753':
            return require('../assets/info/9781449342753.json');
        default:
            return require('../assets/info/empty.json');
    }
};

export const useScreenDimensions = () => {
    const [screenData, setScreenData] = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenData(result.screen);
        };

        Dimensions.addEventListener('change', onChange);

        return () => Dimensions.removeEventListener('change', onChange);
    });

    return {
        ...screenData,
        isLandscape: screenData.width > screenData.height,
    };
};


export const data = [1, 0, 1, 0, 1, 0, 1, 0, 1];
