import React ,{useState, useCallback}from 'react'
import { StyleSheet, Text, View,FlatList, Image , useWindowDimensions} from 'react-native'

const ImageCarousel = ({images}: {images: [string]}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    // const onFlatListUpdated = useCallback(({viewableItems}) =>{
        
    // })
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <Image style={[styles.image, {width: windowWidth -20, height: windowHeight/3}]} source={{uri: item}} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidth}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig={{
                    waitForInteraction: true,
                    viewAreaCoveragePercentThreshold:50,
                    itemVisiblePercentThreshold: 75
                }}
                // onViewableItemsChanged={({changed}) =>{
                //     // if (viewableItems.length > 0) {
                //     //     setActiveIndex(viewableItems[0].index || 0);
                //     // }
                //    // console.log(viewableItems);
                //     console.log(changed);
                    
                    
                // }}
            />
            <View style={styles.dots}>
            {images.map((image, index) =>(
                <View style={[styles.dot,
                {backgroundColor: index === activeIndex ? '#c9c9c9': '#ededed'}
                ]} />
            ))}
            </View>
        </View>
    )
}

export default ImageCarousel

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    image: {
        resizeMode: 'contain',
        margin: 10,
    },
    dots:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    dot: {
        width:15,
        height:15,
        borderRadius:25,
        borderWidth:1,
        marginHorizontal: 5,   
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9'
    }
})
