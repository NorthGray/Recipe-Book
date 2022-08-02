import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  Ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {
    this.Ingredients = this.SLService.getIngredients();
    this.subscription = this.SLService.ingredientChanged.subscribe(
      (Ingredients: Ingredient[]) => (this.Ingredients = Ingredients)
    );
  }
  onIngridientAdded(ingr: Ingredient) {
    this.Ingredients.push(ingr);
  }
  onEditItem(index: number) {
    this.SLService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
