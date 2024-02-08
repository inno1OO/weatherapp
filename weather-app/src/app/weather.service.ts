import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherApiKey } from './config';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = weatherApiKey; 
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';
  private testUrl = 'http://api.weatherapi.com/v1/current.json?key=b2944cf156c5494f9ae223216240702&q=London&aqi=no';
  constructor(private http:HttpClient) { }

  // Fetch current forecast data by location
  getCurrentWeather(location: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q='london'`;
    return this.http.get<any>(this.testUrl);
  }

  // Fetch 3-day forecast data by location
  get3DayForecast(location: string): Observable<any> {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${location}&days=3`;
    return this.http.get<any>(url);
  }
}
