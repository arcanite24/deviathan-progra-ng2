import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerModule } from 'ng2-datepicker';
import { DropzoneModule, DropzoneConfigInterface } from 'angular2-dropzone-wrapper';

import { AuthService } from './services/auth.service';
import { BackServiceService } from './services/back-service.service';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TeachersAdminPageComponent, ConfirmDeleteTeacherDialog, UsersManageGroupDialogTeachers } from './pages/teachers-admin-page/teachers-admin-page.component';
import { UsersAdminPageComponent, ConfirmDeleteUserDialog, FilterPipe, UsersManageGroupDialog } from './pages/users-admin-page/users-admin-page.component';
import { UsersAddPageComponent } from './pages/users-add-page/users-add-page.component';
import { UsersEditPageComponent } from './pages/users-edit-page/users-edit-page.component';
import { MateriasAdminPageComponent, ConfirmDeleteMateriaDialog } from './pages/materias-admin-page/materias-admin-page.component';
import { MateriasAddPageComponent } from './pages/materias-add-page/materias-add-page.component';
import { MateriasEditPageComponent } from './pages/materias-edit-page/materias-edit-page.component';
import { GruposAdminPageComponent, ConfirmDeleteGrupoDialog } from './pages/grupos-admin-page/grupos-admin-page.component';
import { GruposAddPageComponent } from './pages/grupos-add-page/grupos-add-page.component';
import { GruposEditPageComponent } from './pages/grupos-edit-page/grupos-edit-page.component';
import { GruposHorarioPageComponent, AddMateriaHorarioDialog, DetailClaseDialog, GenerateHorarioDialog } from './pages/grupos-horario-page/grupos-horario-page.component';
import { TeachersEditPageComponent } from './pages/teachers-edit-page/teachers-edit-page.component';
import { TeachersAddPageComponent } from './pages/teachers-add-page/teachers-add-page.component';
import { SalonesAdminPageComponent, AddSalonDialog, EditSalonDialog, ConfirmDeleteSalonDialog } from './pages/salones-admin-page/salones-admin-page.component';
import { InventarioAdminPageComponent, AddInventarioDialog, EditInventarioDialog, ConfirmDeleteInventarioDialog } from './pages/inventario-admin-page/inventario-admin-page.component';
import { ReportesAdminPageComponent, AddReporteDialog, EditReporteDialog, ConfirmDeleteReporteDialog } from './pages/reportes-admin-page/reportes-admin-page.component';
import { AlumnoReportesComponent } from './pages/alumno/alumno-reportes/alumno-reportes.component';
import { AlumnoHorarioComponent } from './pages/alumno/alumno-horario/alumno-horario.component';
import { DialogProfileComponent } from './pages/dialogs/dialog-profile/dialog-profile.component';
import { ProfilePageComponent } from './pages/system/profile-page/profile-page.component';
import { AlumnoReservasComponent } from './pages/alumno/alumno-reservas/alumno-reservas.component';
import { AlumnoReservasAddComponent } from './pages/alumno/alumno-reservas-add/alumno-reservas-add.component';
import { AlumnoNotasComponent } from './pages/alumno/alumno-notas/alumno-notas.component';
import { AlumnoNotasAddComponent } from './pages/alumno/alumno-notas-add/alumno-notas-add.component';
import { AlumnoNotasEditComponent } from './pages/alumno/alumno-notas-edit/alumno-notas-edit.component';
import { ProfesorTareasComponent } from './pages/profesor/profesor-tareas/profesor-tareas.component';
import { ProfesorTareasAddComponent } from './pages/profesor/profesor-tareas-add/profesor-tareas-add.component';
import { ProfesorTareasEditComponent } from './pages/profesor/profesor-tareas-edit/profesor-tareas-edit.component';
import { ProfesorTareasDeleteComponent } from './pages/profesor/profesor-tareas-delete/profesor-tareas-delete.component';
import { AlumnoTareasComponent } from './pages/alumno/alumno-tareas/alumno-tareas.component';
import { AlumnoTareasRespuestaAddComponent } from './pages/alumno/alumno-tareas-respuesta-add/alumno-tareas-respuesta-add.component';
import { AlumnoTareasDetailComponent } from './pages/alumno/alumno-tareas-detail/alumno-tareas-detail.component';
import { AdminAnunciosComponent } from './pages/admin/admin-anuncios/admin-anuncios.component';
import { AdminAnunciosAddComponent } from './pages/admin/admin-anuncios-add/admin-anuncios-add.component';
import { AdminAnunciosDeleteComponent } from './pages/admin/admin-anuncios-delete/admin-anuncios-delete.component';
import { AdminAnunciosEditComponent } from './pages/admin/admin-anuncios-edit/admin-anuncios-edit.component';
import { AlumnoAnunciosComponent } from './pages/alumno/alumno-anuncios/alumno-anuncios.component';

