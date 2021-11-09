describe("HTTP Example", function () {

//Response: 200 with list of users
  it("List Users", function () {
    cy.request({
        method: 'GET',
        url: "https://reqres.in/api/users",
      })
      .then(function (response) {
          expect(response.body).have.property('data')
          expect(response.status).to.equal(200)
      });
  });

//Response: 404 with no response

 it('Single user not found', function () {
    cy.request({
        method: 'GET',
        url: "https://reqres.in/api/users/23",
        failOnStatusCode:false
      })
      .then(function(response){
       expect(response.status).to.equal(404)
    })
      
      
  });
//Response: 201 along with a token
  it("successful registration", function () {
    cy.request({
        method: 'POST',
        url: "https://reqres.in/api/resgister",
        body:{
          'email':'zizellaziz@hotmail.com',
          'password':'zizozizo99'
        }

      })
      .then(function (response) {
          expect(response.body).have.property('id')
          expect(response.status).to.equal(201)
      });
  });
//Response: 400 along with an error
  it("Unsuccessful registration", function () {
    cy.request({
        method: 'POST',
        url: "https://reqres.in/api/register",
        failOnStatusCode:false,
        body:{
          'email':'zizellaziz@hotmail.com'
        }
      })
      .then(function (response) {
          expect(response.status).to.equal(400)
      });
  });

});
