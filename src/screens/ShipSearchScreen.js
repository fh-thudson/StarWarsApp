import React, { useState, useRef, useEffect, useContext } from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar, Dimensions, ActivityIndicator } from "react-native";
import DropDown from "../components/DropDown";
import { Context as AppContext } from "../context/AppContext";

const ShipSearchScreen = ({ navigation }) => {

    const { state, updateApiError, updateLoading, updateShipData  } = useContext(AppContext);
    const inputRef = useRef();
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(null);

    useEffect(() => {
        updateLoading(true);
        updateShipData().then(()=>{
            updateLoading(false);
        });
    }, []);

    if(state.loading){
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <DropDown style={styles.dropDown}/>
                <Text>Ships in Database {state.shipData.length}</Text>
                <FlatList
                    style={styles.flatList}
                    // data={state.shipData}
                    data={state.shipData}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <Text style={styles.itemText}>{item.name}</Text>
                                <Text style={styles.itemManufacturer}>{item.manufacturer}</Text>
                                <View style={styles.itemRow} >
                                    <Text>Model:</Text>
                                    <Text>{item.model}</Text>
                                </View>
                                <View style={styles.itemRow} >
                                    <Text>Cost:</Text>
                                    <Text>{item.cost_in_credits}</Text>
                                </View>
                                <View style={styles.itemRow} >
                                    <Text>Length:</Text>
                                    <Text>{item.length}</Text>
                                </View>
                                <View style={styles.itemRow} >
                                    <Text>Atmospheric speed:</Text>
                                    <Text>{item.max_atmosphering_speed}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    flatList: {
        width: Dimensions.get("window").width,
        height: 100,
    },
    dropDown: {
        width: "90%",
    },
    itemContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // height: 100,
        margin: 8,
        borderRadius: 10,
        backgroundColor: "lightgrey",
    },
    itemText: {
        fontSize: 24,
        color: "red",
    },
    itemManufacturer: {
        fontSize: 16,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "black",
    },
    itemRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
});

export default ShipSearchScreen;
