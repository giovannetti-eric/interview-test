import React from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import UsersListing from './components/usersListing/UsersListing';

function App() {
  return (
    <DefaultLayout title="Users">
      <UsersListing />
    </DefaultLayout>
  );
}

export default App;
