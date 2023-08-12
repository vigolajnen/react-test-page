import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { PageHeader } from '../../components/page-header/PageHeader';
import { PageFooter } from '../../components/page-footer/PageFooter';

const LayoutPage: FC = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </>
  );
};

export { LayoutPage };
