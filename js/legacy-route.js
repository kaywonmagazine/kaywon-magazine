const name=decodeURIComponent(location.pathname.split('/').pop()||'');
let target;
if(/^article-.+\.html$/.test(name))target='./article.html?id='+encodeURIComponent(name.slice(8,-5));
else {const match=name.match(/^(work|people|life|view)-(articles(?:-.*)?|.+)\.html$/);if(match){const query=new URLSearchParams();let sub=match[2];if(sub==='articles'||sub.startsWith('articles-')){query.set('view','articles');sub=sub.slice(8).replace(/^-/,'');}if(sub)query.set('subcategory',sub);target='./'+match[1]+'.html?'+query;}}
if(target)location.replace(target);
