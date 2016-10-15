import {IUser} from './iuser';


export interface IPost {
  id?: number,
  content: string,
  user?: IUser
}
