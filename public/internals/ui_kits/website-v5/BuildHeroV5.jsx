const STAGES=[
  {k:'Pacific West',t:'Your ADU, built start to finish',d:'Pacific West designs, permits and builds accessory dwelling units across Southern California. Scroll to watch one go up.',src:IMG+'build/00-completed-adu-hero.png',slot:'Completed ADU hero',h1:true,intro:true},
  {k:'Property review',t:'Property review, concept & plans',d:'We survey your lot, confirm setbacks, utilities and zoning, and draw concept plans for what your property can hold.',src:IMG+'build/01-property-review.jpg',slot:'Property review'},
  {k:'Permitting',t:'Permitting & site preparation',d:'We take the plans through city plan check. Once approved, the crew clears the pad, sets string lines and excavates the footings.',src:IMG+'build/02-site-prep.jpg',slot:'Permitting'},
  {k:'Foundation',t:'Foundation & slab',d:'Engineered footings, rebar, anchor bolts and utility stub-outs, inspected and poured into a level slab.',src:IMG+'build/03-foundation.jpg',slot:'Foundation'},
  {k:'Framing',t:'Walls, framing & roof structure',d:'Walls, shear panels and roof rafters go up to the engineer’s plan, with hold-downs for California seismic code.',src:IMG+'build/04-framing.jpg',slot:'Framing'},
  {k:'Enclosure',t:'Roofing, windows & exterior enclosure',d:'Roofing, house wrap, flashed windows and the entry door. The unit is now sealed against the weather.',src:IMG+'build/05-enclosure.jpg',slot:'Enclosure'},
  {k:'Rough-in',t:'Plumbing, electrical, HVAC & insulation',d:'Supply and drain lines, wiring, ducting and insulation are installed and inspected before the walls close.',src:IMG+'build/06-rough-in.jpg',slot:'Rough-in'},
  {k:'Finishes',t:'Interior & exterior finishes',d:'Drywall, flooring, cabinetry and paint inside; stucco, lighting and hardscape outside.',src:IMG+'build/07-interior.jpg',slot:'Finishes'},
  {k:'Move-in',t:'Final inspections, walkthrough & completed ADU',d:'Final city inspection, certificate of occupancy and a walkthrough with your project lead. Then it’s yours to rent, share or live in.',src:IMG+'build/08-completed.jpg',slot:'Move-in',cta:true}
];
const N=STAGES.length;

function Header(){
  const [more,setMore]=React.useState(false);
  const links=[['ADU Types','types'],['Process','process'],['Cost','calculator'],['Financing','financing'],['Gallery','projects'],['FAQ','faq']];
  const lk={color:'rgba(255,255,255,.86)',fontSize:14,fontWeight:400,cursor:'pointer',background:'none',border:'none',fontFamily:'var(--font-sans)',padding:0,display:'flex',alignItems:'center',gap:6};
  return <header style={{position:'fixed',top:0,left:0,right:0,zIndex:50,background:'var(--pw-black)',borderBottom:'1px solid rgba(255,255,255,.08)'}}>
    <div style={{height:84,padding:`0 ${PAD}`,display:'flex',alignItems:'center',gap:32}}>
      <a href="#top" onClick={e=>{e.preventDefault();scrollTo({top:0,behavior:'smooth'})}}><PW.Logo tone="light" basePath="./" height={46}/></a>
      <nav className="v4-nav" style={{display:'flex',gap:34,margin:'0 auto',alignItems:'center'}}>
        {links.map(([l,id])=><a key={l} href={'#'+id} onClick={e=>{e.preventDefault();go(id)}} style={lk}>{l}</a>)}
        <div style={{position:'relative'}} onMouseEnter={()=>setMore(true)} onMouseLeave={()=>setMore(false)}>
          <button style={lk}>More <Icon name="chevron-down" size={14}/></button>
          <div style={{position:'absolute',top:'100%',left:-20,paddingTop:22,opacity:more?1:0,pointerEvents:more?'auto':'none',transform:more?'none':'translateY(-6px)',transition:'opacity .25s,transform .25s'}}>
            <div style={{background:'var(--pw-black)',border:'1px solid rgba(255,255,255,.1)',padding:'10px 0',minWidth:230}}>
              {[['Kitchen Remodeling','services'],['Bathroom Remodeling','services'],['Room Additions','services'],['FAQ','faq'],['Reviews','reviews'],['Contact','contact']].map(([l,id])=><a key={l} href={'#'+id} onClick={e=>{e.preventDefault();setMore(false);go(id)}} style={{display:'block',padding:'11px 22px',color:'#fff',fontSize:14,fontWeight:300}} onMouseEnter={e=>e.currentTarget.style.color='#ff8a8a'} onMouseLeave={e=>e.currentTarget.style.color='#fff'}>{l}</a>)}
            </div></div></div>
      </nav>
      <a className="v4-phone" href="tel:8883984499" style={{color:'#fff',display:'flex',alignItems:'center',gap:10,fontSize:14,fontWeight:500,whiteSpace:'nowrap',marginLeft:'auto'}}><Icon name="phone" size={16} color={RED}/>(888) 398-4499</a>
      <Btn onClick={()=>go('calculator')} style={{padding:'15px 22px'}}>Start your ADU</Btn>
    </div></header>;
}

