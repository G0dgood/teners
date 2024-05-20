import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { List } from 'react-native-paper';
import { colors } from '../css/colorsIndex';

const Accordion = () => {
	// Array of titles for the accordions
	const titles = ['Ingredients', 'Nutritional Information', 'How to Prepare', 'Dietary Information', 'Storage Information', 'Extra'];

	const [expanded, setExpanded] = useState<any>(Array(titles.length).fill(false)); // State to track expanded state of each accordion

	// Function to toggle the expanded state of a specific accordion
	const toggleAccordion = (index: any) => {
		const newExpanded = [...expanded];
		newExpanded[index] = !newExpanded[index];
		setExpanded(newExpanded);
	};


	return (
		<View style={styles.accordionContainer}>
			<List.Section  >
				{titles.map((title, index) => (
					<List.Accordion
						key={index}
						title={title}
						expanded={expanded[index]} // Set expanded state based on index
						onPress={() => toggleAccordion(index)} // Toggle expanded state of specific accordion
						titleStyle={styles.titleStyle} // Style for the title
						style={styles.accordion}
					>
						<List.Item title="	Rare Eat Puff Puff Mix can be made into a deep-fried dough. They are made from yeast dough, shaped into balls and deep-fried until golden brown. It has a doughnut-like texture but slightly" />
					</List.Accordion>
				))}
			</List.Section>
		</View>
	)
};

export default Accordion


const styles = StyleSheet.create({

	accordionContainer: {
		borderTopWidth: 1,
		borderColor: "#E1E5E9",
		margin: 0,
		padding: 0,
	},

	titleStyle: {
		fontFamily: "Poppins_700Bold",
		fontSize: 14,
		color: "#151515",
	},

	accordion: {
		backgroundColor: colors.white,
		borderBottomWidth: 1,
		borderColor: "#E1E5E9"
	}
})