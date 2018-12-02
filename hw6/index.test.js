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
    expect().toEqual();
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
