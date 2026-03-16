import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';


export default function TransportTypeBar({navigation, data}){
    return (
        <View style={styles.rootContainer}>
            <FlatList 
                data={data}
                keyExtractor={(item)=> item.route_id}
                renderItem={({item})=> (
                    <Text>
                        Line number {item.route_short_name} - {item.route_long_name}
                    </Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    }
})