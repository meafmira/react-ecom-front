import React from 'react';
import PostCategoryActions from 'actions/post-category';
import PostCategoryStore from 'stores/post-category';
import { Link } from 'react-router';
import PostActions from 'actions/post'
import ConfirmModal from 'components/common/confirm-modal'

export default class AdminPostsCategory extends React.Component {
  constructor() {
    this.state = {
      category: {
        posts: []
      }
    }
    this.onCategoryLoad = this.onCategoryLoad.bind(this);
  }

  static willTransitionTo(_, params) {
    PostCategoryActions.loadOne(params.categoryId);
  }

  componentDidMount() {
    this.unsubscribe = PostCategoryStore.listen(this.onCategoryLoad);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onCategoryLoad(category) {
    this.setState({category});
  }

  removePost(post) {
    PostActions.delete(post.id)
      .then(() => PostCategoryActions.loadOne(post.post_category_id));
  }

  render() {
    let posts = this.state.category.posts;
    let category = this.state.category;
    let postsList = posts.map(post => {
      return (
        <tr key={ post.id }>
          <td>
            <Link to="administrator-post" params={{ postId: post.id }}>{ post.title }</Link>
          </td>
          <td>
            <ConfirmModal text="Удалить пост?" onYes={ () => this.removePost(post) }>
              <button type="button" className="btn btn-small btn-danger">Удалить</button>
            </ConfirmModal>
          </td>
        </tr>
      )
    });

    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
        <table className="table table-striped">
          <thead>
            <th>Название</th>
            <th>Действия</th>
          </thead>
          <tbody>
          { postsList }
          </tbody>
        </table>
      </div>
    )
  }
}

AdminPostsCategory.contextTypes = {
  router: React.PropTypes.func
};
