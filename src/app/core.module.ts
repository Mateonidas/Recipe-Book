import {NgModule} from '@angular/core';
import {ShoppingListService} from './shopping-list/shopping-list-service/shopping-list.service';
import {RecipeService} from './recipes/recipe-service/recipe.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth/auth.interceptor';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
//use core module only when is no using @injectable in services
export class CoreModule {
}
