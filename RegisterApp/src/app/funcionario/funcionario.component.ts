import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../models/funcionario.model';
import { FuncionarioService } from '../service/funcionario.service';
@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})
export class FuncionarioComponent implements OnInit {
  usersList: any;
  GetFuncionarioById: any;
  constructor(public funcionario_service: FuncionarioService) {}

  ngOnInit(): void {
    this.resetForm();
    this.GetAllFuncionarios();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.funcionario_service.formData = {
      Id: 0,
      Nome: '',
      Admissao: '',
      Salario: 0,
    };
  }


  GetAllFuncionarios() {
    this.funcionario_service.GetAllFuncionarios().subscribe((data) => {
      this.usersList = data as Funcionario[];
      console.log(this.usersList);
    });
  }

  OnSubmit(form: NgForm) {
    if (this.funcionario_service.formData.Id == 0) {
      this.PostFuncionario();
    } else {
      this.UpdateFuncionario();
    }

    this.resetForm();
  }

  PostFuncionario() {
    this.funcionario_service.PostFuncionario().subscribe(
      (res: any) => {
        this.GetAllFuncionarios();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  UpdateFuncionario() {
    this.funcionario_service.UpdateFuncionario().subscribe(
      (res: any) => {
        this.GetAllFuncionarios();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ToForm(user: Funcionario) {
    this.funcionario_service.formData = Object.assign({}, user);
  }

  DeleteFuncionario(Id: Number) {
    if (confirm('Você tem certeza?'))
      this.funcionario_service.DeleteFuncionario(Id).subscribe(
        (res: any) => {
          this.GetAllFuncionarios();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  GetFuncionariosById(Id: Number) {
    this.funcionario_service.getUser(Id).subscribe(
      (res: any) => this.GetAllFuncionarios(),
      (err) => console.log(err)
    );
  }
}
