import React from 'react';
import Items from './Items';
import InvoiceManager from '../../services/InvoiceManager';

const Taxes = (context) => {
	const filteredTaxes = InvoiceManager
		.getFilteredItems({ ...context, data: 'tax' });

	return <Items { ...{ ...context, data: filteredTaxes } }/>;
};

export default Taxes;
