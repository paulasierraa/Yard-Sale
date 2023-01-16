import { NgModule } from "@angular/core"
import { Routes,RouterModule } from "@angular/router"
import { LoginComponent } from './components/login/login.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { MainComponent } from './components/main/main.component';

const routes : Routes=[
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'forgot-password',
        component:CreatePasswordComponent
    },
    {
        path:'menu',
        component:MainComponent
    },
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}