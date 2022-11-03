import React, { useEffect, useState } from 'react';
import {
  Card,
  Steps,
  Typography,
  Grid,
  Space,
  Button,
  Message,
} from '@arco-design/web-react';
import axios from 'axios';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import ProfileItem from './item';
import styles from './style/index.module.less';
import './mock';

function Detail() {
  const t = useLocale(locale);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ status: 2 });

  function fetchData() {
    setLoading(true);
    // 获取url path中的id
    const id = window.location.pathname.split('/').pop();
    axios
      .get('/api/scan/detail/' + id)
      .then((res) => {
        console.log(res.data);
        const { code, msg, data } = res.data;
        if (code === 200) {
          if (data.status === 0) {
            data.status = 2;
          }
          if (data.status === 1) {
            data.status = 4;
          }
          setData(data || {});
        } else {
          Message.error({
            content: msg,
            closable: true,
          });
        }
      })
      .catch(function (error) {
        Message.warning({
          content: '扫描中',
          closable: true,
        });
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Card>
        <Grid.Row justify="space-between" align="center">
          <Grid.Col span={16}>
            <Typography.Title heading={6}>
              {t['basicProfile.title.form']}
            </Typography.Title>
          </Grid.Col>
          <Grid.Col span={8} style={{ textAlign: 'right' }}>
            <Space>
              {/* <Button>{t['basicProfile.cancel']}</Button> */}
              <Button type="primary" href={'/scan/records'}>{t['basicProfile.goBack']}</Button>
            </Space>
          </Grid.Col>
        </Grid.Row>

        <Steps current={data.status} lineless className={styles.steps}>
          <Steps.Step title={t['basicProfile.steps.commit']} />
          <Steps.Step title={t['basicProfile.steps.approval']} />
          <Steps.Step title={t['basicProfile.steps.finish']} />
        </Steps>
      </Card>

      <ProfileItem
        data={data}
        loading={loading}
      />
    </div>
  );
}

export default Detail;
