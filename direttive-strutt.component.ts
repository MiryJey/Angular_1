import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-direttive-strutt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direttive-strutt.component.html',
  styleUrl: './direttive-strutt.component.css'
})
export class DirettiveStruttComponent {
isShow : boolean = true;
noShow : boolean = false;
}
