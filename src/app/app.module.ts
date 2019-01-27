import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { FileuploadService } from './fileupload.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadfileComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FileuploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
