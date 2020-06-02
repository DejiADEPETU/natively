jQuery(document).ready(function() {

  setTimeout(function () {
    if($('.product-recently-viewed').length > 0) {
        $('#recently-viewed-products h2').css('display','block');
    }
  }, 1000);
//   Active video Feature

  $('.home-video-content').click(function(){
    if($('.home-video-embed-wrapper').hasClass('opening')){
       	
    }else{
      $('.home-video-embed-wrapper').addClass('open');
    	 $('.home-video-embed-wrapper').addClass('open');
     	 $('.home-video-embed').addClass('centered');         
      
    }
});

    $('.home-video-embed-wrapper').click(function(){
    	 $('.home-video-embed-wrapper').removeClass('open');
     	 $('.home-video-embed').removeClass('centered');
   
    
 		 });

  $("a#single_image").fancybox();

  /* Add class to mobile menu for icons */
  var i = 1;
  $('ul.mobile-nav > li.mobile-nav__item a > i').each(function() {
    var menuText = $(this).text().toLowerCase();
    $(this).parent().closest('li').addClass('menu-item-' + i);
    i++;
  });

  $('.site-nav').each(function(){
    $(this).find('.grandchild').parent().parent().parent().addClass('has-grand-child');
  });

  /* Make it drawer close when click it out the form when its opened */
  $('#DrawerOverlay').click(function(){
    $('.drawer__close').trigger('click');
  });

  /* Add class when menu has grandchild */
  $('.mobile-nav-sub__toggle.mobile-nav__toggle').click(function (){
    $(this).siblings('.grandchild.sub-toggle').toggle();
  });

  /* Function to add price and qtd items on ATC button */
  var currentPrice = parseFloat($('#ProductPrice').text().replace('$', '').replace(',', ''));
  var originalprice = currentPrice;

//   function multiplyProductTotal(qtd, value, atualizaCurrentPrice ) {
//     if( ! atualizaCurrentPrice ) atualizaCurrentPrice = false;
//     setTimeout(function () {
//       console.log('value B $' + value);
//       console.log('value currentPrice' + currentPrice);

//       if( atualizaCurrentPrice )
//         currentPrice = parseFloat($('#ProductPrice').text().replace('$', '').replace(',', ''));

//       qtd = $('.product__quat').val();
//       value = currentPrice * qtd;
//       $('.productValue').text('$' + value.toFixed(2));
//       $('.productQtd').html( '(' + qtd + ( qtd == 1 ? ' ITEM' : ' ITEMS') + ')');
//       console.log('multiplyProductTotal() $' + value.toFixed(2));
//     }, 300);
//   }

  // new function
  var totalAMais = 0;
  function multiplyProductTotal(qtd, value, atualizaCurrentPrice ) {
    setTimeout(function () {
      var qtd    		= parseInt($('.product__quat').val());
      var price  		= parseFloat($('#ProductPrice').eq(0).text().replace(/[^0-9]/g, ''));
      var separatorCent = $('#ProductPrice').eq(0).text().replace(/[^\,|\.]/g, '');
      var separatorMil  = (separatorCent === '.') ? ',' : '.';
      var simbol 		= $('#ProductPrice').eq(0).text().replace(/[0-9|\,|\.]| [\S\s]*/g, '');
      var language      = $('.productValue > .money').eq(0).attr('doubly-currency') ? $('.productValue > .money').attr('doubly-currency') : '' ;
      price = (price * qtd) / 100;
      price += totalAMais;

      $('.productValue').text(simbol + '' + price.toFixed(2).replace('.', separatorCent) + ' ' + language);
      $('.productQtd').html( '(' + qtd + ( qtd == 1 ? ' ITEM' : ' ITEMS') + ')');
    }, 300);
  }

  /* Reduce product qtd */
  $("#AddToCartForm .productminus").click(function(ev) {
    ev.stopPropagation();
    console.log('clicked minus');
    multiplyProductTotal();
  });

  /* Increase product qtd */
  $("#AddToCartForm .productplus").click(function(ev) {
    ev.stopPropagation();
    console.log('clicked plus');
    multiplyProductTotal();
  });

  /* Type product qtd */
  $('.product__quat').change(function () {
    if ($('.product__quat').val() >= '1') {
      multiplyProductTotal();
    } else {
      alert("Please type 1 or more.");
      $('.productValue').text('$' + price.toFixed(2));
    }
  });

  /* Run function when product has swatch */
  $('#AddToCartForm .swatch-container .swatch-element').click(function () {
    console.log('clicked swatch element');
    $('#AddToCart').removeAttr('disabled');
    setTimeout(function(){
      multiplyProductTotal(null, parseFloat($('#ProductPrice').text().replace('$', '')), true );
    }, 200);
  });

  /* Run function when product hasn't swatch */
  $('#AddToCartForm .selector-wrapper').change(function () {
    console.log('clicked select option');
    setTimeout(function(){
      multiplyProductTotal(null, parseFloat($('#ProductPrice').text().replace('$', '')), true );
    }, 200);
  });

  $('.rc_container').click(function(){
    $('#AddToCartForm').trigger('change');
  });

  $('.proaddcheck').click(function() {
    totalAMais = 0;
    $('.proaddcheck input[type="checkbox"]:checked').each(function(){
            var valueP = $(this).parent().parent().parent().find('.addprice').text().replace('USD', '').replace('$', '').trim();

            if( $(this).parent().parent().parent().find("[id^=quant_productSelectAddon]").length ) {
                valueP = valueP * ( $(this).parent().parent().parent().find("[id^=quant_productSelectAddon]").val() * 1 );
            }

            totalAMais += Number(valueP);
    })
    console.log('totalAMais', totalAMais);
    multiplyProductTotal();
  });
  
  multiplyProductTotal();
});

