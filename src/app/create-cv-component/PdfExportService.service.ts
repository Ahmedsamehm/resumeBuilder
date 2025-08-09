// pdf-export.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PdfExportService {
  downloadById(elementId: string, fileName: string = 'resume.pdf') {
    const printContents = document.getElementById(elementId)?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;

      window.location.reload();
    }
  }

  download(element: HTMLElement, fileName: string = 'resume.pdf') {
    const printContents = element.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }
  }
}
