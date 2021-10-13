import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokeapiurl: string = environment.pokeapiurl;

  constructor(private http: HttpClient) { }

  getPokemons(index){
    return this.http.get<any>(`${this.pokeapiurl}/pokemon/${index}`);
  }
  
}