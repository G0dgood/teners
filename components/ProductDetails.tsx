import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Accordion from './Accordion';
import { FontAwesome, FontAwesome6, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Banner from './BannerSlider';
import { colors } from '../css/colorsIndex';
export const SLIDER_WIDTH = Dimensions.get('window').width + 100
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5)

const ProductDetails = () => {
	const navigation = useNavigation();




	return (
		<ScrollView style={styles.container}>
			<View style={styles.titleContainer}>
				<TouchableOpacity style={styles.angleleft} onPress={() => navigation.goBack()}>
					<FontAwesome name="angle-left" size={20} color="#131313" />
				</TouchableOpacity>
			</View>

			{/* Carousel Cards */}
			<Banner />

			<View style={styles.detailsTextContainer}>
				<View style={styles.detailsTextContainersub}>
					<Text style={styles.detailsTextsub}>African Donut Mix (Puff Puff)</Text>
					<Text style={styles.detailsTextsub1}>£3.99</Text>
				</View>
				<Text style={styles.detailsTextmore}>
					Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly o....<Text style={styles.detailsText}>Read more</Text>
				</Text>
			</View>

			{/* Accordion */}
			<Accordion />

			<View style={styles.minusAnsplusContainer}>
				<TouchableOpacity style={styles.minus}>
					<FontAwesome6 name="minus" size={18} color="#E1E5E9" />
				</TouchableOpacity>
				<Text style={styles.checkoutNumber}>1</Text>
				<TouchableOpacity style={styles.plus}>
					<Octicons name="plus" size={20} color="#4A4A4A" />
				</TouchableOpacity>
			</View>

			<View style={styles.checkoutContainer}>
				<TouchableOpacity style={styles.checkout}>
					<Text style={styles.checkoutText}>Add to cart</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.Subscribe}>
					<Text style={styles.subscribeText}>Subscribe to a Plan</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

export default ProductDetails

const styles = StyleSheet.create({

	activeImage: {
		borderWidth: .2,
		borderColor: colors.accent_orange,
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 5,
		backgroundColor: '#D9D9D9',
		marginHorizontal: 5,
	},
	activeDot: {
		backgroundColor: colors.accent_orange,
	},
	checkoutNumber: {
		fontSize: 14,
		fontFamily: 'Poppins_600SemiBold',
	},

	checkoutText: {
		color: colors.white,
		fontFamily: 'Poppins_500Medium',
	},
	subscribeText: {
		color: colors.accent_orange,
		fontFamily: 'Poppins_500Medium',
	},


	checkout: {
		height: 48,
		backgroundColor: colors.accent_orange,
		width: "100%",
		borderRadius: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

	},
	Subscribe: {
		height: 48,
		backgroundColor: colors.white,
		width: "100%",
		borderRadius: 50,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: colors.accent_orange,
		marginBottom: 50,
	},
	checkoutContainer: {
		gap: 16,
		paddingHorizontal: 24,
		width: "100%",
	},

	minusAnsplusContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		marginTop: 40,
		marginBottom: 24,
	},

	minus: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
		padding: 15,
		borderRadius: 8,
	},
	plus: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
		padding: 15,
		borderRadius: 8,
	},

	detailsTextsub1: {
		fontFamily: "Poppins_500Medium",
		fontSize: 16,
		color: colors.accent_orange,
	},
	detailsTextsub: {
		fontFamily: "Poppins_500Medium",
		fontSize: 16,
		color: colors.black,
	},

	detailsTextContainersub: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	detailsTextmore: {
		color: "#4A4A4A",
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
	},

	detailsTextContainer: {
		paddingHorizontal: 24,
		gap: 8,
		marginBottom: 44,
	},

	detailsText: {
		color: colors.accent_orange,
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
	},

	dots1: {
		width: 8,
		height: 8,
		borderRadius: 50,
		backgroundColor: colors.accent_orange,
	},

	dots: {
		width: 8,
		height: 8,
		backgroundColor: "#D9D9D9",
		borderRadius: 50,
	},

	dotsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 2,
		marginVertical: 24,
	},

	require: {},

	productImgmain: {
		width: "100%",
		height: 304,
		borderRadius: 16,
		backgroundColor: colors.white,
	},

	productImgContainer: {
		paddingHorizontal: 24,
		width: "auto"
	},

	angleleft: {
		width: 36,
		height: 36,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E1E5E9",
		backgroundColor: colors.white,
		borderRadius: 8,
	},
	titleContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 100,
		paddingBottom: 20,
		paddingHorizontal: 24,
	},

	container: {
		flex: 1,
		backgroundColor: "#F9F9F9",
		paddingBottom: 5
	}

})