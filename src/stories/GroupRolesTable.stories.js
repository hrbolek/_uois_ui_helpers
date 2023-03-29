// Button.stories.js|jsx
import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { withRouter } from 'storybook-addon-react-router-v6';

import { GroupRolesTable } from '../components/GroupRolesTable';
import { SingleGroup } from './DataStructures';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Group visualizations',
  component: GroupRolesTable,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/ui/groups/:id',
      routeParams: { 'id': '9a037b9e-973a-11ed-a8fc-0242ac120002' },
    }
  }
};

export const GroupWithRolesAsTable = {
  render: (args) => <GroupRolesTable {...args}/>,
  args: {
    group: SingleGroup,
  }  
}
