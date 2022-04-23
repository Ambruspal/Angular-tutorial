import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from '../constants/heroes.constants';
import { Hero } from '../models/hero.model';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {
    constructor(private mesSer: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.mesSer.add('HeroService: Fetched heroes');
        return of(HEROES.slice());
    }
}
