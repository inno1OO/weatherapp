import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from "./current-weather/current-weather.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CurrentWeatherComponent]
})
export class AppComponent {
  title = 'weather-app';
}
