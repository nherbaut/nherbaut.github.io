---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

## International Conferences Proceedings ({{ site.pubi18njournal | size }})

{% assign years = "" | split: ',' %}

{% for post in site.pubi18njournal reversed %}
  {% assign years = years | push: post.year %}

{% endfor %}

{% assign years = years | uniq %}

{% for year in years %}
  <h3>{{ year }}</h3>
  {% for post in site.pubi18njournal reversed %}
  {% if post.year == year %}
  <details>
  {% if post.paperurl %}
  <summary>[{{post.year}}] {{post.title}} <a href="{{ post.paperurl }}">[PDF]</a>
  {% else %}
  <summary>[{{post.year}}] {{post.title}}
  {% endif %}
  <span class="venue">({{post.venue}})</span></summary>
  <div class="pubdetails">{% include archive-single.html %}</div>
  </details>
  {% endif %}
  {% endfor %}
{% endfor %}

## International Journals Articles ({{ site.pubi18nconf | size }})

{% assign years = "" | split: ',' %}

{% for post in site.pubi18nconf reversed %}
  {% assign years = years | push: post.year %}

{% endfor %}

{% assign years = years | uniq %}

{% for year in years %}
  <h3>{{ year }}</h3>
  {% for post in site.pubi18nconf reversed %}
  {% if post.year == year %}
  <details>
    {% if post.paperurl %}
    <summary>[{{post.year}}] {{post.title}} <a href="{{ post.paperurl }}">[PDF]</a>
    {% else %}
    <summary>[{{post.year}}] {{post.title}}</a>
    {% endif %}
    <span class="venue">({{post.venue}})</span></summary>
    <div class="pubdetails">{% include archive-single.html %}</div>
  </details>
  {% endif %}
  {% endfor %}
{% endfor %}

## International Workshops or National Conferences or National Journals ({{ site.pubn8lpub.size }})

{% assign years = "" | split: ',' %}

{% for post in site.pubn8lpub reversed %}
  {% assign years = years | push: post.year %}

{% endfor %}

{% assign years = years | uniq %}

{% for year in years %}
  <h3>{{ year }}</h3>
  {% for post in site.pubn8lpub  reversed %}
  {% if post.year == year %}
  <details>
    {% if post.paperurl %}
    <summary>[{{post.year}}] {{post.title}} <a href="{{ post.paperurl }}">[PDF]</a>
    {% else %}
    <summary>[{{post.year}}] {{post.title}}</a>
    {% endif %}
    <span class="venue">({{post.venue}})</span></summary>
    <div class="pubdetails">{% include archive-single.html %}</div>
    </details>
  {% endif %}
  {% endfor %}
{% endfor %}


{% include text-expand.html %}