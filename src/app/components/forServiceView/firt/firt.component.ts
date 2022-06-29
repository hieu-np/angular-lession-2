import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
@Component({
  selector: 'app-firt',
  templateUrl: './firt.component.html',
  styleUrls: ['./firt.component.css']
})
export class FirtComponent implements OnInit {

  constructor(
    private _loggingService : LoggingService
  ) { 

  }

  ngOnInit(): void {
  }

  title: string = 'First Component'

  onClick(): void {
    this._loggingService.logging();
    // this.logging();
  }

  // logging(): void {
  //   console.log('FirtComponents');
    
  // }
}
