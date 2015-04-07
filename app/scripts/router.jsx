import React from 'react';
import Router from 'react-router';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import Layout from 'components/main/layout';
import Home from 'components/main/home';
import Page from 'components/main/page';
import Product from 'components/main/products/product';
import PostsCategory from 'components/main/posts/posts-category';
import ProductCategory from 'components/main/products/product-category';
import Post from 'components/main/post';

var routes = (
	<Route name="main" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
    <Route name="page" path="page/:pageId" handler={Page} />
    <Route name="product" path="products/:productId" handler={Product} />
    <Route name="post-category" path="post-categories/:categoryId" handler={PostsCategory} />
		<Route name="post" path="posts/:postId" handler={Post} />
    <Route name="product-category" path="categories/:categoryId" handler={ProductCategory} />
	</Route>
);

exports.start = function() {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
