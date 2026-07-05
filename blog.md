---
title: Blog
subtitle: Technical articles on embedded systems engineering
description: >-
  The DJLabs engineering blog — deep technical articles on,
  RTOS, device drivers, and embedded software development.
permalink: /blog/
lang: en
---

<div class="blog-layout">
  <div class="blog-layout__main">
    {% assign lang_filter = site.active_lang %}
    {% assign visible_posts = 0 %}
    {% for post in site.posts %}
      {% if post.lang == lang_filter or post.lang == nil %}
        {% assign visible_posts = visible_posts | plus: 1 %}
      {% endif %}
    {% endfor %}

    {% if visible_posts == 0 %}
      <div class="section__header">
        <h2>{% if site.active_lang == 'pl' %}Wkrótce{% else %}Coming Soon{% endif %}</h2>
        <p>{% if site.active_lang == 'pl' %}Pracujemy nad naszymi pierwszymi artykułami. Zajrzyj wkrótce po techniczne treści o inżynierii systemów wbudowanych.{% else %}We're working on our first articles. Check back soon for deep technical content on embedded systems engineering.{% endif %}</p>
      </div>
    {% endif %}

    {% for post in site.posts %}
      {% if post.lang == lang_filter or post.lang == nil %}
        <div class="post-card">
          <div class="post-card__meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%-d %B %Y" }}</time>
            {% if post.categories.size > 0 %}
              <span class="post-card__separator">—</span>
              {% for cat in post.categories %}
                <a href="{{ '/blog/categories/' | append: cat | slugify | relative_url }}" class="tag">{{ cat }}</a>
              {% endfor %}
            {% endif %}
          </div>
          <h3 class="post-card__title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
          <a href="{{ post.url | relative_url }}" class="post-card__link">{% if site.active_lang == 'pl' %}Czytaj więcej{% else %}Read more{% endif %} &rarr;</a>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <aside class="blog-layout__sidebar sidebar">
    <div class="sidebar__section">
      <h4>{% if site.active_lang == 'pl' %}Kategorie{% else %}Categories{% endif %}</h4>
      <ul class="sidebar__links">
        {% for category in site.categories %}
          {% assign cat_name = category | first %}
          <li>
            <a href="{{ '/blog/categories/' | append: cat_name | slugify | relative_url }}">
              {{ cat_name | capitalize }}
            </a>
          </li>
        {% endfor %}
      </ul>
    </div>

    <div class="sidebar__section">
      <h4>{% if site.active_lang == 'pl' %}Subskrybuj{% else %}Subscribe{% endif %}</h4>
      <p>{% if site.active_lang == 'pl' %}Otrzymuj nowe artykuły w swoim czytniku RSS:{% else %}Get new articles delivered to your feed reader:{% endif %}</p>
      <a href="{{ '/blog/feed.xml' | relative_url }}" class="btn btn--secondary btn--small">RSS Feed &rarr;</a>
    </div>
  </aside>
</div>
