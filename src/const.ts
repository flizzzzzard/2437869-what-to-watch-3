import {FilmCardProps} from './components/FilmCard/filmCardProps.tsx';

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  SimilarFilms = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
}

export type AuthData = {
  email: string;
  password: string;
};

export type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export type Review = {
  id: number;
  text: string;
  author: string;
  comment: string;
  user: string;
  date: string;
  rating: number;
  filmId?: number;
}

export type UserReview = {
  filmId: string;
  rating: number;
  comment: string;
}

export const TIMEOUT_SHOW_ERROR = 2000;
export const TIMEOUT_SHOW_ERROR_SMALL = 1000;

export enum Reducer {
  USER_REDUCER = 'USER_REDUCER',
  MAIN_REDUCER = 'MAIN_REDUCER',
  FILM_REDUCER = 'FILM_REDUCER',
}


export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MAXDISPLAYEDFILMS = 9;
export const STARCOUNT = 10;

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  avatar: string | null;
  token: string;
  avatarUrl: string | null;
}

export type FilmState = {
  film: FilmCardProps | null;
  reviews: Review[];
  similarFilms: FilmCardProps[];
}

export enum Genres {
  All = 'All Genres',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Horror = 'Horror',
  KidsFamily = 'Kids & Family',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thriller = 'Thriller',
  Fantasy = 'Fantasy',
  Biography = 'Biography',
  Adventure = 'Adventure'
}
