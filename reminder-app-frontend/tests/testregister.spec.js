describe('protractor react selector tests', () => {
    beforeAll(async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://localhost:3000')
        // await browser.waitForReact()
    })
    it('TEST 1 - test register', async () => {
        // state is empty for the element
        const register_button = element(by.css('.secondary-btn'))
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(register_button), 5000); // Wait for the button to be clickable
        browser.sleep(2000)
        register_button.click();
        browser.sleep(2000)
        const first_name = element(by.css('#firstName'))
        browser.wait(EC.visibilityOf(first_name), 5000);
        first_name.sendKeys('Andra')
        browser.sleep(1000)
        const last_name = element(by.css('#lastName'))
        browser.wait(EC.visibilityOf(last_name), 5000);
        last_name.sendKeys('Popescu')
        browser.sleep(1000)
        const email = element(by.css('#email'))
        browser.wait(EC.visibilityOf(email), 5000);
        email.sendKeys('andra533@yahoo.com')
        browser.sleep(1000)
        const password = element(by.css('#password'))
        browser.wait(EC.visibilityOf(password), 5000);
        password.sendKeys('test123test')
        browser.sleep(1000)
        const register_button_2 = element(by.css('[class*=primary-btn]'))
        browser.wait(EC.elementToBeClickable(register_button_2), 5000);
        browser.sleep(2000)
        register_button_2.click()// Wait for the button to be clickable
        const add_reminder = element(by.cssContainingText('[class*=primary-btn]', 'Add reminder'));
        browser.wait(EC.visibilityOf(add_reminder), 5000);
        expect(add_reminder.isDisplayed()).toBe(true);

    })
//     it('This should test react selector with component, props and react root element', async () => {
//         // state is empty for the element
//         const _element = element(by.react('t', { name: '5' }, {}, '#root'))
//         expect(await _element.getText()).toMatch('5')
//     })
//
//     it('This should test react selector without react root element', async () => {
//         // as the rootElement id is 'root', we can run the same test without mentioning the rootElement css selector.
//         // if the rootElement is different than '#root', then rootElement should be mentioned
//         const _element = element(by.react('t', { name: '5' }))
//         expect(await _element.getText()).toMatch('5')
//     })
//
//     it('This should test react selector with wildcard', async () => {
//         // sometimes you can find minified component names in production build
//         // you can try wildcard selection of component with "*"
//         // it will return a;ll elements matched with the filters (props/states) passed
//         const _element = element(by.react('*', { name: '5' }))
//         expect(await _element.getText()).toMatch('5')
//     })
})