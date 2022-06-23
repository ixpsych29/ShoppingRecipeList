import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Books',15),
    new Ingredient('Toamtos',5),
    new Ingredient('Apple',10),
    new Ingredient('Carrot',2),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
