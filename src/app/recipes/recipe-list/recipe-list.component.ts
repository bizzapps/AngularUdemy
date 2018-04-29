import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe
    (
      'A Test Recipe',
      'This is a simple test recipe',
     'https://www.maxpixel.net/static/photo/1x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg'
    ),
    new Recipe(
      'Another Recipe',
      'This a test description for another recipe',
      'https://www.maxpixel.net/static/photo/1x/Bio-Food-Home-Made-Recipe-Dishes-Kitchen-Meals-1175496.jpg'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
