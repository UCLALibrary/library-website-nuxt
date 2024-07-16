function e(t=""){return typeof t=="string"||t instanceof String?(t.match(/^(http|https):\/\//)||(t=t.replace(/^(?=[^/])/,"/")),t=t.replace(/^\/locations\//,"/visit/locations/"),t):""}export{e as f};
