import {
  Component,
  OnInit,
  AfterContentInit,
  AfterContentChecked,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-otherlifecyclechildtwo',
  templateUrl: './otherlifecyclechildtwo.component.html',
  styleUrls: ['./otherlifecyclechildtwo.component.css'],
})
export class OtherlifecyclechildtwoComponent
  implements OnInit, AfterContentInit, AfterContentChecked
{
  @ContentChild('value') value!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.value);
    
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  title: string = 'ngAfterContentInit, ngAfterContentChecked';
}
