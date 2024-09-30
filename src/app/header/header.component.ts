import { Component } from "@angular/core";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl:'./header.component.css',
  standalone: true,
  //mark this comp. as a stand alone comp. do not need to be declared in an NgModule. Such components directly manage their own template dependencies
})
export class HeaderComponent { }

