import React from 'react';
import InvoiceManager from '../../services/InvoiceManager';
import Items from './Items';

const Products = (context) => {
	const filteredProducts = InvoiceManager
		.getFilteredItems({ ...context, data: 'product' });

	return <Items { ...{ ...context, data: filteredProducts } }/>;
};

export default Products;
