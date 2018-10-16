import '../scss/index.scss';

const importAll = r => r.keys().forEach(r);
importAll(require.context('../img/', true, /\.(jpe?g|png|gif)$/));

import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker(); deixar comentado enquanto está em desenvolvimento

import { toggleClass, addClass, removeClass, nodelistToArray } from './helpers';
