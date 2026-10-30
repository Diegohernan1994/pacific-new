const usd=v=>'$'+Math.round(v).toLocaleString();
const pmt=(P,apr,yrs)=>{const r=apr/100/12,n=yrs*12;return r?P*r/(1-Math.pow(1+r,-n)):P/n;};
const PRESETS=[['Garage conversion',95000,1900],['JADU',70000,1500],['Detached 1-bed',220000,2600],['Detached 2-bed',310000,3300],['Second-story ADU',340000,3200],['Kitchen remodel',65000,0]];

function Slider({label,value,min,max,step,onChange,fmt=v=>v,dark}){
  return <div><div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:14}}><span style={{...LAB,color:dark?'rgba(255,255,255,.55)':'var(--text-muted)'}}>{label}</span><span style={{fontSize:17,fontWeight:500}}>{fmt(value)}</span></div>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e=>onChange(+e.target.value)} style={{width:'100%',accentColor:'#AB0000'}}/>
    <div style={{display:'flex',justifyContent:'space-between',fontSize:12,color:dark?'rgba(255,255,255,.45)':'var(--text-muted)',marginTop:6}}><span>{fmt(min)}</span><span>{fmt(max)}</span></div></div>;
}
const chipS=(on,dark)=>({padding:'12px 16px',border:'1px solid '+(on?(dark?'#fff':'var(--pw-ink)'):(dark?'rgba(255,255,255,.2)':'var(--border-hairline)')),background:on?(dark?'#fff':'var(--pw-ink)'):'transparent',color:on?(dark?'var(--pw-ink)':'#fff'):(dark?'#fff':'var(--pw-ink)'),fontFamily:'var(--font-sans)',fontSize:13,cursor:'pointer',whiteSpace:'nowrap',transition:'all .25s'});

function FinHero(){
  return <PageHero slot="fin-hero" img={STK+'s09.jpg'} h="92vh" crumbs={[['Financing']]} kicker="ADU & remodel financing" title="Build now. Pay over time. Start with $0 down." lead="We work with lending partners who finance the full project, from design and permits to the final coat of paint, so you don’t have to drain savings or wait to build." ctas={[<Btn key="a" onClick={()=>go('prequal')}>Check my options</Btn>,<Btn key="b" ghost onClick={()=>go('planner')} style={{color:'#fff'}}>Estimate my payment</Btn>]}>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))',gap:24,marginTop:56,paddingTop:28,borderTop:'1px solid rgba(255,255,255,.2)',maxWidth:900,animation:'v4Rise .9s var(--ease-out) 320ms both'}}>
      {[['$0 down','options for qualified owners'],['Up to 30 yrs','fixed-rate terms available'],['One loan','design, permits and build']].map(([a,b])=><div key={a}><div style={{fontSize:'clamp(26px,2.4vw,38px)',fontWeight:600,letterSpacing:'-0.01em'}}>{a}</div><div style={{fontSize:14,fontWeight:300,color:'rgba(255,255,255,.75)',marginTop:6}}>{b}</div></div>)}</div>
  </PageHero>;
}

function AmortChart({P,apr,yrs,rent}){
  const W=600,H=200,r=apr/100/12,m=pmt(P,apr,yrs);const pts=[];let b=P;
  for(let y=0;y<=yrs;y++){pts.push([y,b]);for(let k=0;k<12&&y<yrs;k++){b=b*(1+r)-m;}}
  const x=y=>y/yrs*W,yv=v=>H-Math.max(0,v)/P*H;
  const d=pts.map(([a,v],k)=>(k?'L':'M')+x(a).toFixed(1)+' '+yv(v).toFixed(1)).join(' ');
  const be=rent>0?Math.min(yrs,P/(rent*12)):null;
  return <svg viewBox={`-4 -10 ${W+8} ${H+40}`} style={{width:'100%',height:'auto',display:'block'}}>
    {[0,.25,.5,.75,1].map(f=><line key={f} x1="0" x2={W} y1={H-f*H} y2={H-f*H} stroke="rgba(255,255,255,.08)"/>)}
    <path d={d+` L ${W} ${H} L 0 ${H} Z`} fill="rgba(171,0,0,.25)"/><path d={d} fill="none" stroke="#ff6b6b" strokeWidth="2"/>
    {be&&be<yrs&&<g><line x1={x(be)} x2={x(be)} y1="0" y2={H} stroke="#fff" strokeDasharray="4 4" opacity=".6"/><text x={x(be)+8} y="14" fill="#fff" fontSize="12" fontFamily="var(--font-sans)">Rent has covered the loan amount · yr {be.toFixed(1)}</text></g>}
    {[0,Math.round(yrs/2),yrs].map(y=><text key={y} x={x(y)} y={H+24} fill="rgba(255,255,255,.5)" fontSize="12" textAnchor={y===0?'start':y===yrs?'end':'middle'} fontFamily="var(--font-sans)">Year {y}</text>)}
  </svg>;
}

