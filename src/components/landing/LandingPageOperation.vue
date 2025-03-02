<script setup lang="ts"></script>

<template>
  <div id="operation" class="w-full flex flex-col flex-wrap justify-center p-9 gap-9">
    <div class="flex flex-col gap-4 justify-center items-center">
      <h2 class="text-3xl font-bold md:text-2xl sm:text-xl">
        Como o Agendoo Funciona?
      </h2>
      <p class="w-full max-w-[900px] text-base md:text-sm sm:text-xs text-center">
        O Agendoo é uma plataforma completa de agendamento integrada oficialmente ao WhatsApp. Com soluções práticas e intuitivas, conectamos empresas e clientes de forma eficiente, proporcionando uma gestão simples e organizada. Entenda como funciona cada etapa!
      </p>
    </div>

    <div class="flex flex-wrap gap-8 justify-center items-center">
      <div
        class="bg-white dark:bg-[#18181B] w-[400px] h-[250px] flex flex-col justify-center items-center gap-4 p-8 rounded-2xl"
      >
        <i class="pi pi-whatsapp" />
        <h3 class="font-bold">Conexão com o WhatsApp</h3>
        <p class="text-center">
          Com integração oficial via API Cloud do WhatsApp, recebemos e enviamos mensagens diretamente entre empresas e clientes, facilitando a comunicação em tempo real.
        </p>
      </div>

      <div
        class="bg-white dark:bg-[#18181B] w-[400px] h-[250px] flex flex-col justify-center items-center gap-4 p-8 rounded-2xl"
      >
        <i class="pi pi-android" />
        <h3 class="font-bold">Agendamentos via Bot</h3>
        <p class="text-center">
          Os clientes podem agendar serviços diretamente pelo WhatsApp Bot. Além disso, têm acesso à lista de agendamentos e informações importantes como localização e contato da empresa.
        </p>
      </div>

      <div
        class="bg-white dark:bg-[#18181B] w-[400px] h-[250px] flex flex-col justify-center items-center gap-4 p-8 rounded-2xl"
      >
        <i class="pi pi-code" />
        <h3 class="font-bold">Controle Completo com Software Web</h3>
        <p class="text-center">
          Os proprietários têm acesso a um painel administrativo onde podem visualizar agendamentos, acompanhar métricas, personalizar mensagens e gerenciar colaboradores e serviços.
        </p>
      </div>

      <div
        class="bg-white dark:bg-[#18181B] w-[400px] h-[250px] flex flex-col justify-center items-center gap-4 p-8 rounded-2xl"
      >
        <i class="pi pi-chart-pie" />
        <h3 class="font-bold">Dashboard Inteligente</h3>
        <p class="text-center">
          Veja relatórios detalhados sobre os serviços mais solicitados, agendamentos ao longo do tempo e receita gerada. Tenha uma visão clara do desempenho da sua empresa.
        </p>
      </div>

      <div
        class="bg-white dark:bg-[#18181B] w-[400px] h-[250px] flex flex-col justify-center items-center gap-4 p-8 rounded-2xl"
      >
        <i class="pi pi-phone" />
        <h3 class="font-bold">App para Colaboradores</h3>
        <p class="text-center">
          Disponível para Android e iPhone, o app permite que os colaboradores acompanhem seus agendamentos, atualizem o status de atendimentos e se mantenham organizados.
        </p>
      </div>

      <div
        class="bg-white dark:bg-[#18181B] w-[400px] h-[250px] flex flex-col justify-center items-center gap-4 p-8 rounded-2xl"
      >
        <i class="pi pi-wrench" />
        <h3 class="font-bold">Personalização e Controle</h3>
        <p class="text-center">
          Ajuste informações da empresa, edite mensagens automáticas enviadas pelo WhatsApp e tenha controle total sobre colaboradores e serviços oferecidos.
        </p>
      </div>
    </div>
  </div>
</template>
