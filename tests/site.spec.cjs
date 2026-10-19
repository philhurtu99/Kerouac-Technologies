const { test, expect } = require('@playwright/test')

test('home page presents the offer in French', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Kerouac Technologies/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr-CA')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Renfort informatique')
  for (const id of ['services', 'realisations', 'tarifs', 'clientele', 'demarche', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeVisible()
  }
})

test('page never scrolls sideways', async ({ page }) => {
  await page.goto('/')
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(0)
})

test('navigation reaches the contact form', async ({ page, isMobile }) => {
  await page.goto('/')
  if (isMobile) await page.getByRole('button', { name: 'Menu' }).click()
  await page.getByRole('banner').getByRole('link', { name: 'Contact' }).click()
  await expect(page.getByRole('heading', { name: 'Parlez-moi de votre projet.' })).toBeInViewport()
})

test('contact form builds a prefilled email', async ({ page }) => {
  await page.goto('/#contact')
  await page.evaluate(() => {
    window.__mailto = null
    Object.defineProperty(window, 'location', { value: { set href(v) { window.__mailto = v } }, configurable: true })
  }).catch(() => {})
  await page.getByLabel('Nom').fill('Marie Tremblay')
  await page.getByLabel('Votre besoin').fill('Mon formulaire ne fonctionne plus.')
  const [request] = await Promise.all([
    page.waitForEvent('request', (r) => r.url().startsWith('mailto:')).catch(() => null),
    page.getByRole('button', { name: 'Envoyer ma demande' }).click()
  ])
  const mailto = request ? request.url() : await page.evaluate(() => window.__mailto)
  expect(mailto).toContain('mailto:')
  expect(decodeURIComponent(mailto)).toContain('Marie Tremblay')
})

test('agency page presents subcontracting plans', async ({ page }) => {
  await page.goto('/agences')
  await expect(page).toHaveTitle(/Sous-traitance pour agences/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Un développeur de plus')
  await expect(page.locator('#formules')).toContainText('900 $')
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(0)
})

test('home links to the agency page', async ({ page, isMobile }) => {
  await page.goto('/')
  if (isMobile) await page.getByRole('button', { name: 'Menu' }).click()
  await page.getByRole('banner').getByRole('link', { name: 'Agences' }).click()
  await expect(page).toHaveURL(/\/agences$/)
})

test('privacy policy is linked from the footer', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('contentinfo').getByRole('link', { name: 'Politique de confidentialité' }).click()
  await expect(page).toHaveURL(/\/confidentialite$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Vos renseignements personnels')
  await expect(page.getByText('Commission d’accès à l’information du Québec')).toBeVisible()
})

test('site loads no third-party resources', async ({ page }) => {
  const external = []
  page.on('request', (r) => {
    const url = new URL(r.url())
    if (!['127.0.0.1', 'localhost'].includes(url.hostname) && url.protocol.startsWith('http')) external.push(r.url())
  })
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  expect(external).toEqual([])
})
