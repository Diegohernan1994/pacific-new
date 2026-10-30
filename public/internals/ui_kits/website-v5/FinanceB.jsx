const FOPTS=[
  {n:'$0 down ADU financing',tag:'Our most-used option',d:'A construction loan from our lending partners that funds the full ADU, often based on what the property will be worth once the ADU is finished. Money is released to us in stages as work passes inspection.',
    row:['$0 available','Future value with ADU','Fixed','No','2–4 weeks','Owners with limited equity'],pros:['No savings needed to start','Can borrow against the finished value','One loan covers design, permits and build'],cons:['Credit and income requirements apply','Rates can be higher than a refinance']},
  {n:'HELOC',tag:'Home equity line of credit',d:'A revolving line secured by the equity you already have. You draw what you need as construction progresses and pay interest only on what you have used.',
    row:['None','Current equity','Usually variable','No','2–6 weeks','Owners with strong equity'],pros:['Pay interest only on what you draw','Keeps your first mortgage rate','Flexible for phased projects'],cons:['Limited to existing equity','Variable rate can rise']},
  {n:'Cash-out refinance',tag:'Replace your mortgage with a larger one',d:'Refinance your first mortgage for more than you owe and use the difference to build. Works best when today’s rates are close to, or lower than, your current rate.',
    row:['None','Current equity','Fixed or adjustable','Yes','3–6 weeks','Owners with a higher current rate'],pros:['One payment for house and ADU','Long fixed terms available'],cons:['Replaces a possibly lower existing rate','Closing costs on the full balance']},
  {n:'Renovation loan',tag:'Construction-to-permanent',d:'Programs such as FHA 203(k) and conventional renovation loans lend against the after-renovation value, then convert to a standard mortgage when the project is done.',
    row:['Low, program-based','After-renovation value','Fixed','Yes','4–8 weeks','Buyers and major remodels'],pros:['Borrow against future value','Single closing'],cons:['More paperwork and inspections','Program limits on loan size']},
  {n:'Cash & milestone payments',tag:'Pay as we build',d:'Pay directly from savings on a milestone schedule tied to construction stages. No lender, no interest, and you only pay for work that has been completed.',
    row:['Per milestone','—','—','No','Immediate','Owners paying from savings'],pros:['No interest or loan costs','Fastest start'],cons:['Ties up savings during the build']}
];
const ROWS=['Money down','Based on','Rate type','Replaces mortgage','Typical approval','Best for'];

