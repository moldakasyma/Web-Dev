import { Component } from '@angular/core';
import { share } from 'rxjs';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share(url: string) {
    var sharelink = "https://api.whatsapp.com/send?text=".concat(url)+"&text=Hello! I'd like to buy it! Can you give more info about the product?";
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  learnMore(urs: string){
    var source="https://kaspi.kz";
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/