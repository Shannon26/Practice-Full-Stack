import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public resultLength = 0;
  public subcribe1: any;
  displayedColumns: string[] = ['id','title','body']
  public dataSource = new MatTableDataSource<any>([])

  @ViewChild(MatPaginator) private paginator!: MatPaginator;
  
  constructor(private _user:UserService){}

  ngOnInit(){
    this.subcribe1 = this._user.getUserPost().subscribe((data) => {return (this.resultLength =data.length, this.dataSource.data = data)});
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
}

  ngOnDestroy(){
    this.subcribe1.unsubscribe();
  }

}
