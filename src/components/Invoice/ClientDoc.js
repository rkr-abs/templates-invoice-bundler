import React from 'react';
import HelperText from './HelperText';

const ClientDoc = (context) => {
	const { config: { obj: { client: { govtDoc: { type, id }}}}} = context;

	return <HelperText { ...{ ...context, header: type, value: id } }/>;
};

export default ClientDoc;
