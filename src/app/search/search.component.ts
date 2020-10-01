import { Component, OnInit } from '@angular/core';
import {GIFSServiceService} from '../gifs-service.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private GIFSService:GIFSServiceService) { }

  ngOnInit(): void {
  }

  Search(searchTerm:string) {
    if (searchTerm !== '') {
      this.GIFSService.searchTerm(searchTerm)
   
    }
  }
  
}
