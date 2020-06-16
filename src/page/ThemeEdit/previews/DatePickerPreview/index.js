import React from 'react';
import { DatePicker } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';
import ShowDetail from '../../../../component/showDetail';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const DatePickerPreview = ({ size, disabled }) => (
  <PreviewWrapper id="DatePicker" title="DatePicker">
    <div className="components input">
      <div className="component-row">
        <DatePicker disabled={disabled} size={size} />
      </div>
      <div className="component-row shadow">
        <DatePicker className="shadow-bg" disabled={disabled} size={size} />&nbsp;&nbsp;&nbsp;&nbsp;
        <ShowDetail
          title="阴影背景的日期选择组件"
          cName={'.shadow-bg'}
          desc={'阴影背景的日期选择组件'}
          component={<div className="component-row shadow">
            <DatePicker className="shadow-bg" disabled={disabled} size={size} />
          </div>}
          code={'<DatePicker className="shadow-bg" disabled={disabled} size={size} />'}
        />
      </div>
      <div className="component-row">
        <MonthPicker placeholder="Select month" disabled={disabled} size={size} />
      </div>
      <div className="component-row shadow">
        <MonthPicker className="shadow-bg" placeholder="Select month" disabled={disabled} size={size} />&nbsp;&nbsp;&nbsp;&nbsp;
        <ShowDetail
          title="阴影背景的月份选择组件"
          cName={'.shadow-bg'}
          desc={'阴影背景的月份选择组件'}
          component={<div className="component-row shadow">
            <MonthPicker className="shadow-bg" placeholder="Select month" disabled={disabled} size={size} />
          </div>}
          code={'<MonthPicker className="shadow-bg" placeholder="Select month" disabled={disabled} size={size} />'}
        />
      </div>
      <div className="component-row">
        <RangePicker disabled={disabled} size={size} />
      </div>
      <div className="component-row shadow">
        <RangePicker className="shadow-bg" disabled={disabled} size={size} />&nbsp;&nbsp;&nbsp;&nbsp;
        <ShowDetail
          title="阴影背景的范围选择组件"
          cName={'.shadow-bg'}
          desc={'阴影背景的范围选择组件'}
          component={<div className="component-row shadow">
            <RangePicker className="shadow-bg" disabled={disabled} size={size} />
          </div>}
          code={'<RangePicker className="shadow-bg" disabled={disabled} size={size} />'}
        />
      </div>
      <div className="component-row">
        <WeekPicker placeholder="Select week" disabled={disabled} size={size} />
      </div>
      <div className="component-row shadow">
        <WeekPicker className="shadow-bg" placeholder="Select week" disabled={disabled} size={size} />&nbsp;&nbsp;&nbsp;&nbsp;
        <ShowDetail
          title="阴影背景的周选择组件"
          cName={'.shadow-bg'}
          desc={'阴影背景的周选择组件'}
          component={<div className="component-row shadow">
            <WeekPicker className="shadow-bg" placeholder="Select week" disabled={disabled} size={size} />
          </div>}
          code={'<WeekPicker className="shadow-bg" placeholder="Select week" disabled={disabled} size={size} />'}
        />
      </div>
    </div>
  </PreviewWrapper>
);

export default DatePickerPreview;
