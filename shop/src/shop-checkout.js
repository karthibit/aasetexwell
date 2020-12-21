define(["./shop-app.js"],function(_shopApp){"use strict";const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<dom-module id="shop-checkbox">
  <template>
    <style>

      shop-checkbox {
        display: inline-block;
        width: 14px;
        height: 14px;
        position: relative;
        border: 2px solid var(--app-accent-color);
        border-radius: 2px;
      }

      shop-checkbox > input[type=checkbox] {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        opacity: 0;
      }

      shop-checkbox > shop-md-decorator {
        pointer-events: none;
      }

      /* Checked state overlay */
      shop-checkbox > shop-md-decorator::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23172C50%22%20d%3D%22M19%203H5c-1.11%200-2%20.9-2%202v14c0%201.1.89%202%202%202h14c1.11%200%202-.9%202-2V5c0-1.1-.89-2-2-2zm-9%2014l-5-5%201.41-1.41L10%2014.17l7.59-7.59L19%208l-9%209z%22%2F%3E%3C%2Fsvg%3E');
        opacity: 0;
        transition: opacity 0.1s;
        will-change: opacity;
      }

      shop-checkbox > input[type=checkbox]:checked + shop-md-decorator::after {
        opacity: 1;
      }

      /* Focused state */
      shop-checkbox > shop-md-decorator::before {
        content: '';
        pointer-events: none;
        position: absolute;
        top: -13px;
        left: -13px;
        width: 40px;
        height: 40px;
        background-color: var(--app-accent-color);
        border-radius: 50%;
        opacity: 0.2;
        -webkit-transform: scale3d(0, 0, 0);
        transform: scale3d(0, 0, 0);
        transition: -webkit-transform 0.1s;
        transition: transform 0.1s;
        will-change: transform;
      }

      shop-checkbox > input[type=checkbox]:focus + shop-md-decorator::before {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);const $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML=`<dom-module id="shop-input">
  <template>
    <style>

      shop-input {
        display: inline-block;
        margin: 20px 0;
      }

      shop-input > input::-webkit-input-placeholder {
        color: transparent;
      }

      shop-input > input::-moz-placeholder {
        color: transparent;
      }

      shop-input > input:-ms-input-placeholder {
        color: transparent;
      }

      shop-input > input::-ms-input-placeholder {
        color: transparent;
      }

      shop-input > input {
        font-size: 1em;
        font-weight: 300;
        color: var(--app-primary-color);
        border: none;
        padding: 8px 0;
        width: 100%;
        outline: none;
      }

      shop-input > input:invalid {
        /* reset the default style in FF */
        box-shadow: none;
      }

      shop-input > shop-md-decorator {
        display: block;
        height: 1px;
        width: 100%;
        margin: auto;
        border-top: 1px solid #ccc;
        position: relative;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }

      shop-input shop-underline {
        display: block;
        height: 2px;
        width: 100%;
        margin: auto;
        background-color: var(--app-accent-color);
        position: absolute;
        top: -1px;
        left: 0;
        -webkit-transform: scale3d(0, 1, 1);
        transform: scale3d(0, 1, 1);
        transition: -webkit-transform 0.2s ease-in;
        transition: transform 0.2s ease-in;
      }

      /* input label */
      shop-input > shop-md-decorator > label {
        display: block;
        pointer-events: none;
        opacity: 0.5;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        transition-property: opacity, -webkit-transform;
        transition-property: opacity, transform;
        transition-duration: 0.15s;
        transition-timing-function: ease-out;
        will-change: transform;
        -webkit-transform: translate3d(0px, -1.9em, 0px);
        transform: translate3d(0px, -1.9em, 0px);
      }

      /* Error message */
      shop-input > shop-md-decorator::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        font-size: 0.65em;
        color: #dd2c00;
        content: attr(error-message);
        display: none;
        white-space: nowrap;
      }

      shop-input > input:focus + shop-md-decorator > shop-underline {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }

      /* Label: valid state */
      shop-input > input:focus + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
      }

      shop-input > input:optional:not(:placeholder-shown) + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
      }

      _:-ms-lang(x), shop-input > input + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
      }

      shop-input > input:optional:-moz-ui-valid + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
      }

      /* Underline */
      shop-input > input:not(:focus):not(:placeholder-shown):invalid + shop-md-decorator > shop-underline {
        background-color: #dd2c00;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }

      shop-input > input:not(:focus):-moz-ui-invalid:invalid + shop-md-decorator > shop-underline {
        background-color: #dd2c00;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }

      shop-input > input[aria-invalid='true']:not(:valid) + shop-md-decorator > shop-underline {
        background-color: #dd2c00;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        transition: -webkit-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
      }

      /* Error message */
      shop-input > input:not(:focus):not(:placeholder-shown):invalid + shop-md-decorator::after {
        display: block;
      }

      shop-input > input:not(:focus):-moz-ui-invalid:invalid + shop-md-decorator::after {
        display: block;
      }

      shop-input > input[aria-invalid='true']:not(:valid) + shop-md-decorator::after {
        display: block;
      }

      /* Error label */
      shop-input > input:not(:focus):not(:placeholder-shown):invalid + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
        color: #dd2c00;
      }

      shop-input > input:not(:focus):-moz-ui-invalid:invalid + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
        color: #dd2c00;
      }

      shop-input > input[aria-invalid='true']:not(:valid) + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
        color: #dd2c00;
      }

      /* Valid label */
      shop-input > input:not(:focus):required:valid + shop-md-decorator > label {
        -webkit-transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        transform: translate3d(0px, -3.4em, 0px) scale(0.8, 0.8);
        opacity: 1;
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);class ShopCheckout extends _shopApp.PolymerElement{static get template(){return _shopApp.html`
    <style include="shop-common-styles shop-button shop-form-styles shop-input shop-select shop-checkbox">

      .main-frame {
        transition: opacity 0.5s;
      }

      :host([waiting]) .main-frame {
        opacity: 0.1;
      }

      shop-input, shop-select {
        font-size: 16px;
      }

      shop-select {
        margin-bottom: 20px;
      }

      paper-spinner-lite {
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
      }

      .billing-address-picker {
        margin: 28px 0;
        height: 20px;
        @apply --layout-horizontal;
      }

      .billing-address-picker > label {
        margin-left: 12px;
      }

      .grid {
        margin-top: 40px;
        @apply --layout-horizontal;
      }

      .grid > section {
        @apply --layout-flex;
      }

      .grid > section:not(:first-child) {
        margin-left: 80px;
      }

      .row {
        @apply --layout-horizontal;
        @apply --layout-end;
      }

      .column {
        @apply --layout-vertical;
      }

      .row > .flex,
      .input-row > * {
        @apply --layout-flex;
      }

      .input-row > *:not(:first-child) {
        margin-left: 8px;
      }

      .shop-select-label {
        line-height: 20px;
      }

      .order-summary-row {
        line-height: 24px;
      }

      .total-row {
        font-weight: 500;
        margin: 30px 0;
      }

      @media (max-width: 767px) {

        .grid {
          display: block;
          margin-top: 0;
        }

        .grid > section:not(:first-child) {
          margin-left: 0;
        }

      }

    </style>

    <div class="main-frame">
      <iron-pages id="pages" selected="[[state]]" attr-for-selected="state">
        <div state="init">
          <iron-form id="checkoutForm"
              on-iron-form-response="_didReceiveResponse"
              on-iron-form-presubmit="_willSendRequest">
            <form method="post" action="shop/data/sample_success_response.json" enctype="application/x-www-form-urlencoded">

              <div class="subsection" visible$="[[!_hasItems]]">
                <p class="empty-cart">Your <iron-icon icon="shopping-cart"></iron-icon> is empty.</p>
              </div>

              <header class="subsection" visible$="[[_hasItems]]">
                <h1>Checkout</h1>
                <span>Shop is a demo app - form data will not be sent</span>
              </header>

              <div class="subsection grid" visible$="[[_hasItems]]">
                <section>
                  <h2 id="accountInfoHeading">Customer Details</h2>                                   
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="customerName" name="customerName" pattern=".{5,}"
                          placeholder="Enter the Name" required
                          aria-labelledby="shipAddressLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid Name" aria-hidden="true">
                        <label id="shipAddressLabel">Name</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>   
                  <div class="row input-row">
                  <shop-input>
                    <input type="tel" id="accountPhone" name="accountPhone" pattern="\\d{10,}"
                        placeholder="Phone Number" required
                        aria-labelledby="accountPhoneLabel accountInfoHeading">
                    <shop-md-decorator error-message="Invalid Phone Number" aria-hidden="true">
                      <label id="accountPhoneLabel">Phone Number</label>
                      <shop-underline></shop-underline>
                    </shop-md-decorator>
                  </shop-input>
                </div>                
                <section>                
                  <h2>Order Summary</h2>
                  <dom-repeat items="[[cart]]" as="entry">
                    <template>
                      <div class="row order-summary-row">
                        <div class="flex">[[entry.item.title]]</div>
                        <div>[[_getEntryTotal(entry)]]</div>
                      </div>
                    </template>
                  </dom-repeat>
                  <div class="row total-row">
                    <div class="flex">Total</div>
                    <div>[[_formatPrice(total)]]</div>
                  </div>
                  <shop-button responsive id="submitBox">
                    <input type="button" on-click="_submit" value="Place Order Via WhatsApp">
                  </shop-button>
                </section>
              </div>
            </form>
          </iron-form>
        </div>

        <!-- Success message UI -->
        <header state="success">
          <h1>Thank you</h1>
          <p>[[response.successMessage]]</p>
          <shop-button responsive>
            <a href="/">Finish</a>
          </shop-button>
        </header>

        <!-- Error message UI -->
        <header state="error">
          <h1>We couldn&acute;t process your order</h1>
          <p id="errorMessage">[[response.errorMessage]]</p>
          <shop-button responsive>
            <a href="/checkout">Try again</a>
          </shop-button>
        </header>

      </iron-pages>

    </div>

    <!-- Handles the routing for the success and error subroutes -->
    <app-route
        active="{{routeActive}}"
        data="{{routeData}}"
        route="[[route]]"
        pattern="/:state">
     </app-route>

    <!-- Show spinner when waiting for the server to repond -->
    <paper-spinner-lite active="[[waiting]]"></paper-spinner-lite>
    `}static get is(){return"shop-checkout"}static get properties(){return{/**
       * The route for the state. e.g. `success` and `error` are mounted in the
       * `checkout/` route.
       */route:{type:Object,notify:!0},/**
       * The total price of the contents in the user's cart.
       */total:Number,/**
       * The state of the form. Valid values are:
       * `init`, `success` and `error`.
       */state:{type:String,value:"init"},/**
       * An array containing the items in the cart.
       */cart:Array,/**
       * The server's response.
       */response:Object,/**
       * If true, the user must enter a billing address.
       */hasBillingAddress:{type:Boolean,value:!1},/**
       * If true, shop-checkout is currently visible on the screen.
       */visible:{type:Boolean,observer:"_visibleChanged"},/**
       * True when waiting for the server to repond.
       */waiting:{type:Boolean,readOnly:!0,reflectToAttribute:!0},/**
       * True when waiting for the server to repond.
       */_hasItems:{type:Boolean,computed:"_computeHasItem(cart.length)"}}}static get observers(){return["_updateState(routeActive, routeData)"]}_submit(e){if(this._validateForm()){// To send the form data to the server:
// 2) Remove the code below.
// 3) Uncomment `this.$.checkoutForm.submit()`.
let orderData="*Hello SHomes Furnishing* %0a Following products are selected",totalAmount=0;this.cart.forEach(cartItem=>{orderData=`${orderData} %0a ${cartItem.item.name} - Quantity : ${cartItem.quantity}`;totalAmount=totalAmount+cartItem.quantity*cartItem.item.price});orderData+=`%0a *Total Amount - ₹${totalAmount}*`;orderData+="%0a Confirm me once order placed";//console.log( this.$.accountPhone.value)
let url=`https://wa.me/919994433799?text=${orderData}`;window.open(url,"_blank");this.$.checkoutForm.dispatchEvent(new CustomEvent("iron-form-presubmit",{composed:!0}));this._submitFormDebouncer=_shopApp.Debouncer.debounce(this._submitFormDebouncer,_shopApp.timeOut.after(1e3),()=>{this.$.checkoutForm.dispatchEvent(new CustomEvent("iron-form-response",{composed:!0,detail:{response:{success:1,successMessage:"Checkout process completed."}}}))});//this.$.checkoutForm.submit();
}}/**
     * Sets the valid state and updates the location.
     */_pushState(state){this._validState=state;this.set("route.path",state)}/**
     * Checks that the `:state` subroute is correct. That is, the state has been pushed
     * after receiving response from the server. e.g. Users can only go to `/checkout/success`
     * if the server responsed with a success message.
     */_updateState(active,routeData){if(active&&routeData){let state=routeData.state;if(this._validState===state){this.state=state;this._validState="";return}}this.state="init"}/**
     * Sets the initial state.
     */_reset(){let form=this.$.checkoutForm;this._setWaiting(!1);form.reset&&form.reset();let nativeForm=form._form;if(!nativeForm){return}// Remove the `aria-invalid` attribute from the form inputs.
for(let el,i=0;el=nativeForm.elements[i],i<nativeForm.elements.length;i++){el.removeAttribute("aria-invalid")}}/**
     * Validates the form's inputs and adds the `aria-invalid` attribute to the inputs
     * that don't match the pattern specified in the markup.
     */_validateForm(){let form=this.$.checkoutForm,firstInvalid=!1,nativeForm=form._form;for(let el,i=0;el=nativeForm.elements[i],i<nativeForm.elements.length;i++){if(el.checkValidity()){el.removeAttribute("aria-invalid")}else{if(!firstInvalid){// announce error message
if(el.nextElementSibling){this.dispatchEvent(new CustomEvent("announce",{bubbles:!0,composed:!0,detail:el.nextElementSibling.getAttribute("error-message")}))}if(el.scrollIntoViewIfNeeded){// safari, chrome
el.scrollIntoViewIfNeeded()}else{// firefox, edge, ie
el.scrollIntoView(!1)}el.focus();firstInvalid=!0}el.setAttribute("aria-invalid","true")}}return!firstInvalid}/**
     * Adds the cart data to the payload that will be sent to the server
     * and updates the UI to reflect the waiting state.
     */_willSendRequest(e){let form=e.target,body=form.request&&form.request.body;this._setWaiting(!0);if(!body){return}// Populate the request body where `cartItemsId[i]` is the ID and `cartItemsQuantity[i]`
// is the quantity for some item `i`.
body.cartItemsId=[];body.cartItemsQuantity=[];this.cart.forEach(cartItem=>{body.cartItemsId.push(cartItem.item.name);body.cartItemsQuantity.push(cartItem.quantity)})}/**
     * Handles the response from the server by checking the response status
     * and transitioning to the success or error UI.
     */_didReceiveResponse(e){let response=e.detail.response;this.response=response;this._setWaiting(!0);if(response.success){this._pushState("success");this._reset();this.dispatchEvent(new CustomEvent("clear-cart",{bubbles:!0,composed:!0}))}else{this._pushState("error")}}_toggleBillingAddress(e){this.hasBillingAddress=e.target.checked;if(this.hasBillingAddress){this.$.billAddress.focus()}}_computeHasItem(cartLength){return 0<cartLength}_formatPrice(total){return isNaN(total)?"":"\u20B9"+total.toFixed(2)}_getEntryTotal(entry){return this._formatPrice(entry.quantity*entry.item.price)}_visibleChanged(visible){if(!visible){return}// Reset the UI states
this._reset();// Notify the page's title
this.dispatchEvent(new CustomEvent("change-section",{bubbles:!0,composed:!0,detail:{title:"Checkout"}}))}}customElements.define(ShopCheckout.is,ShopCheckout)});