import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { PessoaService } from './service/pessoa.service';
import { Pessoa } from './model/pessoa';
import { AppModule } from './app.module';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title:String="quiz-app"
  displayedColumns: string[] =  ['id', 'nome', 'acoes'];
  dataSource;

  constructor(private service: PessoaService){

  }

  ngOnInit(): void{
    this.findAll();
  }

  delete(id){
    this.service.delete(id).subscribe(
      (response) =>{
        this.findAll();
      },
      (response) =>{
        alert("Erro!");
      }
    );
  }

  findAll(){
    this.service.findAll().subscribe(
      (response) =>{
        //alert('sucesso!');
        this.dataSource = new MatTableDataSource <Pessoa> (response);
      },
      (response) => {
        alert("Erro!")
      }
    )
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



