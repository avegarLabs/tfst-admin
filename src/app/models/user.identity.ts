export interface IUserIdentity {
  sub?: string | undefined
  preferred_username?: string | undefined
  name?: string | undefined
  username?: string | undefined
  given_name?: string | undefined
  role?: string | undefined
  email?: string | undefined
}

export class UserIdentity implements IUserIdentity {
  sub?: string | undefined
  preferred_username?: string | undefined
  name?: string | undefined
  given_name?: string | undefined
  username?: string
  role?: string | undefined
  email?: string | undefined

  constructor(data?: IUserIdentity) {
    if (data) {
      for (const property in data) {
        if (data.hasOwnProperty(property)) {
          ;(this as any)[property] = (data as any)[property]
        }
      }
    }
  }
}
