import { Component, OnInit, Input } from '@angular/core';
import { RecepcaoService } from './../recepcao.service';
import { Router, ActivatedRoute, Params } from '@angular/router'


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  selected!: Date;

  constructor(
    private recepcaoService: RecepcaoService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

  setDaySelected(day:any) {
    console.log(day._i.date);
    this.recepcaoService.setDaySelected(day._i.date);
    this.recepcaoService.setMonthSelected(day._i.month+1);

    let Xmas95 = day._d;
    var weekday = Xmas95.getDay() + 1;
    this.recepcaoService.setDayPosition(weekday);
    this.router.navigate(['/agenda/semana']);
  }
}
