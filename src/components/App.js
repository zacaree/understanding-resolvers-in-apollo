import React, { Component } from 'react';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
// import Fetcheroo from '../Fetcheroo';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';



export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Fetcheroo /> */}
        <LinkList />
        <CreateLink />
      </div>
    );
  }
}



