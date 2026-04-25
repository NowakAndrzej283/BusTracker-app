import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { useState, useEffect } from 'react';

import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function Searchbar({title, onValueChange}){
    const [text, onChangeText] = useState(text);
    const [isCorrect, setIsCorrect] = useState(false);

    // check if the textInput is filled
    let textSize = text?.length > 1;

    return (
        <View style={styles.searchContainer}>
            <View style={styles.searchItem}>
                <TextInput 
                    placeholder={title}
                    style={styles.input}
                    value={text}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={styles.button}>
                { textSize &&
                <Pressable 
                    onPress={() => {
                        if(text.length > 1){
                            onChangeText(text);
                            onValueChange(text);
                            console.log('inside the onPress', text);
                            setIsCorrect(true);
                        }else{
                            setIsCorrect(false);
                        }
                    }}
                    style={({pressed}) => 
                        pressed ? styles.pressed : null
                    }    
                    disabled={isCorrect}
                >
                    <Octicons name="check" size={32} color="black" />
                </Pressable>
                }
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
        margin: 10,
        borderRadius: 8,
        elevation: 10
    },
    searchItem: {
        width: '80%',
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        padding: 5,
        fontSize: 18,
        fontWeight: '500'
    },
    button: {
        flex:1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 12
    },
    disabledButton: {
        opacity: 0.1,
    },  
    normal: {
        backgroundColor: 'white'
    },
    pressed: {
        opacity: 0.2
    }
})