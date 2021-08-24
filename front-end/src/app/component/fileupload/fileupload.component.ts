import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, finalize } from 'rxjs/operators';
import { UploadService } from './../../services/upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {
  currentFile?: File;
  progress = 0;
  message = '';
  @Output() complete = new EventEmitter();

  fileInfos?: Observable<any>;
  constructor(public uploadservice: UploadService) { }

  selectFile(event: any): void {
    console.log(event)
    this.currentFile = event.target.files[0];
    this.validateUploadFile();

  }

  private validateUploadFile(): void {
    if (this.currentFile?.type === 'text/plain') {
      this.upload();

    } else {
      this.message = "Tipo de dado do arquivo invalido"
    }
  }

  processdata(): void {
    this.uploadservice.getUploadedData().subscribe((data) => {
      if (data.length>0) {
        this.complete.emit(data);
      } else {
        this.message = "Não existe dados ja carregados tente inserir um arquivo"
      }

    }, () => {
      this.message = "Nemhum dado foi encontrado"
    })
  }

  private upload(): void {
    this.progress = 0;
     const file:any = this.currentFile;
      this.uploadservice.upload(file).subscribe(() => {this.processdata();},
        () => {this.message = 'Ocoreu um erro ao enviar seu arquivo ';});
    }
}
