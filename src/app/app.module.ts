import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { TechComponent } from './home/tech/tech.component';
import { BiteComponent } from './home/bite/bite.component';
import { DigitComponent } from './home/digit/digit.component';
import { CurrencyComponent } from './home/currency/currency.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxBarcodeModule } from 'ngx-barcode';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { WeightComponent } from './home/weight/weight.component';
import { CalculatorComponent } from './home/calculator/calculator.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageFormComponent, MessageItemComponent, MessageListComponent } from './chatbot/components';
import { DialogflowService } from './chatbot/services';
import { TodoComponent } from './home/todo/todo.component';
import { SearchPipe } from './pipes/search.pipe';
import { StockComponent } from './home/stock/stock.component';
import { BarcodeComponent } from './home/barcode/barcode.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TechComponent,
    BiteComponent,
    DigitComponent,
    CurrencyComponent,
    NotFoundComponent,
    WeightComponent,
    CalculatorComponent,
    ChatbotComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    TodoComponent,
    SearchPipe,
    StockComponent,
    BarcodeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgxBarcodeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule

  ],
  providers: [
    DialogflowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
