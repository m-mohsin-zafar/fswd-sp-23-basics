// import { Component, OnInit } from '@angular/core';
// import {ModalDismissReasons, NgbDatepickerModule, NgbModal} from "@ng-bootstrap/ng-bootstrap";
//
// @Component({
//   selector: 'app-test-modal',
//   templateUrl: './test-modal.component.html',
//   styleUrls: ['./test-modal.component.css'],
//   standalone: true,
//   imports: [NgbDatepickerModule],
// })
// export class TestModalComponent {
//
//   closeResult = '';
//
//   constructor(private modalService: NgbModal) {}
//
//   open(content: any) {
//     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
//       (result: any) => {
//         this.closeResult = `Closed with: ${result}`;
//       },
//       (reason: any) => {
//         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//       },
//     );
//   }
//
//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return `with: ${reason}`;
//     }
//   }
//
// }
