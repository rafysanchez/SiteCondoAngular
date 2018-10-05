import { AjudaComponent } from './ajuda/ajuda.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { EventosComponent } from './eventos/eventos.component';
import { RecadosComponent } from './recados/recados.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { MoradoresvisitantesComponent } from './moradoresvisitantes/moradoresvisitantes.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SobreComponent } from './sobre/sobre.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'moradoresvisitantes', component: MoradoresvisitantesComponent, canActivate: [AuthGuard] },
    { path: 'veiculos', component: VeiculosComponent, canActivate: [AuthGuard] },
    { path: 'recados', component: RecadosComponent, canActivate: [AuthGuard] },
    { path: 'eventos', component: EventosComponent, canActivate: [AuthGuard] },
    { path: 'ocorrencias', component: OcorrenciasComponent, canActivate: [AuthGuard] },
    { path: 'relatorios', component: RelatoriosComponent, canActivate: [AuthGuard] },
    { path: 'sobre', component: SobreComponent, canActivate: [AuthGuard] },
    { path: 'ajuda', component: AjudaComponent, canActivate: [AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
