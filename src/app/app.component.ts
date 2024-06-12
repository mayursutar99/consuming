import { Component } from '@angular/core';
import { ShowdataService } from './services/showdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consumedata';
  users:any;
  constructor(private userdata:ShowdataService){
    userdata.userDetails().subscribe((data)=>{
      this.users=data;
  });
}
}
