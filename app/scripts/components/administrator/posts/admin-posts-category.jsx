import React from 'react';
import PostCategoryActions from 'actions/post-category';
import PostCategoryStore from 'stores/post-category';

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

  render() {
    let posts = this.state.category.posts;
    let category = this.state.category;
    let postsList = posts.map(post => {
      return (
        <tr key={ post.id }>
          <td>{ post.title }</td>
          <td>
            <button type="button" className="btn btn-danger">Удалить</button>
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
