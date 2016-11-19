import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class MainLayout extends Component {

  componentWillMount = () => injectTapEventPlugin();

  render() {
    return (
      <AppBar
        title="Not adf title"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />
    )
  }
}
