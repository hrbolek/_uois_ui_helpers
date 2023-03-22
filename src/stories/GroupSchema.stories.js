// Button.stories.js|jsx
import React, { Component } from 'react';
import { Router } from 'react-router-dom'
import { withRouter } from 'storybook-addon-react-router-v6';

import { GroupSchema } from '../components/GroupSchema';
import { SingleGroup, SingleUser } from './DataStructures';
//import {  } from 'bootstrap-icons';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Group visualizations / Special',
  component: GroupWithSchema,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/ui/groups/:id',
      routeParams: { 'id': '9a037b9e-973a-11ed-a8fc-0242ac120002' },
    }
  }
};

//export const GroupLinkDefault = () => <GroupLink group={SingleGroup} />;


const colormapper = (group) => {
    if (group.grouptype?.id === "cd49e152-610c-11ed-9f29-001a7dda7110") {
      return "#ffb3b3"
    } else {
      return "#ffffff"
    }

}

const validator = (group) => true

export const GroupWithSchema = () => <GroupSchema group={SingleGroup} validator={validator} colormapper={colormapper}/>;