import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@govflanders/vl-ui-core';
import '@govflanders/vl-ui-datepicker';

/**
 * @customElement
 * @polymer
 */
class WebuiniversumPocMain extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[vl-ui-datepicker]]!</h2>
    `;
  }
}

window.customElements.define('webuiniversum-poc-main', WebuiniversumPocMain);
