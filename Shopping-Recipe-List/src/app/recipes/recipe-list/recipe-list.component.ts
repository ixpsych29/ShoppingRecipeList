import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biryani','Very Dilicious','https://img-global.cpcdn.com/recipes/8999c15a052f5a39/400x400cq70/photo.jpg'),
    new Recipe('Biryani','Very Dilicious','https://img-global.cpcdn.com/recipes/8999c15a052f5a39/400x400cq70/photo.jpg'),
    new Recipe('Biryani','Very Dilicious','https://img-global.cpcdn.com/recipes/8999c15a052f5a39/400x400cq70/photo.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
