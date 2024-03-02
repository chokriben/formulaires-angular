import { Component } from '@angular/core';
import { Produit } from '../model/produit';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent {
  produits: Produit[] = [
    { id: 1, code: 'x12', designation: 'Panier plastique', prix: 20 },
    { id: 2, code: 'y4', designation: 'table en bois', prix: 100 },
    { id: 3, code: 'y10', designation: 'salon en cuir', prix: 3000 },
  ];

  produitCourant: Produit = new Produit();
  validerFormulaire(form: NgForm) {
    // Vérification des doublons
    if (this.produitCourant.id && this.produitExiste(this.produitCourant.id)) {
      if (confirm("Un produit avec cet ID existe déjà. Voulez-vous le mettre à jour?")) {
        this.mettreAJourProduit();
      } else {
        return; // Ne rien faire si l'utilisateur ne confirme pas la mise à jour
      }
    } else {
      // Ajout du produit
      this.produits.push(this.produitCourant);
    }
  }


  // Fonction pour vérifier si un produit avec le même ID existe déjà
  produitExiste(id: number): boolean {
    return this.produits.some(p => p.id === id);
  }

  mettreAJourProduit() {
    const index = this.produits.findIndex(p => p.id === this.produitCourant.id);
    if (index !== -1) {
      this.produits[index] = { ...this.produitCourant };//... est appelé l'opérateur de propagation est utilisé pour créer une copie de l'objet
    }
  }

  supprimerProduit(p: Produit) {
    let reponse: boolean = confirm(
      'Voulez-vous supprimer le produit : ' + p.designation + ' ?'
    );
    if (reponse == true) {
      const index: number = this.produits.findIndex(produit => produit.id === p.id);
      if (index !== -1) {
        this.produits.splice(index, 1); // Supprime le produit de la liste
      }
    }
  }

  effacerSaisie() {
    this.produitCourant = new Produit(); // Efface les données saisies dans le formulaire
  }

  editerProduit(p: Produit) {
    this.produitCourant = { ...p }; // Charge les données du produit sélectionné dans le formulaire pour édition
  }
}
