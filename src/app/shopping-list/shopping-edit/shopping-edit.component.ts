import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private SLService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddItem() {
    const ingrdName = this.nameInputRef.nativeElement.value;
    const ingrdAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingrdName, ingrdAmount);
    this.SLService.addIngredient(ingredient);
  }
}