function Crosshair({host}){
  const box=React.useRef(),v=React.useRef(),h=React.useRef(),c=React.useRef(),lab=React.useRef();
  React.useEffect(()=>{const el=host.current;if(!el||matchMedia('(hover:none)').matches)return;
    const mv=e=>{const r=el.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;box.current.style.opacity=1;
      v.current.style.transform=`translateX(${x}px)`;h.current.style.transform=`translateY(${y}px)`;c.current.style.transform=`translate(${x-20}px,${y-20}px)`;
      const flip=x>r.width-220;lab.current.style.transform=`translate(${flip?x-200:x+28}px,${y+22}px)`;
      const inch=Math.round(x/r.width*480);lab.current.lastChild.textContent=`${Math.floor(inch/12)}′ ${inch%12}″ · DRAFTING`;};
    const out=()=>box.current.style.opacity=0;
    el.addEventListener('mousemove',mv);el.addEventListener('mouseleave',out);return()=>{el.removeEventListener('mousemove',mv);el.removeEventListener('mouseleave',out);};},[]);
  const line='rgba(255,90,90,.35)';
  return <div ref={box} aria-hidden style={{position:'absolute',inset:0,pointerEvents:'none',opacity:0,transition:'opacity .3s',zIndex:3}}>
    <div ref={v} style={{position:'absolute',top:0,bottom:0,left:0,width:1,background:line}}></div>
    <div ref={h} style={{position:'absolute',left:0,right:0,top:0,height:1,background:line}}></div>
    <div ref={c} style={{position:'absolute',left:0,top:0,width:40,height:40,borderRadius:'50%',border:'1px solid '+RED,display:'grid',placeItems:'center'}}><span style={{width:4,height:4,borderRadius:'50%',background:RED}}></span></div>
    <div ref={lab} style={{position:'absolute',left:0,top:0,display:'flex',alignItems:'center',gap:8,padding:'7px 10px',background:'rgba(17,17,17,.85)',color:'#fff',fontFamily:'ui-monospace,Menlo,monospace',fontSize:11,letterSpacing:'.08em',whiteSpace:'nowrap'}}><span style={{width:6,height:6,borderRadius:'50%',background:RED}}></span><span>0′ 0″ · DRAFTING</span></div>
  </div>;
}

