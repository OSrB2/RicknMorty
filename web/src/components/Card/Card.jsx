import './Card.css';

function Card(props) {
  const item = props.item;
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <img src={item.imageUrl} alt={item.name} title={item.name} />
    </div>
  );
}

export { Card };
