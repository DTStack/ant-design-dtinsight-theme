import React from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';
import ShowDetail from '../../../../component/showDetail';

const TimePickerPreview = ({ size, disabled }) => (
  <PreviewWrapper id="TimePicker" title="TimePicker">
    <div className="components">
      <div className="component-row">
        <TimePicker size={size} disabled={disabled} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
      </div>
      <div className="component-row shadow">
        <TimePicker size={size} className="shadow-bg" disabled={disabled} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />&nbsp;&nbsp;&nbsp;&nbsp;
        <ShowDetail
          title="阴影背景的时间选择组件"
          cName={'.shadow-bg'}
          desc={'阴影背景的时间选择组件'}
          component={<div className="component-row shadow">
            <TimePicker size={size} className="shadow-bg" disabled={disabled} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </div>}
          code={'<TimePicker size={size} className="shadow-bg" disabled={disabled} defaultOpenValue={moment("00:00:00", "HH:mm:ss")} />'}
        />
      </div>
    </div>
  </PreviewWrapper>
);

export default TimePickerPreview;
