import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(public api: HttpClient) { }

  getCategories() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Categories/GetAll")
  }

  getAllProducts() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }

  getProductsByCategory(id: number) {
    return this.api.get(`https://restaurant.stepprojects.ge/api/Categories/GetCategory/${id}`)
  }

  getCartItems() {
    return this.api.get("https://restaurant.stepprojects.ge/api/Baskets/GetAll")
  }

  updateCartItem(body: any) {
    return this.api.put("https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket", body)
  }

  addToCart(cart: any) {
    return this.api.post("https://restaurant.stepprojects.ge/api/Baskets/AddToBasket", cart)
  }

  deleteCartItem(id: number) {
    return this.api.delete(`https://restaurant.stepprojects.ge/api/Baskets/DeleteProduct/${id}`)
  }

  filterProducts(vegeterian: boolean, nuts: boolean, spicy: number) {
    return this.api.get(`https://restaurant.stepprojects.ge/api/Products/GetFiltered?vegeterian=${vegeterian}&nuts=${nuts}&spiciness=${spicy}`)
  }

}
