import { Component, OnInit, OnDestroy } from '@angular/core';
import { GIFSServiceService } from '../gifs-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gyfis',
  templateUrl: './gyfis.component.html',
  styleUrls: ['./gyfis.component.css']
})
export class GyfisComponent implements OnInit,OnDestroy {
  gifs: any[] = [];
  subscription:Subscription
  constructor(private gifsService:GIFSServiceService) { }

  ngOnInit(): void {
    this.gifsService.getGyfs()
    this.subscription = this.gifsService.getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
        console.log(response)
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
 }
}
