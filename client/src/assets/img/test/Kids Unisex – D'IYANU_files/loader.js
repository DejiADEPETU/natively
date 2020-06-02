const PS__Widget = {

  load() {
    var container = document.createElement('div');
    container.id = 'ps__widget_container';
    container.style = 'position: fixed; left: 0; bottom: 0; width: 100vw; z-index: 2147483647;';

    if (!window.matchMedia('(min-device-width : 300px)').matches || !window.matchMedia('(max-device-width : 480px)').matches) return;

    var link = "https://static.postscript.io" + '/' + "1784" + '/widget.html?origin=' + window.location.href;
    if(window.ps__pop_status) link += ('&status=' + window.ps__pop_status);
    var iframe = document.createElement('iframe');
    iframe.style = 'border: none; position: fixed; visibility: visible; z-index: 2147483647; max-height: 100vh; max-width: 100vw; transition: none 0s ease 0s; background: none transparent; opacity: 1;'
    iframe.style.height = 0;
    iframe.style.width = 0;
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.bottom = 'auto';
    iframe.style.right = 'auto'
    iframe.style.display = 'none';
    iframe.id = 'ps__widget';
    iframe.scrolling = 'no';
    iframe.setAttribute('src', link);

    if(!document.getElementById('ps__widget')){ 
      container.appendChild(iframe);
    }
    if(document.body != null && !document.getElementById('ps__widget_container')){ 
      document.body.appendChild(container);
    }

    window.addEventListener('message', event => {
      if (event.data.hasOwnProperty('FrameHeight')) {
        document.getElementById('ps__widget').style.height = event.data.FrameHeight;
      }
      if (event.data.hasOwnProperty('FrameWidth')) {
        document.getElementById('ps__widget').style.width = event.data.FrameWidth;
      }
      if (event.data.hasOwnProperty('FrameDisplay')) {
        document.getElementById('ps__widget').style.display = event.data.FrameDisplay;
      }
      if (event.data.hasOwnProperty('FramePosition')) {
        document.getElementById('ps__widget').style.top = event.data.FramePosition.top;
        document.getElementById('ps__widget').style.left = event.data.FramePosition.left;
        document.getElementById('ps__widget').style.bottom = event.data.FramePosition.bottom;
        document.getElementById('ps__widget').style.right = event.data.FramePosition.right;
      }
    });
  }

}
try{PS__Widget.load();} catch(e){}