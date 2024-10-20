import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-msg-caricamento',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './msg-caricamento.component.html',
  styleUrl: './msg-caricamento.component.css'
})
export class MsgCaricamentoComponent {
show : boolean = true;
isLoading : boolean = true;
noShow : boolean = false;
loading(){
  setTimeout(()=>{
    this.isLoading = false;
    },4000);
}
ngOnInit(){
  this.loading();
}
}
