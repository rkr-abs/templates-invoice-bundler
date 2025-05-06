import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import BillingDetails from './BillingDetails';
import BankDetails from './BankDetails';

const styles = StyleSheet.create({
	table: {
		width: '85%',
		margin: 10,
		marginLeft: 20,
		border: '1.5px solid #EEE',
		flexDirection: 'row',
		borderTop: 'none',
	},
	row: {
		flexDirection: 'column',
		paddingBottom: 30,
		fontSize: 10,
		width: '50%',
	},
	bold: {
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		padding: 5,
		flex: 1,
	},
	light: {
		fontFamily: 'Roboto',
		fontWeight: 'light',
		padding: 5,
		flex: 1,
		textAlign: 'right',
	},
	subRow: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
	},
	borderTop: { borderTop: '1.5px solid #EEE' },
});

const BillingTable = (context) =>
	<View style={ styles.table }>
		<BankDetails { ...{ ...context, styles } }/>
		<BillingDetails { ...{ ...context, styles } }/>
	</View>;

export default BillingTable;
