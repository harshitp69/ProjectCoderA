function format(command) {
    if (command === 'createLink') {
      const url = prompt('Enter the URL');
      if (url) {
        document.execCommand(command, false, url);
      }
    } else {
      document.execCommand(command, false, null);
    }
  }