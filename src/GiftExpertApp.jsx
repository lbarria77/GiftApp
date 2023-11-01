import { useState } from 'react';
import { AddCategories, GiftGrid } from './components';

export default function GiftExpertApp() {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  console.log(categories);
  return (
    <>
      <h1>Gift Expert App</h1>

      <AddCategories
        //   setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
}
