describe('alura busca cursos', ()=>{
    beforeEach(()=> {
        cy.visit('http://alura-fotos.herokuapp.com/#/home');
    })

    it('Verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
    })
})