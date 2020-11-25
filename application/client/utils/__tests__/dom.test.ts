import { getDocumentDomNode, getDomNodeById, getDomNodesByTagName, getFirstDomNodeByTagName, getHeadDomNode, setDomNodeAttribute, setDomNodeClassName, createDomNode, deleteDomNode } from '../dom';

describe('getDocumentDomNode', function fnDescribe() {
    it('should return the document', function fnIt() {
        expect(getDocumentDomNode()).toMatchSnapshot();
    })
})

describe('getDomNodeById', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button id="button" /></div>';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should return the correct element', function fnIt() {
        expect(getDomNodeById()).toMatchSnapshot();
        expect(getDomNodeById('foo')).toMatchSnapshot();
        expect(getDomNodeById('button')).toMatchSnapshot();
    })
})

describe('getDomNodeById', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button id="button" /></div>';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should return the correct element', function fnIt() {
        expect(getDomNodesByTagName()).toMatchSnapshot();
        expect(getDomNodesByTagName('span')).toMatchSnapshot();
        expect(getDomNodesByTagName('button')).toMatchSnapshot();
    })
})

describe('getFirstDomNodeByTagName', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button id="button1" /><button id="button2" /></div>';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should return the correct element', function fnIt() {
        expect(getFirstDomNodeByTagName()).toMatchSnapshot();
        expect(getFirstDomNodeByTagName('span')).toMatchSnapshot();
        expect(getFirstDomNodeByTagName('button')).toMatchSnapshot();
    })
})

describe('getHeadDomNode', function fnDescribe() {
    it('should return the head element', function fnIt() {
        expect(getHeadDomNode()).toMatchSnapshot();
    })
})

describe('setDomNodeAttribute', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button id="button" /></div>';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should add attributes', function fnIt() {
        setDomNodeAttribute('button', 'label', 'click me');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
    it('should be fail safe', function fnIt() {
        setDomNodeAttribute('button');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
})

describe('setDomNodeClassName', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button class="remove" id="button" /></div>';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should add class names', function fnIt() {
        setDomNodeClassName('button', ['add'], ['remove']);
        expect(document.body.innerHTML).toMatchSnapshot();
    });
})

describe('createDomNode', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should create an element', function fnIt() {
        expect(createDomNode()).toMatchSnapshot();
        expect(createDomNode('button')).toMatchSnapshot();
        expect(createDomNode('button', {
            'label': 'click me'
        })).toMatchSnapshot();
    });
})

describe('deleteDomNode', function fnDescribe() {
    beforeEach(function fnBeforeEach() {
        document.body.innerHTML = '<div><button class="remove" id="button" /></div>';
    })
    afterEach(function fnAfterEach() {
        document.body.innerHTML = '';
    })

    it('should delete an element', function fnIt() {
        deleteDomNode('button');
        expect(document.body.innerHTML).toMatchSnapshot();
    });
})