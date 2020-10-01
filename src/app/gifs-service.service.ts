import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment} from '../environments/environment'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GIFSServiceService {
  

  constructor(private http: HttpClient) { }

  getGyfs() {
    var url = `https://api.giphy.com/v1/gifs/trending?api_key=${environment.gifApiKey}&limit50`
    return this.http.get(url)
  }
}