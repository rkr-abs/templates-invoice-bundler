import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';
import Products from './Products';
import Taxes from './Taxes';
import ChargesHeader from './ChargesHeader';

const styles = StyleSheet.create({
	table: {
		width: '85%',
		margin: 10,
		marginLeft: 20,
		border: '1.5px solid #EEE',
		borderTop: 'none',
	},
	row: {
		flexDirection: 'row',
		borderTop: '1.5px solid #EEE',
		fontSize: 10,
	},
	bold: {
		fontFamily: 'Roboto',
		fontWeight: 'bold',
	},
	subRow: {
		width: '13%',
		borderLeft: '1.5px solid #EEE',
		padding: '3 3 10 5',
	},
	num: {
		width: '8%',
		borderLeft: 'none',
	},
	item: {
		width: '50%',
	},
	rightAlign: {
		textAlign: 'right',
	},
	quantity: {
		flexDirection: 'column',
	},
});

const ChargesTable = (context) => {
	const extendedContext = { ...{ ...context, styles }};

	return <View style={ styles.table }>
		<ChargesHeader { ...extendedContext }/>
		<Products { ...extendedContext }/>
		<Taxes { ...extendedContext }/>
	</View>;
};

export default ChargesTable;
