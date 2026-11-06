from pathlib import Path
p=Path('src/app/globals.css')
s=p.read_text(encoding='utf-8')
s=s.replace('a{color:inherit;text-decoration:none}button{font:inherit}', 'a{color:inherit;text-decoration:none}button{font:inherit}a:focus-visible,button:focus-visible{outline:2px solid var(--coral);outline-offset:4px}.button,.filter-tabs button,.nav-cta{min-height:44px}')
s=s.replace('.nav-links a{transition:.25s}', '.nav-links a{transition:.25s;white-space:nowrap}')
s=s.replace('.publication-row{display:grid;', '.publication-row{display:grid;min-width:0;')
p.write_text(s, encoding='utf-8')
