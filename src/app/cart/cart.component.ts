import { Component } from '@angular/core';
import { ToolsService } from '../../services/tools.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public tools:ToolsService){
this.getCartlist();
}

public cartlist:any;
public totalPrice: any;


 

getCartlist(){
  this.tools.getCartItems().subscribe({
    next: (data:any) => {this.cartlist=data},
    error: (err) => alert(err)
  })
}

plusItem(item: any) {
  item.quantity++;
  this.tools.updateCartItem({
      quantity: item.quantity,
      price: item.product.price,
      productId: item.product.id,
    })
    .subscribe({
      next: (data:any) => {this.getCartlist()},
      error: (err) => alert(err)
    })
}

minusItem(item: any) {
  if (item.quantity >= 2) {
    item.quantity--;
    this.tools.updateCartItem({
        quantity: item.quantity,
        price: item.product.price,
        productId: item.product.id,
      })
      .subscribe({
        next: (data:any) => {this.getCartlist()},
        error: (err) => alert(err)
      })
   
  }
}

deleteItem(id: number, name: string) {
  this.tools.deleteCartItem(id).subscribe({
    next: () => {
      alert(`${name} removed from cart successfully`);
      this.getCartlist();
     
    },
    error: (err) => alert(err)
  });
}



}




