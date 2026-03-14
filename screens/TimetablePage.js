import {View, Text, StyleSheet} from 'react-native';


export default function TimetablePage(){
    return (
        <View style={styles.rootContainer}>
            <Text>Timetable Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 50,
    }
})