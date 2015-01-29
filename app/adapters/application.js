import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  host: config.APIHost,
  namespace: config.APINamespace,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': config.APIKey
  }
});
