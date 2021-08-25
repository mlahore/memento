import { types } from '../types/types';
import { mocksCollections } from "../mocks/mocksCollection";


const initialState = {
  notes: mocksCollections,
  active: mocksCollections[0].id
}

export const collectionReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.COLLECTION_ACTIVE:
      return {
        ...state,
        active:
          action.payload
      }
    case  types.COLLECTION_NEW:
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }
    case types.COLLECTION_LOAD:
      return {
        ...state,
        notes: [...action.payload]
      }
    case types.COLLECTION_UPDATE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.note.id
            ? action.payload.note
            : note
        ),
        active: null
      }
    case types.COLLECTION_DELETE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    default:
      return state
  }
}