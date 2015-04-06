import React from 'react'
import { Link } from 'react-router'

import PostCategoryActions from 'actions/post-category'
import PostCategoryStore from 'stores/post-category'

class PostsCategory extends React.Component {
  constructor() {
    this.onLoadCategory = this.onLoadCategory.bind(this);
    this.state = {
      category: {
        title: 'Загрузка...',
        posts: []
      }
    }
  }

  static willTransitionTo(_, params) {
    PostCategoryActions.loadOne(params.categoryId);
  }

  componentDidMount() {
    this.unsubscribe = PostCategoryStore.listen(this.onLoadCategory);
  }

  onLoadCategory(category) {
    this.setState({category});
  }

  render() {
    let category = this.state.category;
    let postsList = category.posts.map(post => {
      return (
        <div className="media" key={ post.id }>
          <div className="media-left">
            <a href="#">
              <img className="media-object" src={ post.img } alt="..." />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{ post.title }</h4>
            <p>{ post.shortText }</p>
            {
              //<Link to="page">читать</Link>
            }
          </div>
          <hr />
        </div>
      );
    });
    return (
      <div>
        <h1 className="page-header">{ category.title }</h1>
          { postsList }
      </div>
    )
  }
}

export default PostsCategory;
