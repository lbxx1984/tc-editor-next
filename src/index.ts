import {createApp} from 'vue';
import App from './App.vue';
import {store, storeKey} from './store';
import './style/index.less';

console.log(1);
let a:string = 'string';
a = '11';
console.log(a);

const app = createApp(App);
app.use(store, storeKey);
app.mount('#app');
