import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';


export default class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  }

  render() {
    const { description, url } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>

        <Mutation mutation={POST_MUTATION} variables={{ description: this.state.description, url: this.state.url }}>
          {myPostMutation => (
            <button onClick={myPostMutation}>Submit</button>
          )}
        </Mutation>
        
      </div>
    )
  }
}

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`