import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
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

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
    ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) { // Sirve para filrar en el array cargarse todas las recetas que no cumplan con el ID
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
  }
}
