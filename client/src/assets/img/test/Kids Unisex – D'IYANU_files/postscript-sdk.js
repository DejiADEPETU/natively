(function() {
  const psConfig = window.psConfig || {};
  var ps_shop_id = null, //{{shop_id}},
  page_type = null,
  myshopify_domain = null,
  ps_subscriber_id = null,
  setCookie = function(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = window.parent.document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  identifyPage = function() {
    try {
      var pageType = null;
      if(window.chData && window.chData.order && window.chData.order.order_id){
        pageType = 'carthook_purchase';
      } else if (window.CHDataObject && window.CHDataObject.checkout_session) {
        pageType = 'carthook_checkout';
      } else if (window.BOLD && window.BOLD.order) {
        pageType = 'bold_purchase';
      }  else if (window.location.href.toLowerCase().indexOf('/r/checkout') > -1) {
        pageType = 'recharge_checkout';
      } else if (window.location.href.toLowerCase().indexOf('/r/pay') > -1) {
        pageType = 'recharge_pay';
      } else if (window.location.href.toLowerCase().indexOf('/r/purchase') > -1) {
        pageType = 'recharge_purchase';
      } else if (window.OCUConfig) {
        pageType = 'zipify_purchase';
      } else if(window.Shopify && window.Shopify.checkout && window.Shopify.checkout.order_id) {
        pageType = 'shopify_purchase';
      } else if(window.Shopify && window.Shopify.Checkout && !(window.Shopify.checkout && window.Shopify.checkout.order_id)) {
        pageType = 'shopify_checkout';
      }
      return pageType;
    } catch(e){}
  },
  searchForSubscriberId = function() {
    try {
      var url = new URL(window.location.href);
      var psID = url.searchParams.get("s-id");
      if(psID) {
        setCookie('ps_id', psID, 3650);
      } else {
        psID = getCookie('ps_id');
      }
      psID = psID ? psID : null;
      return psID;
    } catch(e){}
  },
  searchForMyShopifyDomain = function() {
    try {
      var url = new URL(window.location.href);
      var myShopifyDomain = url.searchParams.get("myshopify_domain");
      if(!myShopifyDomain && window.Shopify && window.Shopify.shop) myShopifyDomain = window.Shopify.shop;
      if(!myShopifyDomain && window.Shopify && window.Shopify.Checkout && window.Shopify.Checkout.apiHost) myShopifyDomain = window.Shopify.Checkout.apiHost;
      if(!myShopifyDomain && window.CHDataObject && window.CHDataObject.store_urls && window.CHDataObject.store_urls.store_url) myShopifyDomain = window.CHDataObject.store_urls.store_url;
      if(!myShopifyDomain && window.BOLD && window.BOLD.config) myShopifyDomain = window.BOLD.config.shop_url;
      myShopifyDomain = myShopifyDomain ? myShopifyDomain : null;
      return myShopifyDomain;
    } catch(e){}
  },
  registerPostscript = function() {
    window.Postscript = {
      getSubscriberId: function() {
        return ps_subscriber_id;
      },
      event: function(event, data) {
        try {
          if(!event) return;
          if(event === 'viewed_product') return;
          if(ps_subscriber_id){
            var xhr = new XMLHttpRequest();
            var url = "https://api.postscript.io/api/subscriber_event";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            if(data) data.location_url = window.location.href;
            var data2 = JSON.stringify({
              "subscriber_id": ps_subscriber_id, 
              "event": event,
              "data": (data ? data : null)
            });
            xhr.send(data2);
          } else if (data && data.phone_number && data.accepts_sms) {
            var xhr = new XMLHttpRequest();
            var url = "https://api.postscript.io/api/subscriber/opt_in";
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
              if (xhr.readyState == 4 && xhr.status == 200) {
                var response = JSON.parse(xhr.response);
                if(!response || !response.subscriber_id) return;
                var newID = response.subscriber_id;
                setCookie('ps_id', newID, 3650);
                var xhr2 = new XMLHttpRequest();
                var url2 = "https://api.postscript.io/api/subscriber_event";
                xhr2.open("POST", url2, true);
                xhr2.setRequestHeader("Content-Type", "application/json");
                if(data) data.location_url = window.location.href;
                var data3 = JSON.stringify({
                  "subscriber_id": newID, 
                  "event": event,
                  "data": (data ? data : null)
                });
                xhr2.send(data3);
              }
            };
            if(data) data.location_url = window.location.href;
            var data2 = JSON.stringify({
              "phone_number": data.phone_number, 
              "source": (data.source ? data.source : null),
              "shop_id": (data.shop_id ? data.shop_id : ps_shop_id),
              "myshopify_domain": (data.myshopify_domain ? data.myshopify_domain : myshopify_domain),
              "email": (data.email ? data.email : null)
            });
            xhr.send(data2);
          }
        } catch(e){}
      }
    };
    window.postscript = window.Postscript;
  },
  init = function() {
    page_type = identifyPage();
    ps_subscriber_id = searchForSubscriberId();
    myshopify_domain = searchForMyShopifyDomain();
  },
  fireDOMLoadEvents = function() {
    try {
      if(!page_type) return;
      if(!ps_subscriber_id){
        addSubscriberSection();
        //addFooterSection();
      }
    } catch(e){}
  },
  fireLoadEvents = function() {
    try {
      if(!page_type) return;
      var source = 'Shopify Checkout';
      if(page_type.includes('carthook')){
        source = 'CartHook Checkout';
      } else if (page_type.includes('recharge')) {
        source = 'ReCharge Checkout';
      } else if (page_type.includes('bold')) {
        source = 'Bold Checkout';
      } else if (page_type.includes('zipify')) {
        source = 'Zipify Checkout';
      } else if(page_type.includes('shopify')) {
        source = 'Shopify Checkout';
      }
      var externalOrderId = window.ps__order_id ? window.ps__order_id : null;
      if(window.Postscript && page_type === 'shopify_purchase') window.Postscript.event("purchase", {"order_id": window.Shopify.checkout.order_id, "page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'carthook_purchase') window.Postscript.event("purchase", {"order_id": window.chData.order.order_id, "page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'carthook_checkout') window.Postscript.event("checkout_started", {"page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'bold_purchase') window.Postscript.event("purchase", {"order_id": ((window.BOLD && window.BOLD.order) ? window.BOLD.order.public_order_id : null), "page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'zipify_purchase') window.Postscript.event("purchase", {"order_id": externalOrderId, "page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'zipify_checkout') window.Postscript.event("checkout_started", {"page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'recharge_purchase') window.Postscript.event("purchase", {"order_id": externalOrderId, "page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'recharge_checkout') window.Postscript.event("checkout_started", {"page_type": page_type, "source": source});
      if(window.Postscript && page_type === 'recharge_pay') window.Postscript.event("payment_started", {"page_type": page_type, "source": source});
      if(document.querySelector('button[type="submit"]')) {
        document.querySelectorAll('button[type="submit"]').forEach((n)=>{n.addEventListener("click", function(){submitClicked();}, false)});
      }
      if(document.querySelector('input[type="submit"]')) {
        document.querySelectorAll('input[type="submit"]').forEach((n)=>{n.addEventListener("click", function(){submitClicked();}, false)});
      }
    } catch(e){}
  },
  getEmailElement = function() {
    var emailElement = document.getElementById('customer_email');
    if(!emailElement) emailElement = document.getElementById('checkout_email');
    return emailElement;
  },
  getPhoneElement = function() {
    var phoneElement = document.getElementById('ps_phone_number');
    //carthook = 'shipping_phone'
    if(!phoneElement) phoneElement = document.getElementById('shipping_phone');
    //rc = checkout_shipping_address_phone
    //shopify = checkout_shipping_address_phone
    if(!phoneElement) phoneElement = document.getElementById('checkout_shipping_address_phone');
    return phoneElement;
  },
  submitClicked = function() {
    var acceptsElement = document.getElementById('ps_accepts_sms');
    var phoneElement = getPhoneElement();
    var emailElement = getEmailElement();
    var aVal = false;
    var pVal = null;
    var eVal = null;
    if(acceptsElement){
      if(acceptsElement.dataset && acceptsElement.dataset['acceptsSms']){
        aVal = acceptsElement.dataset['acceptsSms'] === 'true' ? true : false;
      } else if(acceptsElement.checked) {
        aVal = acceptsElement.checked === true ? true : false;
      }
    }
    if(phoneElement && phoneElement.value) pVal = phoneElement.value;
    if(emailElement && emailElement.value) eVal = emailElement.value;
    var source = 'Checkout';
    if(page_type.includes('carthook')){
      source = 'CartHook Checkout';
    } else if (page_type.includes('recharge')) {
      source = 'ReCharge Checkout';
    } else if (page_type.includes('bold')) {
      source = 'Bold Checkout';
    } else if (page_type.includes('zipify')) {
      source = 'Zipify Checkout';
    } else if(page_type.includes('shopify')) {
      source = 'Shopify Checkout';
    }
    if(aVal && pVal) window.Postscript.event("customer_submitted", {"accepts_sms": aVal, "phone_number": pVal, "source": source, "email": eVal});
  },
  createCHSubscriberSection = function(tries) {
    var ps_container = document.createElement('div');
    ps_container.id = 'ps__container';
    ps_container.classList.add('col-xs-12', 'col-12');
    ps_container.classList.add('checkbox-wrap');
    ps_container.style.paddingBottom = '12px';
    ps_container.style.height = 'auto';
    var ps_checkbox = document.createElement('input');
    ps_checkbox.classList.add('ch-checkbox');
    ps_checkbox.classList.add('checkbox-buyer-accepts-marketing');
    ps_checkbox.id = 'ps_accepts_sms';
    ps_checkbox.name = 'ps_accepts_sms';
    ps_checkbox.type = 'checkbox';
    var ps_checkbox_label = document.createElement('label');
    ps_checkbox_label.classList.add('ch-label');
    ps_checkbox_label.htmlFor = 'ps_accepts_sms';
    ps_checkbox_label.onclick = function(){
      if (!document.getElementById('ps__phone_container')) return;
      if (!document.getElementById('ps_accepts_sms').checked){
        document.getElementById('ps__phone_container').style.display = 'inline-block';
        document.getElementById('ps_phone_number').focus();
      } else {
        document.getElementById('ps__phone_container').style.display = 'none';
      }
    }
    var ps_checkbox_label_span_custom_checkbox = document.createElement('span');
    ps_checkbox_label_span_custom_checkbox.classList.add('ch-custom-checkbox');
    ps_checkbox_label_span_custom_checkbox.setAttribute('data-ch-type', 'text');
    var ps_checkbox_label_span_custom_label = document.createElement('span');
    ps_checkbox_label_span_custom_label.setAttribute('data-ch-type', 'text');
    ps_checkbox_label_span_custom_label.classList.add('ch-custom-label');
    var ps_checkbox_label_span_custom_label_span = document.createElement('span');
    ps_checkbox_label_span_custom_label_span.setAttribute('data-ch-type', 'text');
    ps_checkbox_label_span_custom_label_span.innerHTML = psConfig.textAgreement || 'Send me special offers through text*';

    var ps_footer = document.createElement('div');
    ps_footer.id = 'ps__footer';
    ps_footer.style.paddingTop = '1em';
    ps_footer.style.lineHeight = '1.2';
    ps_footer.style.fontSize = '10px';
    ps_footer.setAttribute('data-ch-type', 'text');
    ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';

    var ps_phone_container = document.createElement('div');
    ps_phone_container.id = 'ps__phone_container';
    ps_phone_container.style.display = 'none';
    ps_phone_container.style.marginTop = '1em';
    ps_phone_container.classList.add('input-wrap');
    ps_phone_container.classList.add('buyer-phone-number');
    var ps_phone_input = document.createElement('input');
    ps_phone_input.id = 'ps_phone_number';
    ps_phone_input.name = 'ps_phone_number';
    ps_phone_input.type = 'tel';
    ps_phone_input.oninput = function(){
      var pn = document.getElementById('ps_phone_number');
      if (pn && pn.value && pn.value.length > 0){
        ps_phone_input.classList.add('ch-dirty');
      } else {
        ps_phone_input.classList.remove('ch-dirty');
      }
    }
    ps_phone_input.classList.add('form-control');
    ps_phone_input.classList.add('ch-input');
    ps_phone_input.classList.add('input-shipping-first-name');
    /*ps_phone_input.classList.add('pristine');
    ps_phone_input.classList.add('untouched');*/
    var ps_phone_label = document.createElement('label');
    ps_phone_label.htmlFor = 'ps_phone_number';
    ps_phone_label.classList.add('input-label');
    var ps_phone_label_span = document.createElement('span');
    ps_phone_label_span.innerHTML = 'Phone Number';
    ps_phone_label_span.setAttribute('data-ch-type', 'text');
    ps_checkbox_label.appendChild(ps_checkbox_label_span_custom_checkbox);
    ps_checkbox_label_span_custom_label.appendChild(ps_checkbox_label_span_custom_label_span);
    ps_checkbox_label.appendChild(ps_checkbox_label_span_custom_label);
    ps_checkbox.appendChild(ps_checkbox_label);
    ps_container.appendChild(ps_checkbox);
    ps_phone_label.appendChild(ps_phone_label_span);
    ps_container.appendChild(ps_checkbox_label);
    ps_container.appendChild(ps_footer);
    ps_phone_container.appendChild(ps_phone_input);
    ps_phone_container.appendChild(ps_phone_label);
    if(!getPhoneElement()) ps_container.appendChild(ps_phone_container);
    let element;
    if (psConfig.checkboxElement) {
      element = document.querySelector(psConfig.checkboxElement);
    } else {
      element = document.querySelector('#customer_email') ? document.querySelector('#customer_email').closest('div.row') : null;
    }
    if (!element && (tries < 10 || !tries)) {
      setTimeout(function() { createCHSubscriberSection(tries + 1) }, 500);
    }
    if(!document.getElementById('ps__container') && element) element.appendChild(ps_container);
  },
  createCHFooterSection = function() {
    let element;
    if (psConfig.footerElement) {
      element = document.querySelector(psConfig.footerElement);
    } else {
      element = document.querySelector('.footer-links') ? document.querySelector('.footer-links').closest('footer') : (document.querySelector('footer') ? document.querySelector('footer') : null);
    }
    if(element) {
      var ps_footer = document.createElement('div');
      ps_footer.id = 'ps__footer';
      ps_footer.style.paddingTop = '12px';
      ps_footer.setAttribute('data-ch-type', 'text');
      ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';
    } else {
      var rows = document.querySelectorAll('div .row')
      element = rows[rows.length-1].parentNode;
      var ps_footer = document.createElement('div');
      ps_footer.id = 'ps__footer';
      ps_footer.classList.add('row');
      var ps_footer_inner = document.createElement('div');
      ps_footer_inner.classList.add('col-xs-12', 'col-12');
      ps_footer_inner.setAttribute('data-ch-type', 'text');
      ps_footer_inner.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';
      ps_footer.appendChild(ps_footer_inner);
    }
    if(!document.getElementById('ps__footer') && element) element.appendChild(ps_footer);
  },
  createRCSubscriberSection = function(tries) {
    var ps_container = document.createElement('div');
    ps_container.id = 'ps__container';
    ps_container.style.padding = '2px';
    ps_container.style.marginBottom = '30px';

    var ps_checkbox = document.createElement('input');
    ps_checkbox.id = 'ps_accepts_sms';
    ps_checkbox.name = 'ps_accepts_sms';
    ps_checkbox.type = 'checkbox';
    var ps_checkbox_label = document.createElement('label');
    ps_checkbox_label.classList.add('buyer_accepts_marketing');
    ps_checkbox_label.htmlFor = 'ps_accepts_sms';
    ps_checkbox_label_span = document.createElement('span');
    ps_checkbox_label_span.style.marginLeft = '0.25em';
    ps_checkbox_label_span.innerHTML = psConfig.textAgreement || 'Send me special offers through text*';
    ps_checkbox_label.onclick = function(){
      if (!document.getElementById('ps__phone_container') || !document.getElementById('ps__phone_fieldset')) return;
      if (!document.getElementById('ps_accepts_sms').checked){
        document.getElementById('ps__phone_fieldset').style.display = 'none';
        document.getElementById('ps__phone_container').classList.remove('field--focus');
      } else {
        document.getElementById('ps__phone_fieldset').style.display = 'block';
        document.getElementById('ps__phone_container').classList.add('field--focus');
        document.getElementById('ps_phone_number').focus();
      }
    }

    var ps_footer = document.createElement('div');
    ps_footer.id = 'ps__footer';
    ps_footer.style.paddingTop = '1em';
    ps_footer.style.lineHeight = '1.2';
    ps_footer.style.fontSize = '10px';
    ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';

    var ps_phone_fieldset = document.createElement('div');
    ps_phone_fieldset.style.marginTop = '20px';
    ps_phone_fieldset.id="ps__phone_fieldset";
    ps_phone_fieldset.classList.add('fieldset');
    ps_phone_fieldset.style.display = 'none';
    var ps_phone_container = document.createElement('div');
    ps_phone_container.id = 'ps__phone_container';
    ps_phone_container.classList.add('field');
    ps_phone_container.classList.add('field--optional');
    ps_phone_container.classList.add('phone');
    var ps_phone_input = document.createElement('input');
    ps_phone_input.id = 'ps_phone_number';
    ps_phone_input.name = 'ps_phone_number';
    ps_phone_input.type = 'tel';
    ps_phone_input.classList.add('optional');
    var ps_phone_label = document.createElement('label');
    ps_phone_label.htmlFor = 'ps_phone_number';
    var ps_phone_label_span = document.createElement('span');
    ps_phone_label_span.innerHTML = 'Phone';

    ps_checkbox_label.appendChild(ps_checkbox);
    ps_checkbox_label.appendChild(ps_checkbox_label_span);
    ps_container.appendChild(ps_checkbox_label);
    ps_container.appendChild(ps_footer);
    ps_phone_label.appendChild(ps_phone_label_span);
    //ps_container.appendChild(ps_checkbox_label);
    ps_phone_container.appendChild(ps_phone_label);
    ps_phone_container.appendChild(ps_phone_input);
    ps_phone_fieldset.appendChild(ps_phone_container);
    if(!getPhoneElement()) ps_container.appendChild(ps_phone_fieldset);

    let element;
    if (psConfig.checkboxElement) {
      element = document.querySelector(psConfig.checkboxElement);
    } else {
      element = document.querySelector('#checkout_email_section');
    }
    if (!element && (tries < 10 || !tries)) {
      setTimeout(function() { createRCSubscriberSection(tries + 1) }, 500);
    }
    if(!document.getElementById('ps__container') && element) element.parentNode.insertBefore(ps_container, element.nextSibling);
  },
  createRCFooterSection = function() {
    let element;
    if (psConfig.footerElement) {
      element = document.querySelector(psConfig.footerElement);
    } else {
      element = document.querySelector('.footer__copyright') ? document.querySelector('.footer__copyright').closest('.footer') : null;
    }
    if(element){
      var ps_footer_container = document.createElement('div');
      ps_footer_container.id = 'ps__footer_container';
      ps_footer_container.style.paddingTop = '12px';
      ps_footer_container.classList.add('wrap');
      var ps_footer = document.createElement('p');
      ps_footer.id = 'ps__footer';
      ps_footer.classList.add('footer__copyright');
      ps_footer.style.maxWidth = '550px';
      ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';
      ps_footer_container.appendChild(ps_footer);
    } else {
      element = document.querySelector('body');
      var ps_footer_container = document.createElement('div');
      ps_footer_container.id = 'ps__footer_container';
      var ps_footer_inner_container = document.createElement('div');
      ps_footer_inner_container.classList.add('wrap');
      var ps_footer = document.createElement('p');
      ps_footer.id = 'ps__footer';
      ps_footer.classList.add('footer__copyright');
      ps_footer.style.maxWidth = '550px';
      ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';
      ps_footer_inner_container.appendChild(ps_footer);
      ps_footer_container.appendChild(ps_footer_inner_container);
    }
    if(!document.getElementById('ps__footer') && element) element.appendChild(ps_footer_container);
  },
  createShopifySubscriberSection = function(tries) {
    var ps_container = document.createElement('div');
    ps_container.id = 'ps__container';
    ps_container.classList.add('section__content');
    var ps_checkbox_container = document.createElement('div');
    ps_checkbox_container.id = 'ps__checkbox_container';
    ps_checkbox_container.classList.add('fieldset-description');
    ps_checkbox_container.style.marginTop = '1.5em';
    var ps_checkbox_section_container = document.createElement('div');
    ps_checkbox_section_container.classList.add('section__content');
    var ps_checkbox_wrapper = document.createElement('div');
    ps_checkbox_wrapper.classList.add('checkbox-wrapper');
    var ps_checkbox_input_container = document.createElement('div');
    ps_checkbox_input_container.classList.add('checkbox__input');
    var ps_checkbox = document.createElement('input');
    ps_checkbox.id = 'ps_accepts_sms';
    ps_checkbox.name = 'ps_accepts_sms';
    ps_checkbox.type = 'checkbox';
    ps_checkbox.classList.add('input-checkbox');
    var ps_checkbox_label = document.createElement('label');
    ps_checkbox_label.classList.add('checkbox__label');
    ps_checkbox_label.htmlFor = 'ps_accepts_sms';
    ps_checkbox_label.type = 'checkbox';
    ps_checkbox_label.innerHTML = psConfig.textAgreement || 'Send me special offers through text*';
    ps_checkbox_input_container.onclick = function(){
      if (!document.getElementById('ps__phone_container')) return;
      if (!document.getElementById('ps_accepts_sms').checked){
        document.getElementById('ps__phone_container').style.display = 'none';
      } else {
        document.getElementById('ps__phone_container').style.display = 'block';
        document.getElementById('ps_phone_number').focus();
      }
    }

    var ps_footer = document.createElement('div');
    ps_footer.id = 'ps__footer';
    ps_footer.style.paddingTop = '1em';
    ps_footer.style.lineHeight = '1.2';
    ps_footer.style.fontSize = '10px';
    ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';

    var ps_phone_container = document.createElement('div');
    ps_phone_container.id = 'ps__phone_container';
    ps_phone_container.classList.add('fieldset');
    ps_phone_container.style.marginTop = '0.93em';
    ps_phone_container.style.display = 'none';
    var ps_phone_field_container = document.createElement('div');
    ps_phone_field_container.classList.add('field');
    var ps_phone_field_wrapper = document.createElement('div');
    ps_phone_field_wrapper.classList.add('field__input-wrapper');
    var ps_phone_label = document.createElement('label');
    ps_phone_label.htmlFor = 'ps_phone_number';
    ps_phone_label.classList.add('field__label');
    ps_phone_label.classList.add('field__label--visible');
    ps_phone_label.innerHTML = 'Phone Number';
    var ps_phone_input = document.createElement('input');
    ps_phone_input.id = 'ps_phone_number';
    ps_phone_input.name = 'ps_phone_number';
    ps_phone_input.type = 'tel';
    ps_phone_input.placeholder = 'Phone Number';
    ps_phone_input.classList.add('field__input');

    ps_checkbox_input_container.appendChild(ps_checkbox);
    ps_checkbox_wrapper.appendChild(ps_checkbox_input_container);
    ps_checkbox_wrapper.appendChild(ps_checkbox_label);
    ps_checkbox_section_container.appendChild(ps_checkbox_wrapper);
    ps_checkbox_container.appendChild(ps_checkbox_section_container);
    ps_container.appendChild(ps_checkbox_container);
    ps_container.appendChild(ps_footer);
    ps_phone_field_wrapper.appendChild(ps_phone_label);
    ps_phone_field_wrapper.appendChild(ps_phone_input);
    ps_phone_field_container.appendChild(ps_phone_field_wrapper);
    ps_phone_container.appendChild(ps_phone_field_container);
    if(!getPhoneElement()) ps_container.appendChild(ps_phone_container);
    let element;
    if (psConfig.checkboxElement) {
      element = document.querySelector(psConfig.checkboxElement);
    } else {
      element = document.querySelector('#checkout_email') ? document.querySelector('#checkout_email').closest('div.section') : (document.querySelector('#checkout_email_or_phone') ? document.querySelector('#checkout_email_or_phone').closest('div.section') : (document.querySelector('#checkout_phone') ? document.querySelector('#checkout_phone').closest('div.section') : null));
    }
    if (!element && (tries < 10 || !tries)) {
      setTimeout(function() { createShopifySubscriberSection(tries + 1) }, 500);
    }
    if(!document.getElementById('ps__container') && element) element.appendChild(ps_container);
  },
  createShopifyFooterSection = function() {
    let element;
    if (psConfig.footerElement) {
      element = document.querySelector(psConfig.footerElement);
    } else {
      element = document.querySelector('.main__footer') ? document.querySelector('.main__footer') : null;
    }
    if(element) {
      var ps_footer = document.createElement('div');
      ps_footer.id = 'ps__footer';
      ps_footer.style.paddingTop = '12px';
      ps_footer.classList.add('policy-list__item');
      ps_footer.style.maxWidth = '550px';
      ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';
    } else {
      element = document.querySelector('.main');
      var ps_footer = document.createElement('div');
      ps_footer.id = 'ps__footer';
      var ps_inner_footer = document.createElement('div');
      ps_inner_footer.style.paddingTop = '12px';
      ps_inner_footer.classList.add('policy-list__item');
      ps_inner_footer.style.maxWidth = '550px';
      ps_footer.innerHTML = window.__psCustomLegalVerbiage || '*I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Reply STOP to unsubscribe. Msg & data rates may apply. View our Terms of Service for details.';
      ps_footer.appendChild(ps_inner_footer);
    }
    if(!document.getElementById('ps__footer') && element) element.appendChild(ps_footer);
  },
  addSubscriberSection = function() {
    if(document.getElementById('ps_accepts_sms')) return;
    if(page_type.includes('carthook')){
      createCHSubscriberSection();
    } else if(page_type.includes('recharge')){
      createRCSubscriberSection();
    } else if(page_type.includes('bold')){
      createBoldSubscriberSection();
    }else if(page_type.includes('zipify')){
      createShopifySubscriberSection();
    } else if(page_type.includes('shopify')){
      createShopifySubscriberSection();
    }
  },
  addFooterSection = function() {
    if(document.getElementById('ps_footer_disclaimer')) return;
    if(page_type.includes('carthook')){
      createCHFooterSection();
    } else if(page_type.includes('recharge')){
      createRCFooterSection();
    } else if(page_type.includes('bold')){
      createBoldFooterSection();
    } else if(page_type.includes('zipify')){
      createShopifyFooterSection();
    } else if(page_type.includes('shopify')){
      createShopifyFooterSection();
    }
  },
  /*s = !1,
  d = function() {
    if (document.readyState && !/interactive|loaded|complete/.test(document.readyState))
      return void setTimeout(d, 10);
    if (!s) return (s = !0), void setTimeout(d, 10);
    fireDOMLoadEvents();
  },*/
  t = !1,
  e = function() {
    if (document.readyState && !/loaded|complete/.test(document.readyState))
      return void setTimeout(e, 10);
    if (!t) return (t = !0), void setTimeout(e, 50);
    init();
    fireDOMLoadEvents();
    fireLoadEvents();
  };
  registerPostscript();
  //init();
  //d();
  e();
})()