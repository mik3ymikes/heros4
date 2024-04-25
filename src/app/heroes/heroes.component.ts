import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock.heros';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes=HEROES

  selectedHero?:Hero={
    id:1,
    name: "Mace Window"
  }


  onSelect(hero:Hero):void{
    this.selectedHero=hero
  }

}
