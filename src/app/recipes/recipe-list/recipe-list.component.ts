import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
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
  recipeSelected(recipeElement: Recipe) {
    this.recipeItemClicked.emit(recipeElement);
  }
  constructor() {}

  ngOnInit(): void {}
}
