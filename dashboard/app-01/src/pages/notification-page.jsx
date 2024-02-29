import NotificationMarkdown from '../docs/Notification.md';
import Markdown from 'markdown-to-jsx';
import Page from '../Page';
import React from 'react';

const Notification = React.lazy(() => import('app_02/Notification'));

const NotificationPage = () => (
  <Page title="Notification Demo (FCM)">
    <Markdown>{NotificationMarkdown}</Markdown>
    <React.Suspense fallback="Loading Dialog...">
      <Notification />
    </React.Suspense>
  </Page>
);

export default NotificationPage;
