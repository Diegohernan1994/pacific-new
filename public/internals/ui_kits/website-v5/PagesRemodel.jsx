const RX={
  kitchen:{tag:'The room you use most, rebuilt around how you cook',from:'$45k',time:'6–10 weeks',hero:STK+'s14.jpg',
    long:'We redesign layouts, move plumbing and walls when it makes sense, and build with custom or semi-custom cabinetry, stone counters and new lighting. Our designers handle selections with you so the budget is set before demolition starts.',
    scope:['Layout redesign and wall removal','Custom and semi-custom cabinetry','Quartz, granite and stone counters','Islands, pantries and storage','Plumbing and gas relocation','Lighting, electrical panel upgrades','Flooring, backsplash and tile','Appliance specification and install'],
    gal:[STK+'s05.jpg',IMG+'clean/kitchen-white-island.png',STK+'s09.jpg',IMG+'clean/kitchen-green-cabinets.png',STK+'s16.jpg']},
  bathroom:{tag:'Primary suites, guest baths and accessible upgrades',from:'$25k',time:'4–6 weeks',hero:STK+'s19.jpg',
    long:'From a single hall bath to a full primary suite, we take the room to the studs, fix what is behind the walls and rebuild with waterproofed showers, new vanities and lighting. We also build curbless, grab-bar-ready bathrooms for aging in place.',
    scope:['Walk-in and curbless showers','Freestanding and soaking tubs','Vanities and custom storage','Full waterproofing systems','Tile floors and walls','Heated floors and ventilation','Accessible and aging-in-place layouts','Plumbing and fixture upgrades'],
    gal:[STK+'s01.jpg',STK+'s04.jpg',G+'03.jpg',STK+'s03.jpg',G+'17.png',STK+'s02.jpg']},
  additions:{tag:'More room without leaving the neighborhood',from:'$350 / sq ft',time:'4–7 months',hero:STK+'s15.jpg',
    long:'A room addition extends your home with a new bedroom, family room or primary suite. We design it to match your existing roofline and exterior, engineer the tie-in, and take it through the same permit process we use for ADUs.',
    scope:['Bedroom and primary suite additions','Family room and great room extensions','Second-story additions','Structural engineering and tie-in','Roofline and exterior matching','Permits and city plan check','HVAC and electrical extension','Interior finishes to match'],
    gal:[STK+'s10.jpg',STK+'s15.jpg',STK+'s20.jpg',G+'09.png',G+'11.png',G+'05.png']},
  garage:{tag:'Storage, gym, studio or office',from:'$30k',time:'3–6 weeks',hero:IMG+'clean/garage-before-after.png',
    long:'Not every garage needs to become an ADU. We remodel garages into finished storage, home gyms, workshops and offices with insulation, drywall, epoxy floors, lighting and new doors. If you later want a full ADU, we build it so the conversion is straightforward.',
    scope:['Insulation and drywall','Epoxy and polished concrete floors','Built-in cabinetry and storage','New garage doors and openers','EV charger and electrical upgrades','Lighting and climate control','Home gym and workshop layouts','ADU-ready planning'],
    gal:[G+'01.png',IMG+'types/garage-conversion.jpg',G+'10.png',G+'08.png',G+'12.png']},
  outdoor:{tag:'Patios, hardscape and outdoor living',from:'$20k',time:'3–8 weeks',hero:STK+'s18.jpg',
    long:'We design and build the outdoor side of your property: patios, covered pergolas, outdoor kitchens, hardscape and drought-tolerant planting. For ADU clients we tie the landscape plan into the new unit so both households get usable outdoor space.',
    scope:['Patios and pavers','Pergolas and covered structures','Outdoor kitchens and fire features','Drought-tolerant planting','Irrigation and drainage','Fencing and privacy screening','Exterior lighting','ADU paths and private yards'],
    gal:[STK+'s21.jpg',STK+'s18.jpg',STK+'s12.jpg',G+'19.png',STK+'s20.jpg',G+'12.png']},
  'whole-home':{tag:'Every room, one schedule',from:'$150k',time:'3–6 months',hero:STK+'s10.jpg',
    long:'For homes that need more than one room updated, we plan the whole project together: open layouts, kitchen, baths, flooring, windows and systems. One design, one permit set and one crew means fewer surprises than staging several separate remodels.',
    scope:['Open-plan layout changes','Kitchen and bath packages','Flooring throughout','Windows and exterior doors','Electrical and plumbing upgrades','HVAC replacement','Paint, trim and lighting','Combine with an ADU build'],
    gal:[STK+'s15.jpg',STK+'s16.jpg',STK+'s09.jpg',STK+'s04.jpg',STK+'s20.jpg',G+'10.png']}
};
const RSTEPS=[['Consultation','We visit, measure and talk through goals, budget and timing.'],['Design & selections','Drawings, 3D views and finish selections, priced line by line.'],['Permits','We prepare the permit set and take it through the city.'],['Build & walkthrough','Our crews build it, then we walk the finished space with you.']];