function FinOptions(){
  const [a,setA]=React.useState(0);const o=FOPTS[a];
  return <section id="options" style={{...SEC,background:'var(--pw-stone-50)'}}>
    <SecHead kicker="Ways to pay" title="Five ways to finance your project" aside="We help you compare options with our lending partners and your own bank. Many clients combine two, such as a HELOC plus cash."/>
    <div style={{display:'flex',gap:0,flexWrap:'wrap',borderBottom:'1px solid var(--pw-ink)'}}>
      {FOPTS.map((f,k)=><button key={f.n} onClick={()=>setA(k)} style={{padding:'18px 22px',background:k===a?'var(--pw-ink)':'transparent',color:k===a?'#fff':'var(--pw-ink)',border:'none',fontFamily:'var(--font-sans)',fontSize:13,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',cursor:'pointer',transition:'all .25s'}}>{f.n}</button>)}</div>
    <div key={a} className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1.2fr) minmax(0,1fr)',gap:'clamp(32px,5vw,88px)',padding:'clamp(40px,5vw,72px) 0',animation:'v4Rise .7s var(--ease-out) both'}}>
      <div><div style={{fontFamily:'var(--font-serif-display)',fontStyle:'italic',fontSize:26,color:RED}}>{o.tag}</div><H size="clamp(30px,3.2vw,52px)" style={{marginTop:14}}>{o.n}</H><p style={{...P,marginTop:22,maxWidth:560,fontSize:17}}>{o.d}</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))',gap:32,marginTop:40}}>
          {[['Advantages',o.pros,'check',RED],['Consider',o.cons,'info','var(--pw-stone-500)']].map(([h,l,i,c])=><div key={h}><div style={{...LAB,marginBottom:14}}>{h}</div>{l.map(p=><div key={p} style={{display:'flex',gap:12,padding:'12px 0',borderTop:'1px solid var(--border-hairline)',fontSize:15,lineHeight:1.5}}><Icon name={i} size={17} color={c} style={{marginTop:2}}/>{p}</div>)}</div>)}</div></div>
      <div style={{background:'#fff',padding:'clamp(28px,3vw,44px)',alignSelf:'start'}}>{ROWS.map((r,k)=><div key={r} style={{display:'flex',justifyContent:'space-between',gap:20,padding:'16px 0',borderTop:k?'1px solid var(--border-hairline)':'none'}}><span style={LAB}>{r}</span><span style={{fontSize:15,fontWeight:500,textAlign:'right'}}>{o.row[k]}</span></div>)}
        <Btn onClick={()=>go('prequal')} style={{marginTop:24,width:'100%',justifyContent:'center'}}>Check if I qualify</Btn></div>
    </div>
    <Reveal><div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:900,borderCollapse:'collapse',fontSize:14}}>
      <thead><tr><th style={{...LAB,textAlign:'left',padding:'0 16px 16px 0',borderBottom:'1px solid var(--pw-ink)'}}>Compare</th>{FOPTS.map((f,k)=><th key={f.n} onClick={()=>setA(k)} style={{textAlign:'left',padding:'0 16px 16px 0',borderBottom:'1px solid var(--pw-ink)',fontSize:13,fontWeight:600,textTransform:'uppercase',letterSpacing:'.04em',cursor:'pointer',color:k===a?RED:'var(--pw-ink)'}}>{f.n}</th>)}</tr></thead>
      <tbody>{ROWS.map((r,i)=><tr key={r} style={{borderBottom:'1px solid var(--border-hairline)'}}><td style={{...LAB,padding:'18px 16px 18px 0'}}>{r}</td>{FOPTS.map((f,k)=><td key={k} style={{padding:'18px 16px 18px 0',fontWeight:k===a?500:300,background:k===a?'rgba(171,0,0,.05)':'transparent'}}>{f.row[i]}</td>)}</tr>)}</tbody></table></div></Reveal>
  </section>;
}

const DRAWS=[['Permits & mobilization',10,'Plans approved, permit pulled, site set up.','build/02-site-prep.jpg'],['Foundation',15,'Footings and slab poured and inspected.','build/03-foundation.jpg'],['Framing',20,'Walls, shear and roof structure signed off.','build/04-framing.jpg'],['Enclosure & rough-in',25,'Roof, windows, plumbing, electrical and HVAC inspected.','build/06-rough-in.jpg'],['Finishes',20,'Drywall, cabinets, flooring, paint and fixtures.','build/07-interior.jpg'],['Final & move-in',10,'Final inspection and certificate of occupancy.','build/08-completed.jpg']];
function DrawSchedule(){
  const [a,setA]=React.useState(0);let cum=0;const cums=DRAWS.map(d=>cum+=d[1]);const d=DRAWS[a];
  return <section style={{...SEC,background:'var(--pw-black)',color:'#fff'}}>
    <SecHead dark kicker="How the money moves" title="You never pay ahead of the work" aside="Loan funds are released in draws. Each draw is tied to a construction stage the city has inspected, so payments follow real progress."/>
    <div style={{display:'flex',height:64,gap:3}}>{DRAWS.map(([n,p],k)=><button key={n} onClick={()=>setA(k)} onMouseEnter={()=>setA(k)} style={{flex:p,background:k<=a?RED:'rgba(255,255,255,.1)',border:'none',color:'#fff',fontFamily:'var(--font-sans)',fontSize:14,fontWeight:600,cursor:'pointer',transition:'background .4s',minWidth:0}}>{p}%</button>)}</div>
    <div style={{display:'flex',gap:3,marginTop:12}}>{DRAWS.map(([n,p],k)=><div key={n} style={{flex:p,fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:k===a?'#fff':'rgba(255,255,255,.45)',minWidth:0,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{n}</div>)}</div>
    <div key={a} className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:'clamp(32px,5vw,88px)',marginTop:'clamp(40px,5vw,72px)',alignItems:'center',animation:'v4Rise .7s var(--ease-out) both'}}>
      <img src={IMG+d[3]} alt="" style={{width:'100%',aspectRatio:'16/10',objectFit:'cover',display:'block'}}/>
      <div><div style={{fontSize:13,fontWeight:500,color:'#ff6b6b'}}>Draw {String(a+1).padStart(2,'0')} / 06</div><H color="#fff" size="clamp(30px,3.2vw,52px)" style={{marginTop:16}}>{d[0]}</H><p style={{margin:'18px 0 0',fontSize:17,fontWeight:300,lineHeight:1.7,color:'rgba(255,255,255,.8)'}}>{d[2]}</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,marginTop:36,paddingTop:24,borderTop:'1px solid rgba(255,255,255,.15)'}}>
          <div><div style={{...LAB,color:'rgba(255,255,255,.5)'}}>This draw</div><div style={{fontSize:40,fontWeight:600,marginTop:8}}>{d[1]}%</div></div>
          <div><div style={{...LAB,color:'rgba(255,255,255,.5)'}}>Released to date</div><div style={{fontSize:40,fontWeight:600,marginTop:8}}>{cums[a]}%</div></div></div></div>
    </div>
    <p style={{margin:'40px 0 0',fontSize:12,fontWeight:300,color:'rgba(255,255,255,.5)'}}>Example schedule. Exact draw percentages are set in your construction contract and loan agreement.</p>
  </section>;
}

