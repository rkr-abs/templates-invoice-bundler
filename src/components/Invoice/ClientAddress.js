import React from 'react';
import Address from './Address';

const ClientAddress = (context) => {
	const { config: { obj: { client }}} = context;

	return <Address { ...{ ...context, data: client } }/>;
};

export default ClientAddress;
