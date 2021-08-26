function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } 
    else if (!uri.includes('.',uri.indexOf(".com")+1)) {
        request.uri += '/index.html';
    }
    return request;
}