function FinSteps(){
  const s=[['Prequalify','Answer a few questions below. A financing specialist reviews your options with you.'],['Site visit & fixed quote','We visit your property and give you a written, itemized price for the lender.'],['Approval & appraisal','The lender appraises the property, often including the value the ADU will add.'],['Build in stages','Funds are released in draws as each inspected stage is complete.'],['Move in, then repay','Your regular payment schedule starts on the terms you approved.']];
  return <section style={{...SEC,background:'#fff'}}>
    <SecHead kicker="The process" title="From first question to first payment"/>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))',gap:'40px 28px'}}>
      {s.map(([t,d],k)=><Reveal key={t} delay={k*90} style={{borderTop:'1px solid var(--pw-ink)',paddingTop:28}}><div style={{fontSize:'clamp(40px,3.6vw,60px)',fontWeight:600,color:RED,lineHeight:1,letterSpacing:'-0.02em'}}>{k+1}</div><div style={{fontSize:18,fontWeight:600,textTransform:'uppercase',marginTop:22}}>{t}</div><p style={{...P,fontSize:14,marginTop:10}}>{d}</p></Reveal>)}</div>
  </section>;
}

function FinChecklist(){
  const look=[['gauge','Credit','Most programs look for scores in the mid-600s or higher.'],['home','Property value & equity','What the home is worth today, and with the ADU.'],['briefcase','Income','Debt-to-income ratio, and in some programs, projected rent.'],['file-text','Plans & quote','A licensed contractor’s itemized quote and permit plans. We provide both.']];
  const docs=['Government-issued photo ID','Last two years of tax returns','Recent pay stubs or 1099s','Two months of bank statements','Current mortgage statement','Homeowners insurance declaration','Property tax bill','Pacific West quote and plans (we send these)'];
  const [chk,setChk]=React.useState({});
  return <section className="pg-2" style={{...SEC,background:'var(--pw-stone-50)',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:'64px clamp(32px,6vw,120px)'}}>
    <div><Reveal><Kicker>What lenders look at</Kicker><H size="clamp(28px,3vw,48px)" style={{marginTop:28}}>Four things decide your terms</H></Reveal>
      <div style={{marginTop:40}}>{look.map(([i,t,d],k)=><Reveal key={t} delay={k*80}><div style={{display:'flex',gap:20,padding:'24px 0',borderTop:'1px solid var(--border-hairline)'}}><Icon name={i} size={24} color={RED}/><div><div style={{fontSize:17,fontWeight:600,textTransform:'uppercase'}}>{t}</div><p style={{...P,fontSize:14,marginTop:6}}>{d}</p></div></div></Reveal>)}</div></div>
    <div><Reveal><Kicker>Get ready</Kicker><H size="clamp(28px,3vw,48px)" style={{marginTop:28}}>Documents checklist</H></Reveal>
      <div style={{background:'#fff',padding:'clamp(24px,3vw,40px)',marginTop:40}}>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:13,marginBottom:12}}><span style={LAB}>Your progress</span><span style={{fontWeight:500}}>{Object.values(chk).filter(Boolean).length} / {docs.length}</span></div>
        <div style={{height:4,background:'var(--pw-stone-100)',marginBottom:16}}><div style={{height:'100%',width:Object.values(chk).filter(Boolean).length/docs.length*100+'%',background:RED,transition:'width .4s'}}></div></div>
        {docs.map((d,k)=><label key={d} style={{display:'flex',gap:14,alignItems:'center',padding:'14px 0',borderTop:'1px solid var(--border-hairline)',fontSize:15,cursor:'pointer',color:chk[k]?'var(--text-muted)':'var(--pw-ink)',textDecoration:chk[k]?'line-through':'none'}}><input type="checkbox" checked={!!chk[k]} onChange={e=>setChk({...chk,[k]:e.target.checked})} style={{width:18,height:18,accentColor:'#AB0000',flex:'none'}}/>{d}</label>)}</div></div>
  </section>;
}

