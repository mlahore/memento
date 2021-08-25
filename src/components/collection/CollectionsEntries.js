import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Collection } from './Collection';
import { startNewCollection } from '../../actions/collectionActions';


export const CollectionEntries = () => {

  const {notes, active} = useSelector(state => state.collections);
  const dispatch = useDispatch();

  const handleNewCollection = () => dispatch(startNewCollection());

  return (
    <div className="card collection-card">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {
            notes?.map(note => (
              <Collection
                key={note.id}
                note={note}
                isActive={active === note.id}
              />
            ))
          }
          <button
            type="button"
            className="btn btn-link collection-button-new"
            onClick={handleNewCollection}
          >
            +Add New Collection
          </button>
        </ul>
      </div>
    </div>
  )
}
