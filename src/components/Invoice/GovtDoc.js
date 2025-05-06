import React from 'react';
import { View } from '@react-pdf/renderer';
import VendorDoc from './VendorDoc';
import ClientDoc from './ClientDoc';

const GovtDoc = (context) => {
	const { styles } = context;

	return <View style={ styles.view }>
		<VendorDoc { ...context }/>
		<ClientDoc { ...context }/>
	</View>;
};

export default GovtDoc;
