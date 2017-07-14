import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { FilaEsperaController }         from '../../controllers/FilaEsperaController';

@Component({
  selector: 'app-fila-espera',
  templateUrl: './fila-espera.component.html',
  styleUrls: [ './fila-espera.component.css' ]
})
export class FilaEsperaComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: FilaEsperaController,
    private router: Router) { }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/espera', this.selectedHero.id]);
  }
}


export class Hero {
  id: number;
  name: string;
}