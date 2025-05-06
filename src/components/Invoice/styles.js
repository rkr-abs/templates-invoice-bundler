/* eslint-disable max-len */
import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

	page: {
		margin: 20,
		paddingTop: 90,
		paddingBottom: 90,
		paddingHorizontal: 30,
		fontFamily: 'Roboto',
		fontWeight: 'light',
	},
	view: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '85%',
		marginLeft: 25,
	},
	text: {
		fontSize: 10,
		width: '80%',
	},
	bold: {
		fontWeight: 'bold',
		textAlign: 'justify',
	},

	subtext: {
		fontSize: 10,
		flex: 1,
	},
	subView: {
		flexDirection: 'column',
		width: '80%',
		paddingBottom: 10,
	},
});

export default styles;
