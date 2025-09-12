import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173'); // Adjust the URL as needed
    });

    test('should render the first step correctly', async ({ page }) => {
        await expect(page.getByText('Personal Info')).toBeVisible();
        await expect(page.getByLabel('Name')).toBeVisible();
        await expect(page.getByLabel('Email Address')).toBeVisible();
        await expect(page.getByLabel('Phone Number')).toBeVisible();
    });

    test('should show validation errors on required fields', async ({
        page,
    }) => {
        await page.getByRole('button', { name: 'Next Step' }).click();
        await expect(page.getByText('This field is required')).toHaveCount(3);
    });

    test('should show error for invalid inputs', async ({ page }) => {
        await page.getByLabel('Name').fill('Jo');
        await page.getByLabel('Email Address').fill('JohnDoe@');
        await page.getByLabel('Phone Number').fill('123');
        await page.getByRole('button', { name: 'Next Step' }).click();
        await expect(
            page.getByText('Name must be at least 3 characters')
        ).toBeVisible();
        await expect(page.getByText('Invalid email')).toBeVisible();
        await expect(page.getByText('Invalid phone number')).toBeVisible();
    });

    test('should navigate to the next step on valid input', async ({
        page,
    }) => {
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();
        await expect(page.getByText('Select Your Plan')).toBeVisible();
    });

    test('should navigate back to the previous step', async ({ page }) => {
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();
        await page.getByRole('button', { name: 'Go Back' }).click();
        await expect(page.getByText('Personal Info')).toBeVisible();
    });

    test('render step 2 with monthly plan by default', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await expect(page.getByText('Select Your Plan')).toBeVisible();
        await expect(page.getByTestId('radio-plan').nth(0)).toBeVisible();
        await expect(page.getByTestId('radio-plan').nth(1)).toBeVisible();
        await expect(page.getByTestId('radio-plan').nth(2)).toBeVisible();
        await expect(page.getByTestId('switch-button')).toHaveAttribute(
            'aria-checked',
            'false'
        );
    });

    test('should toggle subscription plan', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await expect(page.getByText('Select Your Plan')).toBeVisible();
        await expect(page.getByTestId('switch-button')).toHaveAttribute(
            'aria-checked',
            'false'
        );
        await page.getByTestId('switch-button').click();
        await expect(page.getByTestId('switch-button')).toHaveAttribute(
            'aria-checked',
            'true'
        );
        await page.getByLabel('Monthly').click();
        await expect(page.getByTestId('switch-button')).toHaveAttribute(
            'aria-checked',
            'false'
        );
        await page.getByLabel('Yearly').click();
        await expect(page.getByTestId('switch-button')).toHaveAttribute(
            'aria-checked',
            'true'
        );
    });

    test('can not go to step 3 without completing step 2', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await page.getByRole('button', { name: 'Next Step' }).click();
        await expect(page.getByText('Select Your Plan')).toBeVisible();
    });

    test('should render step 3 correctly', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await page.getByTestId('radio-plan').nth(0).click();
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 3
        await expect(page.getByText('Pick add-ons')).toBeVisible();
        await expect(page.getByTestId('addon-checkbox').nth(0)).toBeVisible();
        await expect(page.getByTestId('addon-checkbox').nth(1)).toBeVisible();
        await expect(page.getByTestId('addon-checkbox').nth(2)).toBeVisible();
    });

    test('can select add-ons in step 3', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await page.getByTestId('radio-plan').nth(0).click();
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 3
        await page.getByRole('checkbox', { name: 'Online service' }).check();
        await page.getByRole('checkbox', { name: 'Larger storage' }).check();
        await expect(
            page.getByRole('checkbox', { name: 'Online service' })
        ).toBeChecked();
        await expect(
            page.getByRole('checkbox', { name: 'Larger storage' })
        ).toBeChecked();
        await expect(
            page.getByRole('checkbox', { name: 'Customizable profile' })
        ).not.toBeChecked();
    });

    test('should render step 4 correctly', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await page.getByTestId('radio-plan').nth(0).click();
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 3
        await page.getByRole('checkbox', { name: 'Online service' }).check();
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 4
        await expect(page.getByText('Finishing up')).toBeVisible();
        await expect(page.getByText('Change')).toBeVisible();
        await expect(page.getByText('Online Service')).toBeVisible();
    });

    test('should complete the form and show confirmation', async ({ page }) => {
        // Step 1
        await page.getByLabel('Name').fill('John Doe');
        await page.getByLabel('Email Address').fill('john.doe@example.com');
        await page.getByLabel('Phone Number').fill('+1234567890');
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 2
        await page.getByRole('button', { name: 'Next Step' }).click();
        await expect(page.getByText('Select Your Plan')).toBeVisible();
        await page.getByTestId('radio-plan').nth(0).click();
        await expect(page.getByTestId('switch-button')).toHaveAttribute(
            'aria-checked',
            'false'
        );
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 3
        await page.getByRole('checkbox', { name: 'Online service' }).check();
        await page.getByRole('button', { name: 'Next Step' }).click();

        // Step 4
        await expect(page.getByText('Finishing up')).toBeVisible();
        await expect(page.getByText('+$9/mo')).toBeVisible();
        await page.getByRole('button', { name: 'Confirm' }).click();

        // Confirmation
        await expect(page.getByText('Thank You!')).toBeVisible();
        await expect(
            page.getByText('Thank for confirming your subscription!')
        ).toBeVisible();
    });
});
