import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';

const Item = (context) => {
	const { config: { hsnOrSAC }, styles, data } = context;
	const { item: { name, rate, amount, quantity, unit }, i } = data;
	const isProduct = InvoiceManager.isProduct(context);

	return <View style={ [styles.row] } wrap={ false }>
		<Text style={ [styles.subRow, styles.num] }>{isProduct && i + 1}
		</Text>
		<Text style={ [styles.subRow, styles.item] }>{name}</Text>
		<Text style={ [styles.subRow, { textAlign: 'center' }] }>
			{isProduct && hsnOrSAC}
		</Text>
		<View style={ [styles.subRow, styles.rightAlign, styles.quantity] }>
			<Text style={ { fontSize: 9 } }>{quantity}</Text>
			<Text style={ { fontSize: 8 } }>{unit}</Text>
		</View>
		<Text style={ [styles.subRow, styles.rightAlign] }>{rate}</Text>
		<Text style={ [styles.subRow, styles.rightAlign] }>{amount}</Text>
	</View>;
};

export default Item;
