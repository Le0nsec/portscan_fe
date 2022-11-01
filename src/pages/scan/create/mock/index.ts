import Mock from 'mockjs';
import setupMock from '@/utils/setupMock';

setupMock({
  setup: () => {
    Mock.mock(new RegExp('/api/scan/create'), () => {
      return {
        code: 200,
        msg: 'success',
        data: {}
      };
      // return {
      //   code: 400,
      //   msg: 'Host Range is invalid!',
      //   data: {}
      // };
    });
  },
});
