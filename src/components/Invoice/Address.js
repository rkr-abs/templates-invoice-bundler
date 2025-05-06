import { View, Text } from '@react-pdf/renderer';
import React from 'react';

const Address = (context) => {
	const { styles, data: { address, name }} = context;

	return <View style={ styles.subView }>
		<Text style={ [styles.text] }>{name},</Text>
		{address.lines.map((line, i) =>
			<Text
				key={ i }
				style={ [styles.text] }
			>{line},</Text>)}
		<Text style={ [styles.text] }>{address.state},</Text>
		<Text style={ [styles.text] }>{address.country},</Text>
		<Text style={ [styles.text] }>{address.zipCode}.</Text>
	</View>;
};

export default Address;
