import * as React from 'react';
import { Button } from 'antd';
import DetailModal from './detailModal';

export default class ShowDetail extends React.Component {
  state = {
    visible: false
  }

  componentDidMount() {}

  handleView = () => {
    this.setState({
      visible: true
    });
  }

  closeModal = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.handleView} type="primary">查看示例详情</Button>
        <DetailModal onCancle={this.closeModal} {...this.props} visible={visible} />
      </React.Fragment>
    );
  }
}
