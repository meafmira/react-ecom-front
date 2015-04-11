import React from 'react';
import { Route } from 'react-router';
import Administrator from 'components/administrator/administrator';
import AdministratorCategories from 'components/administrator/administrator-categories';
import AdminCategoryEdit from 'components/administrator/categories/admin-category-edit';
import AdminCategoryProducts from 'components/administrator/categories/admin-category-products';
import AdminCategoryCreate from 'components/administrator/categories/admin-category-create';

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
  </Route>
)

export default AdministratorRoutes;
