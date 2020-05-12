import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    menuItems: NbMenuItem[] = [
        {
            title: 'Dashboard',
            icon: 'home-outline',
            link: '/',
            home: true
        },
        {
            title: 'Users',
            icon: 'person-outline',
            link: 'users',
        },
        {
            title: 'Wallet',
            icon: 'shopping-cart-outline',
            link: 'wallet'
        },
        {
            title: 'Logout',
            icon: 'unlock-outline',
        },
    ];

  constructor() { }


}
