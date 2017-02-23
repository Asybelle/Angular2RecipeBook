import {Injectable} from '@angular/core';
import {Recipe} from "./recipes/recipe";
import {Ingredient} from "./shared/ingredient";

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.saladbarmn.com/assets/img/slider/2.jpg', [])
  ];

  constructor() {
  }

  getRecipes() {
    return this.recipes;
  }
}
