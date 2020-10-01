import { Component, OnInit } from '@angular/core';
import { GIFSServiceService } from '../gifs-service.service';

@Component({
  selector: 'app-gyfis',
  templateUrl: './gyfis.component.html',
  styleUrls: ['./gyfis.component.css']
})
export class GyfisComponent implements OnInit {
  gifs: any[] = [];
  constructor(private gifsService:GIFSServiceService) { }

  ngOnInit(): void {
    this.gifsService.getGyfs()
      .subscribe((response: any) => {
        console.log('Data', response)
        this.gifs = response.data;
      });
  }

}