function Planner(){
  const [pre,setPre]=React.useState(2);const [cost,setCost]=React.useState(220000);const [down,setDown]=React.useState(0);const [apr,setApr]=React.useState(8.99);const [yrs,setYrs]=React.useState(20);const [useRent,setUseRent]=React.useState(true);const [rent,setRent]=React.useState(2600);
  const pick=k=>{setPre(k);setCost(PRESETS[k][1]);if(PRESETS[k][2]){setRent(PRESETS[k][2]);setUseRent(true);}else setUseRent(false);};
  const P=cost*(1-down/100);const m=pmt(P,apr,yrs);const tot=m*yrs*12;const R=useRent?rent:0;const net=m-R;const cov=R?Math.min(100,R/m*100):0;
  return <section id="planner" style={{...SEC,background:'#fff'}}>
    <SecHead kicker="Payment planner" title="See what your monthly payment could be" aside="Move the sliders to model your project. Add expected rent to see how much of the payment your ADU can carry."/>
    <div className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.1fr)',gap:'clamp(32px,4vw,64px)',alignItems:'stretch'}}>
      <div style={{display:'flex',flexDirection:'column',gap:40}}>
        <div><div style={{...LAB,marginBottom:14}}>Start from a typical project</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{PRESETS.map(([n],k)=><button key={n} onClick={()=>pick(k)} style={chipS(k===pre)}>{n}</button>)}</div></div>
        <Slider label="Project cost" value={cost} min={50000} max={500000} step={5000} onChange={v=>{setCost(v);setPre(-1)}} fmt={usd}/>
        <Slider label="Down payment" value={down} min={0} max={30} step={5} onChange={setDown} fmt={v=>v===0?'$0 down':v+'% · '+usd(cost*v/100)}/>
        <Slider label="Interest rate (APR)" value={apr} min={6} max={12} step={0.25} onChange={setApr} fmt={v=>v.toFixed(2)+'%'}/>
        <div><div style={{...LAB,marginBottom:14}}>Loan term</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{[10,15,20,25,30].map(y=><button key={y} onClick={()=>setYrs(y)} style={chipS(y===yrs)}>{y} years</button>)}</div></div>
        <div style={{paddingTop:28,borderTop:'1px solid var(--border-hairline)'}}>
          <label style={{display:'flex',alignItems:'center',gap:12,cursor:'pointer',marginBottom:24,fontSize:15}}><input type="checkbox" checked={useRent} onChange={e=>setUseRent(e.target.checked)} style={{width:18,height:18,accentColor:'#AB0000'}}/>I plan to rent out the ADU</label>
          {useRent&&<Slider label="Expected monthly rent" value={rent} min={1200} max={4500} step={50} onChange={setRent} fmt={usd}/>}
        </div>
      </div>
      <div style={{background:'var(--pw-black)',color:'#fff',padding:'clamp(32px,4vw,56px)',display:'flex',flexDirection:'column',gap:32}}>
        <div><div style={{...LAB,color:'rgba(255,255,255,.55)'}}>Estimated monthly payment</div>
          <div style={{fontSize:'clamp(48px,5.4vw,88px)',fontWeight:600,letterSpacing:'-0.03em',lineHeight:1,marginTop:14}}>{usd(m)}<span style={{fontSize:18,fontWeight:300,marginLeft:10,letterSpacing:0}}>/ mo</span></div>
          <div style={{fontSize:14,fontWeight:300,color:'rgba(255,255,255,.7)',marginTop:12}}>{usd(P)} financed · {apr.toFixed(2)}% APR · {yrs} years</div></div>
        {useRent&&<div style={{display:'flex',flexDirection:'column',gap:14}}>
          {[['Loan payment',m,'#fff'],['Rent income',R,RED]].map(([l,v,c])=><div key={l}><div style={{display:'flex',justifyContent:'space-between',fontSize:13,marginBottom:8}}><span style={{color:'rgba(255,255,255,.7)'}}>{l}</span><span>{usd(v)}</span></div><div style={{height:10,background:'rgba(255,255,255,.08)'}}><div style={{height:'100%',width:Math.min(100,v/Math.max(m,R)*100)+'%',background:c,transition:'width .5s var(--ease-out)'}}></div></div></div>)}
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:16,paddingTop:18,borderTop:'1px solid rgba(255,255,255,.15)',marginTop:6}}>
            <div><div style={{...LAB,color:'rgba(255,255,255,.55)'}}>{net>0?'Your net cost':'Monthly cash flow'}</div><div style={{fontSize:'clamp(28px,2.6vw,40px)',fontWeight:600,marginTop:8,color:net>0?'#fff':'#7fd18b'}}>{net>0?usd(net):'+'+usd(-net)}<span style={{fontSize:14,fontWeight:300,marginLeft:6}}>/ mo</span></div></div>
            <div style={{textAlign:'right'}}><div style={{...LAB,color:'rgba(255,255,255,.55)'}}>Rent covers</div><div style={{fontSize:'clamp(28px,2.6vw,40px)',fontWeight:600,marginTop:8}}>{Math.round(cov)}%</div></div></div>
        </div>}
        <div><div style={{...LAB,color:'rgba(255,255,255,.55)',marginBottom:14}}>Loan balance over time</div><AmortChart P={P} apr={apr} yrs={yrs} rent={R}/></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,fontSize:14}}>
          <div><div style={{color:'rgba(255,255,255,.55)'}}>Total interest</div><div style={{fontSize:18,marginTop:6}}>{usd(tot-P)}</div></div>
          <div><div style={{color:'rgba(255,255,255,.55)'}}>Total paid</div><div style={{fontSize:18,marginTop:6}}>{usd(tot+cost*down/100)}</div></div></div>
        <div style={{marginTop:'auto',display:'flex',gap:10,flexWrap:'wrap'}}><Btn onClick={()=>go('prequal')}>Check my real rate <Arrow color="#fff"/></Btn></div>
        <p style={{margin:0,fontSize:12,fontWeight:300,lineHeight:1.6,color:'rgba(255,255,255,.5)'}}>For illustration only. Principal and interest; excludes taxes, insurance and fees. Rates, terms and approval depend on the lender, your credit and your property. Rent figures are estimates, not guarantees.</p>
      </div>
    </div></section>;
}
Object.assign(window,{usd,pmt,Slider,chipS,FinHero,Planner});
