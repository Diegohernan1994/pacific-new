const DEFAULT_TYPES=[
  {n:'Detached ADU',tag:'A separate home in your backyard',d:'A freestanding one- or two-bedroom home with its own entry, kitchen and bath. The most private option and the strongest for rental income.',size:'Up to 1,200 sq ft',where:'Backyard',best:'Rental income, guest house',src:IMG+'types/detached-adu.jpg'},
  {n:'Attached ADU',tag:'An addition with its own front door',d:'Built onto the side or rear of your home, sharing a wall but not a living space. Ties into existing utilities, which keeps site work down.',size:'Up to 1,200 sq ft or 50% of the home',where:'Side or rear of house',best:'Multigenerational family',src:IMG+'types/attached-adu.jpg'},
  {n:'Garage Conversion',tag:'Turn the garage into a home',d:'We keep the existing slab and walls where we can, then insulate, re-frame openings and add a kitchen and bath. Often the fastest path to an ADU.',size:'Existing footprint',where:'Attached or detached garage',best:'Lower cost, faster build',src:IMG+'types/garage-conversion.jpg'},
  {n:'JADU',tag:'A suite inside your existing home',d:'A junior ADU carved from an existing bedroom or wing, with an efficiency kitchen and its own entrance. Bath can be private or shared.',size:'Up to 500 sq ft',where:'Inside the main house',best:'Aging parents, adult kids',src:IMG+'types/jadu.jpg'},
  {n:'Second-story ADU',tag:'Build up and keep the yard',d:'A new unit above your garage or as an upper level, with its own stair and entry. Ideal for smaller lots where yard space matters.',size:'Up to 1,200 sq ft',where:'Above garage or home',best:'Small lots, views',src:IMG+'types/second-story-adu.jpg'}
];
const TYPES=(window.PW_CMS?.aduTypes?.length?window.PW_CMS.aduTypes:DEFAULT_TYPES).map(t=>({
  ...t,n:t.n||t.name,tag:t.tag,d:t.d||t.description,best:t.best||t.bestFor,src:t.src||t.imageUrl
}));
function Types(){
  const [a,setA]=React.useState(0);
  return <section id="types" style={{padding:`clamp(88px,10vw,160px) ${PAD}`,background:'var(--pw-stone-50)'}}>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:32,flexWrap:'wrap',marginBottom:'clamp(48px,6vw,88px)'}}>
      <Reveal><Kicker>ADU types</Kicker><H style={{marginTop:28,maxWidth:900}}>Five ways to add a home to your lot</H></Reveal>
      <Reveal delay={120} style={{maxWidth:400}}><p style={{margin:0,fontSize:16,fontWeight:300,lineHeight:1.7,color:'var(--text-secondary)'}}>Not sure which fits your property? We confirm setbacks, utilities and zoning in a free site visit.</p></Reveal>
    </div>
    <div className="v4-types" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.1fr)',gap:'clamp(32px,5vw,88px)',alignItems:'start'}}>
      <div style={{borderTop:'1px solid var(--pw-ink)'}}>
        {TYPES.map((t,k)=>{const on=k===a;return <div key={k} onMouseEnter={()=>setA(k)} onClick={()=>setA(k)} style={{borderBottom:'1px solid var(--border-hairline)',padding:'28px 0',cursor:'pointer'}}>
          <div style={{display:'flex',alignItems:'baseline',gap:24}}>
            <span style={{fontSize:13,fontWeight:500,color:on?RED:'var(--text-muted)',minWidth:24,transition:'color .3s'}}>{String(k+1).padStart(2,'0')}</span>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:'clamp(24px,2.4vw,38px)',fontWeight:600,textTransform:'uppercase',letterSpacing:'-0.01em',lineHeight:1.05,color:on?'var(--pw-ink)':'var(--pw-stone-500)',transition:'color .3s'}}>{t.n}</div>
              <div style={{display:'grid',gridTemplateRows:on?'1fr':'0fr',transition:'grid-template-rows .6s var(--ease-out)'}}><div style={{overflow:'hidden'}}>
                <div style={{fontFamily:'var(--font-serif-display)',fontStyle:'italic',fontSize:22,color:RED,marginTop:12}}>{t.tag}</div>
                <p style={{margin:'12px 0 0',fontSize:15,fontWeight:300,lineHeight:1.7,color:'var(--text-secondary)',maxWidth:520}}>{t.d}</p>
                <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:16,marginTop:22}}>
                  {[['Size',t.size],['Where',t.where],['Best for',t.best]].map(([l,v])=><div key={l}><div style={{fontSize:10,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--text-muted)'}}>{l}</div><div style={{fontSize:14,marginTop:6,lineHeight:1.4}}>{v}</div></div>)}
                </div></div></div>
            </div>
            <Icon name="arrow-up-right" size={22} color={on?RED:'var(--pw-stone-300)'} style={{transition:'transform .4s',transform:on?'rotate(45deg)':'none'}}/>
          </div></div>;})}
        <div style={{marginTop:36}}><Btn dark onClick={()=>go('calculator')}>Price my {TYPES[a].n}</Btn></div>
      </div>
      <div className="v4-type-img" style={{position:'sticky',top:120,aspectRatio:'4/5',maxHeight:'calc(100vh - 160px)',width:'100%',overflow:'hidden',background:'var(--pw-stone-200)'}}>
        {TYPES.map((t,k)=><div key={k} style={{position:'absolute',inset:0,opacity:k===a?1:0,transform:k===a?'scale(1)':'scale(1.05)',transition:'opacity .8s var(--ease-inout),transform 1.4s var(--ease-out)',pointerEvents:k===a?'auto':'none'}}>
          <image-slot id={'v5-type-'+(k+1)} shape="rect" src={t.src} placeholder={t.n+' photo'}></image-slot></div>)}
        <div style={{position:'absolute',left:0,top:0,zIndex:2,background:'var(--pw-black)',color:'#fff',padding:'12px 18px',fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',pointerEvents:'none'}}>{String(a+1).padStart(2,'0')} / 05 · {TYPES[a].n}</div>
      </div>
    </div></section>;
}

const STEPS=[['Site visit','We walk your lot, check setbacks, utilities and access, and tell you which ADU types qualify.'],['Design','Floor plan, elevations and finishes, drawn around how you plan to use the unit.'],['Engineering','Structural, Title 24 energy and soils reports, coordinated by our team.'],['Plan check','We submit to the city, answer corrections and track every comment until approval.'],['Build','Our own crews build it, with a project lead on site and weekly updates.'],['Final & move-in','Final inspection, certificate of occupancy and a walkthrough before handover.']];
function Process(){
  const ref=React.useRef();const [p,setP]=React.useState(0);
  useFrame(()=>{const el=ref.current;if(!el)return;const r=el.getBoundingClientRect();setP(Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(r.height+innerHeight*.2))));});
  return <section id="process" ref={ref} className="v5-process-section" style={{padding:`clamp(88px,10vw,160px) ${PAD}`,background:'var(--pw-black)',color:'#fff'}}>
    <Reveal><Kicker color="#ff6b6b" line="#ff6b6b">Permit process</Kicker><H color="#fff" style={{marginTop:28,maxWidth:1000}}>From first visit to permit, we handle the city</H></Reveal>
    <div className="v5-process-track" style={{position:'relative',marginTop:'clamp(56px,7vw,104px)'}}>
      <div style={{position:'absolute',left:0,right:0,top:0,height:1,background:'rgba(255,255,255,.18)'}}><div style={{position:'absolute',inset:0,background:RED,transformOrigin:'left',transform:`scaleX(${p})`}}></div></div>
      <div className="v5-process-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,190px),1fr))',gap:'40px 32px'}}>
        {STEPS.map(([t,d],k)=>{const on=p>=(k+.5)/STEPS.length;return <div key={k} className="v5-process-step" style={{paddingTop:28,position:'relative'}}>
          <span style={{position:'absolute',top:-4,left:0,width:9,height:9,borderRadius:'50%',background:on?RED:'var(--pw-black)',border:'1px solid '+(on?RED:'rgba(255,255,255,.4)'),transition:'background .4s,border-color .4s'}}></span>
          <div style={{fontSize:13,fontWeight:500,color:on?'#ff6b6b':'rgba(255,255,255,.5)',transition:'color .4s'}}>{String(k+1).padStart(2,'0')}</div>
          <div style={{fontSize:20,fontWeight:600,textTransform:'uppercase',marginTop:14,letterSpacing:'.01em'}}>{t}</div>
          <p style={{margin:'12px 0 0',fontSize:14,fontWeight:300,lineHeight:1.7,color:'rgba(255,255,255,.75)'}}>{d}</p></div>;})}
      </div></div></section>;
}

