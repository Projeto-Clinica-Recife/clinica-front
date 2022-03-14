import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/providers/users/users.service';

@Component({
  selector: 'app-copy-data',
  templateUrl: './copy-data.component.html',
  styleUrls: ['./copy-data.component.scss']
})
export class CopyDataComponent implements OnInit {

  public dataUser: any;

  constructor(
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    const user = this.userService.get_profile();

    this.userService.get_data_to_copy(user.id).subscribe( res => {
      this.dataUser = res;
    });
  }

  copyData(){
    let data = document.getElementById('data') as HTMLElement;
    // data!.select();
    document.execCommand('copy');
    console.log(data);
    
  }

}
