import img1 from '../Assets/images/1x/1.jpg';
import img2 from '../Assets/images/1x/2.jpg';
import img3 from '../Assets/images/1x/3.jpg';
import img4 from '../Assets/images/1x/4.jpg';
import img5 from '../Assets/images/1x/5.jpg';
import img6 from '../Assets/images/1x/6.jpg';
import img7 from '../Assets/images/1x/7.jpg';
import img8 from '../Assets/images/1x/8.jpg';
import img9 from '../Assets/images/1x/9.jpg';
import img10 from '../Assets/images/1x/10.jpg';
import img11 from '../Assets/images/1x/11.jpg';
import img12 from '../Assets/images/1x/12.jpg';

export const themeMode = {
	DARK: 'dark',
	LIGHT: 'light',
};

export const templateAlias = {
	LEADERS: 'leaders',
	VOTE: 'vote',
	ACTIVITY: 'activity',
	CHART: 'chart',
	DIAGRAM: 'diagram',
};

export const dayOfWeekSorter = {
	'mon': 1,
	'tue': 2,
	'wed': 3,
	'thu': 4,
	'fri': 5,
	'sat': 6,
	'sun': 7,
};

export const getAvatar = (avatar) => {
	switch(avatar) {
		case '1.jpg':
			return img1;
		case '2.jpg':
			return img2;
		case '3.jpg':
			return img3;
		case '4.jpg':
			return img4;
		case '5.jpg':
			return img5;
		case '6.jpg':
			return img6;
		case '7.jpg':
			return img7;
		case '8.jpg':
			return img8;
		case '9.jpg':
			return img9;
		case '10.jpg':
			return img10;
		case '11.jpg':
			return img11;
		case '12.jpg':
			return img12;
		default:
			return null;
	}
};
