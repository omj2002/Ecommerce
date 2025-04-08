import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MenComponent } from './pages/men/men.component';
import { WomenComponent } from './pages/women/women.component';
import { ChildrenComponent } from './pages/children/children.component';
import { WomenEthnicComponent } from './pages/women-ethnic/women-ethnic.component';
import { HomeKitchenComponent } from './pages/home-kitchen/home-kitchen.component';
import { BeautyHealthComponent } from './pages/beauty-health/beauty-health.component';
import { JewelleryAccessoriesComponent } from './pages/jewellery-accessories/jewellery-accessories.component';
import { BagsFootwearComponent } from './pages/bags-footwear/bags-footwear.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { SportsFitnessComponent } from './pages/sports-fitness/sports-fitness.component';
import { CarComponent } from './pages/car/car.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'men', component: MenComponent }, // Route for Men's products
  { path: 'women', component: WomenComponent }, // Route for Women's products
  { path: 'children', component: ChildrenComponent }, // Route for Children's products
  { path: 'women-ethnic', component: WomenEthnicComponent }, // Route for Women Ethnic products
  { path: 'home-kitchen', component: HomeKitchenComponent }, // Route for Home & Kitchen products
  { path: 'beauty-health', component: BeautyHealthComponent }, // Route for Beauty & Health products
  { path: 'jewellery-accessories', component: JewelleryAccessoriesComponent }, // Route for Jewellery & Accessories products
  { path: 'bags-footwear', component: BagsFootwearComponent }, // Route for Bags & Footwear products
  { path: 'electronics', component: ElectronicsComponent }, // Route for Electronics products
  { path: 'sports-fitness', component: SportsFitnessComponent }, // Route for Sports & Fitness products
  { path: 'car', component: CarComponent }, // Route for Car products
  { path: ':category', component: CategoryComponent }, // Route for category pages
  { path: ':category/:subcategory', component: SubcategoryComponent },
  { path: 'search', component: SearchResultsComponent }, // Route for subcategory pages
  { path: '**', redirectTo: '' }, // Redirect to home for unknown routes

];