$(document).on("keypress", "#AddToCartForm", function(event) { 
    return event.keyCode != 13;
});

$('.product__quat').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('.product__quat').blur();
  }
});

/* Function to make mobile footer menu collapsable */
var width = $(window).width();
$('.footer2 .wrapper .half-content').click(function() {
  if ( width <= 767  ) {
    $(this).children('.no-bullets').slideToggle( "slow" );
    $(this).children('h5').toggleClass( "active" );
  }
});

$( window ).resize(function() {
  width = $(window).width();
});

/* Swatch */

// Function to manipulate swatch colors
window.selectColors = function(){
  console.log('window.selectColors');
  var style = $('.swatch[data-option-index="0"] .swatch-element.active > :radio').val();
  var colorsByStyle = [];
  var sizesByStyle = [];

  console.log('style', style);
  var currentColor = $('.swatch[data-option-index="1"] .swatch-element.active > :radio').val();
  var currentSize = $('.swatch[data-option-index="2"] .swatch-element.active > :radio').val();

  var colorDoesntExists = true;
  var sizeDoesntExists = currentSize ? true : false;

  if( typeof productOptions != "undefined" )
    productOptions.forEach(function(product,i){
      if(
        product['options'][0] === style &&
        (
          product['inventory_management'] === 'shopify' &&
          product['inventory_policy'] === 'deny' &&
          product['inventory_quantity'] > 0 ||
          product['inventory_management'] === 'shopify' &&
          product['inventory_policy'] === 'continue' ||
          product['inventory_management'] === null
        )
      ) {

        if( currentColor && colorsByStyle.indexOf(product['options'][1]) == -1 )
          colorsByStyle.push(product['options'][1]);

        console.log('cor que tem', product['options'][2]);

        if( currentSize && sizesByStyle.indexOf(product['options'][2]) == -1 )
          sizesByStyle.push(product['options'][2]);

        if( colorDoesntExists ) {
          if( currentColor == product['options'][1] ){
            colorDoesntExists = false;
          }
        }

        if( sizeDoesntExists ) {
          if( currentSize == product['options'][2] ){
            sizeDoesntExists = false;
          }
        }
      }
    });

  console.log('sizesByStyle', sizesByStyle);

  $('.swatch[data-option-index="1"] .swatch-element').show();

  if( currentColor ) {
    var firstColorElementShown = null;

    $('.swatch[data-option-index="1"] .swatch-element').each(function(i,e){
      if (colorsByStyle.indexOf(e.dataset.value) == -1) {
//         $(e).hide();
      } else {
        if( !firstColorElementShown ) firstColorElementShown = e;
      }
    });

    if( colorDoesntExists && firstColorElementShown ) {
      $(firstColorElementShown).find(':radio').click();
    }
  }


  $('.swatch[data-option-index="2"] .swatch-element').show();

  if( currentSize ) {
    var firstSizeElementShown = null;

    $('.swatch[data-option-index="2"] .swatch-element').each(function(i,e){
      console.log('compare size', e.dataset.value, sizesByStyle.indexOf(e.dataset.value));
      if (sizesByStyle.indexOf(e.dataset.value) == -1) {
        $(e).hide();
      } else {
        if( !firstSizeElementShown ) firstSizeElementShown = e;
      }
    });

    if( sizeDoesntExists && firstSizeElementShown ) {
      $(firstSizeElementShown).find(':radio').click();
    }
  }


  return colorsByStyle;
};

(function($){
  /* Add check signal to first product on the product page */
  $('.template-product .swatch-container').each(function(){
    $(this).children('div').first().addClass('active');
  });

  /* Add check signal on the first color of the product inside the collection page */
  $('body.template-collection .grid__item.product_item').each(function(){
    $(this).find('.product-item__colors li').first().addClass('active');
  });

  /* Swatch function */
  selectColors();
  jQuery('.swatch :radio').change(function() {
    var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index'); // Variant
    var optionValue = jQuery(this).val();										 // Value variant
    jQuery(this).parent().parent().find('.active').removeClass('active');
    jQuery(this).parent().addClass('active');

    jQuery(this)
    .closest('form')
    .find('.single-option-selector')
    .eq(optionIndex)
    .val(optionValue)
    .trigger('change');


    selectColors();
  });


  /* Check if exist a variation checked and "click" to show the signal on the right variation */
  setTimeout(function(){
    var colorForSwatch = $(".template-product #productSelect :selected").text().split("-")[0];
    console.log(colorForSwatch);
    if($('.swatch-element').hasClass('soldout') || $('#outofstcok').length > 0){
    	$('#ISR_button').show();
      console.log("SHOW ISR");
    }
    $('.template-product div[data-value="' + colorForSwatch + '"] input').change();
  }, 1000);
})(jQuery);



/* Add qtd items to proceed to checkout button inside the drawer */
jQuery(document.body).on('afterCartLoad.ajaxCart', function(evt, cart) {
  var count = parseInt($('header .CartCount').text());
  if(count != NaN) {
    $('#CartDrawer button.btn--secondary.btn--full.cart__checkout .cart-itens').html('(' + count + ( count == 1 ? ' Item)' : ' Items)'));
  }
});