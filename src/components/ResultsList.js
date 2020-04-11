import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title,results}) => {
    console.log(results.length)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=>result.id}
                renderItem={({item})=>{
                    return <ResultsDetail result={item}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15
    },
})

export default ResultsList
