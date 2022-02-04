import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {CoreModule} from '../../core/core.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import { AuthService } from 'src/app/services/auth.service';
import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent, NewPostDialog } from './components/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './components/home.component';
import { AuthenticationService } from 'src/app/services/authService/authentication.service';
// import { BlogPostsService } from 'src/app/services/blogPosts.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // CoreModule,
    HomeRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    AuthenticationService
  ],
})
export class HomeModule {}
