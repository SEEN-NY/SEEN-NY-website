# SEEN NY — Website

Editorial-style website for SEEN NY, a nonprofit dedicated to economic justice through anti-racist systems change in New York State's cannabis industry.

## Structure

```
seen-ny/
├── index.html          # Main HTML
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation, scroll spy, form logic
└── README.md
```

## Sections

- **About** — Organization mission
- **Why** — Case for cannabis equity
- **What We Do** — Education, advocacy, community
- **Cooperative** — The Cooperative Cannabis Project + incubator
- **Invest** — Three-tier investment program + inquiry form
- **Media** — Press, podcasts, YouTube, Instagram
- **End of Year Report** — Publuu flipbook embed
- **Contact** — Email + social links

## Deployment

This is a static site. It can be deployed to:

- **GitHub Pages**: Enable Pages in repo Settings → Pages → Branch: `main`, Folder: `/root`
- **Netlify**: Drag the folder into [netlify.com/drop](https://netlify.com/drop)
- **Vercel**: `vercel --prod` from the project directory

## Form

The invest form uses a `mailto:` fallback by default. For production, replace with a service like [Formspree](https://formspree.io):

1. Create an account at formspree.io
2. Replace the form `action` attribute with your Formspree endpoint
3. Remove the custom JS submit handler in `js/main.js` and use standard form submission

## Fonts

Uses [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) and [DM Sans](https://fonts.google.com/specimen/DM+Sans) from Google Fonts.

## Colors

| Name     | Hex       |
|----------|-----------|
| Green    | `#156939` |
| Black    | `#000000` |
| White    | `#FFFFFF` |

## Notes

- The Instagram embed requires the `instagram.com/embed.js` script (loaded async)
- The Publuu flipbook requires third-party cookies to be enabled for the embed to work
- YouTube and Spotify embeds load lazily (`loading="lazy"`)
