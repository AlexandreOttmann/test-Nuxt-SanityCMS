# This project is part of a CMS audit for a client wanting to migrate from Nuxt Studio to a new CMS.

## [Full audit](audit/final-audit.md)
We tested the following CMS:  1) Sanity, 2) StoryBlok, 3) Strapi, 4) Prismic, 5) Directus
And proposed an alternative by keeping Nuxt Content/Studio.

---
## Project Structure

This project consists of two main parts:

1. **Nuxt Application** (Root folder)
   - Launch with `npm run dev`
   - Runs on `http://localhost:3000`
   - Frontend application that displays the content

2. **Sanity Studio** (`studio-hello-world` folder)
   - Launch with `npm run dev`
   - Runs on `http://localhost:3333`
   - Content management interface for editors


---
## [Visual editor guide](VISUAL_EDITOR_GUIDE.md)
A detailed guide showing how to use the visual editor in Sanity Studio, including formatting options, special blocks, and content relationships. Covers technical setup, GROQ queries, and recommended workflow.