import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  newProduct() {
    this.submitted = false;
    this.product = new Product();
  }

  save() {
    this.productService
      .createProduct(this.product)
      .subscribe(data => {
          console.log(data);
          this.product = new Product();
          this.gotoList();
        },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/products']);
  }
}
