import React, {useState, useEffect} from 'react';
import {Table, Space, Tag, Button} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import axios from 'axios';
const { Column } = Table;
const LeftList = () => {
    const [dataSource, setdataSource] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/rights').then(res => {
            setdataSource(res.data)
        })
        
    }, [])


    return (
    <Table dataSource = { dataSource }>
 
        <Column title="ID" dataIndex="id"/>
        <Column title="权限名称" dataIndex="title" />
        <Column title="权限路劲" dataIndex="key"
            render={(_, record) => (
                <Tag color="blue">{record.key}</Tag>
            )}  />
    
        <Column
            title="操作"
            key="action"
            render={(_, record) => (
                <Space size="middle" data-key={record.key}>
                    <Button type="primary" shape="circle" icon={<EditOutlined />}></Button>
                    <Button danger shape="circle" icon={<DeleteOutlined />}></Button>
                </Space>
        )}
        />
    </Table>);
}

export default LeftList;