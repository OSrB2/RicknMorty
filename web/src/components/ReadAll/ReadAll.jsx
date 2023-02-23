import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import './ReadAll.css';

const itemsMock = [
  {
    _id: '63e659bc9fa9f1461d6d77ff',
    name: 'Jerry Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    tag: [
      'Status: Vivo',
      'Espécie: Humana',
      'Origem: Terra (C-137)',
      'Genero: Homem',
    ],
  },
  {
    _id: '63e65a5e09e35ef5ed5e4eb8',
    name: 'Rick Sanchez',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tag: [
      'Status: Vivo',
      'Espécie: Humana',
      'Origem: Terra (C-137)',
      'Genero: Homem',
    ],
  },
  {
    _id: '63e65a7509e35ef5ed5e4eb9',
    name: 'Morty Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Desconhecida'],
  },
  {
    _id: '63e65a8009e35ef5ed5e4eba',
    name: 'Summer Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    tag: [
      'Status: Vivo',
      'Espécie: Humana',
      'Origem: Terra (C-137)',
      'Genero: Mulher',
    ],
  },
];

function ReadAll() {
  const [items, setItems] = useState([]);

  async function realizarRequisicao() {
    const url = 'http://localhost:3000/items';
    const response = await fetch(url);
    const data = await response.json();

    setItems(data);
  }
  useEffect(() => {
    realizarRequisicao();
  }, []);

  return (
    <div className='ReadAll'>
      {items.map((item) => {
        return <Card key={'card' + item._id} item={item} />;
      })}
    </div>
  );
}

export { ReadAll };
