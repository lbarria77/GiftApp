import { useState } from 'react';

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;
    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(newInputValue);
    setinputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
