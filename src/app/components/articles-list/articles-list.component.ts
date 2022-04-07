import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {

  dataBase: Product[];
  products = [];

  key = sessionStorage.length;

  constructor()  { 
    //En lugar de una API genero un array como DataBase
  this.dataBase = [
    {
      id: 1,
      nombre:"Anillas",
      precio: 10,
      imagen: "https://www.maniakfitness.com/media/images/160-Anillas-ManiakFitness-Set-de-2-p617aaa3703abb.jpg"
    },
    {
      id: 2,
      nombre:"Mancuernas",
      precio: 25,
      imagen: "https://www.maniakfitness.com/media/images/0003-mancuerna-hexagonal-2-5kg-1-copia-v5f3a5453dd291.jpeg"
    },
    {
      id: 3,
      nombre:"Cinta",
      precio: 60,
      imagen: "https://www.maniakfitness.com/media/images/maniakrunner2-v5f2294ba39aec.jpeg"
    }
  ]  
}


addToCart(product: Product) {
      const products = JSON.parse(sessionStorage.getItem('productos')!)
      products.push(product)
         sessionStorage.setItem('productos', JSON.stringify(products));        
      }


  ngOnInit(): void {
    if (sessionStorage.length == 0) {
      var a = [];
      a.push(JSON.parse(sessionStorage.getItem('productos')!));
      sessionStorage.setItem('productos', JSON.stringify(a));
    }
  }

}