function Prequal(){
  const [st,setSt]=React.useState(0);const [f,setF]=React.useState({proj:'Detached ADU',budget:'$200k–$350k',when:'Within 3 months',val:1100000,bal:450000,credit:'Good · 680–739'});
  const set=(k,v)=>setF({...f,[k]:v});const eq=Math.max(0,f.val*.85-f.bal);
  const grp=(k,label,opts)=><div><div style={{...LAB,color:'rgba(255,255,255,.55)',marginBottom:14}}>{label}</div><div style={{display:'flex',flexWrap:'wrap',gap:8}}>{opts.map(o=><button type="button" key={o} onClick={()=>set(k,o)} style={chipS(f[k]===o,true)}>{o}</button>)}</div></div>;
  const steps=['Project','Property','Contact'];
  return <section id="prequal" className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,.8fr) minmax(0,1.2fr)',background:'var(--pw-black)',color:'#fff'}}>
    <div style={{position:'relative',minHeight:520}}><image-slot id="fin-prequal" shape="rect" fit="cover" src={IMG+'build/11-kitchen.jpg'} placeholder="Financing photo"></image-slot>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,0,0,.1),rgba(0,0,0,.75))',pointerEvents:'none'}}></div>
      <div style={{position:'absolute',left:PAD,right:PAD,bottom:PAD,pointerEvents:'none'}}><Kicker color="#fff" line={RED}>Prequalify</Kicker><H color="#fff" size="clamp(32px,3.6vw,60px)" style={{marginTop:24}}>Find your financing in three steps</H><p style={{margin:'20px 0 0',fontSize:15,fontWeight:300,lineHeight:1.7,color:'rgba(255,255,255,.85)',maxWidth:420}}>Takes about two minutes. Sending this form does not run your credit.</p></div></div>
    <div style={{padding:`clamp(56px,7vw,104px) ${PAD}`}}>
      {st<3&&<div style={{display:'flex',gap:8,marginBottom:48}}>{steps.map((s,k)=><div key={s} style={{flex:1}}><div style={{height:3,background:k<=st?RED:'rgba(255,255,255,.15)',transition:'background .4s'}}></div><div style={{fontSize:11,letterSpacing:'.18em',textTransform:'uppercase',marginTop:12,color:k<=st?'#fff':'rgba(255,255,255,.45)'}}>{String(k+1).padStart(2,'0')} {s}</div></div>)}</div>}
      <div key={st} style={{display:'flex',flexDirection:'column',gap:36,animation:'v4Rise .6s var(--ease-out) both'}}>
        {st===0&&<>{grp('proj','What are you building?',[...TYPES.map(t=>t.n),'Remodel','ADU + remodel'])}{grp('budget','Estimated budget',['Under $100k','$100k–$200k','$200k–$350k','$350k+','Not sure'])}{grp('when','When do you want to start?',['Within 3 months','3–6 months','6–12 months','Just exploring'])}</>}
        {st===1&&<><Slider dark label="Estimated home value" value={f.val} min={400000} max={3000000} step={25000} onChange={v=>set('val',v)} fmt={usd}/><Slider dark label="Remaining mortgage balance" value={f.bal} min={0} max={2000000} step={10000} onChange={v=>set('bal',v)} fmt={usd}/>
          <div style={{border:'1px solid rgba(255,255,255,.15)',padding:'24px 28px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}><div><div style={{...LAB,color:'rgba(255,255,255,.55)'}}>Estimated usable equity</div><div style={{fontSize:12,fontWeight:300,color:'rgba(255,255,255,.5)',marginTop:6}}>At 85% combined loan-to-value</div></div><div style={{fontSize:'clamp(30px,3vw,44px)',fontWeight:600}}>{usd(eq)}</div></div>
          {grp('credit','Credit score range',['Excellent · 740+','Good · 680–739','Fair · 620–679','Not sure'])}</>}
        {st===2&&<form id="pq" onSubmit={e=>{e.preventDefault();setSt(3)}} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,background:'#fff',padding:28,color:'var(--pw-ink)'}}>
          <PW.TextField label="Full name" required/><PW.TextField label="Phone" type="tel" required/><PW.TextField label="Email" type="email" style={{gridColumn:'1/-1'}}/><PW.TextField label="Property address" style={{gridColumn:'1/-1'}}/>
          <div style={{gridColumn:'1/-1'}}><PW.Checkbox defaultChecked label="I agree to be contacted about financing and my project."/></div></form>}
        {st===3&&<div><Icon name="circle-check" size={44} color={RED}/><H color="#fff" size="clamp(32px,3.4vw,52px)" style={{marginTop:24}}>Thank you</H><p style={{margin:'20px 0 0',fontSize:16,fontWeight:300,lineHeight:1.7,color:'rgba(255,255,255,.8)',maxWidth:480}}>A financing specialist will call you to review options for your {f.proj.toLowerCase()}. In the meantime, gather the documents on the checklist above.</p></div>}
      </div>
      {st<3&&<div style={{display:'flex',justifyContent:'space-between',gap:12,marginTop:48,flexWrap:'wrap'}}>
        {st>0?<Btn ghost onClick={()=>setSt(st-1)} style={{color:'#fff'}}>Back</Btn>:<span></span>}
        {st<2?<Btn onClick={()=>setSt(st+1)}>Continue <Arrow color="#fff"/></Btn>:<button form="pq" type="submit" style={{display:'inline-flex',alignItems:'center',gap:12,fontFamily:'var(--font-sans)',fontSize:12,fontWeight:600,letterSpacing:'.18em',textTransform:'uppercase',padding:'17px 26px',border:'none',background:RED,color:'#fff',cursor:'pointer'}}>Send to a specialist <Arrow color="#fff"/></button>}</div>}
    </div></section>;
}

