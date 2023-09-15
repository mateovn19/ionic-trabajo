import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { url } from 'inspector';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-caracter-detail',
  templateUrl: './caracter-detail.page.html',
  styleUrls: ['./caracter-detail.page.scss'],
})
export class CaracterDetailPage implements OnInit {
characterId:string='';
  character= null as any;
  episodes: any[]=[]

  constructor(
    private actRoute:ActivatedRoute,
  private rymSvc:RickAndMortyService
      ) { 
        this.characterId=this.actRoute.snapshot.paramMap.get('id') as string;
      }
    

  ngOnInit() {
  }

  ionViewWillEnter() { 
       this.getCharacters(); 
       } 
        getCharacters() {
          this.rymSvc.getCharacterById(this.characterId).subscribe({
                  next:(respuesta: any) => {
                            this.character = respuesta; 
                                  this.getEpisodes()
                                  console.log(this.episodes)
                                       },      error: (err: any) => { 

                                            } 
                                             });
                                              }


                                              getEpisodes() {

                                                for(let url of this.character.episodes){
                                                this.rymSvc.getByUrl(url).subscribe({
                                                        next:(respuesta: any) => {
                                                         this.episodes.push(respuesta)          
                                                                             },      error: (err: any) => { 
                                      
                                                                                  } 
                                                                                   });
                                                                                    } 
                                                                                  }                                             
                                            }

                                  
