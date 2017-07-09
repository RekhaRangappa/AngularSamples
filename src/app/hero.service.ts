import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class HeroService {
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHero(id: number): Promise<Hero> {
        return this.getHeros()
        .then(heroes => heroes
        .find(hero => 
        hero.id === id
        ));
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(
        this.getHeros()), 2000);
  });
}
}