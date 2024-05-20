import React from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome6, Octicons } from '@expo/vector-icons';
import { cartItems } from './DataOptions';
import { colors } from '../css/colorsIndex';


const CartItem = ({ item }: any) => {

	return (
		<View style={styles.cartImageMain}>
			<View style={styles.cartImageContainer}>
				<View style={styles.cartImageContainerSub}>
					<View style={styles.cartImage}>
						<Image source={item.imageSource} style={styles.require} />
					</View>
					<View style={styles.cartImageTextContainer}>
						<Text style={styles.cartImage1}>
							<Text style={styles.cartImage12}>{item.name}</Text>{item.description}
						</Text>
						<Text style={styles.cartImage2}>{item.price}</Text>
						<TouchableOpacity onPress={item.onDelete}>
							<AntDesign name="delete" size={24} color="#4A4A4A" style={styles.cartImage3} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.cartImageTextContainer1}>
					<TouchableOpacity style={styles.minus}>
						<FontAwesome6 name="minus" size={18} color="#4A4A4A" />
					</TouchableOpacity>
					<Text>{item.quantity}</Text>
					<TouchableOpacity style={styles.minus}>
						<Octicons name="plus" size={20} color="#4A4A4A" />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const CartItemList = () => {
	return (
		<>
			{cartItems.map((item: any, index: any) => (
				<CartItem key={index} item={item} />
			))}
		</>
	);
};

export default CartItemList


const styles = StyleSheet.create({

	cartImageMain: {
		padding: 24,
		marginTop: 10,
	},


	cartImageContainer: {
		flexDirection: 'row',
		justifyContent: "space-between"
	},


	cartImage: {
		width: 92,
		height: 92,
		borderRadius: 14,
	},

	cartImageContainerSub: {
		flexDirection: 'row',
		justifyContent: "space-between"
	},

	require: {
		width: 92,
		height: 92,
	},

	cartImage12: {
		fontFamily: 'Poppins_500Medium',
		fontSize: 14,
		color: colors.black
	},

	cartImage1: {
		fontFamily: "Poppins_400Regular",
		fontSize: 14,
	},

	cartImage2: {
		fontSize: 14,
		color: colors.accent_orange,
		fontFamily: 'Poppins_500Medium',
	},
	cartImage3: {
	},

	cartImageTextContainer: {
		gap: 12,
		padding: 5,
	},
	cartImageTextContainer1: {
		gap: 8,
		alignItems: 'center'
	},
	minus: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
		padding: 8,
		borderRadius: 8,
	},
})