const RATES={'Detached ADU':[300,375],'Attached ADU':[285,355],'Garage Conversion':[190,250],'JADU':[170,230],'Second-story ADU':[340,420]};
const FIN={Standard:1,Premium:1.18,Luxury:1.4};
const APR=.0899,YRS=20;
const money=v=>'$'+Math.round(v/1000).toLocaleString()+'k';
function Calculator({initial,top}){
  const [t,setT]=React.useState(initial||'Detached ADU');const [sq,setSq]=React.useState(750);const [f,setF]=React.useState('Premium');
  const max=t==='JADU'?500:1200;const size=Math.min(sq,max);
  const [lo,hi]=RATES[t].map(r=>r*size*FIN[f]);
  const mr=APR/12,n=YRS*12;const mo=v=>v*mr/(1-Math.pow(1+mr,-n));
  const lab={fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:14};
  const chip=on=>({padding:'12px 16px',border:'1px solid '+(on?'var(--pw-ink)':'var(--border-hairline)'),background:on?'var(--pw-ink)':'#fff',color:on?'#fff':'var(--pw-ink)',fontFamily:'var(--font-sans)',fontSize:13,cursor:'pointer',whiteSpace:'nowrap',transition:'all .25s'});
  return <section id="calculator" style={{padding:`${top?'clamp(88px,10vw,160px)':'0'} ${PAD} clamp(88px,10vw,160px)`,background:'#fff'}}>
    <Reveal><Kicker>Cost calculator</Kicker><H style={{marginTop:28,maxWidth:900}}>What will your ADU cost?</H></Reveal>
    <div className="v4-calc" style={{display:'grid',gridTemplateColumns:'minmax(0,1.15fr) minmax(0,1fr)',gap:'clamp(32px,4vw,64px)',marginTop:'clamp(48px,6vw,80px)',alignItems:'stretch'}}>
      <div style={{display:'flex',flexDirection:'column',gap:44}}>
        <div><div style={lab}>ADU type</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{Object.keys(RATES).map(k=><button key={k} onClick={()=>setT(k)} style={chip(k===t)}>{k}</button>)}</div></div>
        <div><div style={{...lab,display:'flex',justifyContent:'space-between'}}><span>Size</span><span style={{color:'var(--pw-ink)',fontSize:16,letterSpacing:0,textTransform:'none',fontWeight:500}}>{size.toLocaleString()} sq ft</span></div>
          <input type="range" min={200} max={max} step={25} value={size} onChange={e=>setSq(+e.target.value)} style={{width:'100%',accentColor:'#AB0000'}}/>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:'var(--text-muted)',marginTop:8}}><span>200</span><span>{max.toLocaleString()}</span></div></div>
        <div><div style={lab}>Finish level</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{Object.keys(FIN).map(k=><button key={k} onClick={()=>setF(k)} style={chip(k===f)}>{k}</button>)}</div></div>
        <p style={{margin:0,fontSize:13,fontWeight:300,lineHeight:1.7,color:'var(--text-muted)',maxWidth:520}}>Illustrative ranges for Southern California. Site work, utilities and city fees vary; your exact price comes after the site visit.</p>
      </div>
      <div style={{background:'var(--pw-black)',color:'#fff',padding:'clamp(32px,4vw,56px)',display:'flex',flexDirection:'column',gap:28}}>
        <div><div style={{...lab,color:'rgba(255,255,255,.6)'}}>Estimated build cost</div>
          <div style={{fontSize:'clamp(40px,4.6vw,72px)',fontWeight:600,letterSpacing:'-0.02em',lineHeight:1}}>{money(lo)} – {money(hi)}</div>
          <div style={{fontSize:14,fontWeight:300,color:'rgba(255,255,255,.7)',marginTop:12}}>{t} · {size.toLocaleString()} sq ft · {f}</div></div>
        <div style={{height:1,background:'rgba(255,255,255,.15)'}}></div>
        <div id="financing"><div style={{display:'flex',alignItems:'center',gap:12}}><span style={{background:RED,padding:'6px 10px',fontSize:11,fontWeight:700,letterSpacing:'.16em',textTransform:'uppercase'}}>$0 down</span><span style={{fontFamily:'var(--font-serif-display)',fontStyle:'italic',fontSize:26}}>Build now, pay later</span></div>
          <div style={{display:'flex',alignItems:'baseline',gap:10,marginTop:20}}><span style={{fontSize:'clamp(32px,3vw,48px)',fontWeight:600}}>${Math.round(mo(lo)).toLocaleString()}</span><span style={{fontSize:14,color:'rgba(255,255,255,.7)'}}>– ${Math.round(mo(hi)).toLocaleString()} / month</span></div>
          <div style={{fontSize:12,fontWeight:300,color:'rgba(255,255,255,.6)',marginTop:10,lineHeight:1.6}}>Example at {(APR*100).toFixed(2)}% APR over {YRS} years, subject to lender approval.</div></div>
        <div style={{marginTop:'auto',display:'flex',gap:10,flexWrap:'wrap'}}><Btn onClick={()=>go('contact')}>Get my exact quote <Arrow color="#fff"/></Btn></div>
      </div>
    </div></section>;
}
Object.assign(window,{Types,Process,Calculator,TYPES,STEPS,RATES,FIN,APR,YRS,money});
