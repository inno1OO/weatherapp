import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent implements OnInit {
  currentWeatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherData('YourLocation'); // Replace with an actual location
  }

  getWeatherData(location: string) {
    this.weatherService.getCurrentWeather(location).subscribe(
      (data) => {
        this.currentWeatherData = data;
        console.log('Current Weather Data:', data);
      },
      (error) => {
        console.error('Error fetching current weather:', error);
      }
    );
  }

}
