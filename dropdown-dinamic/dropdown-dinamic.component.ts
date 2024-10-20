import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dropdown-dinamic',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dropdown-dinamic.component.html',
  styleUrl: './dropdown-dinamic.component.css'
})
export class DropdownDinamicComponent {

  paeseSelezionato  = '';
   

paesi=[
  {nome :'Italia'},
  {nome :'Finlandia'},
  {nome:'Svezia'},
  {nome:'Francia'},
  {nome:'Inghilterra'},
  {nome:'Olanda'},
]



}

