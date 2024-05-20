import React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet, ImageSourcePropType } from 'react-native';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../css/colorsIndex';

// Function to truncate text if it exceeds 7 characters
const truncateText = (text: string) => {
	return text.length > 11 ? text.substring(0, 11) + '...' : text;
};


const CardItems = ({ filteredData }: any) => {
	// Navigate to a screen with the name 'ProductDetails'
	const navigation = useNavigation();

	return (
		<View style={styles.cardContainer}>
			{filteredData.map((item: { id: React.Key | null | undefined; image: ImageSourcePropType | undefined; text: string; price: string | number | boolean }) => (
				<View key={item.id} style={styles.card}>
					<TouchableOpacity style={styles.cardIcon}>
						<AntDesign name="hearto" size={24} color="#4A4A4A" />
					</TouchableOpacity>
					<View style={styles.cardImages}>
						<Image source={item.image} style={styles.require} />
					</View>
					<View style={styles.addtoCartAmount}>
						<Text style={styles.addtoCartAmountText}>{truncateText(item.text)} </Text>
						<Text style={styles.addtoCartAmountText1}>{item.price}</Text>
					</View>
					<TouchableOpacity style={styles.addtoCart} onPress={() => navigation.navigate("ProductDetails")}>
						<SimpleLineIcons name="handbag" size={17} color={colors.white} />
						<Text style={styles.addtoCartColor}>Add to cart</Text>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
};

export default CardItems;


const styles = StyleSheet.create({

	require: {
		width: 94.37,
		height: 94.37,
	},

	cardImages: {
		marginTop: 10,
		height: 94.37,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},


	addtoCartAmountText1: {
		color: colors.accent_orange,
		fontFamily: 'Poppins_500Medium',
		fontSize: 11,

	},
	addtoCartAmountText: {
		color: colors.black,
		fontFamily: 'Poppins_500Medium',
		fontSize: 11,
	},
	addtoCartAmount: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
		marginTop: 12,
	},
	addtoCartColor: {
		color: colors.white,
		fontFamily: "Poppins_400Regular",
		fontSize: 12,
	},

	addtoCart: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: colors.accent_orange,
		paddingHorizontal: 15,
		paddingVertical: 9,
		borderRadius: 50
	},
	cardIcon: {
		flexDirection: "row",
		justifyContent: "flex-end"
	},


	scrollView: {
		flex: 1,
	},
	cardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		gap: 16,
		paddingTop: 16,
		paddingHorizontal: 24,
	},

	card: {
		width: "47.5%",
		height: 228,
		backgroundColor: colors.white,
		borderRadius: 8,
		padding: 10,
		borderWidth: 1,
		borderColor: "#f6f6f6",
	},
})