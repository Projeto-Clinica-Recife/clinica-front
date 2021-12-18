import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/providers/doctor/doctor.service';
import { UsersService } from 'src/app/providers/users/users.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-doctor-financeiro',
  templateUrl: './doctor-financeiro.component.html',
  styleUrls: ['./doctor-financeiro.component.scss']
})
export class DoctorFinanceiroComponent implements OnInit {

  profile: User | undefined;
  doctorPlans: any;
  constructor(
    private doctorService: DoctorService,
    private userService: UsersService,
  ) { 
    this.profile = this.userService.get_profile();
  }

  ngOnInit(): void {
    const doctorId = this.profile!.id;
    this.doctorService.getPlansDoctor(doctorId!).subscribe( res => {
      console.log(res);
      
      this.doctorPlans = res;
    }, error => {
      console.log(error);
      
    })
  }

  translate(text: string){
    switch(text){
      case 'paid':
        text = 'Pago';
        break;
      case 'pending':
        text = 'Pendente';
        break;
    }
    return text;
  }

}
