import * as React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'gatsby';

const Navigator: React.FC = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/list">List</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Navigator;
