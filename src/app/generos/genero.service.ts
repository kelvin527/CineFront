import { Injectable } from '@angular/core';
import { generoCreacionDto, generoDto } from './interfaces/genero.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

constructor(private http:HttpClient) { }
private apiURL = environment.apiURL + 'Generos'

public obtenerTodo():Observable<generoDto[]>{
  return this.http.get<generoDto[]>(this.apiURL)
}
public crae(genero:generoCreacionDto){
  return  this.http.post(this.apiURL,genero);
}
}