function RemSteps(){return <section className="v5-remodel-process-section" style={{...SEC,background:'var(--pw-black)',color:'#fff'}}>
  <SecHead dark kicker="How we work" title="Four steps, one point of contact"/>
  <div className="v5-remodel-process-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))',gap:'40px 32px'}}>
    {RSTEPS.map(([t,d],k)=><Reveal key={t} delay={k*100} style={{borderTop:'1px solid rgba(255,255,255,.2)',paddingTop:28}}><div style={{fontSize:13,fontWeight:500,color:'#ff6b6b'}}>{String(k+1).padStart(2,'0')}</div><div style={{fontSize:20,fontWeight:600,textTransform:'uppercase',marginTop:14}}>{t}</div><p style={{margin:'12px 0 0',fontSize:14,fontWeight:300,lineHeight:1.7,color:'rgba(255,255,255,.75)'}}>{d}</p></Reveal>)}</div>
</section>;}

function RemodelPage(){
  const [h,setH]=React.useState(0);
  return <div>
    <SiteHeader active="remodel"/>
    <PageHero slot="rem-hero" img={STK+'s14.jpg'} crumbs={[['Remodeling']]} kicker="Remodeling & additions" title="Kitchens, baths and additions, built by our ADU crews" lead="The same licensed team, project leads and permit process we use for ADUs, applied to the home you already have." ctas={[<Btn key="a" onClick={()=>go('list')}>See services</Btn>,<Btn key="b" ghost href={U.contact} style={{color:'#fff'}}>Request a consultation</Btn>]}/>
    <section id="list" style={{...SEC,background:'#fff'}}>
      <SecHead kicker="Services" title="Six ways we remodel" aside="Each service is designed, permitted and built in-house. Combine several into one project, or pair a remodel with an ADU."/>
      <div className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1.2fr) minmax(0,1fr)',gap:'clamp(32px,5vw,88px)',alignItems:'start'}}>
        <div style={{borderTop:'1px solid var(--pw-ink)'}}>{REMS.map((r,k)=>{const on=k===h;return <a key={r.s} href={U.rem(r.s)} onMouseEnter={()=>setH(k)} style={{display:'flex',alignItems:'center',gap:24,padding:'28px 0',borderBottom:'1px solid var(--border-hairline)',color:'var(--pw-ink)'}}>
          <span style={{fontSize:13,fontWeight:500,color:on?RED:'var(--text-muted)',minWidth:24}}>{String(k+1).padStart(2,'0')}</span>
          <div style={{flex:1,minWidth:0}}><div style={{fontSize:'clamp(22px,2.2vw,34px)',fontWeight:600,textTransform:'uppercase',letterSpacing:'-0.01em',color:on?'var(--pw-ink)':'var(--pw-stone-500)',transition:'color .3s'}}>{r.n}</div><div style={{fontSize:14,fontWeight:300,color:'var(--text-secondary)',marginTop:6}}>{RX[r.s].tag} · from {RX[r.s].from}</div></div>
          <Icon name="arrow-up-right" size={22} color={on?RED:'var(--pw-stone-300)'} style={{transition:'transform .4s',transform:on?'rotate(45deg)':'none'}}/></a>;})}</div>
        <div className="v4-type-img" style={{position:'sticky',top:120,aspectRatio:'4/5',maxHeight:'calc(100vh - 160px)',width:'100%',overflow:'hidden',background:'var(--pw-stone-200)'}}>
          {REMS.map((r,k)=><img key={r.s} src={r.img} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:k===h?1:0,transform:k===h?'none':'scale(1.05)',transition:'opacity .8s var(--ease-inout),transform 1.4s var(--ease-out)'}}/>)}
          <div style={{position:'absolute',left:0,top:0,background:'var(--pw-black)',color:'#fff',padding:'12px 18px',fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase'}}>{String(h+1).padStart(2,'0')} / 06 · {REMS[h].n}</div></div>
      </div></section>
    <RemSteps/>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="Recent work" title="Kitchens and baths we’ve built" aside={<Btn dark href={U.projects}>All projects</Btn>}/>
      <div className="v5-gal" style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gridAutoRows:'clamp(160px,18vw,300px)',gap:12}}>
        {[[IMG+'clean/kitchen-white-island.png',2,2],[STK+'s01.jpg',1,1],[IMG+'clean/kitchen-green-cabinets.png',1,1],[STK+'s04.jpg',1,1],[IMG+'clean/kitchen-pendant-floor.png',1,1],[IMG+'clean/dining-oak.png',2,1],[STK+'s03.jpg',1,1],[IMG+'clean/kitchen-taupe.png',1,1]].map(([s,c,r],k)=><Reveal key={k} delay={(k%4)*70} style={{gridColumn:'span '+c,gridRow:'span '+r,minWidth:0}}><img src={s} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></Reveal>)}</div>
    </section>
    <section style={{...SEC,background:'var(--pw-stone-50)'}}>
      <div className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)',gap:'clamp(32px,5vw,88px)',alignItems:'center'}}>
        <Reveal><img src={IMG+'clean/adu-exterior-aerial.png'} alt="" style={{width:'100%',aspectRatio:'4/3',objectFit:'cover',display:'block'}}/></Reveal>
        <Reveal delay={120}><Kicker>Remodel + ADU</Kicker><H size="clamp(30px,3.4vw,56px)" style={{marginTop:28}}>Building an ADU? Do the kitchen at the same time</H><p style={{...P,marginTop:24,maxWidth:520}}>Crews, permits and materials are already on site. Many clients update the main house kitchen or bath during their ADU build and finance both under one loan.</p><div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:32}}><Btn dark href={U.adus}>Explore ADUs</Btn><Btn ghost href={U.fin}>Financing options</Btn></div></Reveal>
      </div></section>
    <Reviews/>
    <Contact kicker="Start your remodel" title="Tell us about the room you want to change" label="Service" options={[...REMS.map(r=>r.n),'ADU','Not sure yet']} img={IMG+'clean/kitchen-white-island.png'}/>
    <SiteFooter/><FloatCTA/>
  </div>;
}

