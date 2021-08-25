import React from 'react';
import { useDispatch } from 'react-redux';
import { startDeletingCollection, startEditCollection, startSaveCollection } from '../../actions/collectionActions';
import { CollectionEdit } from './CollectionEdit';
import { useForm } from '../../hooks/useForm';
import { CollectionView } from './CollectionView';


export const Collection = ({note: {id, text}, isActive}) => {

  const [formValues, handleInputChange] = useForm({collection: text});
  const {collection} = formValues;

  const dispatch = useDispatch();

  const handleDeleteCollection = () => dispatch(startDeletingCollection(id));
  const handleEditCollection = () => dispatch(startEditCollection(id));
  const handleSaveCollection = () => dispatch(startSaveCollection({id, collection}));


  return (
    <li className="list-group-item collection-card">
      <div className="row">
        <div className="col-10">
          {isActive ?
            <CollectionEdit name='collection' value={collection} onChange={handleInputChange}/>
            :
            <CollectionView collectionText={collection}/>
          }
        </div>

        <div className="col-2 collection-button-group">
          <div className="btn-group" role="group" aria-label="Basic example">
            <span className="icon icon-trash-2" onClick={handleDeleteCollection}/>
            {isActive ?
              <span className="icon icon-check-circle" onClick={handleSaveCollection}/>
              :
              <span className="icon icon-edit-2" onClick={handleEditCollection}/>
            }
          </div>
        </div>

      </div>
    </li>
  )
}
