import React from 'react';
import { View } from '@react-pdf/renderer';
import VendorAddress from './VendorAddress';
import ClientAddress from './ClientAddress';

const AddressLabels = (context) => {
	const { styles } = context;

	return (
		<View style={ [styles.view] }>
			<VendorAddress { ...context }/>
			<ClientAddress { ...context }/>
		</View>);
};

export default AddressLabels;
