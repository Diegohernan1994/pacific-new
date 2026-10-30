const G=IMG+'gallery/';
const INCL=[['map-pin','Site visit & feasibility','Setbacks, utilities, easements and zoning checked on your lot.'],['ruler','Architectural plans','Floor plan, elevations, 3D views and finish selections.'],['calculator','Engineering','Structural, Title 24 energy and soils, coordinated in-house.'],['file-check','Plan check & permits','We submit, answer corrections and pull the permit.'],['plug','Utility connections','Water, sewer, gas and electrical tie-ins or new meters.'],['hammer','Construction','Our own crews, with a project lead on site and weekly updates.'],['clipboard-check','Inspections','We meet the city inspector at every stage through final.'],['key-round','Walkthrough & warranty','Certificate of occupancy, punch list and handover.']];
const ADX={
  detached:{time:'6–9 months',hero:IMG+'clean/adu-exterior-aerial.png',plans:[['Studio',400],['1 bed · 1 bath',600],['2 bed · 2 bath',900]],
    long:'A detached ADU is a new, freestanding home behind or beside your main house. It has its own foundation, utilities, entry and outdoor space, so tenants or family live independently. Because it is a full new structure, it gives you the most freedom in layout and the strongest rental value.',
    pros:['Full privacy for both households','Highest rental income of any ADU type','Flexible layout from studio to two bedrooms','Can include a porch, patio or private yard'],
    cons:['Needs the most yard space','New foundation and utility trenching add cost','Longest build of the ground-level options'],
    gal:['02.png','01.png','12.png','15.png','11.png','17.png'],
    faq:[['How much yard do I need?','State law allows 4 ft side and rear setbacks for most ADUs. A 600 sq ft unit typically needs a clear area of roughly 25 × 30 ft plus access for equipment.'],['Can it have its own address?','Yes. Most cities assign a separate unit number, and you can add a separate electric meter if you want tenants billed directly.'],['Can I build two bedrooms?','Yes. Detached ADUs can go up to 1,200 sq ft in most jurisdictions, which fits two bedrooms and two baths comfortably.']]},
  attached:{time:'6–9 months',hero:IMG+'types/attached-adu.jpg',plans:[['Studio',350],['1 bed · 1 bath',550],['2 bed · 1 bath',800]],
    long:'An attached ADU is an addition built onto the side or rear of your home with its own front door, kitchen and bath. It shares one wall with the main house but no interior living space. Tying into existing utilities and roof lines keeps site work lower than a detached unit.',
    pros:['Shorter utility runs, lower site cost','Keeps more of the backyard open','Close by for family who may need help','Can match the main house exterior'],
    cons:['Shared wall means more sound planning','Size is capped at 50% of the main home in many cities','Work happens next to your living space'],
    gal:['10.png','09.png','15.png','17.png','16.png','07.png'],
    faq:[['Will it look like part of my house?','We match roofline, stucco and windows so it reads as one home from the street, with a separate entry for the unit.'],['Can the two units connect inside?','A connecting door is allowed in most cities as long as each unit can be locked off and has its own entrance.'],['How do you handle noise between units?','Insulated party walls, resilient channel and solid-core doors are standard in our attached ADUs.']]},
  'garage-conversion':{time:'4–6 months',hero:IMG+'types/garage-conversion.jpg',plans:[['One-car garage',250],['Two-car garage',400],['Two-car + extension',550]],
    long:'A garage conversion turns an existing attached or detached garage into a legal living unit. We reuse the slab and walls where they meet code, then upgrade insulation, re-frame the door opening, and add a kitchen, bath and windows. It is usually the fastest and most affordable route to an ADU.',
    pros:['Lowest cost per square foot','Shortest timeline from permit to move-in','No new footprint on your lot','Parking replacement is not required by state law'],
    cons:['Existing slab may need moisture or level work','Layout is limited by the existing walls','You lose garage storage'],
    gal:['08.png','10.png','04.png','14.png','16.png','12.png'],
    faq:[['Do I need to replace the parking?','No. California does not require replacement parking when a garage is converted to an ADU.'],['Can you keep the existing slab?','Often yes. We test for level, moisture and footing depth during the site visit and only replace what doesn’t pass.'],['Can a garage conversion be expanded?','Yes. Many conversions add a few feet at the back or side to fit a full bedroom.']]},
  jadu:{time:'3–5 months',hero:IMG+'types/jadu.jpg',plans:[['Studio suite',250],['Suite + kitchenette',350],['Maximum JADU',500]],
    long:'A junior ADU is created inside your existing home, usually from a bedroom, wing or part of an attached garage. It has its own exterior entrance and an efficiency kitchen, and can share or have its own bathroom. Because it stays within the existing walls, it is the lightest-touch option.',
    pros:['No new structure or foundation','Quickest permit and build','Lowest total project cost','Can be added alongside a full ADU on the same lot'],
    cons:['Capped at 500 sq ft','Owner must live on the property','Efficiency kitchen only'],
    gal:['07.png','11.png','03.jpg','09.png','18.png','20.png'],
    faq:[['Can I have a JADU and an ADU?','Yes. State law allows one ADU and one JADU on most single-family lots.'],['What is an efficiency kitchen?','A sink, cooking appliance, counter and storage. A full range or separate gas line is not required.'],['Do I have to live on site?','Yes. JADUs require the owner to live in either the main home or the JADU.']]},
  'second-story':{time:'8–12 months',hero:IMG+'types/second-story-adu.jpg',plans:[['Studio over garage',450],['1 bed · 1 bath',650],['2 bed · 2 bath',900]],
    long:'A second-story ADU is built above a detached garage or as an upper level of your home, with its own exterior stair and entry. It adds a full home without using any more yard, which makes it the best fit for smaller lots and for properties with views.',
    pros:['Keeps the whole yard open','Views and natural light','Privacy from the main house','Garage below stays in use'],
    cons:['Structural upgrades to the level below','Height limits vary by city','Highest cost per square foot'],
    gal:['02.png','06.png','05.png','14.png','16.png','19.png'],
    faq:[['Can my garage support a second story?','Usually with new footings and posts. Our engineer checks the existing foundation during design.'],['Is there a height limit?','State law allows at least 16–25 ft for most ADUs depending on location; local rules may allow more.'],['Can I keep using the garage during construction?','Not during the structural phase. We plan around it so the garage is back in use as early as possible.']]}
};
// Sanity content replaces the corresponding ADU copy and image while the
// original page structure and styling remain the same.
(window.PW_CMS?.aduTypes||[]).forEach(t=>{
  if(!ADX[t.key])return;
  ADX[t.key]={...ADX[t.key],time:t.time||t.buildTime,hero:t.hero||t.imageUrl,plans:t.plans||ADX[t.key].plans,long:t.long||t.overview,pros:t.pros||t.benefits||ADX[t.key].pros,cons:t.cons||t.considerations||ADX[t.key].cons,gal:t.gallery?.length?t.gallery:ADX[t.key].gal,faq:t.faq?.length?t.faq:ADX[t.key].faq};
});

