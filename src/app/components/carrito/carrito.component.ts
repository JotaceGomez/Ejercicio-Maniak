import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  products: Product[] = JSON.parse(sessionStorage.getItem("productos") || "[]");

  constructor() {  }     

  ngOnInit(): void { 
    console.log(this.products);
    
  } 
  

  clearCart() {
    sessionStorage.clear();
    this.products = JSON.parse(sessionStorage.getItem("productos") || "[]");
  } 
  
  setCookie(){
    
  }



}