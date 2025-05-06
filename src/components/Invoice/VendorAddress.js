import React from 'react';
import Address from './Address';

const VendorAddress = (context) => {
	const { config: { obj: { vendor }}} = context;

	return <Address { ...{ ...context, data: vendor } }/>;
};

export default VendorAddress;