function AduRow({t,k}){
  const s=ADU_SLUGS[k];const x=ADX[s];const flip=k%2===1;const [lo]=RATES[t.n];
  return <div className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1.15fr) minmax(0,1fr)',gap:'clamp(32px,5vw,96px)',alignItems:'center',padding:'clamp(48px,6vw,96px) 0',borderTop:'1px solid var(--border-hairline)'}}>
    <Reveal style={{order:flip?2:0}}><a href={U.adu(s)} style={{display:'block',aspectRatio:'5/4',overflow:'hidden',background:'var(--pw-stone-200)'}} onMouseEnter={e=>e.currentTarget.firstChild.style.transform='scale(1.05)'} onMouseLeave={e=>e.currentTarget.firstChild.style.transform='none'}><img src={t.src} alt={t.n} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 1.2s var(--ease-out)'}}/></a></Reveal>
    <Reveal delay={120}>
      <div style={{fontSize:13,fontWeight:500,color:RED}}>{String(k+1).padStart(2,'0')} / 05</div>
      <H size="clamp(30px,3.4vw,56px)" style={{marginTop:18}}>{t.n}</H>
      <div style={{fontFamily:'var(--font-serif-display)',fontStyle:'italic',fontSize:24,color:RED,marginTop:14}}>{t.tag}</div>
      <p style={{...P,marginTop:18,maxWidth:520}}>{t.d}</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:16,marginTop:28,paddingTop:24,borderTop:'1px solid var(--border-hairline)'}}>
        {[['Size',t.size],['Build time',x.time],['From',`$${lo}/sq ft`]].map(([l,v])=><div key={l}><div style={LAB}>{l}</div><div style={{fontSize:15,marginTop:8,lineHeight:1.4}}>{v}</div></div>)}</div>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:32}}><Btn dark href={U.adu(s)}>Explore {t.n}</Btn></div>
    </Reveal></div>;
}

