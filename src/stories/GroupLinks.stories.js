// Button.stories.js|jsx
import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { withRouter } from 'storybook-addon-react-router-v6';

import { GroupLink, UserLink } from '../components/Links';
//import {  } from 'bootstrap-icons';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Links',
  component: GroupLinkDefault,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/ui/groups/:id',
      routeParams: { 'id': '9a037b9e-973a-11ed-a8fc-0242ac120002' },
    }
  }
};

const thegroup = {'id': '9a037b9e-973a-11ed-a8fc-0242ac120002', 'name': '22-5KB'}
const theuser = {'id': '9a037b9e-973a-11ed-a8fc-0242ac120002', 'name': 'John', surname: 'Storyteller', email: 'john.storyteller@somewhere.else'}

export const GroupLinkDefault = () => <GroupLink group={thegroup} />;

export const Group = () => <><GroupLink group={thegroup} /><br/><UserLink user={theuser}/></>;
