/* eslint-disable no-magic-numbers */
import React from 'react';
import Item from './Item';
import { map } from '@laufire/utils/collection';

const actions = {
	number: (value) => value.toFixed(2),
	string: (value) => value,
};

const Items = (context) => {
	const { data } = context;

	return data.map((item, i) => {
		const enhancedItem = map(item, (value) => actions[typeof value](value));

		return (
			<Item
				key={ i }
				{
					...{
						...context, data: { item: enhancedItem, i: i },
					}
				}
			/>);
	});
};

export default Items;
