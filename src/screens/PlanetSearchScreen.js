import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const PlanetSearchScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text>Planet Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default PlanetSearchScreen;