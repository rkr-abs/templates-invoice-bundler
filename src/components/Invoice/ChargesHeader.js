import React from 'react';
import { View, Text } from '@react-pdf/renderer';

const ChargesHeader = (context) => {
	const { styles } = context;

	return <View style={ [styles.row, styles.bold] }>
		<Text style={ [styles.subRow, styles.num] }>Num</Text>
		<Text style={ [styles.subRow, styles.item] }>Items</Text>
		<Text style={ [styles.subRow] }>HSN / SAC</Text>
		<Text style={ [styles.subRow] }>Qty</Text>
		<Text style={ [styles.subRow] }>Rate</Text>
		<Text style={ [styles.subRow] }>Amount</Text>
	</View>;
};

export default ChargesHeader;
