import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

const getNormalizedTotals = (context) => {
	const { config: { digits,
		obj: { subTotal, taxes, grandTotal }}} = context;

	return {
		subTotal: subTotal.toFixed(digits),
		taxes: taxes?.toFixed(digits) || '-',
		grandTotal: grandTotal.toFixed(digits),
	};
};

const getBillingDetails = (context) => {
	const { subTotal, taxes, grandTotal }
	= getNormalizedTotals(context);

	return [
		{ header: 'Sub Total', value: subTotal },
		{ header: 'Taxes', value: taxes },
		{ header: 'Grand Total', value: grandTotal },
	];
};

const getBankDetails = (context) => {
	const { config: { obj: { bankDetails }}} = context;

	return [
		{ header: 'Name', value: bankDetails.accountHolderName },
		{ header: 'IFSC', value: bankDetails.ifsc },
		{ header: 'Account No', value: bankDetails.accountNo },
		{ header: 'Acc Type', value: bankDetails.accountType },
		{ header: 'Branch Name', value: bankDetails.branchName },
	];
};

const getFilteredItems = (context) => {
	const { config: { obj: { items }}, data } = context;

	return items.filter((item) => item.type === data);
};

const isProduct = ({ data: { item: { type }}}) => type === 'product';

const getInvoiceDate = ({ config: { obj: { invoiceDate }, timeZone }}) =>
	dayjs.utc(invoiceDate).tz(timeZone)
		.format('DD-MM-YYYY');

const InvoiceManager = {
	getBillingDetails,
	getBankDetails,
	getFilteredItems,
	isProduct,
	getInvoiceDate,
};

export default InvoiceManager;
