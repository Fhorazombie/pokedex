import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  pokemons = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;
    
    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            type: res.types[0].type.name
          };
          //ponemos la data que viene del servicio en un arreglo
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);

        },
        err => {
          console.log(err);
        }
      );
    }
  }

  //Filtro para el paginador
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRow(row){
    this.router.navigateByUrl(`/pokeDetail/${row.position}`)
  }

  profile(){
    this.router.navigateByUrl(`/profile`)
  }

}
