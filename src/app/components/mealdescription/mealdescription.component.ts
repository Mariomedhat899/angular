import { Component, inject } from '@angular/core';
import { foods } from '../../../models/foods';
import { FoodapiService } from '../../services/foodapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mealdescription',
  imports: [],
  templateUrl: './mealdescription.component.html',
  styleUrl: './mealdescription.component.css'
})
export class MealdescriptionComponent {

  MealDescription!:foods[] ;

  MealId!:string|null ;

 private readonly Foodapiservice = inject(FoodapiService);
 private readonly activitedroute = inject(ActivatedRoute);

  getMealsId(){
   this.activitedroute.paramMap.subscribe({
    next:(UrlData)=>{
      this.MealId = UrlData.get('id');
      
    }
   })
  }

  getMealDescription(id:string|null){
    this.Foodapiservice.getmealDetails(id).subscribe({
      next:({meals})=>{



        this.MealDescription = meals;

        console.log(this.MealDescription);
        

      }
    })
  }


  ngOnInit(){

    this.getMealsId();
    this.getMealDescription(this.MealId);
  }
 }
