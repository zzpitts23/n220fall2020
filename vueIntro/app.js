const App = {
  data() {
    return {
      show: true
    }
  }
}

const mainApp = Vue.createApp(App)

mainApp.component('book-cover', {
  props: ["title", "emoji", "author"],
  template: `
    <div class="book">
        <div class="front">
            <div class="cover"> 
                <h1>{{ title }}</h1>
                <div class="smile">{{ emoji }}</div>
            </div>
        </div>
        <div class="left-side">
            <h2>
                <span>By: {{ author }}</span>
            </h2>
        </div>
    </div>`
});

mainApp.mount('#app')