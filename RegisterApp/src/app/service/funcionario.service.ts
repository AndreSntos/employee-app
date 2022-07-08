import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Funcionario } from '../models/funcionario.model';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  readonly rootURL = 'https://localhost:44386/api/';

  formData!: Funcionario;
  constructor(private http: HttpClient) {}

  GetAllFuncionarios() {
    return this.http.get(this.rootURL + 'Funcionarios');
  }

  PostFuncionario() {
    return this.http.post(this.rootURL + 'Funcionarios', this.formData);
  }

  UpdateFuncionario() {
    return this.http.put(
      this.rootURL + 'Funcionarios/' + this.formData.Id,
      this.formData
    );
  }

  DeleteFuncionario(Id: Number) {
    return this.http.delete(this.rootURL + 'Funcionarios/' + Id);
  }

  getUser(Id: Number) {
    return this.http.get(this.rootURL + 'Funcionarios/' + Id);
  }
}
