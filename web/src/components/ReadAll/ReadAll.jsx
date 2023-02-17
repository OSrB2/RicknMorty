import { Card } from '../Card/Card';
import './ReadAll.css';

const items = [
  {
    _id: '63e659bc9fa9f1461d6d77ff',
    name: 'Jerry Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
  },
  {
    _id: '63e65a5e09e35ef5ed5e4eb8',
    name: 'Rick Sanchez',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    _id: '63e65a7509e35ef5ed5e4eb9',
    name: 'Morty Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
  {
    _id: '63e65a8009e35ef5ed5e4eba',
    name: 'Summer Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  },
];

function ReadAll() {
  return (
    <div className="ReadAll">
      {items.map((item) => {
        return <Card key={'card' + item._id} item={item} />;
      })}
    </div>
  );
}

export { ReadAll };
