import React from 'react';
import { Text } from '@react-pdf/renderer';

const subtext = {
	fontSize: 10,
	paddingLeft: 5,
	textAlign: 'center',
	width: '85%',
	marginLeft: 25,
};

const Description = () =>
	<Text style={ subtext }>
		Payments should be made within 15 working days from the date of invoice.
		Digitally prepared document.Signature not needed.
	</Text>
;

export default Description;
