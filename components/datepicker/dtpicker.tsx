// import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
const generatePicker = require('antd/es/date-picker/generatePicker/index.js');
// import generatePicker from 'antd/es/date-picker/generatePicker/index.js';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker(dayjsGenerateConfig);

export default DatePicker;