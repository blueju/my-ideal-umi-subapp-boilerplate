import { Result } from 'antd';
import React from 'react';

export default function () {
  return <Result status="403" title="🖐" subTitle="对不起，子应用禁止独立运行，请在基座中访问子应用。" />;
}
