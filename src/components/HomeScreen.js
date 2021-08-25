import React from 'react';
import { CollectionEntries } from './collection/CollectionsEntries';
import { Navbar } from './Navbar';


export const HomeScreen = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center home-nav-bar">
        <div className="col-sm-12">
          <Navbar/>
        </div>
      </div>
      <div className="collection-card-title">
        <span>My Collections</span>
      </div>
      <div className="row justify-content-md-center home-collection">
        <div className="col-sm-8">
          <CollectionEntries/>
        </div>
      </div>
    </div>
  )
}
