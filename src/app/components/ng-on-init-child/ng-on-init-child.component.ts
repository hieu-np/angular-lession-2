import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-ng-on-init-child',
  templateUrl: './ng-on-init-child.component.html',
  styleUrls: ['./ng-on-init-child.component.css'],
})
export class NgOnInitChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck
{
  constructor() {
    console.log('------------------');
    console.log('contruoctor child');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy child');
    console.log('------------------');
  }

  ngOnInit(): void {
    console.log('ngOnInit child');
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('onchange child');
    this.previousTotal = simpleChanges['total'].previousValue;
  }
  ngDoCheck() {
    console.log('ngDoCheck child');
  }

  title: string = 'LifecycleHookComponent';
  @Input('total') total: number = 0;
  previousTotal!: number;
}
