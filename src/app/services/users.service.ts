import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private myClient: HttpClient) {}
  private Base_URL = 'http://localhost:3000/users';
  private Album_URL = 'http://localhost:3000/albums';
  private Photo_URL = 'http://localhost:3000/photos';

  //All Requests
  GetAllAlbumsbyuserId(userId: any) {
    return this.myClient.get(this.Album_URL + '?userId=' + userId);
  }
  GetAllPhotosbyAlbumId(userId: any, albumId: any) {
    return this.myClient.get(
      this.Photo_URL + '?userId=' + userId + '&albumId=' + albumId
    );
  }
  GetAllUsers() {
    return this.myClient.get(this.Base_URL);
  }
  GetUserByID(id: any) {
    return this.myClient.get(this.Base_URL + '/' + id);
  }
  AddUser(newUser: any) {
    return this.myClient.post(this.Base_URL, newUser);
  }
  UpdateUser(id: any, newUser: any) {
    return this.myClient.put(this.Base_URL + '/' + id, newUser);
  }
  DeleteUserByID(id: any) {
    return this.myClient.delete(this.Base_URL + '/' + id);
  }
}
