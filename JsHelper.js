
    (() => {
      window.addEventListener('DOMContentLoaded', () => {
        const colorModeSwitch = document.getElementById('MyColorSwitch');
        if (colorModeSwitch) {
          colorModeSwitch.addEventListener('change', () => {
            document.body.setAttribute('data-bs-theme', colorModeSwitch.checked ? 'dark' : 'light');
          });
        }
      });
    })();

