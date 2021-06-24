---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my articles on <a href="https://inspirehep.net/authors/1410710">InspireHEP</a>.

<p style="margin-bottom:5cm;"></p>


{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
