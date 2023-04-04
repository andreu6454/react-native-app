import {FlatList, Image, ListRenderItem, StatusBar, StyleSheet, Text, View} from 'react-native';
import {PADDING, WIDTH} from "./src/Constants/Constants";
import React from "react";
import {BasketIcon} from "./SVG_icons/BasketIcon";
import {Header} from "./src/Header/Header";
import {headerStyles} from "./src/Header/Header";
import {Footer, footerStyles} from "./src/Footer/Footer";

type ItemType = {
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
    const renderItem: ListRenderItem<ItemType> = ({item}) => {
        return <View style={styles.itemPhone} key={item.id}>
            <Image
                style={styles.phoneImage}
                source={item.image}
                resizeMode={'contain'}
            />
            <View style={styles.phoneInfo}>
                <Text>{item.title}</Text>
                <View style={styles.containerPhonePrice}>
                    <Text style={styles.phonePrice}>
                        {"$" + " " + item.price}
                    </Text>
                    <Text>
                        <BasketIcon
                            style={{justifyContent: 'flex-end'}}
                        />
                    </Text>
                </View>
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'}></StatusBar>
            <FlatList
                contentContainerStyle={{paddingHorizontal: PADDING}}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                numColumns={2}
                renderItem={renderItem}
                data={fakeData}
                ListHeaderComponent={Header}
                ListHeaderComponentStyle={headerStyles.header}
                ListFooterComponent={Footer}
                ListFooterComponentStyle={footerStyles.footer}
                stickyHeaderIndices={[0]}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    itemPhone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 12
    },
    phoneImage: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8
    },
    phoneInfo: {
        marginTop: 19,
        marginBottom: 22,
        paddingLeft: 12,
        paddingRight: 15
    },
    phoneTitle: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16
    },
    containerPhonePrice: {
        marginTop: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    phonePrice: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 12
    }
});
