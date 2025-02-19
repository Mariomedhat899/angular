import { Component, Input } from '@angular/core';
import { foods } from '../../../models/foods';
import { MealslistComponent } from '../mealslist/mealslist.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mealcard',
  imports: [RouterLink],
  templateUrl: './mealcard.component.html',
  styleUrl: './mealcard.component.css'
})
export class MealcardComponent {

  @Input() meal!:foods;
}
