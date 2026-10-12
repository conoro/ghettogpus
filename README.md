# Ghetto GPUs

**Written off. Not worn out.** A graffiti-led teaser for ghettogpus.com.

A buildless, responsive single page with original salvage-yard artwork, a derelict FJ50 Land Cruiser, Dumpster Jevvie, and a three-attempt ignition easter egg. No dependencies, tracking, external fonts, or backend.

## Preview

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. Edit `index.html`, `style.css`, and `script.js` directly.

## Hosting

GitHub Pages serves the root of the `main` branch. `.nojekyll` bypasses Jekyll. `CNAME` sets the custom domain to `ghettogpus.com`.

### Porkbun DNS

In Domain Management → ghettogpus.com → DNS, use the GitHub Quick DNS Config or add these records manually. Leave the host blank for apex records in Porkbun.

| Type | Host | Answer |
| --- | --- | --- |
| A | (blank) | 185.199.108.153 |
| A | (blank) | 185.199.109.153 |
| A | (blank) | 185.199.110.153 |
| A | (blank) | 185.199.111.153 |
| CNAME | www | conoro.github.io |

Use the default TTL. Replace conflicting web parking/forwarding records for the same hosts; keep unrelated mail and verification records. Do not include https:// or /ghettogpus in the CNAME answer.

After DNS propagates and GitHub provisions the certificate, enable HTTPS enforcement:

```sh
gh api --method PUT repos/conoro/ghettogpus/pages -F https_enforced=true
```

GitHub may take up to 24 hours to provision HTTPS after DNS is correct. The GitHub Pages project URL redirects to the custom domain once configured.

Sources: [Porkbun guide](https://kb.porkbun.com/article/64-how-to-connect-your-domain-to-github-pages), [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Artwork

Original and optimized artwork are in `assets/`. See `ARTWORK.md` for the generation prompt and provenance.

## Validation

Checked at desktop (1440px) and mobile (390px): images loaded, no horizontal overflow, no JavaScript errors, and ignition interaction reached the expected third-click state. JavaScript also passes `node --check script.js`.
