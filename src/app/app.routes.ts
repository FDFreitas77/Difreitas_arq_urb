import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent} from './homepage/homepage.component';
import { ProjetosComponent} from './projetos/projetos.component'
import { ContatoComponent} from './contato/contato.component'

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'contato', component: ContatoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
