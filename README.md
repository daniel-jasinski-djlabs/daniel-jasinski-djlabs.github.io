# DJLabs Website

Static website for DJLabs — Embedded Systems Engineering consultancy.

Built with Jekyll, deployed to GitHub Pages.

## Development

```bash
bundle install
bundle exec jekyll serve
```

Site available at `http://localhost:4000`.

## Structure

- `_layouts/` — Page templates (default, page, post, service, industry)
- `_includes/` — Reusable components (head, header, footer, hero, cta, etc.)
- `_data/` — Structured data (navigation, company, services, engagement models)
- `_services/` — Service detail pages (collection)
- `_industries/` — Industry detail pages (collection)
- `_authors/` — Author profiles (collection)
- `_posts/` — Blog posts
- `assets/` — CSS (SCSS), JS, images, fonts
- `blog/` — Blog listing and category/tag pages

## Deployment

Push to `main` branch. GitHub Pages builds and deploys automatically.
