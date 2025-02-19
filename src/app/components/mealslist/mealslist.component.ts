import { Component,inject } from '@angular/core';
import { FoodapiService } from '../../services/foodapi.service';
import { foods } from '../../../models/foods';
import { MealcardComponent } from "../mealcard/mealcard.component";
import { MealdescriptionComponent } from "../mealdescription/mealdescription.component";

@Component({
  selector: 'app-mealslist',
  imports: [MealcardComponent, MealdescriptionComponent],
  templateUrl: './mealslist.component.html',
  styleUrl: './mealslist.component.css'
})
export class MealslistComponent {


  allMeals:foods[] =[] 
  private readonly foodapiservice = inject(FoodapiService);

  getAllMeals():void{
    this.foodapiservice.getmeals().subscribe({
      next:(res)=>{

        this.allMeals =res.meals;   
      }
    })
  }

  ngOnInit(): void{
    this.getAllMeals();
  }
}
