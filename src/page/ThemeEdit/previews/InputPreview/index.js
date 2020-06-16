import React from 'react';
import { Input, InputNumber } from 'antd';
import PreviewWrapper from '../PreviewWrapper';
import ShowDetail from '../../../../component/showDetail';
// import './style.less';

const { Search, TextArea } = Input;

const InputPreview = ({ size, disabled }) => (
  <PreviewWrapper id="Input" title="Input">
    <div className="components input">
      <div className="component-row">
        <Input placeholder="Basic usage" size={size} disabled={disabled} />
      </div>
      <div className="component-row shadow">
        <Input className="shadow-bg" style={{ marginBottom: 10 }} placeholder="Basic usage" size={size} disabled={disabled} />
        <ShowDetail
          title="阴影背景的输入框"
          cName={'.shadow-bg'}
          desc={'阴影背景的输入框'}
          component={<div className="component-row shadow">
            <Input className="shadow-bg" placeholder="Basic usage" size={size} disabled={disabled} />
          </div>}
          code={'<Input className="shadow-bg" placeholder="Basic usage" size={size} disabled={disabled} />'}
        />
      </div>
      <div className="component-row">
        <Search
          placeholder="input search text"
          size={size}
          disabled={disabled}
        />
      </div>
      <div className="component-row shadow">
        <Search placeholder="input search text" style={{ marginBottom: 10 }} size={size} className="shadow-bg" disabled={disabled} />
        <ShowDetail
          title="阴影背景的搜索框"
          cName={'.shadow-bg'}
          desc={'阴影背景的搜索框'}
          component={<div className="component-row shadow">
            <Search placeholder="input search text" size={size} className="shadow-bg" disabled={disabled} />
          </div>}
          code={'<Search placeholder="input search text" size={size} className="shadow-bg" disabled={disabled} />'}
        />
      </div>
      <div className="component-row">
        <Search placeholder="input search text" enterButton size={size} disabled={disabled} />
      </div>
      <div className="component-row shadow">
        <Search className="shadow-bg" style={{ marginBottom: 10 }} placeholder="input search text" enterButton size={size} disabled={disabled} />
        <ShowDetail
          title="阴影背景的搜索框"
          cName={'.shadow-bg'}
          desc={'阴影背景的搜索框'}
          component={<div className="component-row shadow">
            <Search className="shadow-bg" placeholder="input search text" enterButton size={size} disabled={disabled} />
          </div>}
          code={'<Search className="shadow-bg" placeholder="input search text" enterButton size={size} disabled={disabled} />'}
        />
      </div>
      <div className="component-row">
        <InputNumber min={1} max={10} defaultValue={3} size={size} disabled={disabled} />
      </div>
      <div className="component-row shadow">
        <InputNumber className="shadow-bg" min={1} max={10} defaultValue={3} size={size} disabled={disabled} />&nbsp;&nbsp;&nbsp;&nbsp;
        <ShowDetail
          title="阴影背景的数字输入框"
          cName={'.shadow-bg'}
          desc={'阴影背景的数字输入框'}
          component={<div className="component-row shadow">
            <InputNumber className="shadow-bg" min={1} max={10} defaultValue={3} size={size} disabled={disabled} />
          </div>}
          code={'<InputNumber className="shadow-bg" min={1} max={10} defaultValue={3} size={size} disabled={disabled} />'}
        />
      </div>
      <div className="component-row">
        <TextArea rows={4} size={size} disabled={disabled} />
      </div>
      <div className="component-row shadow">
        <TextArea className="shadow-bg" rows={4} size={size} style={{ marginBottom: 10 }} disabled={disabled} />
        <ShowDetail
          title="阴影背景的文本输入框"
          cName={'.shadow-bg'}
          desc={'阴影背景的文本输入框'}
          component={<div className="component-row shadow">
            <TextArea className="shadow-bg" rows={4} size={size} disabled={disabled} /><Search className="shadow-bg" placeholder="input search text" enterButton size={size} disabled={disabled} />
          </div>}
          code={'<TextArea className="shadow-bg" rows={4} size={size} disabled={disabled} />'}
        />
      </div>
    </div>
  </PreviewWrapper>
);

export default InputPreview;
