import React from 'react';
import Router from 'react-router';
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

import Layout from 'components/main/layout'
import Home from 'components/main/home'
import Page from 'components/main/page'
import Product from 'components/main/products/product'
import PostsCategory from 'components/main/posts/posts-category'
import ProductCategory from 'components/main/products/product-category'

var routes = (
	<Route name="main" path="/" handler={Layout}>
		<DefaultRoute handler={Home} />
    <Route name="page" handler={Page} />
    <Route name="products" handler={Product} />
    <Route name="category" handler={PostsCategory} />
    <Route name="product-category" path="categories/:categoryId" handler={ProductCategory} />
	</Route>
);

exports.start = function() {

  Router.run(routes, Router.HistoryLocation, function (Handler) {
		React.render(<Handler />, document.getElementById('content'));
	});
}
