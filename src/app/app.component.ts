import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { FeatureComponent } from './components/feature/feature.component';
import { GuestFooterComponent } from './components/guest-footer/guest-footer.component';
import { GuestHeaderComponent } from './components/guest-header/guest-header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { MapperAnimateComponent } from './components/mapper-animate/mapper-animate.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    GuestHeaderComponent,
    GuestFooterComponent,
    MapperAnimateComponent,
    HowItWorksComponent,
    HeroComponent,
    FeatureComponent,
    BannerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lp-telas';
}
