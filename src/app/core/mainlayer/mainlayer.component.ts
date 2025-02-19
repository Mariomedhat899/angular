import { Component } from '@angular/core';
import { SidebarComponent } from "../../shared/sidebar/sidebar.component";
import { HomeComponent } from "../home/home.component";
import { MealslistComponent } from "../../components/mealslist/mealslist.component";


@Component({
  selector: 'app-mainlayer',
  imports: [SidebarComponent, HomeComponent, MealslistComponent],
  templateUrl: './mainlayer.component.html',
  styleUrl: './mainlayer.component.css'
})
export class MainlayerComponent {

}
