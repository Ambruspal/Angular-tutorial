import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/hero.model';
import { HEROES } from 'src/app/constants/heroes.constants';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
    selectedHero?: Hero;

    heroes: Hero[] = HEROES;

    constructor() {}

    ngOnInit(): void {}

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
