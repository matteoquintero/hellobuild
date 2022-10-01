import { NewUser, User, UserNoPass } from '../types'
import usersData from './users.json'

const users: User[] = usersData as User[]

export const getUsers = (): User[] => users
export const getUsersNoPass = (): UserNoPass[] => {
  return users.map(({ id, name, city, favoriteLanguage, email }) => {
    return {
      id,
      name,
      city,
      favoriteLanguage,
      email,
    }
  })
}

export const findByEmail = (email: string): NewUser | undefined => {
  const userFind = users.find(d => d.email === email)
  if (userFind != null) {
    return userFind
  }
  return undefined
}

export const addUser = (newUser: NewUser): User => {
  const newUserData = {
    id: Math.max(...users.map(d => d.id)) + 1,
    ...newUser
  }

  users.push(newUserData)
  return newUserData
}
