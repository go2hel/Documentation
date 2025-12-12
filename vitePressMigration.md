# Hugo to VitePress Migration Plan

This document outlines a detailed, phase-wise plan to migrate the documentation site from Hugo (with the Hextra theme) to VitePress. The plan is designed to be beginner-friendly and includes checklists for each phase.

---

## Phase 1: Project Setup & Housekeeping

**Goal:** Prepare the project directory for VitePress and safely archive the old Hugo site.

- [x] **Create `hugo-docs` Directory:** In the root of your project, create a new folder named `hugo-docs`.
- [x] **Archive Old Hugo Site:** Move all existing files and folders (like `content`, `static`, `hugo.yaml`, etc.) into the `hugo-docs` directory. This keeps your old site backed up and separate from the new VitePress setup.
- [x] **Initialize Node.js Project:** Run the command `npm init -y` in the root directory. This creates a `package.json` file, which will manage your new site's dependencies.
- [x] **Install VitePress:** Run the command `npm add -D vitepress`. This installs VitePress as a development dependency.
- [x] **Run VitePress Initializer:** Run `npx vitepress init`. This command will ask you a few questions and create the basic directory structure for your VitePress site (e.g., `docs` and `.vitepress`).

---

## Phase 2: Core VitePress Configuration

**Goal:** Set up the basic navigation, title, and structure of the new site. All work in this phase will happen in `docs/.vitepress/config.js`.

- [x] **Set Site Title & Description:** In `config.js`, find the `title` and `description` properties and set them to your site's name and tagline.
- [x] **Configure Navbar:**
    - [x] Add a `themeConfig` section to `config.js` if it doesn't exist.
    - [x] Inside `themeConfig`, add a `nav` array to define the top navigation links (e.g., links to "Resources" or "Blog").
    - [x] Add your GitHub link to the `nav` array. It should have `text` for the name (e.g., "GitHub") and `link` for the URL.
- [x] **Set Up Initial Sidebar:** Inside `themeConfig`, add a `sidebar` object. For now, you can create a simple structure that you'll fill in later as you migrate content.

---

## Phase 3: Content Migration

**Goal:** Move your existing markdown content from the old Hugo structure to the new VitePress structure.

- [ ] **Copy Content Files:** Copy the markdown files from `hugo-docs/content/` into your new `docs/` directory. Try to maintain a similar folder structure, as this will help with organizing the sidebar.
- [ ] **Review Frontmatter:** Open a few markdown files and look at the section at the top between `---`. This is the frontmatter. VitePress uses it for titles, descriptions, etc. You may need to adjust fields to match what VitePress expects (e.g., ensure each page has a `title`).
- [ ] **Migrate Blog Posts:** Create a `docs/blog/` directory and copy your blog markdown files into it.
- [ ] **Update Sidebar Configuration:** Go back to `docs/.vitepress/config.js` and update the `sidebar` object to accurately reflect the folder and file structure of your migrated content. This is how you build the side navigation.
- [ ] **Check Asset Paths:** Update any image paths or links within your markdown files to point to the correct new locations (e.g., move images from `hugo-docs/static/images` to `docs/public/images` and update the `<img>` tags).

---

## Phase 4: Theming & Replicating the "Hextra" Look

**Goal:** Customize the look and feel of the VitePress site to be clean, simple, and similar to the Hextra theme.

- [ ] **Verify Search Bar:** The default VitePress theme includes a search bar in the top navigation. Run the local development server (`npm run docs:dev`) and verify it's there and works.
- [ ] **Create a Blog Index Page:**
    - [ ] Create a file at `docs/blog/index.md`.
    - [ ] This page will act as your blog's homepage, listing all the posts. This requires a small amount of Vue code, which we can address when we get to this step. The basic idea is to use VitePress's `dataLoader` to create a list of posts from the files in the `/blog/` directory.
- [ ] **Custom Styling:**
    - [ ] Create a new file at `docs/.vitepress/theme/custom.css`.
    - [ ] In this file, you can override the default VitePress CSS variables to change colors, fonts, and spacing to match the look you want.
    - [ ] To load this file, create another file at `docs/.vitepress/theme/index.js` and add the following content:
        ```javascript
        import DefaultTheme from 'vitepress/theme';
        import './custom.css';

        export default DefaultTheme;
        ```

---

## Phase 5: Review, Refinement & Improvements

**Goal:** Polish the site, fix any issues, and make final improvements.

- [ ] **Run Local Development Server:** Use `npm run docs:dev` to view your site locally.
- [ ] **Thoroughly Review:**
    - [ ] Click on every link in the navbar and sidebar to ensure there are no broken pages.
    - [ ] Check that all images are loading correctly.
    - [ ] Read through several pages to check for any formatting errors.
- [ ] **Responsive Design Check:** Use your browser's developer tools to simulate different screen sizes (like a mobile phone or tablet). Ensure the site looks good and is usable on all devices.
- [ ] **Final CSS Tweaks:** Make any last-minute adjustments in `custom.css` to perfect the visual presentation.

---

## Phase 6: Deployment to Netlify

**Goal:** Get your new VitePress site live on the internet.

- [ ] **Log in to Netlify:** Go to your Netlify dashboard.
- [ ] **Update Build Settings:**
    - [ ] Find your site and go to its "Build & deploy" settings.
    - [ ] Change the **Build command** from `hugo` to `npm run docs:build`.
    - [ ] Change the **Publish directory** from `public` to `docs/.vitepress/dist`.
- [ ] **Trigger New Deployment:** Go to the "Deploys" section for your site and trigger a new deploy. Netlify will now use the new settings to build and publish your VitePress site.
- [ ] **Verify Live Site:** Once the deployment is complete, visit your domain to see the new VitePress site live.
