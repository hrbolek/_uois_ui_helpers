// Button.stories.js|jsx
import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { withRouter } from 'storybook-addon-react-router-v6';

import { UserLink } from '../components/Links';
import { SingleUser } from './DataStructures';
//import {  } from 'bootstrap-icons';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Links',
  component: UserLinkDefault,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/ui/users/:id',
      routeParams: { 'id': '9a037b9e-973a-11ed-a8fc-0242ac120002' },
    }
  }
};

export const UserLinkDefault = () => <UserLink user={SingleUser} />;
export const UserLinkWithEmail = () => <UserLink user={SingleUser} email/>;