import React from 'react';
import { Route } from 'react-router';
import Administrator from 'components/administrator/administrator';
import AdministratorCategories from 'components/administrator/administrator-categories';
import AdminCategoryEdit from 'components/administrator/categories/admin-category-edit';
import AdminCategoryProducts from 'components/administrator/categories/admin-category-products';
import AdminCategoryCreate from 'components/administrator/categories/admin-category-create';
import AdminProductEdit from 'components/administrator/products/admin-product-edit';
import AdminPages from 'components/administrator/pages/admin-pages';
import AdminPage from 'components/administrator/pages/admin-page';
import AdminPostsCategory from 'components/administrator/posts/admin-posts-category';
import AdminPostEdit from 'components/administrator/posts/admin-post-edit';

let AdministratorRoutes = (
  <Route path="/administrator" name="administrator" handler={ Administrator }>
    <Route path="/administrator/categories"
      name="administrator-categories"
      handler={ AdministratorCategories } />
    <Route path="/administrator/categories/create"
      name="administrator-category-create"
      handler={ AdminCategoryCreate } />
    <Route path="/administrator/categories/:categoryId"
      name="administrator-category"
      handler={ AdminCategoryEdit } />
    <Route path="/administrator/categories/:categoryId/products"
      name="administrator-category-products"
      handler={ AdminCategoryProducts } />
    <Route path="/administrator/products/:productId"
      name="administrator-product-edit"
      handler={ AdminProductEdit } />
    <Route path="/administrator/pages"
      name="administrator-pages"
      handler={ AdminPages } />
    <Route path="/administrator/pages/:pageId"
      name="administrator-page"
      handler={ AdminPage } />
    <Route path="administrator/posts-category/:categoryId"
      name="administrator-posts-category"
      handler={ AdminPostsCategory }>
    </Route>
    <Route path="administrator/posts/:postId"
      name="administrator-post"
      handler={ AdminPostEdit } />
  </Route>
)

export default AdministratorRoutes;
