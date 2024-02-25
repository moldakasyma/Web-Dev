import { Component , OnInit} from '@angular/core';
import {Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {

  prod: Product[] = products;
  filtered_products= [...products];
  selectedCategory: string="None";





  share(url: string) {
    var sharelink = "https://api.whatsapp.com/send?text=".concat(url)+"&text=Hello! I'd like to buy it! Can you give more info about the product?";
    window.open(sharelink);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  like(product: Product) {
    product.likes++;
  }
  delete(product: Product) {
    const index = this.prod.indexOf(product);
  
    if (index !== -1) {
      this.prod.splice(index, 1);
      window.alert('Product has been deleted');
      this.filterByCategory();
    } else {
      window.alert('Product not found');
    }
  }
  filterByCategory(){
    if(this.selectedCategory=="None"){
      this.filtered_products=this.prod
    }
    else{
      this.filtered_products=this.prod.filter(p => p.category===this.selectedCategory);
    }
  }

  updateFilteredCategory(value: string){
    this.selectedCategory=value;
    console.log(this.selectedCategory)
    this.filterByCategory();
  }






}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/