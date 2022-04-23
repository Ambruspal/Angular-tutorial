import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/app/models/hero.model';
import { HEROES } from 'src/app/constants/heroes.constants';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
    selectedHero?: Hero;

    heroes: Hero[] = [];

    constructor(private hs: HeroService, private mesSer: MessageService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.hs.getHeroes().subscribe(heroes => (this.heroes = heroes));
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        this.mesSer.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
}
