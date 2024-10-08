import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class counterApp extends DDDSuper(LitElement) {

  static get tag() {
    return "counter-app";
  }

  constructor() {
    super();
    this.title = "";
    this.counter = "";
    this.min = "10";
    this.max = "25";
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: String },
      min: { type: Number },
      max: { type: Number },

    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--counter-app-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  increment(){
    if (this.counter < this.max){
      this.counter++;
    }
  }

  decrement(){
    if (this.counter > this.min){
      this.counter--;
    }
  }

  

  render() {
    return html`
<div class="wrapper">
  <div>${this.title}</div>
  <div class="counter">${this.counter}</div>
  <button @click="${this.increment}" ?disabled="${this.counter === this.max}">+</button>
  <button @click="${this.decrement}" ?disabled="${this.counter === this.min}">-</button>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(counterApp.tag, counterApp);