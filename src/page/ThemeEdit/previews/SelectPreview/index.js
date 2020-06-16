import React from 'react';
import { Select } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
// import './style.less';
import ShowDetail from '../../../../component/showDetail';

const { Option, OptGroup } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const SelectPreview = ({ size, disabled }) => (
  <PreviewWrapper id="Select" title="Select">
    <div className="components input">
      <div className="component-row">
        <div className="component-col">
          <Select defaultValue="lucy" style={{ width: 160 }} disabled={disabled} size={size}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <div className="component-col shadow">
          <Select className="shadow-bg" defaultValue="lucy" style={{ width: 160 }} disabled={disabled} size={size}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>&nbsp;&nbsp;&nbsp;&nbsp;
          <ShowDetail
            title="阴影背景的下拉选择框"
            cName={'.shadow-bg'}
            desc={'阴影背景的下拉选择框'}
            component={<div className="component-col shadow">
              <Select className="shadow-bg" defaultValue="lucy" style={{ width: 160 }} disabled={disabled} size={size}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </div>}
            code={`<Select className="shadow-bg" defaultValue="lucy" style={{ width: 160 }} disabled={disabled} size={size}>
  <Option value="jack">Jack</Option>
  <Option value="lucy">Lucy</Option>
  <Option value="disabled" disabled>
    Disabled
  </Option>
  <Option value="Yiminghe">yiminghe</Option>
</Select>`}
          />
        </div>
        <div className="component-col">
          <Select defaultValue="lucy" style={{ width: 160 }} disabled={disabled} size={size}>
            <OptGroup label="Manager">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
              <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
          </Select>
        </div>
      </div>
      <div className="component-row">
        <Select
          mode="multiple"
          style={{ width: '100%' }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          disabled={disabled}
          size={size}
        >
          {children}
        </Select>
      </div>
      <div className="component-row shadow">
        <Select
          mode="multiple"
          className="shadow-bg"
          style={{ width: '100%', marginBottom: 10 }}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          disabled={disabled}
          size={size}
        >
          {children}
        </Select>
        <ShowDetail
          title="阴影背景的下拉多选框"
          cName={'.shadow-bg'}
          desc={'阴影背景的下拉多选框'}
          component={<div className="component-col shadow">
            <Select
              mode="multiple"
              className="shadow-bg"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
              disabled={disabled}
              size={size}
            >
              {children}
            </Select>
          </div>}
          code={`<Select
  mode="multiple"
  className="shadow-bg"
  style={{ width: '100%' }}
  placeholder="Please select"
  defaultValue={['a10', 'c12']}
  disabled={disabled}
  size={size}
>
  {children}
</Select>`}
        />
      </div>
    </div>
  </PreviewWrapper>
);

export default SelectPreview;
