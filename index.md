- upcoming bdays
- tax returns
- final list to Bill (late clm)
- rebook vacation
- fix grout in main
- order spare drain
- HDMI
- Apple TV
- new power bar and router
- Marshall (400 avail)
- suit
- insulate range hood duct
- clean basement floor drain
- list SDBs and accounts
- GMP gift card

## MathJax
- [in-line configuration](http://docs.mathjax.org/en/latest/configuration.html#using-in-line-configuration-options)
- [plain JavaScript](http://docs.mathjax.org/en/latest/configuration.html#using-plain-javascript)
- [defining macros](http://docs.mathjax.org/en/latest/tex.html#defining-tex-macros)
- [override Jekyll](https://help.github.com/en/articles/files-that-start-with-an-underscore-are-missing)

<script>
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "settings.json", true);
  xhr.onreadystatechange = function () {
    console.log("xhr.readyState=" + xhr.readyState);
    console.log("xhr.status=" + xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      var json = JSON.parse(xhr.responseText);
      window.MathJax = json.mdmath.macros;
    }
  };
  xhr.send();
  /*
  window.MathJax = {
    TeX: {
      Macros: {
        sinc: "\\operatorname{sinc}",
        v: ["\\mathbf{#1}", 1],
        f: ["{F({#1},{#2};{#3};{#4})}", 4]
      }
    }
  };
  */
</script>
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

$$
\begin{aligned}
  E &= mc^2
  \\
  \sinc(x) &= \frac{\sin x}{x}
  \\
  \v{v} &= \v{0}
  \\
  \f{a}{b}{c}{z}
  &=
  1
  + \frac{ab}{c}\frac{z}{1!}
  + \frac{a(a+1)b(b+1)}{c(c+1)}\frac{z^2}{2!}
  + ...
\end{aligned}
$$
