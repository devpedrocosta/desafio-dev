import { HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { UploadService } from '../../services/upload.service';

import { FileuploadComponent } from './fileupload.component';

describe('Testing File Upload component', () => {
  let component: FileuploadComponent;
  let fixture: ComponentFixture<FileuploadComponent>;

  beforeEach(async () => {

    
    await TestBed.configureTestingModule({
      declarations: [ FileuploadComponent ],
      imports: [ RouterTestingModule,HttpClientTestingModule ],
      providers: [UploadService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create  upload component', () => {
    expect(component).toBeTruthy();
  });
  it('should get upload selectd  File ', () => {
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.txt',{type:'text/plain'}))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(component.currentFile?.name).toEqual('test-file.txt');
 });
  it('should get upload selectd  invalid File ', () => {
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.pdf'))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(component.currentFile?.name).toEqual('test-file.pdf');
    expect(component.message).toEqual('Tipo de dado do arquivo invalido');
 });

  it('should get upload title ->Analise seus dados', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.upload-title').textContent).toContain('Analise seus dados');
  });

  it('should process data ', () => {
    spyOn(component.uploadservice, 'getUploadedData').and.returnValue(throwError('Error'));
    component.processdata();
    fixture.detectChanges();
    expect(component.message).toEqual('Ao buscar dados no servidor');
  });


  it('should process data ', () => {
    spyOn(component.uploadservice, 'getUploadedData').and.returnValue(of([{nome:2}]));
    spyOn(component.complete, 'emit');
    component.currentFile =new File([''], 'test-file.txt',{type:'text/plain'})
    component.processdata();
    fixture.detectChanges();
    expect(component.complete.emit).toHaveBeenCalledWith([{nome:2}]);
  });

  it('should not get data process data  message ', () => {
    spyOn(component.uploadservice, 'getUploadedData').and.returnValue(of([]));
    spyOn(component.complete, 'emit');
    component.currentFile =new File([''], 'test-file.txt',{type:'text/plain'})
    component.processdata();
    fixture.detectChanges();
    expect(component.message).toEqual('Não existe dados ja carregados tente inserir um arquivo');
  });


  it('should upload data error message ', () => {
    spyOn(component.uploadservice, 'upload').and.returnValue(throwError('Error'));
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.txt',{type:'text/plain'}))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(component.message).toEqual('Ocoreu um erro ao enviar seu arquivo ');
  });


  it('should progress upload data ', () => {
    spyOn(component.uploadservice, 'upload').and.returnValue(of({loaded:4,total:2,type:HttpEventType.UploadProgress} as any));
    const dataTransfer = new DataTransfer()
    dataTransfer.items.add(new File([''], 'test-file.txt',{type:'text/plain'}))

    const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
    inputDebugEl.nativeElement.files = dataTransfer.files;

    inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));

    fixture.detectChanges();

    expect(component.progress).toBe(200);
  });

  it('should upload data ', () => {
     spyOn(component.uploadservice, 'getUploadedData').and.returnValue(of([{nome:2}]));
     spyOn(component.complete, 'emit');
     spyOn(component.uploadservice, 'upload').and.returnValue(of({
      body:[{nome:2}],
  } as any));
     const dataTransfer = new DataTransfer()
     dataTransfer.items.add(new File([''], 'test-file.txt',{type:'text/plain'}))
 
     const inputDebugEl  = fixture.debugElement.query(By.css('input[type=file]'));
     inputDebugEl.nativeElement.files = dataTransfer.files;
 
     inputDebugEl.nativeElement.dispatchEvent(new InputEvent('change'));
     
     component.currentFile =new File([''], 'test-file.txt',{type:'text/plain'})
     component.processdata();
     fixture.detectChanges();
     expect(component.complete.emit).toHaveBeenCalledWith([{nome:2}]);
   });
 

  it('should get upload title ->Arraste aqui o arquivo.', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.uploadfile').textContent).toContain('Arraste aqui o arquivo.');
  });

  it('should get upload description -> Os dados iram ser processados pelo algoritimo inteligente', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.upload-description').textContent).toContain('Os dados iram ser processados pelo algoritimo inteligente');
  });

  it(`should not have message`, () => {
    expect(component.message).toEqual('');
  });

  it(`should have  a message`, () => {
  
    component.message ='Teste'
    expect(component.message).toEqual('Teste');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.errormessage').textContent).toContain('Teste');
  });



});
