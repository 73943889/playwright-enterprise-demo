import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage'; 

test.describe('Suite de autenticación Corporativa - Demo', () =>{
    test.beforeEach(async () =>{
        console.log('[INFO] Ejecutando pruebas en el ambiente de: ${process.env.ENV_NAME}');
    });

test('Debería cargar correctamente la interfaz de Login usando variables de entorno', async ({ page }) => {
    const loginPage= new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillCredentials('playwright_architect@example.com','Password123!');
    await loginPage.clickLogin();
    await expect(page).toHaveURL(/.*notes\/app/);
});
});