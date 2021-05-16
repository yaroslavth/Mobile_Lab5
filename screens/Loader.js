import React, { useState } from 'react';
import { View, Modal, ActivityIndicator, Dimensions } from 'react-native';
import { useScreenDimensions } from '../conststants/global'

const Loader = ({ loading }) => {

    const screenData = useScreenDimensions();
    const [loadInTime, setLoadInTime] = useState(loading);

    setTimeout( () => { setLoadInTime(false) },500);

    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={ loadInTime }
            supportedOrientations={['portrait', 'landscape']}
        >
            <View style={{ height: Dimensions.get('screen').height, alignItems: 'center', flexDirection: screenData.isLandscape ? 'row' : 'column', justifyContent: 'space-around', backgroundColor: '#eee'}}>
                <ActivityIndicator animating={ loadInTime } size={"large"} color="#000"/>
            </View>
        </Modal>
    )
}

export default Loader;
