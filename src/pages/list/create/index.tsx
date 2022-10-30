import React, { useState } from 'react';
import {
  Steps,
  Form,
  Input,
  Select,
  DatePicker,
  Button,
  Typography,
  Space,
  Card,
  InputNumber,
  Result,
} from '@arco-design/web-react';
import useLocale from '@/utils/useLocale';
import locale from './locale';
import styles from './style/index.module.less';

const { Title, Paragraph } = Typography;
function StepForm() {
  const t = useLocale(locale);
  const [current, setCurrent] = useState(1);

  const [form] = Form.useForm();

  const reCreateForm = () => {
    form.resetFields();
    setCurrent(1);
  };

  return (
    <div className={styles.container}>
      <Card>
        <Title heading={5}>{t['stepForm.desc.basicInfo']}</Title>
        <div className={styles.wrapper}>
          <Steps current={current}>
            <Steps.Step
              title={t['stepForm.title.basicInfo']}
              description={t['stepForm.desc.basicInfo']}
            />
            <Steps.Step
              title={t['stepForm.title.created']}
              description={t['stepForm.desc.created']}
            />
          </Steps>

          <Form 
          form={form}
          className={styles.form}
          initialValues={{ threads: 20, timeout: 4000 }}
          onSubmit={(values) => {
            setCurrent(current + 1);
            console.log(values);
          }}
          >
            {current === 1 && (
              <Form.Item noStyle>
                <Form.Item
                  label={t['stepForm.basicInfo.host']}
                  required
                  field="host"
                  rules={[
                    {
                      required: true,
                      message: t['stepForm.basicInfo.host.required'],
                    },
                    {
                      validator: (value: string, callback) => {
                        if (!/^[0-9_\-\./]+$/g.test(value)) {
                          callback(t['stepForm.basicInfo.host.placeholder']);
                        }
                      },
                    },
                  ]}
                >
                  <Input
                    placeholder={t['stepForm.basicInfo.host.placeholder']}
                  />
                </Form.Item>

                <Form.Item
                  label={t['stepForm.basicInfo.port']}
                  required
                  field="port"
                  rules={[
                    {
                      required: true,
                      message: t['stepForm.basicInfo.port.required'],
                    },
                    {
                      validator: (value: string, callback) => {
                        if (!/^[0-9_\-,]+$/g.test(value)) {
                          callback(t['stepForm.basicInfo.port.placeholder']);
                        }
                      },
                    },
                  ]}
                >
                  <Input
                    placeholder={t['stepForm.basicInfo.port.placeholder']}
                  />
                </Form.Item>

                <Form.Item
                  label={t['stepForm.basicInfo.threads']}
                  field="threads"
                >
                  <InputNumber
                    mode='button'
                    max={100}
                    min={1}
                    style={{ width: 170 }}
                  />
                </Form.Item>
                
                <Form.Item
                  label={t['stepForm.basicInfo.timeout']}
                  field="timeout"
                >
                  <InputNumber
                    mode='button'
                    min={100}
                    suffix='ms'
                    style={{ width: 170 }}
                  />
                </Form.Item>

              </Form.Item>
            )}
            {current !== 2 ? (
              <Form.Item label=" ">
                <Space size={24}>
                  <Button type="primary" size="large" htmlType='submit'>
                    {t['stepForm.submit']}
                  </Button>
                  <Button size="large" onClick={() => {form.resetFields();}}>
                    {t['stepForm.reset']}
                  </Button>
                </Space>
              </Form.Item>
            ) : (
              <Form.Item noStyle>
                <Result
                  status="success"
                  title={t['stepForm.created.success.title']}
                  subTitle={t['stepForm.created.success.desc']}
                  extra={[
                    <Button key="again" type="primary" onClick={reCreateForm}>
                      {t['stepForm.created.success.again']}
                    </Button>,
                  ]}
                />
              </Form.Item>
            )}
          </Form>
        </div>
        {current === 2 && (
          <div className={styles['form-extra']}>
            <Title heading={6}>{t['stepForm.created.extra.title']}</Title>
            <Paragraph type="secondary">
              {t['stepForm.created.extra.desc']}
              <Button type="text" href={'/list/records'}>{t['stepForm.created.extra.detail']}</Button>
            </Paragraph>
          </div>
        )}
      </Card>
    </div>
  );
}

export default StepForm;
