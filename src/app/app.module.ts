import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbAccordionModule,
    NbAlertModule,
    NbTreeGridModule, NbIconModule, NbInputModule, NbToggleModule, NbDialogModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ChartComponent } from './pages/dashboard/chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { ChangelogComponent } from './pages/dashboard/changelog/changelog.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AlertComponent } from './pages/dashboard/alert/alert.component';
import { TableComponent } from './pages/users/table/table.component';
import { FormComponent } from './pages/users/form/form.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { LineChartComponent } from './pages/wallet/line-chart/line-chart.component';
import { PieChartComponent } from './pages/wallet/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    UsersComponent,
    ChartComponent,
    ChangelogComponent,
    FooterComponent,
    AlertComponent,
    TableComponent,
    FormComponent,
    WalletComponent,
    LineChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    AppRoutingModule,
    ChartsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbAccordionModule,
    NbAlertModule,
    NbTreeGridModule,
    NbInputModule,
    NbToggleModule,
    NbDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
