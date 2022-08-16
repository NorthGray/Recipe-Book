import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'potatoes with chicken',
  //     'Potatoes with chicken, carrots and onions are a simple, hearty and delicious dish.',
  //     'https://img1.russianfood.com/dycontent/images_upl/357/big_356439.jpg',
  //     [
  //       new Ingredient('potatoes', 10),
  //       new Ingredient('chicken legs', 8),
  //       new Ingredient('carrots', 4),
  //       new Ingredient('onion', 4),
  //       new Ingredient('spices', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Brownie',
  //     'Brownie is a delicious, fragrant and delicate chocolate cake.',
  //     'https://img1.russianfood.com/dycontent/images_upl/216/big_215764.jpg',
  //     [
  //       new Ingredient('Sugar', 4),
  //       new Ingredient('oil', 3),
  //       new Ingredient('Black chocolate', 2),
  //       new Ingredient('Flour', 2),
  //       new Ingredient('Eggs ', 4),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  constructor(
    private slService: ShoppingListService,
    private http: HttpClient
  ) {}
  storeRecipes() {
    this.http
      .put(
        'https://recipe-book-69dee-default-rtdb.firebaseio.com/recipes.json',
        this.recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipe-book-69dee-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => this.setRecipes(recipes))
      );
  }
  getRecipes() {
    return this.recipes.slice();
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
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
