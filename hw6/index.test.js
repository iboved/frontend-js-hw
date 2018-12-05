'use strict';

test('test_string', () => {
    expect('Vova Gavrylov'.length).toEqual(13);
    expect(String.fromCharCode(86, 111, 118, 97)).toEqual('Vova');
    expect(String.fromCodePoint(42)).toEqual('*');
    expect('JavaScript'.charAt(5)).toEqual('c');
    expect('JavaScript'.charAt(30)).toEqual('');
    expect('Vova'.charCodeAt(2)).toEqual(118);
    expect('*'.codePointAt(0)).toEqual(42);
    expect('ABC'.codePointAt(20)).toEqual(undefined);
    expect('Have'.concat(' a', ' nice', ' day!')).toEqual('Have a nice day!');
    expect('JavaScript is a programming language'.endsWith('language')).toEqual(true);
    expect('JavaScript is a programming language'.endsWith('programming', 27)).toEqual(true);
    expect('CSS is a style sheet language'.includes('style')).toEqual(true);
    expect('CSS is a style sheet language'.includes('style', 15)).toEqual(false);
    expect('CSS is a style sheet language'.indexOf('style')).toEqual(9);
    expect('CSS is a style sheet language'.indexOf('CSS')).toEqual(0);
    expect('CSS is a style sheet language'.indexOf('css')).toEqual(-1);
    expect('CSS is a style sheet language'.indexOf('html')).toEqual(-1);
    expect('CSS is a style sheet language'.indexOf('a', 10)).toEqual(22);
    expect('CSS is a style sheet language'.indexOf('', 50)).toEqual(29);
    expect('Have a nice day!'.lastIndexOf('a')).toEqual(13);
    expect('Have a nice day!'.lastIndexOf('a', 8)).toEqual(5);
    expect('Card: '.padEnd(10, '*')).toEqual('Card: ****');
    expect('abc'.padEnd(5,'123456789')).toEqual('abc12');
    expect('abc'.padEnd(1)).toEqual('abc');
    expect('abc'.padStart(10, '123')).toEqual('1231231abc');
    expect('abc'.padStart(1)).toEqual('abc');
    expect('css'.repeat(0)).toEqual('');
    expect('css'.repeat(1)).toEqual('css');
    expect('css'.repeat(2)).toEqual('csscss');
    expect('A nice day and a nice evening!'.replace('nice', 'good')).toEqual('A good day and a nice evening!');
    expect('A nice day and a nice evening!'.replace(/nice/g, 'good')).toEqual('A good day and a good evening!');
    expect('A Nice day and a nice evening!'.replace(/nice/g, 'good')).toEqual('A Nice day and a good evening!');
    expect('A Nice day and a nice evening!'.replace(/nice/gi, 'good')).toEqual('A good day and a good evening!');
    expect('CSS is a style sheet language'.search('style')).toEqual(9);
    expect('JavaScript is a programming language'.slice(0, 10)).toEqual('JavaScript');
    expect('JavaScript is a programming language'.slice(11, 27)).toEqual('is a programming');
    expect('JavaScript is a programming language'.slice(16)).toEqual('programming language');
    expect('JavaScript is a programming language'.slice(16, -9)).toEqual('programming');
    expect('JavaScript is a programming language'.slice(-8, -4)).toEqual('lang');
    expect('Vova Gavrylov'.split(' ')).toEqual(['Vova', 'Gavrylov']);
    expect('Vova Gavrylov'.split(' ', 1)).toEqual(['Vova']);
    expect('JavaScript is a programming language'.startsWith('JavaScript')).toEqual(true);
    expect('JavaScript is a programming language'.startsWith('programming', 16)).toEqual(true);
    expect('JavaScript is a programming language'.substring(0, 10)).toEqual('JavaScript');
    expect('JavaScript is a programming language'.substring(5, 5)).toEqual('');
    expect('JavaScript is a programming language'.substring(16)).toEqual('programming language');
    expect('JavaScript'.toLocaleLowerCase()).toEqual('javascript');
    expect('JavaScript'.toLocaleUpperCase()).toEqual('JAVASCRIPT');
    expect('JavaScript'.toLowerCase()).toEqual('javascript');
    expect('JavaScript'.toUpperCase()).toEqual('JAVASCRIPT');
    expect('   Vova Gavrylov   '.trim()).toEqual('Vova Gavrylov');
    expect('   Vova Gavrylov   '.trimRight()).toEqual('   Vova Gavrylov');
    expect('   Vova Gavrylov   '.trimLeft()).toEqual('Vova Gavrylov   ');
});

test('test_numbers', () => {
    expect(Number.isFinite(5)).toEqual(true);
    expect(Number.isFinite('5')).toEqual(false);
    expect(Number.isInteger(0.1)).toEqual(false);
    expect(Number.isInteger(10)).toEqual(true);
    expect(Number.isInteger('10')).toEqual(false);
    expect(Number.isNaN(NaN)).toEqual(true);
    expect(Number.isNaN(0 / 0)).toEqual(true);
    expect(Number.isNaN(15)).toEqual(false);
    expect(Number.isNaN('15')).toEqual(false);
    expect(Number.isNaN('NaN')).toEqual(false);
    expect(Number.isNaN(null)).toEqual(false);
    expect(Number.isSafeInteger(3)).toEqual(true);
    expect(Number.isSafeInteger('3')).toEqual(false);
    expect(Number.parseFloat('10')).toEqual(10);
    expect(Number.parseFloat('10.5')).toEqual(10.5);
    expect(Number.parseInt('10')).toEqual(10);
    expect(Number.parseInt('10.5')).toEqual(10);
    expect((43.1234).toExponential()).toEqual('4.31234e+1');
    expect((43.1234).toExponential(2)).toEqual('4.31e+1');
    expect((85.6789).toFixed()).toEqual('86');
    expect((85.6789).toFixed(1)).toEqual('85.7');
    expect((85.6789).toFixed(6)).toEqual('85.678900');
    expect((85.6789).toPrecision()).toEqual('85.6789');
    expect((85.6789).toPrecision(3)).toEqual('85.7');
    expect((789.5).toString()).toEqual('789.5');
    expect((7 + 3).valueOf()).toEqual(10);
});

test('test_arrays', () => {
    expect().toEqual();
});

test('test_compare_operators', () => {
    expect().toEqual();
});

test('test_equality_comparison_algorithm', () => {
    expect().toEqual();
});
