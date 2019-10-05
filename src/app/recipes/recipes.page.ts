import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService, route: ActivatedRoute) {
    route.params.subscribe(val => { // necesario para poder volver a ejecutar ngoninit al volver de otra pagina
      this.recipes = this.recipesService.getAllRecipes();
      console.log(this.recipes);
    });
   }
  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log(this.recipes);
  }

}
