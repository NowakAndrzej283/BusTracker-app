import {View, Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SubmitButton({onPress}){
    return (
        <View style={styles.rootContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <FontAwesome name="arrow-right" size={24} color="#020000" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#a6c088',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        borderWidth: 2,
        borderColor: 'green'
    }
})