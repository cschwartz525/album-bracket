import { Album } from './Album';

export default class ListItem {
  album: Album;
  next: ListItem | undefined;

  constructor(album: Album) {
    this.album = album;
  }

  setNext(item: ListItem) {
    const tmp = this.next;
    item.next = tmp;
    this.next = item;
  }
}
