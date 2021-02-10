import {Routes} from '@angular/router'
import { AboutComponent } from './about/about.component'
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'

export const ROUTES: Routes = [

    {path: '', component: HomeComponent},
    {path: '', component: HeaderComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantsComponent},
    {path: 'restaurant', component: RestaurantComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent},

]