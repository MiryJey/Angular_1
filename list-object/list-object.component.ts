import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-object',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-object.component.html',
  styleUrl: './list-object.component.css'
})
export class ListObjectComponent {
listaSpesa =[
 { prodotto : "acqua", quantita : 2 },
 { prodotto : "sapone mani", quantita : 1 },
 { prodotto : "latte di soia", quantita : 3 },
 { prodotto : "cereali", quantita : 4 },
 { prodotto : "carne", quantita : 2 },

]

}
