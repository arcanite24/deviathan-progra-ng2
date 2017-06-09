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
  addClase(grupo: string, dia: number, inicio: string, fin: string, materia: string, teachers: Array<any>, salon: string) {
    return this.http.post(this.api + 'claseHorario', {
      materia: materia,
      grupo: grupo,
      inicio: inicio,
      fin: fin,
      dia: dia,
      profesores: teachers,
      salon: salon
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

  getAllItemsSalon(id: string) {
    return this.http.get(this.api + 'salon/getAllItems/' + id).map(res => res.json());
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

  //Anuncios
  getAllAnuncios() {
    return this.http.get(this.api + 'anuncio').map(res => res.json());
  }

  addAnuncio(text: string, title: string) {
    return this.http.post(this.api + 'anuncio', {text, title}).map(res => res.json());
  }

  getAnuncioDetail(id: string) {
    return this.http.get(this.api + 'anuncio/' + id).map(res => res.json());
  }

  editAnuncio(id: string, text: string, title: string) {
    return this.http.put(this.api + 'anuncio/' + id, {text, title}).map(res => res.json());
  }

  deleteAnuncio(id: string) {
    return this.http.delete(this.api + 'anuncio/' + id).map(res => res.json());
  }

  /* USER MODULES */

  // user -> reportes
  getUserReports(id: string) {
    return this.http.get(this.api + 'reporte/getUserReports/' + id).map(res => res.json());
  }

  // user -> reservas
  getAvailableHours(id: string) {
    return this.http.get(this.api + 'salon/getAvailableHours/' + id).map(res => res.json());
  }

  addReserva(user: string, salon: string, item: string, horaIn: number, horaOut: number) {
    return this.http.post(this.api + 'reserva', {
      user: user,
      salon: salon,
      item: item,
      horaIn: horaIn,
      horaOut: horaOut
    }).map(res => res.json());
  }

  getAllReservas() {
    return this.http.get(this.api + 'reserva').map(res => res.json());
  }

  getMyReservas() {
    return this.http.get(this.api + 'reserva/getMyReservas/' + this.auth.user.id).map(res => res.json());
  }

  getReservasItem(id: string) {
    return this.http.get(this.api + 'inventario/getReservasForItem/' + id).map(res => res.json());
  }

  // user -> notas
  addNote(text: string) {
    let data = {
      text: text,
      user: this.auth.user.id
    };
    return this.http.post(this.api + 'nota', data).map(res => res.json());
  }

  getUserNotes() {
    return this.http.get(this.api + 'nota/getUserNotes/' + this.auth.user.id).map(res => res.json());
  }

  getNoteDetail(id: string) {
    return this.http.get(this.api + 'nota/' + id).map(res => res.json());
  }

  editNote(id: string, text: string) {
    return this.http.put(this.api + 'nota/' + id, {text: text}).map(res => res.json());
  }

  deleteNote(id: string) {
    return this.http.delete(this.api + 'nota/' + id).map(res => res.json());
  }

  // profesor -> tareas
  getAllTareasProfesor() {
    return this.http.get(this.api + 'tarea/getAllTareasProfesor/' + this.auth.user.id).map(res => res.json());
  }

  getClasesProfesor() {
    return this.http.get(this.api + 'materia/getClasesProfesor/' + this.auth.user.id).map(res => res.json());
  }

  addTarea(clase, title, desc, entrega) {
    return this.http.post(this.api + 'tarea', {
      profesor: this.auth.user.id,
      title: title,
      desc: desc,
      materia: clase.materia.id,
      grupo: clase.grupo.id,
      entrega: entrega
    }).map(res => res.json());
  }

  editTarea(clase, title, desc, entrega, id) {
    return this.http.put(this.api + 'tarea/' + id, {
      profesor: this.auth.user.id,
      title: title,
      desc: desc,
      materia: clase.materia.id,
      grupo: clase.grupo.id,
      entrega: entrega
    }).map(res => res.json());
  }

  getTareaDetail(id: string) {
    return this.http.get(this.api + 'tarea/' + id).map(res => res.json());
  }

  deleteTarea(id: string) {
    return this.http.delete(this.api + 'tarea/' + id).map(res => res.json());
  }

  // profesor -> clases online
  getAllClasesOnlineProfesor() {
    return this.http.get(this.api + 'claseOnline/getAllClasesOnlineProfesor/' + this.auth.user.id).map(res => res.json());
  }

  addClaseOnline(title: string, desc: string, materia: string, fechaInicio: string) {
    return this.http.post(this.api + 'claseOnline', {title, desc, materia, fechaInicio, streamer: this.auth.user.id}).map(res => res.json());
  }

  deleteClaseOnline(id: string) {
    return this.http.delete(this.api + 'claseOnline/' + id).map(res => res.json());
  }

  getClaseOnlineDetail(id: string) {
    return this.http.get(this.api + 'claseOnline/' + id).map(res => res.json());
  }

  // alumno -> tareas
  getAllTareasAlumno() {
    return this.http.get(this.api + 'tarea/getAllTareasAlumno/' + this.auth.user.id).map(res => res.json());
  }

  addRespuesta(id: string, text: string) {
    return this.http.post(this.api + 'respuestaTarea', {
      tarea: id,
      text: text,
      alumno: this.auth.user.id
    }).map(res => res.json());
  }

  getMyRespuestas() {
    return this.http.get(this.api + 'respuestaTarea/getMyRespuestas/' + this.auth.user.id).map(res => res.json());
  }

}
