import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private Ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('bananas', 1),
  ];
  getIngredients() {
    return this.Ingredients.slice();
  }
  getIngredient(index: number) {
    return this.Ingredients[index];
  }
  addIngredient(ing: Ingredient) {
    this.Ingredients.push(ing);
    this.ingredientChanged.next(this.Ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.Ingredients.push(...ingredients);
    this.ingredientChanged.next(this.Ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.Ingredients[index] = newIngredient;
    this.ingredientChanged.next(this.Ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.Ingredients.splice(index, 1);
    this.ingredientChanged.next(this.Ingredients.slice());
  }
}
