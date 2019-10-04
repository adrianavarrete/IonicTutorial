import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://bit.ly/3570P0C',
      ingredients: ['French Fries', 'Pork Meat']
    },
    {
      id: 'r2',
      title: 'Canelones',
      imageUrl: 'https://bit.ly/2nfWC9S',
      ingredients: ['Meat', 'Pasta']
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
