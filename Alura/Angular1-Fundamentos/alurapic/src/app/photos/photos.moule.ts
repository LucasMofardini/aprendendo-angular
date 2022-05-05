import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    // Está privado dentro do modulo
    // Mas são visiveis para os components declarados aqui
    declarations: [
        PhotoComponent
    ],
    // Está acessivel por quem acessar o módulo
    exports: [
        PhotoComponent
    ],
    imports:[
        HttpClientModule
    ]

})
export class PhotosModule{}