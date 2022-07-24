import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'some description',
      'https://www.chinasichuanfood.com/wp-content/uploads/2014/10/steamed-rice-cake-21.jpg'
    ),
    new Recipe(
      'A test Recipe2',
      'some description2',
      'https://o-tendencii.com/uploads/posts/2022-02/1646044807_24-o-tendencii-com-p-motti-yaponskaya-sladost-foto-24.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
