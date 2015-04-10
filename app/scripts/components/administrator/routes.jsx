import React from 'react';
import { Route } from 'react-router';
import Administrator from 'components/administrator/administrator';
import AdministratorCategories from 'components/administrator/administrator-categories';

let AdministratorRoutes = (
  <Route path="/administrator" name="administrator" handler={ Administrator }>
    <Route path="/administrator/categories" name="administrator-categories" handler={ AdministratorCategories } />
  </Route>
)

export default AdministratorRoutes;
