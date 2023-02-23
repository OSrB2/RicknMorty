import './Card.css';

function Card(props) {
  const item = props.item;
  const tags = item.tag;

  return (
    <div className='card'>
      <h1>{item.name}</h1>
      <img src={item.imageUrl} alt={item.name} title={item.name} />
      {tags && (
        <div className='tag-wrapper'>
          {tags.map((tag, index) => {
            return (
              <div key={`tag-${index}`} className='tag'>
                {tag}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export { Card };
