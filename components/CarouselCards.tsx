import React from 'react'
import { StyleSheet, View, Image } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'


const CarouselCards = () => {

  const isCarousel = React.useRef(null)
  const [index, setIndex] = React.useState(0)

  const images = [
    require('../assets/img/producrDetailsImg.png'),
    require('../assets/img/producrDetailsImg.png'),
    require('../assets/img/producrDetailsImg.png'),
  ];
  const renderImageItem = ({ item }: any) => (
    <View style={styles.container}>
      <Image source={item} />
    </View>
  );

  return (
    <View>
      {/* @ts-ignore */}
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={images}
        renderItem={renderImageItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index: React.SetStateAction<number>) => setIndex(index)}
      />
      <View style={styles.pagination} >
        <Pagination
          dotsLength={images.length}
          activeDotIndex={index}
          // @ts-ignore  
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#DB3C25',
            // Add any additional styling for both active and inactive dots
          }}
          inactiveDotStyle={{
            // Style for inactive dots
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: '#D9D9D9', // Adjust color for inactive dots
          }}
          inactiveDotOpacity={1}
          inactiveDotScale={0.8}
          tappableDots={true}
        />
      </View>

    </View>
  )
}


export default CarouselCards

const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    margin: 0,
  },
});