function BuildHero(){
  const wrap=React.useRef(),stage=React.useRef();const [i,setI]=React.useState(0);const fill=React.useRef();
  useFrame(()=>{const w=wrap.current;if(!w)return;const r=w.getBoundingClientRect();const total=w.offsetHeight-innerHeight;const p=Math.min(1,Math.max(0,-r.top/total));
    fill.current.style.transform=`scaleX(${p})`;setI(Math.min(N-1,Math.floor(p*N)));});
  const jump=k=>{const w=wrap.current;const total=w.offsetHeight-innerHeight;scrollTo({top:w.offsetTop+total*(k+.5)/N,behavior:'smooth'});};
  const s=STAGES[i];const T=s.h1?'h1':'h2';
  return <section id="top" ref={wrap} style={{height:`calc(100vh + ${N*70}vh)`,position:'relative',background:'var(--pw-black)'}}>
    <div ref={stage} style={{position:'sticky',top:0,height:'100vh',overflow:'hidden',color:'#fff'}}>
      {STAGES.map((st,k)=><div key={k} style={{position:'absolute',inset:'84px 0 0 0',opacity:k===i?1:0,transition:'opacity 1.1s var(--ease-inout)',pointerEvents:k===i?'auto':'none',zIndex:k===i?1:0}}>
        <div style={{position:'absolute',inset:0,transform:k===i?'scale(1)':'scale(1.06)',transition:'transform 2.6s var(--ease-out)'}}>
          <image-slot id={'v5-stage-'+(k+1)} shape="rect" fit="cover" placeholder={'Stage '+String(k+1).padStart(2,'0')+': '+st.slot} src={st.src}></image-slot></div></div>)}
      <div style={{position:'absolute',inset:0,zIndex:2,pointerEvents:'none',background:'linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.72) 100%),linear-gradient(90deg,rgba(0,0,0,.45),rgba(0,0,0,0) 60%)'}}></div>
      <Crosshair host={stage}/>
      <div key={i} style={{position:'absolute',zIndex:4,left:PAD,right:PAD,bottom:'clamp(56px,10vh,120px)',maxWidth:980,pointerEvents:'none'}}>
        <div style={{animation:'v4Rise .8s var(--ease-out) both'}}><Kicker n={s.intro?null:String(i).padStart(2,'0')} color="#ff6b6b" line="#ff6b6b">{s.k}</Kicker></div>
        <T style={{margin:'24px 0 0',fontWeight:600,fontSize:'clamp(40px,5.6vw,100px)',lineHeight:.94,letterSpacing:'-0.02em',textTransform:'uppercase',textWrap:'balance',animation:'v4Rise .9s var(--ease-out) 80ms both'}}>{s.t}</T>
        <p style={{margin:'26px 0 0',maxWidth:620,fontSize:'clamp(16px,1.25vw,20px)',fontWeight:300,lineHeight:1.6,color:'rgba(255,255,255,.88)',textWrap:'pretty',animation:'v4Rise .9s var(--ease-out) 160ms both'}}>{s.d}</p>
        {s.cta&&<div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:34,pointerEvents:'auto',animation:'v4Rise .9s var(--ease-out) 240ms both'}}><Btn onClick={()=>go('types')}>Explore ADU types</Btn><Btn ghost onClick={()=>go('calculator')}>Estimate my cost</Btn></div>}
      </div>
      <div className="v4-dots" style={{position:'absolute',zIndex:4,right:PAD,top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',gap:10}}>
        {STAGES.map((st,k)=><button key={k} onClick={()=>jump(k)} title={st.intro?'Start':st.k} style={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:12,background:'none',border:'none',cursor:'pointer',color:'#fff',fontFamily:'var(--font-sans)',fontSize:11,letterSpacing:'.16em',textTransform:'uppercase',padding:'4px 0',opacity:k===i?1:.45,transition:'opacity .4s'}}>
          <span style={{opacity:k===i?1:0,transition:'opacity .4s'}}>{st.intro?'Start':st.k}</span><span style={{width:k===i?28:12,height:1,background:k===i?RED:'#fff',transition:'width .4s'}}></span></button>)}
      </div>
      {i===0&&<div style={{position:'absolute',zIndex:4,left:0,right:0,justifyContent:'center',pointerEvents:'none',bottom:28,display:'flex',alignItems:'center',gap:12,fontSize:11,letterSpacing:'.3em',color:'rgba(255,255,255,.8)',animation:'v4Rise 1s var(--ease-out) .6s both'}}>SCROLL TO BUILD<Icon name="arrow-down" size={14} color="#fff"/></div>}
      <div style={{position:'absolute',zIndex:4,left:0,right:0,bottom:0,height:4,background:'rgba(255,255,255,.12)'}}><div ref={fill} style={{position:'absolute',inset:0,background:RED,transformOrigin:'left',transform:'scaleX(0)'}}></div></div>
    </div></section>;
}

function AskUs(){return <button onClick={()=>go('contact')} style={{position:'fixed',right:20,bottom:20,zIndex:60,display:'flex',alignItems:'center',gap:10,padding:'15px 20px',background:RED,color:'#fff',border:'none',fontFamily:'var(--font-sans)',fontSize:13,fontWeight:600,letterSpacing:'.14em',textTransform:'uppercase',cursor:'pointer',boxShadow:'0 10px 30px rgba(0,0,0,.25)'}}><Icon name="message-circle" size={17} color="#fff"/>Ask us</button>;}
Object.assign(window,{Header,BuildHero,AskUs});
