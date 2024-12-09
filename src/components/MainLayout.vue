<script setup></script>

<template>
  <div>
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="d-flex justify-content-between">
            <a
              href="#"
              class="btnMenu lato-bold btn d-flex justify-content-center align-items-center"
              >Me<br />nu</a
            >
            <a href="#" class="btnCustom btn d-flex justify-content-center align-items-center"
              >CONTACTO</a
            >
          </div>
        </div>
      </div>
    </header>

    <slot></slot>

    <footer id="footer">
      <div class="container">
        <div class="row"></div>
      </div>
    </footer>
  </div>
</template>
