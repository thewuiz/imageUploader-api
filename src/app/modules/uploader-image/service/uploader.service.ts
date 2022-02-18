import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {
  private urlEndPoint = environment.base_url;

  constructor() {}

  async postImage(image: File) {
    try {
      const formData = new FormData();
      formData.append('image', image);
      const response = await fetch(`${this.urlEndPoint}/image`, {
        method: 'POST',
        body: formData,
      });

      const responseText = await response.text();
      return responseText;
    } catch (error) {
      return error;
    }
  }
}
