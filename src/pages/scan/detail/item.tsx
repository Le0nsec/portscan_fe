import React, { CSSProperties } from 'react';
import useLocale from '@/utils/useLocale';
import { Descriptions, Card, Skeleton, Empty, Spin } from '@arco-design/web-react';
import locale from './locale';

interface ProfileItemProps {
  data: any;
  style?: CSSProperties;
  loading?: boolean;
}

function ProfileItem(props: ProfileItemProps) {
  const t = useLocale(locale);
  const { data, loading } = props;
  const blockDataList: {
    title: string;
    data: {
      label: string;
      value: string;
    }[];
  }[] = [];

  console.log(data);
  if (data.status === 2){
    return (
      <Card loading={loading} >
        <Empty />
      </Card>
    );
  }else if (data.status === 4){

    data?.list?.map((item) => {
      const port_lists = item?.port_list?.map((portItem, j) => {
        return [{
          label: t['basicProfile.label.port'],
          value: portItem.port || '',
        },{
          label: t['basicProfile.label.resp'],
          value: portItem.resp || '',
        }];
      });
      let portItemsArr = [];
      port_lists?.map((portItem) => {
        portItemsArr = portItemsArr.concat(portItem);
      });

      const dataList = {
        title: item.host,
        data: portItemsArr
      }
      blockDataList.push(dataList);
    });

  }

  return (
    <Card>
      <div>
        {blockDataList.map(({ title: blockTitle, data: blockData }, index) => (
          <Descriptions
            border
            title={blockTitle}
            column={2}
            data={
              loading
                ? blockData.map((item) => ({
                    ...item,
                    value: (
                      <Skeleton
                        text={{ rows: 1, style: { width: '300px' } }}
                        animation
                      />
                    ),
                  }))
                : blockData
            }
            style={index > 0 ? { marginTop: '20px' } : {}}
          />
        ))}
      </div>
    </Card>
  );
}

export default ProfileItem;
