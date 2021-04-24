import {Injectable} from '@angular/core';
import {Recipe} from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test description', 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w-1024x683.jpg'),
    new Recipe('Another Test Recipe', 'Another description', 'https://iamafoodblog.b-cdn.net/wp-content/uploads/2020/05/homemade-birria-tacos-recipe-3273w-1024x683.jpg')
  ];

  getRecipes() {
    return  this.recipes.slice();
  }
}
