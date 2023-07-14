import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";

const QuoteComponent = ({spining, quoteBtn}) => {
    const [quote, setQuote] = useState(null);

    const getRandomQuote = (quotes) => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomNumber];
        return quote;
    };

    useEffect(() => {
        runRandomQuote();
    }, []);

    const runRandomQuote = () => {
        const quotes = [
            '"May the Force be with you." - General Jan Dodonna, Star Wars: Episode IV - A New Hope',
            '"I am your father." - Darth Vader, Star Wars: Episode V - The Empire Strikes Back',
            '"Do or do not. There is no try." - Yoda, Star Wars: Episode V - The Empire Strikes Back',
            '"Luminous beings are we, not this crude matter." - Yoda, Star Wars: Episode V - The Empire Strikes Back',
            '"Your focus determines your reality." - Qui-Gon Jinn, Star Wars: Episode I - The Phantom Menace',
            '"The ability to destroy a planet is insignificant next to the power of the Force." - Darth Vader, Star Wars: Episode IV - A New Hope',
            '"Hello there!" - Obi-Wan Kenobi, Star Wars: Episode III - Revenge of the Sith',
            '"Chewie, we\'re home." - Han Solo, Star Wars: Episode VII - The Force Awakens',
            '"The greatest teacher, failure is." - Yoda, Star Wars: Episode VIII - The Last Jedi',
            '"I am all the Jedi." - Rey, Star Wars: Episode IX - The Rise of Skywalker',
        ];
        const newQuote = getRandomQuote(quotes);
        setQuote(newQuote);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.quoteText}>{quote}</Text>
            {quoteBtn ? 
                <TouchableOpacity style={styles.button} onPress={runRandomQuote}>
                    <Text style={styles.buttonText}>New Quote</Text>
                </TouchableOpacity>
            : null}
            {spining ? <ActivityIndicator size="large" color="red" /> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    quoteText: {
        fontSize: 24,
        margin: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 24,
        color: "black",
    },
});

export default QuoteComponent;
