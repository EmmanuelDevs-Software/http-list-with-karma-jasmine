import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.apiService.get().subscribe((response) => {
      this.data = response;
    });
  }
}
