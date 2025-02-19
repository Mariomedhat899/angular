import { Component } from '@angular/core';
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { MainlayerComponent } from "./core/mainlayer/mainlayer.component";
import { MealdescriptionComponent } from "./components/mealdescription/mealdescription.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondAngular';

}
