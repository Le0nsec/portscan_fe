// import React from 'react';
import { Button, Typography, Badge } from '@arco-design/web-react';
import dayjs from 'dayjs';

const { Text } = Typography;


export function getColumns(
  t: any,
  callback: (record: Record<string, any>, type: string) => Promise<void>
) {
  return [
    {
      title: t['searchTable.columns.id'],
      dataIndex: 'id',
      render: (value) => <Text copyable>{value}</Text>,
    },
    {
      title: t['searchTable.columns.host'],
      dataIndex: 'host',
    },
    {
      title: t['searchTable.columns.port'],
      dataIndex: 'port',
    },
    {
      title: t['searchTable.columns.threads'],
      dataIndex: 'threads',
      sorter: (a, b) => a.count - b.count,
      render(x) {
        return Number(x).toLocaleString();
      },
    },
    {
      title: t['searchTable.columns.createdTime'],
      dataIndex: 'created',
      render: (x) => dayjs.unix(x).format('YYYY-MM-DD HH:mm:ss'),
      sorter: (a, b) => b.created - a.created,
    },
    {
      title: t['searchTable.columns.status'],
      dataIndex: 'status',
      render: (x) => {
        if (x === 0) {
          return <Badge status="warning" text={t['searchTable.columns.scanning']}></Badge>;
        }
        return <Badge status="success" text={t['searchTable.columns.done']}></Badge>;
      },
    },
    {
      title: t['searchTable.columns.operations'],
      dataIndex: 'operations',
      headerCellStyle: { paddingLeft: '15px' },
      render: (_, record) => (
        <Button
          type="text"
          size="small"
          onClick={() => callback(record, 'view')}
        >
          {t['searchTable.columns.operations.view']}
        </Button>
      ),
    },
  ];
}
