import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock.heros';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})




export class HeroesComponent implements OnInit {


  constructor(private heroService:HeroService){}


  ngOnInit(): void {
    this.getHeroes();
  }


  heroes: Hero[] = [];

  selectedHero?:Hero={
    id:1,
    name: "Mace Window"
  }


  onSelect(hero:Hero):void{
    this.selectedHero=hero
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
