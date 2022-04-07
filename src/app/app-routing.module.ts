import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const routes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'articles-list', component: ArticlesListComponent }, 
  { path: 'article', component: ArticleComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: "**", redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
