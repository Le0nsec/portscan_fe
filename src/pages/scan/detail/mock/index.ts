import Mock from 'mockjs';
import setupMock from '@/utils/setupMock';

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/scan/detail/'), () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          status: 4,
          list: [
            {
              host: '192.168.1.1',
              port_list: [
                {
                  port: 80,
                  resp: 'HTTP/1.1 403 Forbidden nginx text/html',
                },
                {
                  port: 443,
                  resp: '',
                },
                {
                  port: 1443,
                  resp: 'HTTP/1.1 403 Forbidden Apache text/html; charset=iso-8859-1',
                }
              ]
            },
            {
              host: '192.168.1.2',
              port_list: [
                {
                  port: 80,
                  resp: 'HTTP/1.1 403 Forbidden nginx text/html',
                },
                {
                  port: 8080,
                  resp: 'HTTP/1.1 404 Forbidden nginx text/html',
                }
              ]
            },
            {
              host: '192.168.1.3',
              port_list: [
                {
                  port: 80,
                  resp: 'HTTP/1.1 403 Forbidden nginx text/html',
                }
              ]
            },
          ]
        }
      }

      // return {
      //   code: 400,
      //   msg: 'Host Range is invalid!',
      //   data: {}
      // };

    });

  },
});
