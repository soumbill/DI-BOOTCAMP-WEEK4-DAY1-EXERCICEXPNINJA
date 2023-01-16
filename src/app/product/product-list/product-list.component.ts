import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(public router: Router, public productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getListUsers();
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  goTo(idProduct: number) {
    this.router.navigate(['details/products', {id: idProduct}]);
  }

}


