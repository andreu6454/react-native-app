import {Image, ListRenderItem, StyleSheet, Text, View} from "react-native";
import {BasketIcon} from "../../../SVG_icons/BasketIcon";
import React from "react";
import {PADDING, WIDTH} from "../../constants/Constants";
import {ItemType} from "../../screens/Shop/Shop";

export const RenderItem: ListRenderItem<ItemType> = ({item}) => {
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

const styles = StyleSheet.create({
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
})