import {PADDING} from "../../constants/Constants";
import {RenderItem} from "../../components/RenderItem/RenderItem";
import {Header, headerStyles} from "../../components/Header/Header";
import {Footer, footerStyles} from "../../components/Footer/Footer";
import {EmptyList} from "../../components/EmptyList/EmptyList";
import {FlatList, View} from "react-native";
import React from "react";

export type ItemType = {
    id: number
    title: string
    price: number
    image: any
}
const images = [
    require('../../../assets/image1.png'),
    require('../../../assets/image2.png'),
    require('../../../assets/image3.png'),
    require('../../../assets/image4.png'),
    require('../../../assets/image5.png'),
    require('../../../assets/image6.png'),
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

export const Shop = () => {
    return <FlatList
        bounces={false}
        contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={RenderItem}
        data={fakeData}
        ListHeaderComponent={<View/>}
        ListFooterComponent={Footer}
        ListFooterComponentStyle={footerStyles.footer}
        ListEmptyComponent={EmptyList}
        stickyHeaderIndices={[0]}
    />
}