const FINFAQ=[['Can I really start with $0 down?','Yes, for qualified homeowners. Some partner programs lend against the projected value of your home with the ADU, which can cover the full project cost without cash up front.'],['Does checking my options affect my credit?','Sending our form does not run your credit. A lender will ask permission before any credit check.'],['Can projected rent help me qualify?','Some programs count a portion of expected ADU rent as income. Your specialist will tell you which ones do.'],['When do payments start?','It depends on the loan. Some construction loans are interest-only during the build, with full payments starting after completion.'],['Can I finance a remodel with my ADU?','Yes. Many clients add a kitchen or bath update to the same loan while our crews are on site.'],['Do you work with my own bank?','Yes. We provide the itemized quote, plans and draw schedule any lender needs.']];

function FinancingPage(){
  return <div>
    <SiteHeader active="fin"/>
    <FinHero/>
    <Planner/>
    <FinOptions/>
    <DrawSchedule/>
    <FinSteps/>
    <FinChecklist/>
    <Prequal/>
    <FAQ items={FINFAQ} title="Financing questions" bg="#fff"/>
    <section style={{padding:`32px ${PAD} 56px`,background:'#fff'}}><p style={{margin:0,fontSize:12,fontWeight:300,lineHeight:1.7,color:'var(--text-muted)',maxWidth:900}}>Pacific West Home Builders is a licensed general contractor (License #1111181), not a lender. Financing is provided by third-party lenders and is subject to credit approval, property eligibility and lender terms. Examples on this page are illustrative and are not an offer of credit.</p></section>
    <SiteFooter/><FloatCTA/>
  </div>;
}
Object.assign(window,{FinancingPage});
