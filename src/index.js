import DataHandler from './DataHandler.js';
import VInput from './components/VInput.vue';
import VSelect from './components/VSelect.vue';
import VTextarea from './components/VTextarea.vue';

export { 
  DataHandler,
  VInput, 
  VSelect 
};

export default {
  install(app) {
    app.component('VInput', VInput);
    app.component('VSelect', VSelect);
    app.component('VTextarea', VTextarea);
  }
};
