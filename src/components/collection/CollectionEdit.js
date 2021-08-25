import React from 'react';

export const CollectionEdit = ({name, value, onChange}) => {

  return (
    <input
      className="collection-edit-input form-field"
      type="text"
      placeholder=""
      autoComplete="off"
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}



