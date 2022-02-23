export const URL_MARKER_DEFAULT = '../../public/img/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const OfferState = {
  bedrooms: 0,
  city: {
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    name: '',
  },
  description: '',
  goods: [],
  host: {
    avatarUrl: '',
    id: 0,
    isPro: true,
    name: '',
  },
  id: '',
  images: [],
  isFavorite: true,
  isPremium: true,
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0,
  },
  maxAdults: 0,
  previewImage: '',
  price: 0,
  rating: 0,
  title: '',
  type: '',
  reviews: [],
};

const CITIES = [
  {
    title: 'Paris',
    lat: 48.8032,
    lng: 2.3511,
    zoom: 11,
  },
  {
    title: 'Cologne',
    lat: 50.9381,
    lng: 6.95694,
    zoom: 11,
  },
  {
    title: 'Brussels',
    lat: 50.8333,
    lng: 4.35,
    zoom: 11,
  },
  {
    title: 'Amsterdam',
    lat: 52.37403,
    lng: 4.88969,
    zoom: 11,
  },
  {
    title: 'Hamburg',
    lat: 42.7234,
    lng: -78.8349,
    zoom: 11,
  },
  {
    title: 'Dusseldorf',
    lat: 51.2256,
    lng: 6.78278,
    zoom: 11,
  },
];

export default CITIES;
