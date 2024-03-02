import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './produits/produits.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    AjoutProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
