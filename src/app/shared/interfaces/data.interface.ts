import { Album } from '../classes/album';
import { List } from '../classes/list';

export interface DataInterface {
  albums: Album[];
  albumLists: List[];
}
