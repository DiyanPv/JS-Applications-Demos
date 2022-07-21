import page from "./node_modules/page/page.mjs";
import { renderHome } from "../pages/home.js"
import { renderArticles } from "./pages/articles.js"
import { renderAbout } from "./pages/about.js"
import { html } from "./node_modules/lit-html/lit-html.js"
page(`/home`, renderHome);
page(`/article`, renderArticles);
page(`/about`, renderAbout);
page.start()