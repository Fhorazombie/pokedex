import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];
  pokemonStats = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokemonService: PokemonService,
    private _location: Location) {
    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id) {
    this.pokemonService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
        this.pokemonStats = res.stats;
      },
      err => {
        console.log(err);
      }
    )
  }

  backpage() {
    this._location.back();
  }

}