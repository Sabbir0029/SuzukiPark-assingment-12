import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Admin from '../admin/admin';
import Manage from '../Manage';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Link className='m-5 text-success fw-bold text-decoration-none fs-2' to={`${url}/admin`}>Make Admin</Link>

      <Switch>
        <Route exact path={path}>
          <Manage></Manage>
        </Route>
        <Route path={`${path}/admin`}>
          <Admin></Admin>
        </Route>
      </Switch>
    </div>
  );
};

export default Dashboard;