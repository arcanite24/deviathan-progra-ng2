import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class BackServiceService {

  private api: string;

  constructor(private auth: AuthService, private http: Http) {
    this.api = this.auth.api;
  }

  //Dashboard
  getAdminInfo() {
    return this.http.get(this.api + 'dashboard/getAdminInfo').map(res => res.json());
  }

  getUserInfo() {
    return this.http.get(this.api + 'dashboard/getUserInfo').map(res => res.json());
  }

  // Usuarios
  getAllUsers() {
    return this.http.get(this.api + 'user').map(res => res.json());
  }

  getDetailUser(id: string) {
    return this.http.get(this.api + 'user/' + id).map(res => res.json());
  }

  addUser(firstName: string, lastName: string, boleta: string, sexo: string, email: string) {
    let password = firstName.replace(' ', '').substr(0, 4).toLowerCase() + boleta.substr(0, 4);
    return this.http.post(this.api + 'user', {
      username: boleta,
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      boleta: boleta,
      sexo: sexo
    }).map(res => res.json());
  }

  addTeacher(firstName: string, lastName: string, email: string) {
    return this.http.post(this.api + 'user', {
      username: email,
      email: email,
      password: 'poli_batiz_123',
      firstName: firstName,
      lastName: lastName,
      roles: ['ROLE_PROFESOR']
    }).map(res => res.json());
  }

  getAllTeachers() {
    return this.http.get(this.api + 'user/getAllTeachers').map(res => res.json());
  }

  deleteUser(id: string) {
    return this.http.delete(this.api + 'user/' + id).map(res => res.json());
  }

  editUser(user: any) {
    return this.http.put(this.api + 'user/' + user.id, user).map(res => res.json());
  }

  changeUserGroup(id: string, grupo: string) {
    return this.http.put(this.api + 'user/' + id, {grupo: grupo}).map(res => res.json());
  }

  //Materias
  getAllMaterias() {
    return this.http.get(this.api + 'materia').map(res => res.json());
  }

  addMateria(nombre: string, semestre) {
    return this.http.post(this.api + 'materia', {name: nombre, semestre: parseInt(semestre)}).map(res => res.json());
  }

  deleteMateria(id: string) {
    return this.http.delete(this.api + 'materia/' + id).map(res => res.json());
  }

  editMateria(materia: any) {
    return this.http.put(this.api + 'materia/' + materia.id, materia).map(res => res.json());
  }

  getDetailMateria(id: string) {
    return this.http.get(this.api + 'materia/' + id).map(res => res.json());
  }

  //Grupos
  getAllGrupos() {
    return this.http.get(this.api + 'grupo').map(res => res.json());
  }

  addGrupo(nombre: string, semestre) {
    return this.http.post(this.api + 'grupo', {nombre: nombre, semestre: parseInt(semestre)}).map(res => res.json());
  }

  deleteGrupo(id: string) {
    return this.http.delete(this.api + 'grupo/' + id).map(res => res.json());
  }

  editGrupo(grupo: any) {
    return this.http.put(this.api + 'grupo/' + grupo.id, grupo).map(res => res.json());
  }

  getDetailGrupo(id: string) {
    return this.http.get(this.api + 'grupo/' + id).map(res => res.json());
  }

  //Horarios
  addClase(grupo: string, dia: number, inicio: string, fin: string, materia: string, teachers: Array<any>) {
    return this.http.post(this.api + 'claseHorario', {
      materia: materia,
      grupo: grupo,
      inicio: inicio,
      fin: fin,
      dia: dia,
      profesores: teachers
    }).map(res => res.json());
  }

  getHorario(id: string) {
    return this.http.get(this.api + 'grupo/getHorario/' + id).map(res => res.json());
  }

  getDetailClase(id: string) {
    return this.http.get(this.api + 'claseHorario/' + id).map(res => res.json());
  }

  deleteClase(id: string) {
    return this.http.delete(this.api + 'claseHorario/' + id).map(res => res.json());
  }

  editClase(data: any) {
    return this.http.put(this.api + 'claseHorario/' + data.id, data).map(res => res.json());
  }

  //Salones
  getAllSalones() {
    return this.http.get(this.api + 'salon').map(res => res.json());
  }

  addSalon(nombre: string) {
    return this.http.post(this.api + 'salon', {name: nombre}).map(res => res.json());
  }

  deleteSalon(id: string) {
    return this.http.delete(this.api + 'salon/' + id).map(res => res.json());
  }

  editSalon(salon: any) {
    return this.http.put(this.api + 'salon/' + salon.id, salon).map(res => res.json());
  }

  getDetailSalon(id: string) {
    return this.http.get(this.api + 'salon/' + id).map(res => res.json());
  }

  //Inventario
  getAllInventarios() {
    return this.http.get(this.api + 'inventario').map(res => res.json());
  }

  addInventario(data: any) {
    return this.http.post(this.api + 'inventario', data).map(res => res.json());
  }

  deleteInventario(id: string) {
    return this.http.delete(this.api + 'inventario/' + id).map(res => res.json());
  }

  editInventario(inventario: any) {
    return this.http.put(this.api + 'inventario/' + inventario.id, inventario).map(res => res.json());
  }

  getDetailInventario(id: string) {
    return this.http.get(this.api + 'inventario/' + id).map(res => res.json());
  }

  //Reportes
  getAllReportes() {
    return this.http.get(this.api + 'reporte/getAllReportes').map(res => res.json());
  }

  addReporte(data: any) {
    data.user = this.auth.user.id;
    return this.http.post(this.api + 'reporte', data).map(res => res.json());
  }

  deleteReporte(id: string) {
    return this.http.delete(this.api + 'reporte/' + id).map(res => res.json());
  }

  editReporte(reporte: any) {
    return this.http.put(this.api + 'reporte/' + reporte.id, reporte).map(res => res.json());
  }

  getDetailReporte(id: string) {
    return this.http.get(this.api + 'reporte/' + id).map(res => res.json());
  }

  /* USER MODULES */

  // user -> reportes
  getUserReports(id: string) {
    return this.http.get(this.api + 'reporte/getUserReports/' + id).map(res => res.json());
  }

}
