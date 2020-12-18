import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup , FormControl , ReactiveFormsModule , FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormControl,
    FormGroup
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
