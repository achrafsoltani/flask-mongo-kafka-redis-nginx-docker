import NotificationMarkdown from '../docs/Notification.md';
import Markdown from 'markdown-to-jsx';
import Page from '../Page';
import React from 'react';

const Dialog = React.lazy(() => import('app_02/Dialog'));

const NotificationPage = () => (
  <Page title="Notification Demo (FCM)">
    <Markdown>{NotificationMarkdown}</Markdown>
    <React.Suspense fallback="Loading Dialog...">
      <Dialog />
    </React.Suspense>
  </Page>
);

export default NotificationPage;
