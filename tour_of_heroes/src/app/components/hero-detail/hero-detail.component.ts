import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroService } from 'src/app/services/hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
    @Input() hero?: Hero;

    constructor(
        private hs: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getHero();
    }

    private getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.hs.getHero(id).subscribe(hero => (this.hero = hero));
    }

    onGoBack(): void {
        this.location.back();
    }

    onSave(): void {
        if (this.hero) {
            this.hs.updateHero(this.hero).subscribe(() => this.onGoBack());
        }
    }
}
