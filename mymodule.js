class MyParser {
    constructor() {
        this._url = require('url');
        this.mimeTypes = {
            'html': 'text/html',
            'css': 'text/css',
            'js': 'text/javascript',
            'png': 'image/png',
            'jpg': 'image/jpg',
            'txt': 'text/plain'
        };
    }
    getContentType(fileExtension) {
        if (fileExtension) {
            const contentType = this.mimeTypes[fileExtension.toLowerCase()];
            if (contentType) {
                return contentType;
            }
            return null;
        }
    }
    parseUrl(url) {
        if (url) {
            const parsed = this._url.parse(url, true);
            if (parsed) {
                return parsed.query.ext;
            }
        }
    }
};

module.exports = MyParser;
