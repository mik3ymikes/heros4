import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})





export class HeroService {
  getHeroes(): Observable <Hero[]> {
    const heros = of(HEROES);
    this.messageService.add('HeroS:Fetched heros')
    return heros
  }

  constructor(private messageService: MessageService) { }





}
