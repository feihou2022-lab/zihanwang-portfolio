# Zihan Wang — Social Research Portfolio

A complete, build-free English portfolio for a Common App supplemental link. Includes Home, Research, Documentary, Data & Methods, About, six research detail pages, six original PDFs, and the supplied documentary title image.

## Open locally

Unzip the package and double-click `index.html`. Navigation, images, charts, and paper links work without a server or internet connection. The embedded YouTube film requires internet access and an HTTP(S) website origin; use the local server below or GitHub Pages for video playback. Opening index.html as a file may cause YouTube error 153 because no HTTP referrer is supplied. Keep the folders together.

Optional local server, from this folder:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then visit http://127.0.0.1:8765. Stop it with Ctrl+C. The preview opened during creation is local to this computer, not a public admissions link.

## Deploy to GitHub Pages

1. Create a GitHub repository, for example `zihan-research`.
2. Upload the **contents** of this folder to the repository root. `index.html` must be at the root, alongside `style.css`, `script.js`, the project pages, `assets/`, `papers/`, and `.nojekyll`. Upload the unzipped contents, not the ZIP itself.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/(root)`. Save.
5. Wait for the Pages deployment to finish and use the public URL shown there. A project site normally has the form `https://YOUR-USERNAME.github.io/zihan-research/` (illustrative only; no live URL has been created).
6. Open that URL on a phone and check the six PDF buttons. Use the resulting HTTPS link in the application.

Source: [GitHub’s official publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), checked 30 September 2026. The site has no build step, package dependencies, credentials, site analytics, or external fonts. The documentary uses a third-party YouTube embed loaded only after clicking the cover. Relative links work at a repository subpath.

For another static host, upload this same folder as the public directory with no build command.

## Files

- `index.html`: all five main sections, static accessible charts, documentary image.
- `project-*.html`: six project detail pages with question, methods, findings, attribution, evidence limitations, and full-paper links.
- `style.css`: shared warm off-white / charcoal / restrained yellow visual system, responsive rules, focus states, reduced-motion and print handling.
- `script.js`: progressively enhanced mobile navigation. Content and navigation remain available without JavaScript.
- `assets/care-diary.jpg`: unchanged supplied image, 1200 × 676.
- `papers/`: original supplied PDFs, copied without editing and renamed for reliable links.
- `SOURCE-NOTES.md`: evidence map and editorial decisions.
- `404.html`: error page for a missing route.
- `.nojekyll`: plain static publishing marker.

## Updating the portfolio

Edit text directly in the corresponding HTML file; there is no generation step. Update charts in `index.html` only when the cited data change. Each bar is decorative; its label and value remain readable text. Keep the chart scale and source note consistent with updated values.

The Documentary section embeds https://www.youtube.com/watch?v=SJVlUEBVMM4 using a click-to-load cover and the standard youtube.com player, with mobile inline playback, fullscreen controls, playback requested only after a click, and a direct YouTube fallback link. The original supplied cover remains on the homepage. To replace the film, update the video ID in both URLs in index.html. Keep the video public or unlisted and embedding enabled. Subtitle availability is controlled on YouTube; no subtitle track was supplied or added.

## Source boundaries

The Activity & Honor List supports personal roles; the PDFs support methods and findings. No publication status, clinical effectiveness, undocumented awards, or individual ownership of team results is claimed. The HiMCM year discrepancy is documented on its page. The two survey samples are not pooled or described as independent participants across studies.

The package contains complete research PDFs for public linking; the activity spreadsheets are not bundled. The six PDF sources are accessible to visitors after deployment.

## Validation

The finished site is checked at desktop, tablet, and mobile widths, with and without JavaScript. Local HTML/asset/PDF references and section anchors are checked. Browser testing checks navigation, missing images after loading, horizontal overflow, and JavaScript errors. The portfolio can be read offline; video playback depends on YouTube access and the uploader’s embedding settings.

## Photo gallery update — 2 October 2026
Includes Service & Research with six supplied photographs and an About portrait replacing the ZW monogram. The original photo files are in assets; links open full photographs. Upload all updated HTML files, style.css, and the complete assets folder when replacing a previous deployment. The complete ZIP includes all files, PDFs, and the existing click-to-play video.
