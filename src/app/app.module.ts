import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { TechComponent } from './tech/tech.component';
import { BiteComponent } from './bite/bite.component';
import { DigitComponent } from './digit/digit.component';
import { CurrencyComponent } from './currency/currency.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxBarcodeModule } from 'ngx-barcode';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { WeightComponent } from './weight/weight.component';
import { EssayComponent } from './essay/essay.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { MessageFormComponent, MessageItemComponent, MessageListComponent } from './chatbot/components';
import { DialogflowService } from './chatbot/services';
import { TodoComponent } from './todo/todo.component';
import { SearchPipe } from './pipes/search.pipe';
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
    EssayComponent,
    CalculatorComponent,
    ChatbotComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    TodoComponent,
    SearchPipe
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
