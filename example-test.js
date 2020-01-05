log = console.log
expect = require('chai').expect
should = require('chai').should()
_ = require('lodash')
const example = require('./example')


describe('my unit test', ()=>
{
    // print result
    it('return true', ()=>
    {
    true.should.be.true
    });
    it('expect true to be true', ()=>
    {
    expect(true).to.be.true
    })
})

describe('test 2', ()=>
{
    it('expect to always be true', ()=>
    {
        example.alwaysTrue().should.be.true
    })
    it('expect always true', ()=>
    {
        expect(example.alwaysTrue()).to.be.true
    })
    it('negative test - should not be false', () =>
    {
        example.alwaysTrue().should.not.be.false
    })
})

describe('use legit string', ()=>
{
    it('string is a real wors', ()=>
    {
        example.legitString('cow').should.be.true
    })
    it.only('undefined should not be true',() =>
    {
        example.legitString(undefined).should.not.be.true
    })       
})