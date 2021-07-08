import * as React from "react";
import { Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
        alignSelf: 'center',
    }
})

const Cactus_img = () => (
    <Image source = {require('./cactus.png')} style = {styles.image}/>
)
export default Cactus_img;