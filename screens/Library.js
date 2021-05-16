import React, { useState } from "react";
import {View, Text, ScrollView, Image, Dimensions, TouchableHighlight} from 'react-native'
import BooksList from '../assets/BooksList.json'
import { useScreenDimensions, getImages, Top } from '../conststants/global'
import { Appbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";
import Icon from 'react-native-vector-icons/FontAwesome'

const Library = ({ navigation }) => {

    let booksFromJson = []; BooksList.books.map( item => (booksFromJson.push(item)) )

    const [searchTxt, setSearchTxt] = useState('')
    const [mainData, setMainData] = useState(booksFromJson)

    const screenDimensions = useScreenDimensions();
    const landscape = screenDimensions.isLandscape

    const dim = Dimensions.get("screen")

    const filterItems = (array, text) => {
        if(text.trim().length === 0 || text.length === 0) {
            return array
        } else {
            return array.filter((item) => {
                if( item.title.replace(/[^a-zA-Z ]/g, "").toLowerCase().indexOf(text)> -1 ){
                    return (item)
                }
            })
        }
    }

    const visibleBooks = filterItems(mainData, searchTxt)

    const deleteItemFromArray = (id) => {
        const idx = mainData.findIndex((el) => el.isbn13 === id)
        const newBooksData = [...mainData.slice(0, idx),...mainData.slice(idx + 1)]
        setMainData(newBooksData)
    };

    return (
        <ScrollView style={{ backgroundColor: "#eee" }}>
            <View>
                <Appbar.Header theme={ Top }>
                    <Appbar.Action
                        icon="home"
                    />
                    <SearchBar
                        style={{ backgroundColor: 'rgb(242, 242, 242)', flex: 1}}
                        placeholder="Search some books"
                        onClearPress={() => {setSearchTxt('')}}
                        onChangeText={(txt) => setSearchTxt(txt.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s+/g, ' ').trim().replace(/,/g, ''))}
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={() => { navigation.navigate('Add', {mainData: mainData, setMainData: setMainData})}}
                    />
                </Appbar.Header>
            </View>
            <View>
                {
                    visibleBooks.length === 0 ?
                        <View style={{height: dim.height, paddingTop: landscape ? '15%' : '65%', flexDirection:'column', alignItems:'center'}}>
                            <Text style={{fontSize: 20, color: '#eee'}}>
                                Not found :(
                            </Text>
                        </View> :
                    visibleBooks.map(( item, i ) => {
                        return(
                            <View key={i}>
                                <TouchableHighlight onPress={() => { navigation.navigate('Info', {Id: item.isbn13})}}>
                                    <View style={{backgroundColor: '#000', borderRadius: 30, flexDirection: 'row', margin: 10}}>
                                        <View>
                                            <Image
                                                resizeMode="cover"
                                                source={getImages(item.image)}
                                                style={{height: 200, width: 150, borderBottomLeftRadius: 30, borderTopLeftRadius: 30,}}
                                            />
                                        </View>
                                        <View style={{marginLeft: '5%', width: '76%'}}>
                                            <Text style={{color: '#eee', flex: 0, width: landscape ? '100%' : '45%', fontSize: 16, marginBottom: 10, marginTop: 10, textAlign: 'left',}}>
                                                { item.title.length >= 43 ? item.title.slice(0, 43 - 1) + '…' : item.title }
                                            </Text>
                                            <Text style={{color: '#eee', flex: 0, width: landscape ? '100%' : '45%', fontSize: 14, marginBottom: 10, marginTop: 10, textAlign: 'left',}}>
                                                { item.subtitle.length === 0 ? 'Subtitle' : item.subtitle.length >= 40 ? item.subtitle.slice(0, 40 - 1) + '…' : item.subtitle }
                                            </Text>
                                            <Text style={{color: '#eee', position: 'absolute', bottom: -5, marginBottom: '5%'}}>
                                                { item.price.length === 0 ? 'Priceless' : item.price }
                                            </Text>
                                        </View>
                                        <TouchableHighlight
                                            style={{ position: "absolute", right: 0, top: 0, width: landscape ? '8%' : '10%', height: landscape ? '20%' : '18%', backgroundColor: '#000'}}
                                            onPress={() => { deleteItemFromArray(item.isbn13) }}>
                                            <View>
                                                <Icon
                                                    onPress={() => { deleteItemFromArray(item.isbn13) }}
                                                    style={[{color: '#eee', flex: 0, marginTop: landscape ? '12%' : '18%', alignSelf: 'center',}]}
                                                    size={ landscape ? 25 : 22}
                                                    name={'trash'}
                                                />
                                            </View>
                                        </TouchableHighlight>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Library


