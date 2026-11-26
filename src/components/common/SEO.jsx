import { useEffect } from "react";

const SITE_NAME = "Rural Area Development Society";
const DEFAULT_DESCRIPTION =
  "RADS is a charitable foundation working for rural communities through education, healthcare, food relief, women empowerment and community development across India.";
const SITE_URL = "https://radsfoundation.org";

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Lightweight, dependency-free SEO component. Mount at the top of any page
 * to set the document title, meta description and canonical URL.
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Empowering Rural Communities`;
    document.title = fullTitle;

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("name", "twitter:card", "summary_large_image");

    const canonicalUrl = `${SITE_URL}${path}`;
    setLinkTag("canonical", canonicalUrl);
    setMetaTag("property", "og:url", canonicalUrl);
  }, [title, description, path]);

  return null;
}
