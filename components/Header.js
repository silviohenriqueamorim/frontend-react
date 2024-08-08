import { View, Text, StyleSheet } from "react-native";

export default function Footer(){
    return (
        <View style={styles.header}>
            <Text>Header Ok</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#FF4500',
        justifyContent: 'center',
        alignItems: 'center',
    }
})