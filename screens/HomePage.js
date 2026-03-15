import {View, Text, StyleSheet, TextInput, Pressable, Animated} from 'react-native';
import { useEffect, useRef, useState } from 'react';

//unsupported on nodeveloper
import {unzip} from 'react-native-zip-archive';


import Octicons from '@expo/vector-icons/Octicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import Searchbar from '../components/Searchbar';
import SubmitButton from '../components/SubmitButton';
import { fetchSchedule } from '../services/fetchSchedule';


export default function HomePage({navigation}){
    const slideAnim = useRef(new Animated.Value(500)).current;
    const [buttonsPressed, setButtonsPressed] = useState(false);
    const [text, onChangeText] = useState('');
    const [textSecond, onChangeTextSecond] = useState('');


    function handleOnPressSubmit(){
        navigation.navigate('TimetablePage');
        handleSearch();
    }

    const handleSearch = async()=> {
        const data = await fetchSchedule();
        console.log('handleSearch data is: ', data);
    };


    useEffect(()=> {
        const checkButtons = ()=> {
            console.log('inside console.log dfad')
            if(text?.length > 1 &&  textSecond?.length > 1){
                console.log('the value has been updated');
                setButtonsPressed(true);
            }else{
                console.log(text, textSecond);
                console.log('not yet');
            }
        };

        checkButtons();
        return console.log('check once again');

    }, [text, textSecond])

    useEffect(()=> {
        const showSubmit = () => {
            Animated.timing(slideAnim, {
                toValue: 80,
                duration: 1000,
                useNativeDriver: true
            }).start();
        };

        if(buttonsPressed){
            showSubmit();
        }

        return console.log('show submit fired');
    }, [buttonsPressed])


    return (
        <View style={styles.rootContainer}>
            <LinearGradient colors={['rgba(19, 102, 39, 0.8)', 'transparent']} style={{flex: 1}}>
                <View style={styles.icon}>
                    <Octicons name="location" size={100} color="black" />
                </View>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Poznań Bus Schedule</Text>
                </View>
                <Searchbar title={'Set the starting point'} onValueChange={onChangeText}/>
                <Searchbar title={'Set the destination'} onValueChange={onChangeTextSecond}/>
                    <Animated.View
                        style={{
                            position: 'relative',
                            bottom: 50,
                            transform:[{translateY: slideAnim}]
                        }}
                    >
                        <SubmitButton onPress={handleOnPressSubmit}/>
                    </Animated.View>
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
        marginTop: 50
    },
    info: {
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoText: {
        fontSize: 20,
        fontWeight: '600'
    }
})