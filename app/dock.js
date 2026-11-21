/* auto-update: reload once when a newer version of the site is published */
(function(){try{var m=document.querySelector('meta[name="igmcri-build"]');if(!m||!window.fetch)return;var base=/\/app\//.test(location.pathname)?'':'app/';
fetch(base+'version.json?t='+Date.now(),{cache:'no-store'}).then(function(r){return r.json();}).then(function(j){if(j&&j.v&&j.v!==m.content){var k='igmcri-reloaded-'+j.v;try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,'1');}catch(e){}location.reload();}}).catch(function(){});}catch(e){}})();
/* IGMCRI site dock — Home · Live sessions · Registers · Calendar · App
   One file, included on the main dashboard and every form page. */
(function(){
  'use strict';
  if(window.__igmcriDock)return;window.__igmcriDock=1;
  var inApp=/\/app\//.test(location.pathname);
  var P=inApp?'':'app/';                 // path to app/ folder
  var HOME=inApp?'../':'./';
  var here=location.pathname.split('/').pop()||'';
  var isHome=!inApp&&(here===''||here==='index.html'||here==='department-home.html');
  var SESS_URL='https://gensurgeryunit6-png.github.io/test1/academic_sessions.json';
  var esc=function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c];});};
  var pad=function(n){return String(n).padStart(2,'0');};
  var key=function(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
  var nowIST=function(){var p=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());var o={};p.forEach(function(x){o[x.type]=x.value;});return {date:o.year+'-'+o.month+'-'+o.day,time:(o.hour==='24'?'00':o.hour)+':'+o.minute};};
  var fmt=function(k,o){return new Date(k+'T12:00:00').toLocaleDateString('en-IN',o||{weekday:'short',day:'numeric',month:'short'});};

  var REG=[
    ['Endoscopy_Register.html','🔬','Endoscopy register','Scan-in entry'],
    ['USG_Register.html','📡','USG register','Scan-in entry'],
    ['Dressing_Register.html','🩹','Dressing register','Scan-in entry'],
    ['Library_Register.html','📚','Library register','Issue & return'],
    ['EGD_Report_Form.html','📝','New EGD report','Checklist, findings, photos'],
    ['EGD_Reports.html','🗂️','EGD reports','Sign in · view & print'],
    ['./#roster','🗓️','Duty roster','This month · who is on duty'],
    ['QR_Codes.html','▦','QR labels','Print register QR codes']
  ];

  var css='#igDock{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:3003;display:flex;gap:2px;background:#0f2f40;border:1px solid #ffffff22;border-radius:20px;padding:6px;box-shadow:0 10px 30px #0b2a3a55;width:min(520px,calc(100% - 20px));font-family:"Segoe UI",system-ui,sans-serif}'+
  '#igDock a,#igDock button{flex:1 1 0;min-width:0;display:flex;flex-direction:column;align-items:center;gap:3px;border:0;background:none;color:#b9d2dc;font-weight:600;font-size:10.5px;line-height:1.15;font-family:inherit;padding:7px 2px;border-radius:14px;text-decoration:none;cursor:pointer;min-height:50px;justify-content:center;text-align:center}'+
  '#igDock .di{font-size:19px;line-height:1}#igDock .on{background:#ffffff1a;color:#fff}#igDock a:hover,#igDock button:hover{color:#fff}'+
  '#igDock .live{position:relative}#igDock .live.has:after{content:"";position:absolute;top:7px;left:calc(50% + 9px);width:8px;height:8px;border-radius:50%;background:#ff5a4f;box-shadow:0 0 0 2px #0f2f40}'+
  'body.ig-docked{padding-bottom:calc(84px + env(safe-area-inset-bottom,0px))!important}'+
  '#igSheetBg{position:fixed;inset:0;background:#0b2230;opacity:.45;z-index:3001}'+
  '#igSheet{position:fixed;left:50%;transform:translateX(-50%);bottom:0;z-index:3002;width:min(560px,100%);max-height:82vh;max-height:82dvh;overflow:auto;background:#f6f9fb;color:#163a4c;border-radius:20px 20px 0 0;padding:14px max(16px,env(safe-area-inset-right,0px)) calc(96px + env(safe-area-inset-bottom,0px)) max(16px,env(safe-area-inset-left,0px));font:14px/1.45 "Segoe UI",system-ui,sans-serif;box-shadow:0 -10px 30px #0003}'+
  '#igSheet .gr{width:42px;height:5px;border-radius:3px;background:#c9d6dd;margin:0 auto 10px}#igSheet h3{margin:0 0 10px;font-size:18px;display:flex;justify-content:space-between;align-items:center;gap:8px}#igSheet h3 button{border:1px solid #d6e3ea;background:#fff;border-radius:10px;padding:6px 12px;font:inherit;font-size:13px;color:#163a4c;cursor:pointer}'+
  '#igSheet .lst{display:grid;gap:8px}#igSheet .it{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid #dce8ee;border-radius:14px;padding:11px 13px;text-decoration:none;color:inherit;min-height:56px}#igSheet .it.cur{border:2px solid #087f93;background:#ecf8fa}'+
  '#igSheet .it .e{font-size:22px;width:28px;text-align:center;flex:none}#igSheet .it b{display:block;font-size:14.5px}#igSheet .it small{display:block;color:#62808f;font-size:12px}'+
  '#igSheet .dh{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#0b6980;margin:14px 2px 6px}#igSheet .dh:first-of-type{margin-top:2px}'+
  '#igSheet .ss{background:#fff;border:1px solid #dce8ee;border-radius:14px;padding:10px 13px;margin-bottom:8px}#igSheet .ss.now{border:2px solid #d93a2f;background:#fff6f5}#igSheet .ss.over{opacity:.6}'+
  '#igSheet .ss .t{font-size:12px;color:#62808f;display:flex;gap:6px;align-items:center;flex-wrap:wrap}#igSheet .ss .n{font-weight:700;margin-top:3px}#igSheet .tg{font-size:10.5px;font-weight:800;border-radius:6px;padding:2px 7px;background:#e3f3f6;color:#0b6980}#igSheet .tg.pg{background:#efe9fb;color:#5b3fa8}#igSheet .tg.lv{background:#d93a2f;color:#fff}'+
  '#igSheet .em{background:#fff;border:1px dashed #cbdbe3;border-radius:14px;padding:16px;text-align:center;color:#62808f}'+
  '#igSheet .cal{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px;background:#fff;border:1px solid #dce8ee;border-radius:14px;padding:8px}#igSheet .cal .wd{text-align:center;font-size:10.5px;color:#62808f;font-weight:700;padding:3px 0}'+
  '#igSheet .cal button{aspect-ratio:1;border:0;border-radius:10px;background:none;font-weight:600;font-size:13.5px;font-family:inherit;color:#163a4c;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:38px;padding:0}'+
  '#igSheet .cal button.ph{background:#fdecec;color:#a01818}#igSheet .cal button.rh{background:#f1ecfb;color:#5b3fa8}#igSheet .cal button.td{box-shadow:inset 0 0 0 2px #087f93}#igSheet .cal button.sel{background:#163a4c;color:#fff}'+
  '#igSheet .cal i{width:5px;height:5px;border-radius:50%;background:#087f93;display:block}#igSheet .cal button.sel i{background:#fff}'+
  '#igSheet .lg{display:flex;flex-wrap:wrap;gap:6px 14px;font-size:12px;margin:9px 2px}#igSheet .lg span{display:inline-flex;align-items:center;gap:6px}#igSheet .lg em{width:12px;height:12px;border-radius:3px;display:inline-block}'+
  '#igSheet .hol{border-radius:12px;padding:9px 12px;margin-bottom:8px;font-weight:700}#igSheet .hol.ph{background:#fdecec;color:#a01818}#igSheet .hol.rh{background:#f1ecfb;color:#5b3fa8}#igSheet .hol small{display:block;font-weight:500;opacity:.85}'+
  '@media print{#igDock,#igSheet,#igSheetBg{display:none!important}body.ig-docked{padding-bottom:0!important}}';
  var st=document.createElement('style');st.id='igDockCss';st.textContent=css;document.head.appendChild(st);

  var sessions=null,sessErr=false;
  function loadSessions(cb){
    if(sessions||sessErr){cb();return;}
    fetch(SESS_URL,{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json();}).then(function(j){sessions=(j||[]).filter(function(x){return x.date;}).sort(function(a,b){return (a.date+(a.time||'99')).localeCompare(b.date+(b.time||'99'));});cb();}).catch(function(){sessErr=true;cb();});
  }
  function holidays(cb){
    if(window.IGMCRI_HOLIDAYS){cb();return;}
    var s=document.createElement('script');s.src=P+'holidays.js';s.onload=cb;s.onerror=cb;document.head.appendChild(s);
  }
  function status(x,n){
    if(x.date<n.date)return 'over';if(x.date>n.date||!x.time)return 'later';
    var end=(function(t){var h=+t.slice(0,2),m=+t.slice(3,5)+60;return pad(h+Math.floor(m/60))+':'+pad(m%60);})(x.time);
    return n.time<x.time?'later':n.time<end?'now':'over';
  }
  function sessCard(x,n){
    var s=status(x,n),aud=String(x.audience||'').toUpperCase();
    var title=[x.type,x.topic&&x.topic!=='N/A'?x.topic:''].filter(Boolean).join(' — ')||'Session';
    return '<div class="ss '+(s==='now'?'now':s==='over'?'over':'')+'"><div class="t">'+(s==='now'?'<span class="tg lv">● LIVE</span>':'')+'<span class="tg '+(aud==='PG'?'pg':'')+'">'+esc(aud||'—')+'</span>'+esc(x.time||'Time TBA')+(s==='over'?' · over':'')+'</div><div class="n">'+esc(title)+'</div>'+
      ((x.venue||x.faculty||x.batch)?'<div class="t">'+esc([x.faculty,x.batch,x.venue].filter(Boolean).join(' · '))+'</div>':'')+'</div>';
  }

  var bg,sheet,curTab='';
  function close(){if(sheet){sheet.remove();bg.remove();sheet=bg=null;}curTab='';mark();}
  function openSheet(tab,html){
    if(!sheet){bg=document.createElement('div');bg.id='igSheetBg';bg.onclick=close;sheet=document.createElement('div');sheet.id='igSheet';sheet.setAttribute('role','dialog');sheet.setAttribute('aria-modal','true');document.body.appendChild(bg);document.body.appendChild(sheet);}
    curTab=tab;mark();sheet.innerHTML='<div class="gr"></div>'+html;
    var c=sheet.querySelector('[data-close]');if(c)c.onclick=close;
  }
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});

  var API_URL=(window.IGMCRI_CONFIG&&window.IGMCRI_CONFIG.api)||'https://script.google.com/macros/s/AKfycbygBb_9jAGAebxdu15MmgqOAh06ss9uSLFoaFVBEzM9BfuPGF0RaZzZahqcfp924lIG7A/exec';
  var duty=null,dutyM='';
  function loadDuty(cb){var n=nowIST(),m=n.date.slice(0,7);if(dutyM===m){cb();return;}
    fetch(API_URL+'?action=roster&m='+m).then(function(r){return r.json();}).then(function(j){dutyM=m;duty=j&&j.rows||null;cb();}).catch(function(){dutyM=m;duty=null;cb();});}
  function dutyCard(){var n=nowIST(),r=duty&&duty[+n.date.slice(8,10)-1];if(!r)return '<a class="it" href="'+(inApp?'./':'app/')+'#roster" style="margin-bottom:8px"><span class="e">🗓️</span><span><b>Duty roster</b><small>See who is on duty this month</small></span></a>';
    return '<div class="ss" style="border-left:4px solid #087f93"><div class="t"><span class="tg">'+esc(r.unit)+'</span>On duty today</div><div class="n">'+esc([r.jr,r.duty].filter(Boolean).join(' · '))+'</div><div class="t">On call: '+esc(r.senior||'—')+' · <a href="'+(inApp?'./':'app/')+'#roster" style="color:#087f93;font-weight:700">Full roster ›</a></div></div>';}
  function showSessions(){
    openSheet('sess','<h3>Live sessions <button type="button" data-close>Close</button></h3><div class="em">Loading timetable…</div>');
    loadSessions(function(){loadDuty(function(){
      if(curTab!=='sess')return;
      var n=nowIST(),html='';
      if(sessErr){html='<div class="em">The academic timetable could not be loaded. Check the internet connection.</div>';}
      else{
        var today=sessions.filter(function(x){return x.date===n.date;});
        var up=sessions.filter(function(x){return x.date>n.date;}).slice(0,12);
        html+=dutyCard();
        html+='<div class="dh">Today · '+esc(fmt(n.date,{weekday:'long',day:'numeric',month:'short'}))+'</div>'+(today.length?today.map(function(x){return sessCard(x,n);}).join(''):'<div class="em">No sessions scheduled today.</div>');
        var last='';up.forEach(function(x){if(x.date!==last){last=x.date;html+='<div class="dh">'+esc(fmt(x.date,{weekday:'long',day:'numeric',month:'short'}))+'</div>';}html+=sessCard(x,n);});
        html+='<a class="it" style="margin-top:12px" href="https://gensurgeryunit6-png.github.io/test1/academic.html"><span class="e">📅</span><span><b>Full academic schedule</b><small>Opens the timetable site</small></span></a>';
      }
      sheet.innerHTML='<div class="gr"></div><h3>Live sessions <button type="button" data-close>Close</button></h3>'+html;sheet.querySelector('[data-close]').onclick=close;
    });});
  }
  function showRegisters(){
    openSheet('reg','<h3>Registers <button type="button" data-close>Close</button></h3><div class="lst">'+REG.map(function(r){return '<a class="it'+(inApp&&here===r[0]?' cur':'')+'" href="'+P+r[0]+'"><span class="e" aria-hidden="true">'+r[1]+'</span><span><b>'+r[2]+'</b><small>'+(inApp&&here===r[0]?'You are here':r[3])+'</small></span></a>';}).join('')+'</div>');
  }
  var calView=null,calSel=null;
  function showCalendar(){
    var n=nowIST();if(!calView)calView=n.date.slice(0,7);if(!calSel)calSel=n.date;
    openSheet('cal','<h3>Calendar <button type="button" data-close>Close</button></h3><div class="em">Loading…</div>');
    holidays(function(){loadSessions(function(){if(curTab==='cal')drawCal();});});
  }
  function drawCal(){
    var n=nowIST(),H=window.IGMCRI_HOLIDAYS||[],S=sessions||[];
    var y=+calView.slice(0,4),m=+calView.slice(5,7)-1,first=new Date(y,m,1).getDay(),days=new Date(y,m+1,0).getDate();
    var g='<div class="cal">'+['S','M','T','W','T','F','S'].map(function(x){return '<span class="wd">'+x+'</span>';}).join('');
    for(var i=0;i<first;i++)g+='<span></span>';
    for(var d=1;d<=days;d++){var k=calView+'-'+pad(d),h=H.filter(function(x){return x.date===k;}),hs=S.some(function(x){return x.date===k;});
      g+='<button type="button" data-d="'+k+'" class="'+(h.some(function(x){return x.type==='PH';})?'ph':h.length?'rh':'')+(k===n.date?' td':'')+(k===calSel?' sel':'')+'" aria-label="'+esc(fmt(k,{day:'numeric',month:'long'})+(h.length?', '+h.map(function(x){return x.name;}).join(', '):''))+'"><span>'+d+'</span>'+(hs?'<i></i>':'<i style="visibility:hidden"></i>')+'</button>';}
    g+='</div><div class="lg"><span><em style="background:#fdecec;border:1px solid #d26464"></em>Public holiday</span><span><em style="background:#f1ecfb;border:1px solid #8c72d6"></em>Restricted holiday (RH)</span><span><em style="background:#087f93;border-radius:50%;width:7px;height:7px"></em>Academic session</span></div>';
    var hd=H.filter(function(x){return x.date===calSel;}),sd=S.filter(function(x){return x.date===calSel;});
    var det='<div class="dh">'+esc(fmt(calSel,{weekday:'long',day:'numeric',month:'long',year:'numeric'}))+'</div>'+
      hd.map(function(x){return '<div class="hol '+x.type.toLowerCase()+'">'+esc(x.name)+'<small>'+(x.type==='PH'?'Public holiday · Govt. of Puducherry':'Restricted holiday · any 2 per year')+'</small></div>';}).join('')+
      (sd.length?sd.map(function(x){return sessCard(x,n);}).join(''):(hd.length?'':'<div class="em">Nothing scheduled on this date.</div>'));
    var label=new Date(y,m,1).toLocaleDateString('en-IN',{month:'long',year:'numeric'});
    sheet.innerHTML='<div class="gr"></div><h3><span style="display:flex;gap:6px;align-items:center"><button type="button" data-m="-1" aria-label="Previous month">‹</button><span style="min-width:128px;text-align:center">'+esc(label)+'</span><button type="button" data-m="1" aria-label="Next month">›</button></span><button type="button" data-close>Close</button></h3>'+g+det;
    sheet.querySelector('[data-close]').onclick=close;
    Array.prototype.forEach.call(sheet.querySelectorAll('[data-m]'),function(b){b.onclick=function(){var dt=new Date(y,m+(+b.getAttribute('data-m')),1);calView=dt.getFullYear()+'-'+pad(dt.getMonth()+1);drawCal();};});
    Array.prototype.forEach.call(sheet.querySelectorAll('[data-d]'),function(b){b.onclick=function(){calSel=b.getAttribute('data-d');drawCal();};});
  }

  var dock;
  function mark(){if(!dock)return;Array.prototype.forEach.call(dock.querySelectorAll('[data-t]'),function(b){var t=b.getAttribute('data-t');var on=curTab?t===curTab:(t==='home'&&isHome)||(t==='reg'&&inApp);b.classList.toggle('on',on);if(on)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});}
  function build(){
    if(document.getElementById('igDock'))return;
    dock=document.createElement('nav');dock.id='igDock';dock.setAttribute('aria-label','Site navigation');
    dock.innerHTML='<a data-t="home" href="'+HOME+'"><span class="di" aria-hidden="true">🏠</span>Home</a>'+
      '<button type="button" data-t="sess" class="live"><span class="di" aria-hidden="true">🎓</span>Live sessions</button>'+
      '<button type="button" data-t="reg"><span class="di" aria-hidden="true">📋</span>Registers</button>'+
      '<button type="button" data-t="cal"><span class="di" aria-hidden="true">📅</span>Calendar</button>'+
      '<a data-t="app" href="'+P+'"><span class="di" aria-hidden="true">📱</span>App</a>';
    document.body.appendChild(dock);document.body.classList.add('ig-docked');
    dock.querySelector('[data-t="sess"]').onclick=function(){curTab==='sess'?close():showSessions();};
    dock.querySelector('[data-t="reg"]').onclick=function(){curTab==='reg'?close():showRegisters();};
    dock.querySelector('[data-t="cal"]').onclick=function(){curTab==='cal'?close():showCalendar();};
    mark();
    loadSessions(function(){var n=nowIST();if(sessions&&sessions.some(function(x){return status(x,n)==='now';}))dock.querySelector('.live').classList.add('has');});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build);else build();
})();
