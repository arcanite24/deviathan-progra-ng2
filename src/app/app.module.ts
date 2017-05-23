import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerModule } from 'angular2-material-datepicker';

import { AuthService } from './services/auth.service';
import { BackServiceService } from './services/back-service.service';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { TeachersAdminPageComponent, ConfirmDeleteTeacherDialog } from './pages/teachers-admin-page/teachers-admin-page.component';
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
  
  //Alumno
  {path: 'alumno/reportes', component: AlumnoReportesComponent},
  {path: 'alumno/horario', component: AlumnoHorarioComponent},

  //System
  {path: 'perfil', component: ProfilePageComponent},

  {path: '**', redirectTo: '/'},

];

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
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    DatepickerModule
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
    DialogProfileComponent
  ],
  providers: [AuthService, BackServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }