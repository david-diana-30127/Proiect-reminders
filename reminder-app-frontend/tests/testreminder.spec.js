describe('protractor react selector tests', () => {
    beforeAll(async function () {
        await browser.waitForAngularEnabled(false)
        await browser.get('http://localhost:3000')
        // await browser.waitForReact()
    })
    it('TEST 3 - test reminders', async () => {
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
        add_reminder.click()// Wait for the button to be clickable

        const title = element(by.css('#title'))
        browser.wait(EC.visibilityOf(title), 5000);
        title.sendKeys('New reminder')
        browser.sleep(1000)

        const description = element(by.css('#description'))
        browser.wait(EC.visibilityOf(description), 5000);
        description.sendKeys('Daily reminder test')
        browser.sleep(1000)

        const date_pick = element(by.css('#date'))
        browser.wait(EC.visibilityOf(date_pick), 5000);
        const newDateValue = '2023-07-28'
        browser.executeScript(`arguments[0].value = '${newDateValue}';`, date_pick);
        browser.sleep(1000)

        const save_reminder = element(by.css('button[type="submit"]'));
        save_reminder.click()
        browser.sleep(2000)

        const cardTitle = element(by.css('.reminder-card-title'));
        const expectedTitle = 'New reminder';
        expect(cardTitle.getText()).toEqual(expectedTitle);

        const reminder_card = element(by.css('.reminder-card'))
        reminder_card.click()
        const title_update = element(by.css('#title'))
        browser.wait(EC.visibilityOf(title_update), 5000);
        title_update.clear();
        title_update.sendKeys('New reminder update')
        browser.sleep(1000)

        const description_update = element(by.css('#description'))
        browser.wait(EC.visibilityOf(description_update), 5000);
        description_update.clear();
        description_update.sendKeys('Daily reminder test update')
        browser.sleep(1000)

        const date_pick_update = element(by.css('#date'))
        browser.wait(EC.visibilityOf(date_pick_update), 5000);
        const newDateValueUpdate = '2023-08-28'
        browser.executeScript(`arguments[0].value = '${newDateValueUpdate}';`, date_pick_update);
        browser.sleep(1000)

        const save_reminder_update = element(by.css('button[type="submit"]'));
        save_reminder_update.click()
        browser.sleep(2000)

        const cardTitle_update = element(by.css('.reminder-card-title'));
        const expectedTitle_update = 'New reminder update';
        expect(cardTitle_update.getText()).toEqual(expectedTitle_update);
        browser.sleep(2000)

        const reminder_card_click = element(by.css('.reminder-card'))
        reminder_card_click.click()
        const close_button = element(by.cssContainingText('[class*=secondary-btn]', 'Close'));
        browser.wait(EC.elementToBeClickable(close_button), 5000);
        close_button.click()

        const checkbox = element(by.css('.checkbox'))
        browser.wait(EC.elementToBeClickable(checkbox), 5000);
        checkbox.click()

        const delete_button = element(by.cssContainingText('[class*=primary-btn]', 'Delete reminders'));
        browser.wait(EC.elementToBeClickable(delete_button), 5000);
        delete_button.click()
        browser.sleep(2000)


        const icon_user = element(by.css('.link-icon'))
        browser.wait(EC.elementToBeClickable(icon_user), 5000);
        icon_user.click()
        const log_out = element(by.css('[class*=secondary-btn]'))
        browser.wait(EC.elementToBeClickable(icon_user), 5000);
        log_out.click()

    })
})