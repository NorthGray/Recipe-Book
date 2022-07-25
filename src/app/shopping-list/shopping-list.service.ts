import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private Ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('bananas', 1),
  ];
  getIngredients() {
    return this.Ingredients.slice();
  }
  addIngredient(ing: Ingredient) {
    this.Ingredients.push(ing);
    this.ingredientChanged.emit(this.Ingredients.slice());
  }
  addINgredients(ingredients: Ingredient[]) {
    this.Ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.Ingredients.slice());
  }
}
