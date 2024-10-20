import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-paragrafo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paragrafo.component.html',
  styleUrl: './paragrafo.component.css'
})
export class ParagrafoComponent {
mostra:boolean = true;
noShow:boolean = false;
}
