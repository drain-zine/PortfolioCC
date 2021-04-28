import htmlparser from 'htmlparser2';

const parseXML = (content) => {
    return new Promise((resolve, reject) => {
        /* parse xml to dom object */
        let handler = new htmlparser.DomHandler(function (error, dom) {
            if (error) {
                reject(error);
            } else {
                resolve(dom[0]);
            }
        });
        let parser = new htmlparser.Parser(handler, {
            xmlMode: true,
            lowerCaseTags: true
        });
        parser.write(content);
        parser.done();
    });
}

export default parseXML;