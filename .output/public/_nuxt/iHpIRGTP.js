function l(t){if(!t)return{};const s={};return t.split(" AND ").forEach(e=>{const[n,o]=e.split(":("),c=n.trim(),i=o.replace(")","").split(" OR ").map(r=>r.trim());s[c]=i}),s}export{l as p};
