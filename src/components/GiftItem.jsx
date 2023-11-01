export const GiftItem = ({ title, url, id }) => {
  const displayedTitle = title.trim() === '' ? 'Sin título' : title;

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{displayedTitle}</p>
    </div>
  );
};
