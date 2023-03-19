// import { data } from "../data/data.js";

export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(itemHtml) {
    this._container.prepend(itemHtml);
  }
}
