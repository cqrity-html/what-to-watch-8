const placeCards = [
/*   {
    title: 'Beautiful & luxurious apartment at great location',
    preview: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    id: '1',
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    reviews: ['that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'A quiet cozy and lightness of Amsterdam. The building is green and from 18th century.',
      'the unique lightness of Amsterdam. The building is green and from 18th century.'],
  },
  {
    title: 'Wood and stone place',
    preview: 'img/apartment-02.jpg',
    price: 240,
    type: 'Bungalow',
    id: '2',
    lat: 52.369553943508,
    lng: 4.85309666406198,
    reviews: ['A quiet cozy and picturesque The building is green and from 18th century.',
      'A a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
  },
  {
    title: 'Canal View Prinsengracht',
    preview: 'img/apartment-03.jpg',
    price: 60,
    type: 'Hotel',
    id: '3',
    lat: 52.3909553943508,
    lng: 4.929309666406198,
    reviews: ['The building is green and from 18th century.',
      'ides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
  },
  {
    title: 'Nice, cozy, warm big bed apartment',
    preview: 'img/apartment-01.jpg',
    price: 360,
    type: 'Flat',
    id: '4',
    lat: 52.3809553943508,
    lng: 4.939309666406198,
    reviews: ['A quiet cozy aightness of Amsterdam. The building is green and from 18th century.'],
  }, */
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description: 'that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: '1',
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 1.1,
    title: 'Beautiful & luxurious studio at great location',
    type: 'Apartment',
    reviews: ['that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'A quiet cozy of Amsterdam. The building is green and from 18th century.',
      'the unique lightness of Amsterdam. The building is green and from 18th century.'],
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Heating', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Max',
    },
    id: '2',
    images: ['img/apartment-02.jpg', 'img/apartment-01.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 6,
    previewImage: 'img/apartment-02.jpg',
    price: 240,
    rating: 2.2,
    title: 'Wood and stone place',
    type: 'Bungalow',
    reviews: ['A quiet cozy and picturesque The building is green and from 18th century.',
      'A a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description: 'the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Julia',
    },
    id: '3',
    images: ['img/apartment-03.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    maxAdults: 3,
    previewImage: 'img/apartment-03.jpg',
    price: 60,
    rating: 3.3,
    title: 'Canal View Prinsengracht',
    type: 'Hotel',
    reviews: ['The building is green and from 18th century.',
      'ides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'river by the unique lightness of Amsterdam. The building is green and from 18th century.',
      'behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'],
  },
  {
    bedrooms: 8,
    city: {
      location: {
        latitude: 52.3740300,
        longitude: 4.8896900,
        zoom: 12,
      },
      name: 'Amsterdam',
    },
    description: 'A a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    goods: ['Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Harry',
    },
    id: '4',
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    maxAdults: 5,
    previewImage: 'img/apartment-01.jpg',
    price: 360,
    rating: 4.4,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Flat',
    reviews: ['A quiet cozy aightness of Amsterdam. The building is green and from 18th century.'],
  },
];

export default placeCards;
