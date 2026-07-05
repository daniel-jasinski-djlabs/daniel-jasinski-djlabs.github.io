---
layout: page
title: "Category: Zephyr"
permalink: /blog/categories/zephyr/
---

{% assign cat = "Zephyr" %}

{% for post in site.categories[cat] %}
  <div class="post-card">
    <div class="post-card__meta">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time>
    </div>
    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
  </div>
{% endfor %}
