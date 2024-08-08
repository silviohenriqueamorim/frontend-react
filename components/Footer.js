import { View, Text, StyleSheet } from "react-native";

export default function Footer(){
    return (
        <View style={styles.footer}>
            <Text>Footer Ok</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: '#FFA500',
        justifyContent: 'center',
        alignItems: 'center',
    }
})