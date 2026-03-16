import {View, Text, StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE }from 'react-native-maps';

export default function MapPage(){
    return (
        <View style={styles.rootContainer}>
            {/* <MapView
                provider={ PROVIDER_GOOGLE }
                key={'map'}
                style={styles.container}
                initialRegion={{
                    latitude: 52.25,
                    longitude: 21.23,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                }}
            /> */}
            
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        width: '100%', 
        height: '100%'
    }
})