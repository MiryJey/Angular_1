import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab-prod',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tab-prod.component.html',
  styleUrl: './tab-prod.component.css'
})
export class TabProdComponent {
prodotti=[
  {nome:'Scarpe',prezzo: 40},
  {nome:'Borsa',prezzo: 20},
  {nome:'Sciarpa',prezzo: 10},
  {nome:'Ombrello',prezzo: 12},
];
}
