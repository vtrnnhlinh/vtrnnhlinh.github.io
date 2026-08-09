# vtrnnhlinh.github.io

This blog uses the template from: [alshdivat/al-folio](https://github.com/alshedivat/al-folio).

## Formatting Notes

### Image with caption

```markdown
{% include figure.liquid loading="eager" path="" class="img-fluid rounded z-depth-1" %}
<div class="caption"> My two controllers! </div>
```

### Footnote

Wrap: `The number of the footnote will be automatically generated.<d-footnote>This will become a hoverable footnote.</d-footnote>` 


### Citations

- Use shared publications, add `yaml` format: `related_publications: true` 
- Use separated bib files: `bibliography: 2018-12-22-distill.bib`
- Use when want to cite: `<d-cite key="gregor2015draw"></d-cite>`
