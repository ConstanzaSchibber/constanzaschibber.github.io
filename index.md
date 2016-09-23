---
layout: page
title: Constanza F. Schibber
subtitle: Postdoctoral Fellow in Political Methodology and Data Science
css: "/css/index.css"
bigimg:
  - "/img/IMG_20151103_065613.jpg"
  - "/img/IMG_20150820_161317.jpg": "Saint Louis, MO"

---

I am a *Postdoctoral Fellow in Political Methodology and Data Science* at the Department of Politics, University of Virginia. I recently received a *PhD in Political Science* at Washington University in Saint Louis. In a nutshell, **my research uses Bayesian statistics to uncover the effects of political institutions on elite and citizen behavior**. I have a particular interest in the measurement of complex concepts, the analysis of multilevel data structures, the application of texts-as-data, and the empirical implications of theoretical models.

**How political institutions affect the correspondence between the policies that citizens and representatives desire and the outcomes that democratic governments produce is the core concern that motivates my research agenda.**  In 2016, one of my collaborative projects was awarded the *Carrie Chapman Catt Prize for research in Women and Politics*. 

Prior to starting the Ph.D. program at Washington University, I conducted over 110 interviews with national legislators, justices, and public officials. I am also a Fulbright Alumni and an International Exchange Alumni with the U.S. Department of State. I received my B.A. in Political Science in *Universidad Torcuato Di Tella* in Buenos Aires, Argentina.  


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
