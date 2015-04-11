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
import AdminProductAdd from 'components/administrator/products/admin-product-add'

let AdministratorRoutes = (
  <Route path="/administrator" name="administrator" handler={ Administrator }>
    <Route path="categories"
      name="administrator-categories"
      handler={ AdministratorCategories } />
    <Route path="categories/create"
      name="administrator-category-create"
      handler={ AdminCategoryCreate } />
    <Route path="categories/:categoryId"
      name="administrator-category"
      handler={ AdminCategoryEdit } />
    <Route path="categories/:categoryId/products"
      name="administrator-category-products"
      handler={ AdminCategoryProducts } />
    <Route path="products/:productId"
      name="administrator-product-edit"
      handler={ AdminProductEdit } />
    <Route path="pages"
      name="administrator-pages"
      handler={ AdminPages } />
    <Route path="pages/:pageId"
      name="administrator-page"
      handler={ AdminPage } />
    <Route path="posts-category/:categoryId"
      name="administrator-posts-category"
      handler={ AdminPostsCategory }>
    </Route>
    <Route path="posts/:postId"
      name="administrator-post"
      handler={ AdminPostEdit } />
    <Route path="categories/:categoryId/products/create"
      name="administrator-product-create"
      handler={ AdminProductAdd } />
  </Route>
)

export default AdministratorRoutes;
