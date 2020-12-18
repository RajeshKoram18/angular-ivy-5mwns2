import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomePageComponent {
  closeResult: string;
  // submitted = false;
  // registerForm: FormGroup;

  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
}
