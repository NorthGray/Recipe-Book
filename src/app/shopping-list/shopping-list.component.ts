import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  Ingredients: Ingredient[];

  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {
    this.Ingredients = this.SLService.getIngredients();
    this.SLService.ingredientChanged.subscribe(
      (Ingredients: Ingredient[]) => (this.Ingredients = Ingredients)
    );
  }
  onIngridientAdded(ingr: Ingredient) {
    this.Ingredients.push(ingr);
  }
}