function AdusPage(){
  const why=[['wallet','Rental income','A one-bedroom ADU can rent for a meaningful share of a typical mortgage payment in most of Los Angeles County.'],['users','Family close by','Room for aging parents, adult kids or a caregiver, with a door that locks on both sides.'],['trending-up','Property value','A permitted second home on the lot adds square footage and flexibility buyers pay for.']];
  return <div>
    <SiteHeader active="adus"/>
    <PageHero slot="adus-hero" img={IMG+'clean/adu-exterior-aerial.png'} crumbs={[['ADUs']]} kicker="Accessory dwelling units" title="A second home on your lot, designed, permitted and built by one team" lead="Five ADU types, one process. We start with a free site visit and tell you exactly what your property can hold." ctas={[<Btn key="a" onClick={()=>go('compare')}>Compare ADU types</Btn>,<Btn key="b" ghost onClick={()=>go('calculator')} style={{color:'#fff'}}>Estimate my cost</Btn>]}/>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="Why build an ADU" title="One project, three ways it pays back"/>
      <div className="v5-icon-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))',gap:'40px clamp(24px,4vw,64px)'}}>
        {why.map(([i,t,d],k)=><Reveal key={t} delay={k*100} style={{borderTop:'1px solid var(--pw-ink)',paddingTop:28}}><Icon name={i} size={28} color={RED}/><div style={{fontSize:22,fontWeight:600,textTransform:'uppercase',marginTop:24}}>{t}</div><p style={{...P,marginTop:12}}>{d}</p></Reveal>)}
      </div></section>
    <section style={{padding:`0 ${PAD} clamp(48px,6vw,96px)`,background:'#fff'}}>
      <SecHead kicker="ADU types" title="Five ways to add a home" aside="Each type has its own page with floor plan sizes, pricing, timeline and the trade-offs to know before you decide."/>
      {TYPES.map((t,k)=><AduRow key={t.n} t={t} k={k}/>)}
    </section>
    <section id="compare" style={{...SEC,background:'var(--pw-stone-50)'}}>
      <SecHead kicker="Side by side" title="Compare ADU types"/>
      <Reveal><div style={{overflowX:'auto'}}><table style={{width:'100%',minWidth:860,borderCollapse:'collapse',fontSize:15}}>
        <thead><tr>{['Type','Size','Where','Build time','Est. per sq ft','Best for'].map(h=><th key={h} style={{...LAB,textAlign:'left',padding:'0 16px 18px 0',borderBottom:'1px solid var(--pw-ink)'}}>{h}</th>)}</tr></thead>
        <tbody>{TYPES.map((t,k)=>{const s=ADU_SLUGS[k];const [lo,hi]=RATES[t.n];return <tr key={t.n} style={{borderBottom:'1px solid var(--border-hairline)'}}>
          <td style={{padding:'22px 16px 22px 0'}}><a href={U.adu(s)} style={{fontWeight:600,textTransform:'uppercase',display:'flex',alignItems:'center',gap:8}}>{t.n}<Arrow size={14}/></a></td>
          <td style={{padding:'22px 16px 22px 0',fontWeight:300}}>{t.size}</td><td style={{padding:'22px 16px 22px 0',fontWeight:300}}>{t.where}</td><td style={{padding:'22px 16px 22px 0',fontWeight:300}}>{ADX[s].time}</td><td style={{padding:'22px 16px 22px 0',fontWeight:500}}>${lo}–${hi}</td><td style={{padding:'22px 0',fontWeight:300}}>{t.best}</td></tr>;})}</tbody></table></div>
        <p style={{...P,fontSize:13,marginTop:20,color:'var(--text-muted)'}}>Illustrative Southern California ranges at standard to premium finish. Site work, utilities and city fees vary by lot.</p></Reveal>
    </section>
    <Process/>
    <Calculator top/>
    <FAQ/>
    <Contact/>
    <SiteFooter/><FloatCTA/>
  </div>;
}

