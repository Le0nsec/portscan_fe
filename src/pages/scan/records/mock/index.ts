import Mock from 'mockjs';
// import qs from 'query-string';
// import dayjs from 'dayjs';
import setupMock from '@/utils/setupMock';

// const { list } = Mock.mock({
//   'list|10': [
//     {
//       id: /[0-9]{8}[-][0-9]{4}/,
//       name: () =>
//         Mock.Random.pick([
//           '每日推荐视频集',
//           '抖音短视频候选集',
//           '国际新闻集合',
//         ]),
//       'contentType|0-2': 0,
//       'filterType|0-1': 0,
//       'count|0-2000': 0,
//       'createdTime|1-60': 0,
//       'status|0-1': 0,
//     },
//   ],
// });

// const filterData = (
//   rest: {
//     id?: string;
//     name?: string;
//     'contentType[]'?: string[];
//     'filterType[]'?: string[];
//     'createdTime[]'?: string[];
//     'status[]'?: string;
//   } = {}
// ) => {
//   const {
//     id,
//     name,
//     'contentType[]': contentType,
//     'filterType[]': filterType,
//     'createdTime[]': createdTime,
//     'status[]': status,
//   } = rest;
//   if (id) {
//     return list.filter((item) => item.id === id);
//   }
//   let result = [...list];
//   if (name) {
//     result = result.filter((item) => {
//       return (item.name as string).toLowerCase().includes(name.toLowerCase());
//     });
//   }
//   if (contentType) {
//     result = result.filter((item) =>
//       contentType.includes(item.contentType.toString())
//     );
//   }
//   if (filterType) {
//     result = result.filter((item) =>
//       filterType.includes(item.filterType.toString())
//     );
//   }
//   if (createdTime && createdTime.length === 2) {
//     const [begin, end] = createdTime;
//     result = result.filter((item) => {
//       const time = dayjs()
//         .subtract(item.createdTime, 'days')
//         .format('YYYY-MM-DD HH:mm:ss');
//       return (
//         !dayjs(time).isBefore(dayjs(begin)) && !dayjs(time).isAfter(dayjs(end))
//       );
//     });
//   }

//   if (status && status.length) {
//     result = result.filter((item) => status.includes(item.status.toString()));
//   }

//   return result;
// };

setupMock({
  setup: () => {
    // Mock.mock(new RegExp('/api/list'), (params) => {
    //   const {
    //     page = 1,
    //     pageSize = 10,
    //     ...rest
    //   } = qs.parseUrl(params.url).query;
    //   const p = page as number;
    //   const ps = pageSize as number;

    //   const result = filterData(rest);
    //   // console.log(result);
    //   // console.log(JSON.stringify({
    //   //   list: result.slice((p - 1) * ps, p * ps),
    //   //   total: result.length,
    //   // }))
    //   return {
    //     list: result.slice((p - 1) * ps, p * ps),
    //     total: result.length,
    //   };
    // });
    Mock.mock(new RegExp('/api/scan/records'), () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          "list": [
              {
                  "id": "1",
                  "host": "192.168.1.1-5",
                  "port": "8080,8081,80",
                  "threads": 20,
                  "createdTime": 1667268876,
                  "status": 1
              },
              {
                "id": "2",
                "host": "10.10.10.1/24",
                "port": "1-65535",
                "threads": 10,
                "createdTime": 1667158588,
                "status": 0
              },
              {
                "id": "3",
                "host": "10.10.10.1-24",
                "port": "7,11,13,15,17,19,21,22,23,25,26,37,38,43",
                "threads": 10,
                "createdTime": 1667158588,
                "status": 0
              },
              {
                "id": "4",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "5",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "6",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "7",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "8",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "9",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "10",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
              {
                "id": "11",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "createdTime": 1667158588,
                "status": 1
              },
          ],
          "total": 11
      }
      };
      // return {
      //   code: 400,
      //   msg: 'Host Range is invalid!',
      //   data: {}
      // };
    });
  },
});
