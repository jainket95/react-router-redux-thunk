import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";

export class Posts extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div className="card" key={post.id}>
        <h3>{post.title}</h3>
        <h6>{post.body}</h6>
      </div>
    ));
    return (
      <div>
        <h3>{postItems}</h3>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
