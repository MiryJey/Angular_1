import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-for-frutti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-frutti.component.html',
  styleUrl: './for-frutti.component.css'
})
export class ForFruttiComponent {
  frutta =['banane','mele','kiwi', 'pere'];

}
