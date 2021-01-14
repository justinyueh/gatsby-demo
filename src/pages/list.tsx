import * as React from 'react';
import { Button, Card, Divider } from 'antd';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import Navigator from '@/components/Navigator';
import styles from '@/styles/list.module.scss';

// markup
const ListPage: React.FC = () => {
  return (
    <main className={styles.container}>
      <Helmet title="List page" defer={false} />
      <Navigator />
      <Divider />
      <Card
        title="List page"
        actions={[
          <Button type="link">
            <Link to="/">Go back to home page</Link>
          </Button>,
        ]}
      >
        Card content
        <br />
        Card content
        <br />
        Card content
        <br />
      </Card>
    </main>
  );
};

export default ListPage;
