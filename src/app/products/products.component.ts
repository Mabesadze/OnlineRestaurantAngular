import { Component } from '@angular/core';
import { ToolsService } from '../../services/tools.service';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { FormsModule } from '@angular/forms';
import { FilterComponent } from "../filter/filter.component";


@Component({
  selector: 'app-products',
  imports: [RouterModule, CategoriesComponent, FormsModule, FilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
constructor(public tools: ToolsService){
  this.showAll();
  this.showcategories();
 
}

public allProducts: any
public categories: any
public Quantity: string = "1";

showAll(){
  this.tools.getAllProducts().subscribe({
    next: (data:any) => {this.allProducts=data},
    error: (err) => alert(err)
  })
}
showcategories(){
  this.tools.getCategories().subscribe({
    next: (data:any) => {this.categories=data},    
    error: (err) => alert(err)   
  })
}

showByCategory(id: number) {
  this.tools.getProductsByCategory(id).subscribe({
    next: (data:any) => {this.allProducts=data.products},
    error: (err) => alert(err)  
  })
}

showProductsByCat(list:any) {
  this.allProducts = list.products
}

addtocart(item:any){
  let cartinfo = {
  quantity: 1,
  price: item.price,
  productId: item.id
  }
  this.tools.addToCart(cartinfo).subscribe({
    next: (data:any) => {alert("Product added to cart successfully")},
    error: (err) => alert(err)  
  });
}

getFilteredData(filterData: any) {
  this.tools.filterProducts(filterData.vegeterian, filterData.nuts, filterData.spiciness).subscribe({
    next: (data:any) => {this.allProducts=data},
    error: (err) => alert(err)  
  })
  
}




}
