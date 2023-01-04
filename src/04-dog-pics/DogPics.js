import { useState } from 'react';

export default function DogPics () {
  // API: https://dog.ceo/dog-api/
  // 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg'

  let [dogPhoto, setDogPhoto] = useState(null);

  async function fetchNextDog() {
    const handler = await fetch('https://dog.ceo/api/breeds/image/random');
    setDogPhoto(await handler.json());
  }

  return (
    <div className='dog-pics'>
      <img src={ (dogPhoto) ? dogPhoto.message : 'https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg' } alt='' />
      <button onClick={ () => fetchNextDog() }>🐶</button>
    </div>
  )
}
