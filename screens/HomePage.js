import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { LinearGradient } from 'expo-linear-gradient';
import Searchbar from '../components/Searchbar';


export default function HomePage(){
    return (
        
            <View style={styles.rootContainer}>
                <LinearGradient colors={['rgba(19, 102, 39, 0.8)', 'transparent']} style={{flex: 1}}>
                    <View style={styles.icon}>
                        <Octicons name="location" size={100} color="black" />
                    </View>
                    <Searchbar/>
                    <Searchbar/>
                </LinearGradient>
            </View>

    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    icon: {
        alignItems: 'center',
        marginVertical: 50
    },

})