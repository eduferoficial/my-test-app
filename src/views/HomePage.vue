<template>
 
  <ion-page>  
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>MOVE</ion-title>
      </ion-toolbar>
    </ion-header>    
    <ion-content :fullscreen="true">
      <!-- Conteudo aqui -->


      <ion-item>
        <ion-label position="floating">Endereço de Partida </ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Endereço de Entrega</ion-label>
        <ion-input></ion-input>
      </ion-item>
    
      <ion-list>
    <ion-radio-group value="P">
      <ion-list-header>
        <ion-label>Tamanho do Veículo</ion-label>
      </ion-list-header>

      <ion-item>
        <ion-label>G</ion-label>
        <ion-radio slot="start" value="P"></ion-radio>
        <img src="../assets/14.png" style="width: 150px"/>
        
      </ion-item>

      <ion-item>
        <ion-label>M</ion-label>
        <ion-radio slot="start" value="griff"></ion-radio>
        <img src="../assets/15.png" style="width: 150px"/>
      </ion-item>

      <ion-item>
        <ion-label>P</ion-label>
        <ion-radio slot="start" value="buford"></ion-radio>
        <img src="../assets/16.png" style="width: 150px"/>
      </ion-item>
    </ion-radio-group>
  </ion-list>

      
      
    </ion-content>      
   
 
  </ion-page>

</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,

} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,    
    IonContent,

   
  }
});
</script>