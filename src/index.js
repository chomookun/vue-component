import VInput from './components/VInput.vue';
import VSelect from './components/VSelect.vue';

export { VInput, VSelect };

export default {
  install(app) {
    app.component('VInput', VInput);
    app.component('VSelect', VSelect);
  }
};
