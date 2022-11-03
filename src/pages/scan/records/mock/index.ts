import Mock from 'mockjs';
// import qs from 'query-string';
// import dayjs from 'dayjs';
import setupMock from '@/utils/setupMock';

setupMock({
  setup: () => {
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
                  "created": 1667268876,
                  "status": 1
              },
              {
                "id": "2",
                "host": "10.10.10.1/24",
                "port": "1-65535",
                "threads": 10,
                "created": 1667158588,
                "status": 0
              },
              {
                "id": "3",
                "host": "10.10.10.1-24",
                "port": "7,11,13,15,17,19,21,22,23,25,26,37,38,43",
                "threads": 10,
                "created": 1667158588,
                "status": 0
              },
              {
                "id": "4",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "5",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "6",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "7",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "8",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "9",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "10",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
                "status": 1
              },
              {
                "id": "11",
                "host": "10.10.10.1",
                "port": "2000-3000",
                "threads": 20,
                "created": 1667158588,
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
