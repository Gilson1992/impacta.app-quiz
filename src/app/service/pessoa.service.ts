import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http';
import { Pessoa } from '../model/pessoa';

@Injectable ({
  providedIn: 'root'
})

export class PessoaService {


    private URL_API = 'http://localhost:8080';

    constructor(private htpp:HttpClient) {}

    creat(pessoa:Pessoa){
      return this.htpp.post<Pessoa[]>(this.URL_API+'/pessoa',pessoa);
    }
    findAll(){
      return this.htpp.get<Pessoa[]>(this.URL_API + '/pessoa');
    }
    delete(id:number){
      return this.htpp.delete(this.URL_API + '/pessoa/' + id);
    }
  }

