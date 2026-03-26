import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-good-morning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './good-morning.html',
  styleUrls: ['./good-morning.css']
})
export class GoodMorningComponent {

  name: string = '';
  phone: string = '';
  email: string = '';

  constructor(private http: HttpClient) {}

  submit() {
    if (!this.name || !this.phone || !this.email) {
      alert('Please fill all fields');
      return;
    }

    const payload = {
      name: this.name,
      phoneNumber: this.phone,
      email: this.email
    };

    this.http.post('http://localhost:8080/api/users', payload)
      .subscribe({
        next: (res) => {
          alert('Data saved successfully!');
          console.log(res);
        },
        error: (err) => {
          console.error('Error saving data', err);
          alert('Error saving data');
        }
      });
  }

}
