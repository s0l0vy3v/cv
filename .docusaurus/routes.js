import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cv/',
    component: ComponentCreator('/cv/', '01e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
