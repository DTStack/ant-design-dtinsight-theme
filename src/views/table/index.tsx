import * as React from 'react';
import { Table } from 'antd';
import './style.scss';

export default class TablePreview extends React.Component<any, any> {

    state: any = {}

    componentDidMount() {

    }

    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            render: (text: string) => <a href="#">{text}</a>,
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '地址',
            dataIndex: 'address',
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }, {
            key: '4',
            name: 'Disabled User',
            age: 99,
            address: 'Sidney No. 1 Lake Park',
        }];
        const rowSelection = {
            onChange: (selectedRowKeys: any, selectedRows: any) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: (record: any) => ({
                disabled: record.name === 'Disabled User'
            }),
        };
        return (
            <div className="table-preview">
                <Table
                    // className="m-table"
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                />
            </div>
            
        )
    }
}