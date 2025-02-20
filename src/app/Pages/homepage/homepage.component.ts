import { Component } from '@angular/core';
import { AppComponent } from "../../app.component";
import {MatListModule} from '@angular/material/list'; 

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AppComponent, MatListModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
public title={
  url:"../../../assets/MRL Summary of changes 2022.pdf",
  name:"One page summary of changes for 2022 MRL Deskbook"
}
}
