import React, {useState,useEffect} from 'react'
import { View, Text, FlatList,Image,StyleSheet,StatusBar } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null)
    const id = navigation.getParam('id')
    console.log('navi',JSON.stringify(navigation.state))
    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(()=>{
        getResult(id)
    },[])

    if(!result){
        return null
    }
   

    return (
        <View>
            <StatusBar barStyle="light-content" />
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=> photo}
                renderItem={(item)=>{
                    return <Image style={styles.image} source={{ uri: item.item }}/>
                }}
            />
        </View>
    )
}
ResultsShowScreen.navigationOptions = {
    headerShown: false
};
const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 250,
        marginBottom: 5
    }
})

export default ResultsShowScreen
