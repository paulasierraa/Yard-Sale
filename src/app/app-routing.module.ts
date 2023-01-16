import { NgModule } from "@angular/core"
import { Routes,RouterModule } from "@angular/router"
import { LoginComponent } from './components/login/login.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';
import { MainComponent } from './components/main/main.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

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
    {
        path:'shopping-cart',
        component:ShoppingCartComponent
    },
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}