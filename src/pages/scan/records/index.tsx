import React, { useState, useEffect, useMemo } from 'react';
import {
  Table,
  Card,
  PaginationProps,
  Typography,
  Message,
} from '@arco-design/web-react';
import axios from 'axios';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import './mock';
import { getColumns } from './constants';

const { Title } = Typography;

// axios.defaults.baseURL = 'https://h4ck.fun';


function SearchTable() {
  const t = useLocale(locale);

  const tableCallback = async (record, type) => {
    // console.log(record, type);
    window.location.href = `/scan/detail/${record.id}`;
  };

  const columns = useMemo(() => getColumns(t, tableCallback), [t]);

  const [data, setData] = useState([]);
  const [pagination, setPatination] = useState<PaginationProps>({
    sizeCanChange: true,
    showTotal: true,
    pageSize: 10,
    current: 1,
    pageSizeChangeResetCurrent: true,
  });
  const [loading, setLoading] = useState(true);
  const [formParams, setFormParams] = useState({});

  useEffect(() => {
    fetchData();
  }, [pagination.current, pagination.pageSize, JSON.stringify(formParams)]);

  function fetchData() {
    const { current, pageSize } = pagination;
    setLoading(true);
    axios
      .get('/api/scan/records', {
        // params: {
        //   page: current,
        //   pageSize,
        // },
      })
      .then((res) => {
        const { code, msg, data } = res.data;
        if (code === 200) {
          if (data.total === 0) {
            setLoading(false);
          }else{
            setData(data.list);
            setPatination({
              ...pagination,
              current,
              pageSize,
              total: data.total,
            });
            setLoading(false);
          }
        } else {
          Message.error({
            content: msg,
            closable: true,
          });
          setLoading(false);
        }
      })
      .catch(function (error) {
        Message.error({
          content: 'Request failed!',
          closable: true,
        });
        console.log(error);
        setLoading(false);
      });
  }

  function onChangeTable({ current, pageSize }) {
    setPatination({
      ...pagination,
      current,
      pageSize,
    });
  }

  return (
    <Card>
      <Title heading={6}>{t['menu.list.searchTable']}</Title>
      <Table
        rowKey="id"
        loading={loading}
        onChange={onChangeTable}
        pagination={pagination}
        columns={columns}
        data={data}
      />
    </Card>
  );
}

export default SearchTable;
