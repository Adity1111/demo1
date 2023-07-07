import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerlistService {
  private selectedCatgory = new BehaviorSubject(1);

  sharedData = this.selectedCatgory.asObservable();
  constructor() { }

  ChangeSelectedCategory(category: number) {

    this.selectedCatgory.next(category)

  } 
}
