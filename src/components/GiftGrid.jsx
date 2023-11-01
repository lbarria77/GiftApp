import { useFetchGifts } from '../hooks/useFetchGifts';
import { GiftItem } from './GiftItem';

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((images) => (
          <GiftItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};
