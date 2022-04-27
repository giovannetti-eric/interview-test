import React from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import UsersListing from './components/usersListing/UsersListing';

const API_URL = 'http://localhost:8099';

function App() {
  return (
    <DefaultLayout title="Users">
      <UsersListing />
    </DefaultLayout>
  );
}

export default App;
