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
    heroes: Hero[] = [];

    constructor(private hs: HeroService, private mesSer: MessageService) {}

    ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.hs.getHeroes().subscribe(heroes => (this.heroes = heroes));
    }

    onAdd(name: string): void {
        name = name.trim();
        if (!name) {
            return;
        }
        this.hs.addHero({ name } as Hero).subscribe(hero => {
            this.heroes.push(hero);
        });
    }

    onDelete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.hs.deleteHero(hero.id).subscribe();
    }
}
