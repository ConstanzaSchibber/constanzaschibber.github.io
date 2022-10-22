---
layout: page
title: Constanza F. Schibber
subtitle:
css: "/css/index.css"
bigimg:
  - "/img/IMG_20151103_065613.jpg"
  - "/img/IMG_20150820_161317.jpg": "Saint Louis, MO"
  - "/img/IMG_2463.jpg": "Cardinal"

---

In a nutshell, **my research uses Bayesian statistics to uncover the effects of institutions on elite and citizen behavior across countries**. I have a particular interest in development of new measures and the analysis of multilevel data structures.

My work has been published by the [*American Journal of Political Science*](https://constanzaschibber.github.io/pdfs/ajps.12429.pdf) and I recently co-edited the winter issue of the Legislative Scholar on [*Innovations on Data, Measurement, and Methods for the Study of Legislative Politics*](https://constanzaschibber.github.io/pdfs/Winter20.pdf). My collaborative projects have been awarded the *Carrie Chapman Catt Prize for research in Women and Politics* and the *APSA Centennial Grant* from the Warren E. Miller Fund in Electoral Politics.

I received a PhD in Political Science at *Washington University in Saint Louis*.



<div class="posts-list">
  {% for post in paginator.posts %}
  <article class="post-preview">
    <a href="{{ post.url | prepend: site.baseurl }}">
	  <h2 class="post-title">{{ post.title }}</h2>

	  {% if post.subtitle %}
	  <h3 class="post-subtitle">
	    {{ post.subtitle }}
	  </h3>
	  {% endif %}
    </a>

    <p class="post-meta">
      Posted on {{ post.date | date: "%B %-d, %Y" }}
    </p>

    <div class="post-entry">
      {{ post.excerpt | strip_html | xml_escape | truncatewords: 50 }}
	  <a href="{{ post.url | prepend: site.baseurl }}" class="post-read-more">[Read&nbsp;More]</a>
    </div>

    {% if post.tags.size > 0 %}
    <div class="blog-tags">
      Tags: 
      {% if site.link-tags %}
      {% for tag in post.tags %}
      <a href="{{ site.baseurl }}/tag/{{ tag }}">{{ tag }}</a>
      {% endfor %}
      {% else %}
        {{ post.tags | join: ", " }}
      {% endif %}
    </div>
    {% endif %}

   </article>
  {% endfor %}
</div>

{% if paginator.total_pages > 1 %}
<ul class="pager main-pager">
  {% if paginator.previous_page %}
  <li class="previous">
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Posts</a>
  </li>
  {% endif %}
  {% if paginator.next_page %}
  <li class="next">
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &rarr;</a>
  </li>
  {% endif %}
</ul>
{% endif %}
