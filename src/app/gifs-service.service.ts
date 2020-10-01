import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment} from '../environments/environment'
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GIFSServiceService {
  gifs = new BehaviorSubject<any>([])
  
  constructor(private http: HttpClient) { }

  getGyfs() {
    var url = `https://api.giphy.com/v1/gifs/trending?api_key=${environment.gifApiKey}&limit50`
    return this.http.get(url)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
    })
  }
  searchTerm(gifName) {
    var url = `https://api.giphy.com/v1/gifs/search?q=$(gifName)api_key=${environment.gifApiKey}&limit50`
    return this.http.get(url)
      .subscribe((response: any) => {
        this.gifs.next(response.data);
      })
  }
  getGifs() {
    return this.gifs.asObservable();
  }
}