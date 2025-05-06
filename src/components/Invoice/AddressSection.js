import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const AddressSection = (context) => {
	const { styles } = context;

	return (
		<View style={ styles.view }>
			<Text style={ [styles.bold, styles.subtext] }>Vendor Address:</Text>
			<Text
				style={ [styles.bold, styles.subtext] }
			>Client Billing Address:</Text>
		</View>
	);
};

export default AddressSection;
