import React from 'react';
import Router from 'react-router';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import AdministratorRoutes from 'components/administrator/routes';
import Layout from 'components/main/layout';
import Home from 'components/main/home';
import Page from 'components/main/page';
import Product from 'components/main/products/product';
import PostsCategory from 'components/main/posts/posts-category';
import ProductCategory from 'components/main/products/product-category';
import Post from 'components/main/post';
import Cart from 'components/main/cart/cart';
import LoginHandler from 'components/main/user/login-handler';
import UserActions from 'actions/user';
import Api from 'lib/api';
import Order from 'components/main/cart/order';
import ProductSearch from 'components/main/products/product-search';

if (localStorage.token) {
	Api.headers.Authorization = `Bearer ${localStorage.token}`;
}

UserActions.loadCurrentUser();

var routes = (
	<Route name="app">
		<Route name="main" path="/" handler={Layout}>
			<DefaultRoute handler={Home} />
	    <Route name="page" path="page/:pageId" handler={Page} />
	    <Route name="product" path="products/:productId" handler={Product} />
	    <Route name="post-category" path="post-categories/:categoryId" handler={PostsCategory} />
			<Route name="post" path="posts/:postId" handler={Post} />
	    <Route name="product-category" path="categories/:categoryId" handler={ProductCategory} />
			<Route name="cart" handler={Cart} />
			<Route name="order" handler={Order} />
			<Route name="login" handler={LoginHandler} />
			<Route name="search" path="search/:query" handler={ProductSearch} />
		</Route>
		{ AdministratorRoutes }
	</Route>
);

exports.start = function() {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
