import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[]),
    new Recipe('Summer Salad', 'Okayish', 'http://www.saladbarmn.com/assets/img/slider/2.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}