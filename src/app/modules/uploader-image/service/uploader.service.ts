import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {
  private urlEndPoint = environment.base_url;

  constructor() {}

  async postImage(image: File) {
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await fetch(`${this.urlEndPoint}/image`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.status == 200) {
        return data.path;
      }
    } catch (error) {
      return false;
    }
  }
}
