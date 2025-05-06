/* eslint-disable max-len */
const config = {
	obj: {
		invoiceDate: '2002-09-18T18:29:50.000Z',
		id: 'fdg02091801',
		subTotal: 2836.5,
		grandTotal: 2552.85,
		currency: 'INR',
		amountInWords:
			' INR Two Thousand Five Hundred Fifty Two Rupees And Eighty Five Paise Only',
		vendor: {
			address: {
				lines: ['17-261, Mean Street,', 'Jobber'],
				state: 'Heading Town',
				country: 'Broch',
				zipCode: '340321',
			},
			govtDoc: { id: 'R7909FFJPA', type: 'PAN' },
			name: 'Fluf Dug',
		},
		client: {
			address: {
				lines: ['#40, Subramaniyapuram New St'],
				state: 'Tamil Nadu',
				country: 'India',
				zipCode: '630302',
			},
			govtDoc: { id: '33AAXCA0332P1ZC', type: 'GSTIN' },
			name: 'Abstract Business Systems Pvt. Ltd',
		},
		bankDetails: {
			accountHolderName: 'Fluf Dug',
			accountNo: '20261000031380',
			accountType: 'Savings',
			branchName: 'Mean St',
			ifsc: 'IDBA0000138',
		},
		items: [
			{
				name: 'Consulting charges',
				type: 'product',
				unit: 'hrs',
				quantity: 94.55,
				rate: 30,
				amount: 2836.5,
			},
			{
				name: 'Other Charges',
				type: 'product',
				quantity: 1,
				rate: 1000,
				amount: 1000,
			},
		],
	},
	hsnOrSAC: '-',
	digits: 2,
	pageSize: 'A4',
};

export default config;
