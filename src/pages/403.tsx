import { Result } from 'antd';
import React from 'react';

export default function () {
  return <Result status="403" title="403" subTitle="对不起，你没有此页面的访问权限，请在基座中访问子应用。" />;
}
