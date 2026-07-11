import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page){
        this.page= page;
        this.usernameInput=page.getByTestId('login-email');
        this.passwordInput=page.getByTestId('login-password');
        this.loginButton=page.getByTestId('login-submit');
    }

public async navigate(): Promise<this> {
    await this.page.goto('/notes/app/login');
    return this;
}

public async fillCredentials(user:string, pass: string): Promise<void>{
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
}

public async clickLogin(): Promise<void>{
    await this.loginButton.click();
}

}