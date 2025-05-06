import React from 'react';
import { View } from '@react-pdf/renderer';
import InvoiceManager from '../../services/InvoiceManager';
import HelperText from './HelperText';

const InvoiceSection = (context) => {
	const { styles, config: { obj: { id }}} = context;
	const invoiceDate = InvoiceManager.getInvoiceDate(context) ;

	return (
		<View style={ styles.view }>
			<HelperText { ...{ ...context, header: 'Invoice No', value: id } }/>
			<HelperText { ...{ ...context,
				header: 'Invoice Date', value: invoiceDate } }
			/>
		</View>
	);
};

export default InvoiceSection;
