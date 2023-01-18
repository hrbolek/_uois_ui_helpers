// Button.stories.js|jsx
import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { withRouter } from 'storybook-addon-react-router-v6';

import { UserLink } from '../components/Links';
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

const theuser = {'id': '9a037b9e-973a-11ed-a8fc-0242ac120002', 'name': 'John', surname: 'Storyteller', email: 'john.storyteller@somewhere.else'}

export const UserLinkDefault = () => <UserLink user={theuser} />;
export const UserLinkWithEmail = () => <UserLink user={theuser} email/>;