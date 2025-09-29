import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { isWeekend as isSatSun } from './isWeekend.js'

const today = dayjs();
const day = today.add(5, 'days');
console.log(day.format('MMMM, D'));

const month = today.add(1, 'month');
console.log(month.format('MMMM, D'));

const oneMonthBefore = today.subtract(1, 'month');
console.log(oneMonthBefore.format('MMMM, D'));
console.log(today.format('D MMMM, YYYY'));

console.log(isSatSun(day));
console.log(typeof today.add(6, 'days').format('dddd'));