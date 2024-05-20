

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import CardItems from '../components/CardItems';
import { data } from '../components/DataOptions';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../css/colorsIndex';


const Menu = () => {
	const [searchText, setSearchText] = useState('');
	const navigation = useNavigation();
	const filteredData: any = data.filter((item: { text: string; }) =>
		item.text.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<TouchableOpacity style={styles.angleleft} onPress={() => navigation.navigate("Login")}>
					<FontAwesome name="angle-left" size={20} color="black" />
				</TouchableOpacity>
				<Text style={styles.titleContainerText}>Menu</Text>
				<View style={styles.rightText} />
			</View>

			<View style={styles.titleSearch}>
				<Text style={styles.titleSearchIcon}>
					<Feather name="search" size={16} />
				</Text>

				<TextInput
					placeholder="Search"
					placeholderTextColor="#BEC3D5"
					style={styles.titleSearchIcon1}
					onChangeText={setSearchText}
					value={searchText}
				/>


			</View>
			<ScrollView style={styles.scrollView}  >
				<CardItems filteredData={filteredData} />
			</ScrollView>
		</View>
	)
}

export default Menu

const styles = StyleSheet.create({
	rightText: {
		width: 36,
		height: 36,
	},
	angleleft: {
		width: 36,
		height: 36,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E1E5E9",
		borderRadius: 8,
	},

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
		backgroundColor: "#FE5E26",
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
		backgroundColor: '#fff',
		borderRadius: 8,
		padding: 10,
		borderWidth: 1,
		borderColor: "#f6f6f6",
	},

	titleSearchIcon1: {
		color: "#858585",
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
	},

	titleSearchIcon: {
		paddingRight: 12,
	},

	titleSearch: {
		flexDirection: "row",
		alignItems: "center",
		marginHorizontal: 24,
		marginVertical: 15,
		backgroundColor: "#fff",
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#E1E5E9",
		paddingHorizontal: 58,
		paddingVertical: 10,
	},

	titleContainerText: {
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		color: "#151515"
	},

	titleContainer: {
		width: "100%",
		backgroundColor: "#F9F9F9",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderColor: "#E1E5E9",
		paddingTop: 80,
		paddingBottom: 20,
		paddingHorizontal: 24,

	},

	container: {
		flex: 1,
		backgroundColor: "#F9F9F9",
		paddingBottom: 5
	}
})