const appRoutes: Routes = [
  // Admin
  {path: '', component: DashboardPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'usuarios', component: UsersAdminPageComponent},
  {path: 'usuarios/nuevo', component:  UsersAddPageComponent},
  {path: 'usuarios/editar/:id', component:  UsersEditPageComponent},
  {path: 'materias', component: MateriasAdminPageComponent},
  {path: 'materias/nuevo', component: MateriasAddPageComponent},
  {path: 'materias/editar/:id', component: MateriasEditPageComponent},
  {path: 'grupos', component: GruposAdminPageComponent},
  {path: 'grupos/nuevo', component: GruposAddPageComponent},
  {path: 'grupos/editar/:id', component: GruposEditPageComponent},
  {path: 'grupos/horario/:id', component: GruposHorarioPageComponent},
  {path: 'maestros', component: TeachersAdminPageComponent},
  {path: 'maestros/nuevo', component:  TeachersAddPageComponent},
  {path: 'maestros/editar/:id', component:  TeachersEditPageComponent},
  {path: 'salones', component: SalonesAdminPageComponent},
  {path: 'inventario', component: InventarioAdminPageComponent},
  {path: 'reportes', component: ReportesAdminPageComponent},
  {path: 'anuncios', component: AdminAnunciosComponent},
  
  //Alumno
  {path: 'alumno/reportes', component: AlumnoReportesComponent},
  {path: 'alumno/horario', component: AlumnoHorarioComponent},
  {path: 'alumno/reservas', component: AlumnoReservasComponent},
  {path: 'alumno/notas', component: AlumnoNotasComponent},
  {path: 'alumno/tareas', component: AlumnoTareasComponent},
  {path: 'alumno/anuncios', component: AlumnoAnunciosComponent},

  //Profesor
  {path: 'profesor/tareas', component: ProfesorTareasComponent},

  //System
  {path: 'perfil', component: ProfilePageComponent},

  {path: '**', redirectTo: '/'},

];

const DROP_CONFIG: DropzoneConfigInterface = {
  server: 'http://test.epsidev.com/dashboard/upload/',
  maxFilesize: 50
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    UsersAdminPageComponent,
    TeachersAdminPageComponent,
    UsersManageGroupDialog,
    UsersAddPageComponent,
    ConfirmDeleteUserDialog,
    UsersEditPageComponent,
    FilterPipe,
    MateriasAdminPageComponent,
    MateriasAddPageComponent,
    MateriasEditPageComponent,
    ConfirmDeleteMateriaDialog,
    GruposAdminPageComponent,
    GruposAddPageComponent,
    GruposEditPageComponent,
    ConfirmDeleteGrupoDialog,
    GruposHorarioPageComponent,
    AddMateriaHorarioDialog,
    TeachersEditPageComponent,
    TeachersAddPageComponent,
    ConfirmDeleteTeacherDialog,
    DetailClaseDialog,
    SalonesAdminPageComponent,
    InventarioAdminPageComponent,
    ReportesAdminPageComponent,
    EditSalonDialog,
    AddSalonDialog,
    ConfirmDeleteSalonDialog,
    InventarioAdminPageComponent,
    AddInventarioDialog,
    EditInventarioDialog,
    ConfirmDeleteInventarioDialog,
    AddReporteDialog,
    EditReporteDialog,
    ConfirmDeleteReporteDialog,
    GenerateHorarioDialog,
    AlumnoReportesComponent,
    AlumnoHorarioComponent,
    DialogProfileComponent,
    ProfilePageComponent,
    AlumnoReservasComponent,
    AlumnoReservasAddComponent,
    AlumnoNotasComponent,
    AlumnoNotasAddComponent,
    AlumnoNotasEditComponent,
    UsersManageGroupDialogTeachers,
    ProfesorTareasComponent,
    ProfesorTareasAddComponent,
    ProfesorTareasEditComponent,
    ProfesorTareasDeleteComponent,
    AlumnoTareasComponent,
    AlumnoTareasRespuestaAddComponent,
    AlumnoTareasDetailComponent,
    AdminAnunciosComponent,
    AdminAnunciosAddComponent,
    AdminAnunciosDeleteComponent,
    AdminAnunciosEditComponent,
    AlumnoAnunciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DatePickerModule,
    DropzoneModule.forRoot(DROP_CONFIG)
  ],
  entryComponents: [
    ConfirmDeleteUserDialog,
    ConfirmDeleteMateriaDialog,
    ConfirmDeleteGrupoDialog,
    AddMateriaHorarioDialog,
    UsersManageGroupDialog,
    ConfirmDeleteTeacherDialog,
    DetailClaseDialog,
    AddSalonDialog,
    EditSalonDialog,
    ConfirmDeleteSalonDialog,
    AddInventarioDialog,
    EditInventarioDialog,
    ConfirmDeleteInventarioDialog,
    AddReporteDialog,
    EditReporteDialog,
    ConfirmDeleteReporteDialog,
    GenerateHorarioDialog,
    DialogProfileComponent,
    AlumnoReservasAddComponent,
    AlumnoNotasAddComponent,
    AlumnoNotasEditComponent,
    UsersManageGroupDialogTeachers,
    ProfesorTareasAddComponent,
    ProfesorTareasEditComponent,
    ProfesorTareasDeleteComponent,
    AlumnoTareasRespuestaAddComponent,
    AlumnoTareasDetailComponent,
    AdminAnunciosEditComponent,
    AdminAnunciosDeleteComponent,
    AdminAnunciosAddComponent
  ],
  providers: [AuthService, BackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
