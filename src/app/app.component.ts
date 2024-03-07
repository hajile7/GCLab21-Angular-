import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuItem} from './models/menu-item'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  chirpusMenu:MenuItem[] = [
    {
      name: "Mom's Spaghetti",
      category: "pasta",
      price: 12.99,
      vegetarian: true,
      soldOut: true
    },
    {
      name: "Mystery Meat Sandwich",
      category: "sub",
      price: 10.99,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Speed Cola",
      category: "drink ",
      price: 3.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "Linguine",
      category: "pasta",
      price: 13.99,
      vegetarian: true,
      soldOut: false
    },
    {
      name: "$5 Footlong",
      category: "sub",
      price: 13.29,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Butter Beer",
      category: "drink ",
      price: 6.99,
      vegetarian: true,
      soldOut: true
    },
    {
      name: "Pepperoni Pizza",
      category: "pizza",
      price: 10.99,
      vegetarian: false,
      soldOut: false
    },
    {
      name: "Margherita Pizza",
      category: "pizza",
      price: 10.99,
      vegetarian: false,
      soldOut: false
    }
  ];


}
