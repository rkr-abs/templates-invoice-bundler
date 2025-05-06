import ReactPDF from '@react-pdf/renderer';
import React from 'react';

const generatePDF = (Component) =>
	ReactPDF.render(<Component { ...{ config: {	size: 'A4' }} }/>,
		'example1.pdf');

export default generatePDF;
