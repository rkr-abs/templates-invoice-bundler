import React from 'react';
import { Page, Document } from '@react-pdf/renderer';
import InvoiceSection from './InvoiceSection';
import GovtDoc from './GovtDoc';
import Description from './Description';
import AddressSection from './AddressSection';
import ChargesTable from './ChargesTable';
import BillingTable from './BillingTable';
import styles from './styles';
import AddressLabels from './AddressLabels';
import config from '../../core/config';

const Invoice = ({ item, config: { timeZone }}) => {
	const context = { config: { ...config, timeZone: timeZone, obj: item }};
	const { pageSize } = config;
	const extendedContext = { ...context, styles };

	return (
		<Document>
			<Page { ...{ style: styles.page, size: pageSize } }>
				<InvoiceSection { ...extendedContext }/>
				<AddressSection { ...extendedContext }/>
				<AddressLabels { ...extendedContext }/>
				<GovtDoc { ...extendedContext }/>
				<ChargesTable { ...extendedContext }/>
				<BillingTable { ...extendedContext }/>
				<Description { ...extendedContext }/>
			</Page>
		</Document>
	);
};

export default Invoice;
