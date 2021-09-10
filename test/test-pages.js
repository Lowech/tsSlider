const mocha = require('mocha');
const chai = require('chai');

const expect = chai.expect;

describe("тест", function() {

    before(() => alert("Тестирование началось – перед тестами"));
    after(() => alert("Тестирование закончилось – после всех тестов"));
  
    beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
    afterEach(() => alert("После теста – заканчиваем выполнение теста"));
  
    it('тест 1', () => alert(1));
    it('тест 2', () => alert(2));
  
  });