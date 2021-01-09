define(["./shop-app.js"],function(_shopApp){"use strict";class ShopListItem extends _shopApp.PolymerElement{static get template(){return _shopApp.html`
    <style>

      :host {
        @apply --layout-vertical;
        @apply --layout-center-justified;
        text-align: center;
        margin: 0 48px;
      }

      shop-image {
        margin: 32px 0 16px;
      }

      shop-image:hover {
        opacity: 0.8;
      }

      shop-image::before {
        content: "";
        display: block;
        padding-top: 100%;
      }

      .title {
        color: var(--app-primary-color);
        font-weight: bold;
      }

      .price {
        color: var(--app-secondary-color);
      }

      @media (max-width: 767px) {
        :host {
          margin: 0 12px;
        }
      }

    </style>

    <shop-image src="[[item.image]]" alt="[[item.title]]"></shop-image>
    <div class="title">[[item.title]]</div>
    <span class="price">[[_formatPrice(item.price)]]</span>
`}static get is(){return"shop-list-item"}static get properties(){return{item:Object}}_formatPrice(price){return price?"\u20B9"+price.toFixed(2):""}}customElements.define(ShopListItem.is,ShopListItem);class ShopList extends _shopApp.PolymerElement{static get template(){return _shopApp.html`
    <style include="shop-common-styles">

      .hero-image {
        position: relative;
        height: 320px;
        overflow: hidden;
        margin-bottom: 32px;
      }

      .hero-image {
        --shop-image-img: {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -9999px;
          right: -9999px;
          max-width: none;
        };
      }

      .grid {
        @apply --layout-horizontal;
        @apply --layout-wrap;
        @apply --layout-justified;
        margin: 0 10px 32px 10px;
        padding: 0;
        list-style: none;
      }

      .grid li {
        -webkit-flex: 1 1;
        flex: 1 1;
        -webkit-flex-basis: 33%;
        flex-basis: 33%;
        max-width: 33%;
      }

      .grid a {
        display:block;
        text-decoration: none;
      }

      @media (max-width: 767px) {
        .hero-image {
          display: none;
        }

        .grid  li {
          -webkit-flex-basis: 50%;
          flex-basis: 50%;
          max-width: 50%;
        }
      }

      .float{
        position: fixed;
        width: 60px;
        height: 60px;
        bottom: 40px;
        right: 10px;
        background-color: #25d366;
        color: #FFF;
        border-radius: 50px;
        text-align: center;
        font-size: 30px;
        box-shadow: 2px 2px 3px #999;
        z-index: 100;
      }

      .my-float {
        margin-top: 16px;
      }

    </style>

    <a href="https://chat.whatsapp.com/LL8VXFRXhr5LqNWttAy1YK" class="float whatsappgrouplink" target="_blank" style="
    background-color: rgb(77, 194, 71);">
        <span class="at-icon-wrapper" style="/* line-height: 20px; *//* height: 30px; *//* width: 30px; */">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" version="1.1" role="img" aria-labelledby="at-svg-whatsapp-4" style="fill: rgb(255, 255, 255);width: 75%;height: 100%;" class="at-icon at-icon-whatsapp"><title id="at-svg-whatsapp-4">Click to Join WhatsApp Group</title><g><path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></g></svg>
        </span>
    </a> 

    <!--
      app-route provides the name of the category.
    -->
    <app-route
        route="[[route]]"
        pattern="/:category"
        data="{{routeData}}"></app-route>

    <!--
      shop-category-data provides the category data for a given category name.
    -->
    <shop-category-data
        id="categoryData"
        category-name="[[routeData.category]]"
        category="{{category}}"
        failure="{{failure}}"></shop-category-data>

   

    <ul class="grid" hidden$="[[failure]]">
      <dom-repeat items="[[_getListItems(category.items)]]" initial-count="4">
        <template>
          <li>
            <a href$="[[_getItemHref(item)]]"><shop-list-item item="[[item]]" on-click="_itemOnSelect"></shop-list-item></a>
          </li>
        </template>
      </dom-repeat>
    </ul>

    <!--
      shop-network-warning shows a warning message when the items can't be rendered due
      to network conditions.
    -->
    
    <shop-network-warning
        hidden$="[[!failure]]"
        offline="[[offline]]"
        on-try-reconnect="_tryReconnect"></shop-network-warning>

  </template>
  `}static get is(){return"shop-list"}static get properties(){return{category:Object,route:Object,routeData:Object,visible:{type:Boolean,value:!1},offline:{type:Boolean,observer:"_offlineChanged"},failure:Boolean}}_itemOnSelect(data){if(data.currentTarget&&data.currentTarget.item){ga("send","event",data.currentTarget.item.category,"category-item-selected",data.currentTarget.item.name)}}static get observers(){return["_categoryChanged(category, visible)"]}connectedCallback(){super.connectedCallback();this.isAttached=!0}disconnectedCallback(){super.disconnectedCallback();this.isAttached=!1}_getListItems(items){// Return placeholder items when the items haven't loaded yet.
return items||[{},{},{},{},{},{},{},{},{},{}]}_getItemHref(item){// By returning null when `itemId` is undefined, the href attribute won't be set and
// the link will be disabled.
return item.name?["/shop/detail",this.category.name,item.name].join("/"):null}_getPluralizedQuantity(quantity){if(!quantity){return""}let pluralizedQ=1===quantity?"item":"items";return"("+quantity+" "+pluralizedQ+")"}_categoryChanged(category,visible){if(!visible){return}if(category){ga("send","event","category","category-selected",category.title)}this._changeSectionDebouncer=_shopApp.Debouncer.debounce(this._changeSectionDebouncer,_shopApp.microTask,()=>{if(category){// Notify the category and the page's title
this.dispatchEvent(new CustomEvent("change-section",{bubbles:!0,composed:!0,detail:{category:category.name,title:category.title,image:this.baseURI+category.image}}))}else{this.dispatchEvent(new CustomEvent("show-invalid-url-warning",{bubbles:!0,composed:!0}))}})}_tryReconnect(){this.$.categoryData.refresh()}_offlineChanged(offline){if(!offline&&this.isAttached){this._tryReconnect()}}}customElements.define(ShopList.is,ShopList)});
