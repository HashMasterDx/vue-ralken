<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Bienvenido a la App de Ralken Consulting</h1>
      <p class="lead">Desarrollada con VueJS + Django</p>
      <hr class="my-4">
      <p>Una disculpa por la tardía entrega, intenté cumplir con todos los requerimientos haciendo atractivo desde el uso de Datatables hasta el propio montaje de app en Droplets de Digital Ocean.</p>
      <p>Mi idea era Dockerizar las apps sin embargo creí que ya había sido demasiado tiempo para la entrega.</p>
      <p>De antemano agradezco el tiempo de revisión, y estoy entusiasmado por ser parte de su equipo.</p>
      <p class="lead">
        <a class="btn btn-light btn-lg" href="#" role="button">Saludos</a>
      </p>
    </div>
  </div>
</template>
