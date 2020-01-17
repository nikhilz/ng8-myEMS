import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuDataService {

  public toggleMenuBar : BehaviorSubject<any> = new BehaviorSubject<any>(null);

  getMenuList() : CustomMenuItem[]{
    return [{
      Label: 'Home', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: null, IsChildVisible: false
    },
    {
        Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: null, IsChildVisible: false
    }];
    
  }

  constructor() { }
}
