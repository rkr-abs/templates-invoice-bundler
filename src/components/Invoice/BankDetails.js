import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';

const BankDetails = (context) => {
	const { styles } = context;
	const bankDetails = InvoiceManager.getBankDetails(context);

	return <View style={ styles.row }>
		<Text style={ [styles.borderTop, styles.bold] }>Bank Details: </Text>
		{bankDetails.map((bankDetail, key) =>
			<View key={ key } style={ [styles.subRow, { paddingLeft: 5 }] }>
				<Text style={ [styles.bold] }>{bankDetail.header}:</Text>
				<Text style={ [styles.light] }>{bankDetail.value}</Text>
			</View>)}
	</View>;
};

export default BankDetails;
