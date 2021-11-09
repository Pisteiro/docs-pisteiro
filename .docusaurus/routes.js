
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs-pisteiro/blog/archive',
    component: ComponentCreator('/docs-pisteiro/blog/archive','0cd'),
    exact: true
  },
  {
    path: '/docs-pisteiro/markdown-page',
    component: ComponentCreator('/docs-pisteiro/markdown-page','776'),
    exact: true
  },
  {
    path: '/docs-pisteiro/tags',
    component: ComponentCreator('/docs-pisteiro/tags','c7f'),
    exact: true
  },
  {
    path: '/docs-pisteiro/',
    component: ComponentCreator('/docs-pisteiro/','424'),
    routes: [
      {
        path: '/docs-pisteiro/',
        component: ComponentCreator('/docs-pisteiro/','3ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/cadastro',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/cadastro','52d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/entrar-competicao',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/entrar-competicao','7d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/login',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/login','5e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/mural',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/mural','70f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/pontuacao',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/pontuacao','a03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/ranking',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/ranking','b3e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs-pisteiro/Manual da Plataforma/recuperar',
        component: ComponentCreator('/docs-pisteiro/Manual da Plataforma/recuperar','df2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