function AduDetailPage(){
  const s=ADX[qp('type')]?qp('type'):'detached';const k=ADU_SLUGS.indexOf(s);const t=TYPES[k];const x=ADX[s];const [lo,hi]=RATES[t.n];
  React.useEffect(()=>{
    const title=t.metaTitle||t.n+' | Pacific West Home Builders';
    const description=t.metaDescription||[t.tag,t.d].filter(Boolean).join('. ');
    const canonical=window.location.origin+window.location.pathname+'?type='+encodeURIComponent(s);
    const image=t.socialImageUrl||x.hero;
    const setMeta=(attribute,key,value)=>{
      if(!value)return;
      let element=document.head.querySelector('meta['+attribute+'="'+key+'"]');
      if(!element){element=document.createElement('meta');element.setAttribute(attribute,key);document.head.appendChild(element);}
      element.setAttribute('content',value);
    };
    document.title=title;
    setMeta('name','description',description);
    if(t.noIndex)setMeta('name','robots','noindex, nofollow');
    else { const robots=document.head.querySelector('meta[name="robots"]'); if(robots)robots.remove(); }
    setMeta('property','og:title',title);
    setMeta('property','og:description',description);
    setMeta('property','og:url',canonical);
    setMeta('property','og:image',image);
    setMeta('name','twitter:title',title);
    setMeta('name','twitter:description',description);
    setMeta('name','twitter:image',image);
    setMeta('name','twitter:card','summary_large_image');
    let canonicalLink=document.head.querySelector('link[rel="canonical"]');
    if(!canonicalLink){canonicalLink=document.createElement('link');canonicalLink.rel='canonical';document.head.appendChild(canonicalLink);}
    canonicalLink.href=canonical;
  },[s,t,x]);
  const price=sq=>money(lo*sq*FIN.Standard)+' – '+money(hi*sq*FIN.Premium);
  return <div>
    <SiteHeader active="adus"/>
    <PageHero slot={'adu-hero-'+s} img={x.hero} crumbs={[['ADUs',U.adus],[t.n]]} kicker={String(k+1).padStart(2,'0')+' / 05 · ADU type'} title={t.n} lead={t.tag+'. '+t.d} ctas={[<Btn key="a" onClick={()=>go('calculator')}>Price my {t.n}</Btn>,<Btn key="b" ghost href={U.contact} style={{color:'#fff'}}>Free site visit</Btn>]}/>
    <section style={{background:'var(--pw-black)',color:'#fff',padding:`32px ${PAD}`}}><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,180px),1fr))',gap:24}}>
      {[['Size',t.size],['Where',t.where],['Build time',x.time],['Est. per sq ft',`$${lo}–$${hi}`],['Best for',t.best]].map(([l,v])=><div key={l}><div style={{...LAB,color:'rgba(255,255,255,.5)'}}>{l}</div><div style={{fontSize:16,marginTop:8}}>{v}</div></div>)}</div></section>
    <section className="pg-2" style={{...SEC,background:'#fff',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.3fr)',gap:'40px clamp(32px,6vw,120px)'}}>
      <Reveal><Kicker>Overview</Kicker><H size="clamp(30px,3.4vw,56px)" style={{marginTop:28}}>What a {t.n.toLowerCase()} is</H></Reveal>
      <Reveal delay={120}><p style={{...P,fontSize:19,lineHeight:1.7,color:'var(--pw-ink)'}}>{x.long}</p>
        <div className="pg-2" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:40,marginTop:56}}>
          {[['Why owners choose it',x.pros,'check',RED],['Good to know',x.cons,'info','var(--pw-stone-500)']].map(([h,l,i,c])=><div key={h}><div style={{...LAB,marginBottom:20}}>{h}</div>{l.map(p=><div key={p} style={{display:'flex',gap:14,padding:'14px 0',borderTop:'1px solid var(--border-hairline)',fontSize:15,lineHeight:1.5}}><Icon name={i} size={18} color={c} style={{marginTop:2}}/>{p}</div>)}</div>)}
        </div></Reveal>
    </section>
    <section style={{...SEC,paddingTop:0,background:'#fff'}}>
      <SecHead kicker="Floor plan sizes" title="Three starting points" aside="Every plan is drawn for your lot. These sizes show where most of our clients land and what they typically invest."/>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))',gap:16}}>
        {x.plans.map(([n,sq],j)=><Reveal key={n} delay={j*100}><div style={{border:'1px solid var(--border-hairline)',padding:'clamp(28px,3vw,44px)',height:'100%',display:'flex',flexDirection:'column',gap:20,background:j===1?'var(--pw-black)':'#fff',color:j===1?'#fff':'var(--pw-ink)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}><span style={{fontSize:13,fontWeight:500,color:j===1?'#ff6b6b':RED}}>{String(j+1).padStart(2,'0')}</span>{j===1&&<span style={{background:RED,padding:'5px 10px',fontSize:10,fontWeight:700,letterSpacing:'.16em',textTransform:'uppercase'}}>Most built</span>}</div>
          <div style={{fontSize:24,fontWeight:600,textTransform:'uppercase'}}>{n}</div>
          <div style={{fontSize:'clamp(40px,3.6vw,56px)',fontWeight:600,letterSpacing:'-0.02em',lineHeight:1}}>{sq}<span style={{fontSize:16,fontWeight:300,marginLeft:8}}>sq ft</span></div>
          <div style={{marginTop:'auto',paddingTop:20,borderTop:'1px solid '+(j===1?'rgba(255,255,255,.15)':'var(--border-hairline)')}}><div style={{...LAB,color:j===1?'rgba(255,255,255,.5)':'var(--text-muted)'}}>Typical investment</div><div style={{fontSize:20,fontWeight:500,marginTop:8}}>{price(sq)}</div></div>
        </div></Reveal>)}</div>
    </section>
    <section style={{...SEC,background:'var(--pw-stone-50)'}}>
      <SecHead kicker="What’s included" title="One contract, start to finish"/>
      <div className="v5-icon-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',gap:'48px 32px'}}>
        {INCL.map(([i,h,d],j)=><Reveal key={h} delay={(j%4)*80}><Icon name={i} size={26} color={RED}/><div style={{fontSize:17,fontWeight:600,textTransform:'uppercase',marginTop:20}}>{h}</div><p style={{...P,fontSize:14,marginTop:10}}>{d}</p></Reveal>)}</div>
    </section>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="Built by Pacific West" title={'Inside our '+t.n+'s'} aside={<Btn dark href={U.projects}>All projects</Btn>}/>
      <div className="v5-gal" style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gridAutoRows:'clamp(160px,18vw,300px)',gap:12}}>
        {x.gal.slice(0,5).map((g,j)=>{const sp=[[2,2],[1,1],[1,1],[1,1],[1,1],[2,1]][j];const src=/^(https?:|\/)/.test(g)?g:G+g;return <Reveal key={g} delay={(j%3)*80} style={{gridColumn:'span '+sp[0],gridRow:'span '+sp[1],minWidth:0}}><img src={src} alt={t.n+' project'} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></Reveal>;})}</div>
    </section>
    <Calculator top initial={t.n}/>
    <FAQ items={x.faq} title={t.n+' questions'}/>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="Other ADU types" title="Compare your options" aside={<Btn dark href={U.adus}>Compare all</Btn>}/>
      <div className="v5-service-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))',gap:16}}>
        {TYPES.map((o,j)=>j===k?null:<Reveal key={o.n} delay={j*60}><ImgCard href={U.adu(ADU_SLUGS[j])} src={o.src} title={o.n} sub={o.tag}/></Reveal>)}</div>
    </section>
    <Contact/>
    <SiteFooter/><FloatCTA/>
  </div>;
}
Object.assign(window,{AdusPage,AduDetailPage,ADX,G});
