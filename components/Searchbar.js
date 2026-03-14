import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Searchbar(){
    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchItem}>
                <TextInput 
                    placeholder='Choose the bus stop'
                    style={styles.input}
                />
            </View>
            <View style={styles.button}>
                <Pressable>
                    <Octicons name="check" size={32} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#233432',
        height: 80,
        padding: 10,
        flexDirection: 'row',
        margin: 5,
        borderRadius: 8
    },
    searchItem: {
        width: '80%',
        margin: 10
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10
    },
    button: {
        flex:1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
})