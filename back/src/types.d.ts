import { FavoriteLanguage } from './enums'

export interface User {
  id: number
  name: string
  email: string
  city: string
  favoriteLanguage: FavoriteLanguage
  password: string
}

export interface NewUser {
  name: string
  email: string
  city: string
  favoriteLanguage: FavoriteLanguage
  password: string
}


export type UserNoPass = Omit<User, 'password'>
