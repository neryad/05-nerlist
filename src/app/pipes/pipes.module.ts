import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  imports: [
    CommonModule
  ],
  exports: [FiltroCompletadoPipe]
})
export class PipesModule { }
