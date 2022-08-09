import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'potatoes with chicken',
      'Potatoes with chicken, carrots and onions are a simple, hearty and delicious dish.',
      'https://img1.russianfood.com/dycontent/images_upl/357/big_356439.jpg',
      [
        new Ingredient('potatoes', 10),
        new Ingredient('chicken legs', 8),
        new Ingredient('carrots', 4),
        new Ingredient('onion', 4),
        new Ingredient('spices', 1),
      ]
    ),
    new Recipe(
      'Brownie',
      'Brownie is a delicious, fragrant and delicate chocolate cake.',
      'https://img1.russianfood.com/dycontent/images_upl/216/big_215764.jpg',
      [
        new Ingredient('Sugar', 4),
        new Ingredient('oil', 3),
        new Ingredient('Black chocolate', 2),
        new Ingredient('Flour', 2),
        new Ingredient('Eggs ', 4),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingr: Ingredient[]) {
    this.slService.addIngredients(ingr);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;

    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
