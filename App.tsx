import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {HEIGHT, PADDING, WIDTH} from "./src/Constants/Constants";
import React from "react";
import {Header, headerStyles} from "./src/components/Header/Header";
import {Footer, footerStyles} from "./src/components/Footer/Footer";
import {EmptyList} from "./src/components/EmptyList/EmptyList";
import {RenderItem} from "./src/components/RenderItem/RenderItem";

export type ItemType = {
    id: number
    title: string
    price: number
    image: any
}
const images = [
    require('./assets/image1.png'),
    require('./assets/image2.png'),
    require('./assets/image3.png'),
    require('./assets/image4.png'),
    require('./assets/image5.png'),
    require('./assets/image6.png'),
]
const titles = [
    'Apple iPhone 13 128GB Blue',
    'Apple iPhone 14 Pro 128GB Space Black',
    'Apple iPhone 12 128GB Purple',
    'Apple iPhone SE 128GB 2022 Midnight',
    'Apple iPhone 13 512GB Midnight',
    'Apple iPhone 14 Pro Max 256GB Purple'
]
const prices = [999, 1199, 799, 599, 899, 1199]

const fakeData: ItemType[] = [...Array(12)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
    image: images[index % images.length],
}))

export default function App() {

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}></StatusBar>
            <FlatList
                bounces={false}
                contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns={2}
                renderItem={RenderItem}
                data={fakeData}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={headerStyles.header}
                ListFooterComponent={Footer}
                ListFooterComponentStyle={footerStyles.footer}
                ListEmptyComponent={EmptyList}
                stickyHeaderIndices={[0]}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e5e5e5',
        width: WIDTH,
        height: HEIGHT
    },
});
