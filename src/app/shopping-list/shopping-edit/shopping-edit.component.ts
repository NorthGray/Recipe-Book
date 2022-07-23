import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const ingrdName = this.nameInputRef.nativeElement.value;
    const ingrdAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(ingrdName, ingrdAmount);
    this.IngredientAdded.emit(ingredient);
  }
}
