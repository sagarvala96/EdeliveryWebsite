var functions = require('./Function')


it('Base URL "type"', () => {
    cy.viewport(1920,1080)
    cy.visit('https://webappedeliverynew.appemporio.net/')
    cy.wait(5000)

    cy.get('.toggle-btn > .primary-btn').click({force: true})
    cy.wait(2000)
    cy.get('#sign-in-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > form.ng-untouched > .text-center > span > .link').click({force: true})
    cy.wait(2000)

    cy.pause()
    cy.get('#sign-up-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > .social-menu > .fb > .social > img').click({force: true})
    //cy.get('#sign-up-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > .social-menu > .google > .social > img').click({force: true})
    cy.wait(2000)


    describe('Login', () => {
        it('Login through Fb', () => {
          const username = Cypress.env('elluminati11@gmail.com')
          const password = Cypress.env('Elluminati10rdcube')
          const loginUrl = Cypress.env('https://accounts.google.com/o/oauth2/auth/identifier?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwebappedeliverynew.appemporio.net%3Fid%3Dauth170269&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=1062107977876-2ch5ulrgsv7p38qinc68v7rl73kv57fd.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwebappedeliverynew.appemporio.net&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow')
          const cookieName = Cypress.env('cookieName')
          const socialLoginOptions = {
            username,
            password,
            loginUrl,
            usernameField: '#email',
            passwordFiedl: '#pass', 
            passwordSubmitBtn: '#u_0_0_ys', 
            headless: true,
            logs: true,
            loginSelector: '[href="/auth/auth0/google-oauth2"]',
            postLoginSelector: '.account-panel'
          }
      
          return cy.task('GoogleSocialLogin', socialLoginOptions).then(({cookies}) => {
            cy.clearCookies()
      
            const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
            if (cookie) {
              cy.setCookie(cookie.name, cookie.value, {
                domain: cookie.domain,
                expiry: cookie.expires,
                httpOnly: cookie.httpOnly,
                path: cookie.path,
                secure: cookie.secure
              })
      
              Cypress.Cookies.defaults({
                preserve: cookieName
              })
            }
          })
        })
      })
      
})