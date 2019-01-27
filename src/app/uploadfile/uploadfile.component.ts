import { Component, OnInit, ViewChild  } from '@angular/core';
import { Record } from '../record.module';
import { FileuploadService } from '../fileupload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  @ViewChild('myInput')
  myInputVariable: any;

  selectedFiles: FileList;
  currentFileUpload: File;

  records : Record[]
  datas : Record[];

  viewMode = false;
  sampleView = false;  
  
  constructor(private fileuploadService : FileuploadService) { 
  }

  onSelectFile(event){
    if(event.target.files && event.target.files.length) {
      this.selectedFiles = event.target.files;
    }    
  }
  onCancel(){
    this.myInputVariable.nativeElement.value = "";
  }
  onSubmit(){
    this.currentFileUpload = this.selectedFiles.item(0);
    
    return this.fileuploadService.uploadFileToBackEnd(this.currentFileUpload).subscribe(
      records =>{
      if (records != null){
        this.records = records;
        console.log(records);
        this.viewMode = true;
      }else{
        this.viewMode = false;
      }
    })
  }
  
  getAllRecords() {
    this.fileuploadService.getAllRecords().subscribe(
      dataRecords => {
        if (dataRecords != null){
          this.datas = dataRecords;
          console.log(this.datas);
          this.sampleView = true;
        }else{
          this.sampleView = false;
        }
      }
     
      )   
}

  

}
