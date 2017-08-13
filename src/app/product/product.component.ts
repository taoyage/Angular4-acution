import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

//控制器
export class ProductComponent implements OnInit {
  private products: Array < Product > ;
  constructor() {}

  //组件生命周期---->组件实例划后会被调用一次
  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品",99.8,3.5,"非常好", ["电子产品", "贝尔产品"]),
      new Product(2, "第二个商品",99.8,3.5,"非常好", ["电子产品", "贝尔产品"]),
      new Product(3, "第三个商品",99.8,3.5,"非常好", ["电子产品", "贝尔产品"]),
      new Product(4, "第四个商品",99.8,3.5,"非常好", ["电子产品", "贝尔产品"]),
      new Product(5, "第五个商品",99.8,3.5,"非常好", ["电子产品", "贝尔产品"]),
      new Product(6, "第六个商品",99.8,3.5,"非常好", ["电子产品", "贝尔产品"])
    ]
  }

};
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array < string >
  ) {

  }
}
