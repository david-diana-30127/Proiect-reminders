describe('protractor react selector tests', () => {
    beforeAll(async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://localhost:3000')
        // await browser.waitForReact()
    })
    it('TEST 2 - test login', async () => {
        // state is empty for the element
        const EC = protractor.ExpectedConditions;
        const email = element(by.css('#email'))
        browser.wait(EC.visibilityOf(email), 5000);
        email.sendKeys('andra533@yahoo.com')
        browser.sleep(1000)
        const password = element(by.css('#password'))
        browser.wait(EC.visibilityOf(password), 5000);
        password.sendKeys('test123test')
        browser.sleep(1000)
        const login_button = element(by.css('[class*=primary-btn]'))
        browser.wait(EC.elementToBeClickable(login_button), 5000);
        login_button.click()// Wait for the button to be clickable
        const add_reminder = element(by.cssContainingText('[class*=primary-btn]', 'Add reminder'));
        browser.wait(EC.visibilityOf(add_reminder), 5000);
        expect(add_reminder.isDisplayed()).toBe(true);
        const icon_user = element(by.css('.link-icon'))
        browser.wait(EC.elementToBeClickable(icon_user), 5000);
        icon_user.click()
        const log_out = element(by.css('[class*=secondary-btn]'))
        browser.wait(EC.elementToBeClickable(icon_user), 5000);
        log_out.click()
        const login_button_again = element(by.css('[class*=primary-btn]'))
        browser.wait(EC.visibilityOf(login_button_again), 5000);
        expect(login_button_again.isDisplayed()).toBe(true);
    })
})