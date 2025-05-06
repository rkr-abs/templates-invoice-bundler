import React from 'react';
import HelperText from './HelperText';

const VendorDoc = (context) => {
	const { config: { obj: { vendor: { govtDoc: { type, id }}}}} = context;

	return <HelperText { ...{ ...context, header: type, value: id } }/>;
};

export default VendorDoc;
