import { types } from '../types/types';
import { getUniqueId } from '../utils/newId';

export const startNewCollection = () => {
  return async (dispatch) => {

    const newPost = {
      id: getUniqueId(),
      text: '',
    }

    dispatch(activeCollection(newPost.id, newPost));
    dispatch(addNewCollection(newPost.id, newPost));
  }
}

export const startEditCollection = (id) => {
  return async (dispatch) => {
    dispatch(activeCollection(id));
  }
}


export const startSaveCollection = (note) => {
  return async (dispatch) => {
    dispatch(refreshCollection(note));
  }
}

export const startDeletingCollection = (id) => {
  return async (dispatch) => {
    dispatch(deleteCollection(id));
  }
}

export const activeCollection = (id) => ({
  type: types.COLLECTION_ACTIVE,
  payload: id
});

export const addNewCollection = (id, note) => ({
  type: types.COLLECTION_NEW,
  payload: {
    id,
    ...note
  }
});

export const refreshCollection = (note) => ({
  type: types.COLLECTION_UPDATE,
  payload: {
    note
  }
});

export const deleteCollection = (id) => ({
  type: types.COLLECTION_DELETE,
  payload: id
});
