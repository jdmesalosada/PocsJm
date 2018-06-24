function loadExtension() {
    browser.ignoreSynchronization = true;
    browser.get('chrome-extension://idgpnmonknjnojddfkpgkljpfnnfcklj/settings.tmpl.html');
    browser.executeScript(`(
        localStorage.setItem('profiles', JSON.stringify([{
            title: 'Selenium', hideComment: true, appendMode: '',           
            headers: [                                                      
              {enabled: true, name: 'mi-ip', value: '127.0.0.1', comment: ''}, 
            ],                                                              
            respHeaders: [],                                                
            filters: []                                                     
          }]))
    )`);           
}

module.exports = loadExtension;