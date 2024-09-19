import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importing CommonModule and FormsModule
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  initiative: number = 10;
  currentHp: number = 50;
  maxHp: number = 100;
  avatar: string = 'assets/avatar.png';  // Replace this with your avatar path

  inputHp: number = 0;

  // Heal function
  heal() {
    this.currentHp = Math.min(this.currentHp + this.inputHp, this.maxHp);
    this.inputHp = 0;
  }

  // Damage function
  damage() {
    this.currentHp = Math.max(this.currentHp - this.inputHp, 0);
    this.inputHp = 0;
  }
}
