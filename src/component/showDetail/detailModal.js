import * as React from 'react';
import { Modal, Divider } from 'antd';
import { Controlled as CodeMirror } from 'react-codemirror2';
import '../../page/ThemeEdit/style.less';

require('codemirror/mode/jsx/jsx');

export default class DetailModal extends React.Component {
  state = {}

  componentDidMount() {}

  render() {
    const { visible, onCancle, cName, desc, component, code = '', title } = this.props;
    return (
      <Modal
        visible={visible}
        onCancel={onCancle}
        footer={null}
        title={title}
        width={700}
      >
        <p style={{ fontSize: 14 }}>包含样式名：<span style={{ color: 'red' }}>{cName}</span></p>
        <p style={{ fontSize: 14 }}>
          描&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;述：{desc}
        </p>
        <Divider orientation="left">组件预览</Divider>
        <div>
          {component}
        </div>
        <Divider orientation="left">代码示例</Divider>
        <CodeMirror
          value={code}
          options={{
            mode: 'jsx',
            theme: 'material',
            lineNumbers: false
          }}
        />
      </Modal>
    );
  }
}
