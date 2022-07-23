import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('bananas', 1),
  ];

  constructor() {}

  ngOnInit(): void {}
  onIngridientAdded(ingr: Ingredient) {
    this.Ingredients.push(ingr);
  }
}
