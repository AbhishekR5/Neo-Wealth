import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const js = await readFile('src/main.js', 'utf8');
const css = await readFile('src/styles.css', 'utf8');

const assertions = [
  ['viewport meta', html.includes('name="viewport"')],
  ['skip link', html.includes('skip-link')],
  ['semantic main content', js.includes('<main id="main-content">')],
  ['accessible nav label', js.includes('aria-label="Primary navigation"')],
  ['mobile nav state', js.includes('aria-expanded="false"')],
  ['reasons section', js.includes('id="why"')],
  ['process section', js.includes('id="process"')],
  ['services section', js.includes('id="services"')],
  ['responsive mobile breakpoint', css.includes('@media (max-width: 390px)')],
  ['reduced motion support', css.includes('@media (prefers-reduced-motion: reduce)')],
  ['horizontal overflow guard', css.includes('overflow-x: clip')],
];

const failed = assertions.filter(([, ok]) => !ok);

if (failed.length) {
  for (const [label] of failed) console.error(`FAIL: ${label}`);
  process.exit(1);
}

for (const [label] of assertions) console.log(`PASS: ${label}`);