function RemodelDetailPage(){
  const s=RX[qp('s')]?qp('s'):'kitchen';const k=REMS.findIndex(r=>r.s===s);const r=REMS[k];const x=RX[s];
  React.useEffect(()=>{document.title=r.n+' · Pacific West Home Builders'},[]);
  return <div>
    <SiteHeader active="remodel"/>
    <PageHero slot={'rem-hero-'+s} img={x.hero} crumbs={[['Remodeling',U.remodel],[r.n]]} kicker={String(k+1).padStart(2,'0')+' / 06 · Remodeling'} title={r.n} lead={x.tag+'.'} ctas={[<Btn key="a" onClick={()=>go('contact')}>Request a consultation</Btn>,<Btn key="b" ghost href={U.fin} style={{color:'#fff'}}>Financing</Btn>]}/>
    <section style={{background:'var(--pw-black)',color:'#fff',padding:`32px ${PAD}`}}><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,180px),1fr))',gap:24}}>
      {[['Typical starting point',x.from],['Typical timeline',x.time],['Permits','Handled by us'],['Crews','In-house, licensed']].map(([l,v])=><div key={l}><div style={{...LAB,color:'rgba(255,255,255,.5)'}}>{l}</div><div style={{fontSize:16,marginTop:8}}>{v}</div></div>)}</div></section>
    <section className="pg-2" style={{...SEC,background:'#fff',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.3fr)',gap:'40px clamp(32px,6vw,120px)'}}>
      <Reveal><Kicker>Overview</Kicker><H size="clamp(30px,3.4vw,56px)" style={{marginTop:28}}>What we handle</H></Reveal>
      <Reveal delay={120}><p style={{...P,fontSize:19,lineHeight:1.7,color:'var(--pw-ink)'}}>{x.long}</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',columnGap:40,marginTop:48}}>
          {x.scope.map(p=><div key={p} style={{display:'flex',gap:14,padding:'16px 0',borderTop:'1px solid var(--border-hairline)',fontSize:15}}><Icon name="check" size={18} color={RED}/>{p}</div>)}</div></Reveal>
    </section>
    <section style={{...SEC,paddingTop:0,background:'#fff'}}>
      <div className="v5-gal" style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gridAutoRows:'clamp(160px,18vw,300px)',gap:12}}>
        {x.gal.slice(0,5).map((g,j)=>{const sp=[[2,2],[1,1],[1,1],[1,1],[1,1],[2,1]][j];return <Reveal key={j} delay={(j%3)*80} style={{gridColumn:'span '+sp[0],gridRow:'span '+sp[1],minWidth:0}}><img src={g} alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/></Reveal>;})}</div>
    </section>
    <RemSteps/>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="More services" title="Other ways we remodel" aside={<Btn dark href={U.remodel}>All remodeling</Btn>}/>
      <div className="v5-service-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,200px),1fr))',gap:16}}>
        {REMS.map((o,j)=>j===k?null:<Reveal key={o.s} delay={j*60}><ImgCard href={U.rem(o.s)} src={o.img} title={o.n} sub={'From '+RX[o.s].from}/></Reveal>)}</div>
    </section>
    <Contact kicker={'Start your '+r.n.toLowerCase()} title="Tell us about your project" label="Service" options={[...REMS.map(o=>o.n),'ADU','Not sure yet']} img={x.gal[0]}/>
    <SiteFooter/><FloatCTA/>
  </div>;
}
Object.assign(window,{RemodelPage,RemodelDetailPage,RX});
