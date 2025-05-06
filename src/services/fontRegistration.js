/* eslint-disable max-len */

const registerFont = (Font) => Font.register({
	family: 'Roboto',
	fonts: [
		{
			src: 'https://cdn.jsdelivr.net/npm/roboto-mono-webfont@2.0.986/fonts/RobotoMono-Bold.ttf',
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/roboto-mono-webfont@2.0.986/fonts/RobotoMono-Light.ttf',
			fontWeight: 'light',
		},
	],
});

export default registerFont;
