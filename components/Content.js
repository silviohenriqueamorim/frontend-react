import { View, Text, StyleSheet } from "react-native"

export default function Content(){
    return (
        <View style={styles.Content}>
        <Text>Content Ok</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        backgroundColor: '#FF8C00',
        justifyContent: 'center',
        alignItems: 'center',
    }
})