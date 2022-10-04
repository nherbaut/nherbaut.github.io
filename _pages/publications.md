---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

## International Conferences Proceedings ({{ site.pubi18njournal | size }})

{% for post in site.pubi18njournal reversed %}
  <details>
  {% if post.paperurl %}
  <summary>[{{post.year}}] {{post.title}} <a href="{{ post.paperurl }}">[PDF]</a>
  {% else %}
  <summary>[{{post.year}}] {{post.title}}
  {% endif %}
  <span class="venue">({{post.venue}})</span></summary>
  <div class="pubdetails">{% include archive-single.html %}</div>
  </details>
{% endfor %}

## International Journals Articles ({{ site.pubi18nconf | size }})

{% for post in site.pubi18nconf reversed %}
<details>
  {% if post.paperurl %}
  <summary>[{{post.year}}] {{post.title}} <a href="{{ post.paperurl }}">[PDF]</a>
  {% else %}
  <summary>[{{post.year}}] {{post.title}}</a>
  {% endif %}
  <span class="venue">({{post.venue}})</span></summary>
  <div class="pubdetails">{% include archive-single.html %}</div>
  </details>
{% endfor %}

## International Workshops or National Conferences or National Journals ({{ site.pubn8lpub.size }})

{% for post in site.pubn8lpub  reversed %}
<details>
  {% if post.paperurl %}
  <summary>[{{post.year}}] {{post.title}} <a href="{{ post.paperurl }}">[PDF]</a>
  {% else %}
  <summary>[{{post.year}}] {{post.title}}</a>
  {% endif %}
  <span class="venue">({{post.venue}})</span></summary>
  <div class="pubdetails">{% include archive-single.html %}</div>
  </details>
{% endfor %}


{% include text-expand.html %}