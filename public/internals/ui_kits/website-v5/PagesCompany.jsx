const AREAS=['Encino','Sherman Oaks','Studio City','Van Nuys','Tarzana','Woodland Hills','Burbank','Glendale','Pasadena','Altadena','Arcadia','South Pasadena','Los Angeles','Santa Clarita','Thousand Oaks'];
const OFFICES=[['Encino','16000 Ventura Blvd Ste 900','Encino, CA 91436','office-encino'],['Pasadena','215 N Marengo Ave Ste 2091','Pasadena, CA 91101','office-pasadena']];

function Offices({bg='#fff'}){
  return <section style={{...SEC,background:bg}}>
    <SecHead kicker="Offices" title="Two offices, one team"/>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,360px),1fr))',gap:24}}>
      {OFFICES.map(([c,a,b,id],k)=><Reveal key={c} delay={k*100}><div style={{position:'relative',aspectRatio:'16/9',background:'var(--pw-stone-100)',overflow:'hidden'}}><iframe title={c+' office map'} src={'https://maps.google.com/maps?q='+encodeURIComponent('Pacific West Home Builders, '+a+', '+b)+'&z=15&output=embed'} loading="lazy" style={{position:'absolute',inset:0,width:'100%',height:'100%',border:0,filter:'grayscale(1) contrast(1.05)',transition:'filter .6s'}} onMouseEnter={e=>e.currentTarget.style.filter='none'} onMouseLeave={e=>e.currentTarget.style.filter='grayscale(1) contrast(1.05)'}></iframe><span style={{position:'absolute',top:0,left:0,background:'var(--pw-black)',color:'#fff',padding:'9px 14px',fontSize:11,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',pointerEvents:'none'}}>{String(k+1).padStart(2,'0')} · {c}</span></div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:20,marginTop:22,flexWrap:'wrap'}}><div><div style={{fontSize:22,fontWeight:600,textTransform:'uppercase'}}>{c}</div><div style={{...P,fontSize:15,marginTop:8}}>{a}<br/>{b}</div></div>
          <a href={'https://maps.google.com/?q='+encodeURIComponent(a+' '+b)} target="_blank" style={{display:'flex',alignItems:'center',gap:8,fontSize:12,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',color:RED}}>Directions<Arrow/></a></div></Reveal>)}</div>
  </section>;
}

function AboutPage(){
  const setup=[['pencil-ruler','Design studio','Our designers draw your plans, 3D views and finish selections in-house.'],['file-check','Permit desk','A dedicated team prepares submittals and answers city corrections.'],['hard-hat','Our own crews','Licensed carpenters, concrete, framing and finish crews on payroll.'],['user-round','One project lead','The same person on site from groundbreaking to walkthrough.']];
  const how=[['Written, itemized quotes','You see every line before you sign, and the lender sees the same document.'],['Weekly updates','Photos and a short report from your project lead every week.'],['Clean, secured sites','Fenced, swept and safe at the end of every day, with neighbors in mind.'],['We stay through final','We meet every inspector and don’t leave until the certificate of occupancy is issued.']];
  return <div>
    <SiteHeader active="about"/>
    <PageHero slot="about-hero" img={G+'02.png'} crumbs={[['About']]} kicker="About Pacific West" title="One team from first sketch to final inspection" lead="A licensed California general contractor building ADUs, additions and remodels across Southern California."/>
    <section className="pg-2" style={{...SEC,background:'#fff',display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.5fr)',gap:'40px clamp(32px,6vw,120px)'}}>
      <Reveal><Kicker>Who we are</Kicker></Reveal>
      <Reveal delay={100}><p style={{margin:0,fontSize:'clamp(24px,2.4vw,38px)',fontWeight:300,lineHeight:1.35,letterSpacing:'-0.01em',textWrap:'pretty'}}>Pacific West Home Builders designs, permits and builds homes behind homes. We started with the idea that one company should own the whole project, so homeowners deal with one team, one contract and one schedule.</p>
        <p style={{...P,marginTop:32,maxWidth:640}}>From our offices in Encino and Pasadena we work across Los Angeles County and the surrounding areas. Our designers, permit team and construction crews work under one roof, which is how we keep projects moving through city plan check and on site.</p></Reveal>
    </section>
    <section style={{padding:`0 ${PAD}`,background:'#fff'}}><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))',gap:12}}>
      {['build/03-foundation.jpg','build/04-framing.jpg','build/08-completed.jpg'].map((s,k)=><Reveal key={s} delay={k*100}><img src={IMG+s} alt="" style={{width:'100%',aspectRatio:k===1?'3/4':'4/5',objectFit:'cover',display:'block',marginTop:k===1?'clamp(0px,4vw,64px)':0}}/></Reveal>)}</div></section>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="How we’re set up" title="Everything in-house" aside="No hand-offs between a designer, an expediter and a builder who have never met. It’s one team that has built many ADUs together."/>
      <div className="v5-icon-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',gap:'40px 32px'}}>
        {setup.map(([i,t,d],k)=><Reveal key={t} delay={k*90} style={{borderTop:'1px solid var(--pw-ink)',paddingTop:28}}><Icon name={i} size={28} color={RED}/><div style={{fontSize:20,fontWeight:600,textTransform:'uppercase',marginTop:22}}>{t}</div><p style={{...P,fontSize:15,marginTop:10}}>{d}</p></Reveal>)}</div>
    </section>
    <section style={{...SEC,background:'var(--pw-black)',color:'#fff'}}>
      <SecHead dark kicker="What to expect" title="How we work with you"/>
      <div style={{borderTop:'1px solid rgba(255,255,255,.2)'}}>{how.map(([t,d],k)=><Reveal key={t} delay={k*80}><div className="pg-2" style={{display:'grid',gridTemplateColumns:'80px minmax(0,1fr) minmax(0,1.2fr)',gap:24,padding:'32px 0',borderBottom:'1px solid rgba(255,255,255,.12)',alignItems:'baseline'}}><span style={{fontSize:13,fontWeight:500,color:'#ff6b6b'}}>{String(k+1).padStart(2,'0')}</span><div style={{fontSize:'clamp(22px,2.2vw,32px)',fontWeight:600,textTransform:'uppercase'}}>{t}</div><p style={{margin:0,fontSize:16,fontWeight:300,lineHeight:1.7,color:'rgba(255,255,255,.75)'}}>{d}</p></div></Reveal>)}</div>
    </section>
    <section style={{...SEC,background:'#fff'}}>
      <SecHead kicker="Our commitment" title="Craftsmanship, efficiency and trust" aside="Homes that balance beauty, function and efficiency, built to last and to cost less to run."/>
      <div className="pg-2" style={{display:'grid',gridTemplateColumns:'minmax(0,1fr) minmax(0,1.25fr)',gap:'clamp(32px,5vw,88px)',alignItems:'stretch'}}>
        <Reveal style={{position:'relative',minHeight:480,overflow:'hidden'}}><img src={IMG+'build/05-enclosure.jpg'} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.75))'}}></div>
          <div style={{position:'absolute',left:'clamp(24px,3vw,44px)',right:'clamp(24px,3vw,44px)',bottom:'clamp(24px,3vw,44px)',color:'#fff'}}><div style={{fontSize:'clamp(72px,8vw,136px)',fontWeight:600,lineHeight:.9,letterSpacing:'-0.04em'}}>15+</div><div style={{fontSize:13,fontWeight:600,letterSpacing:'.2em',textTransform:'uppercase',marginTop:14}}>Years building in Los Angeles</div></div></Reveal>
        <div className="v5-icon-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',gap:'0 40px',alignContent:'start'}}>
          {[['leaf','Sustainable design','Homes that conserve energy without giving up comfort or finish quality.'],['gem','Bespoke craftsmanship','Every detail tailored to how you live and what you like.'],['lightbulb','Future-focused','Systems and layouts that meet the needs of the next decades, not just today.'],['handshake','Guided start to finish','From concept to completion, we walk you through every step.']].map(([i,t,d],k)=><Reveal key={t} delay={k*80} style={{borderTop:'1px solid var(--pw-ink)',padding:'28px 0 36px'}}><Icon name={i} size={26} color={RED}/><div style={{fontSize:19,fontWeight:600,textTransform:'uppercase',marginTop:20}}>{t}</div><p style={{...P,fontSize:15,marginTop:10}}>{d}</p></Reveal>)}
          <Reveal style={{gridColumn:'1/-1',background:'var(--pw-stone-50)',padding:'clamp(24px,3vw,36px)',marginTop:8}}><div style={{...LAB,marginBottom:18}}>Built into every project</div>
            <div className="v5-icon-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,220px),1fr))',gap:'14px 32px'}}>{[['wind','Advanced HVAC and climate control'],['app-window','Energy-efficient windows and doors'],['smartphone','Smart home integration'],['layers','High-performance insulation']].map(([i,t])=><div key={t} style={{display:'flex',gap:12,alignItems:'center',fontSize:15}}><Icon name={i} size={18} color={RED}/>{t}</div>)}</div></Reveal>
        </div>
      </div>
    </section>
    <section style={{...SEC,paddingTop:0,background:'#fff'}}>
      <SecHead kicker="Service area" title="Where we build" aside="Don’t see your city? Call us. If we can permit it, we can usually build it."/>
      <Reveal><div style={{display:'flex',flexWrap:'wrap',gap:10}}>{AREAS.map(a=><span key={a} style={{padding:'12px 18px',border:'1px solid var(--border-hairline)',fontSize:14}}>{a}</span>)}</div></Reveal>
    </section>
    <Offices bg="var(--pw-stone-50)"/>
    <Reviews/>
    <SiteCTA/>
    <SiteFooter/><FloatCTA/>
  </div>;
}

function ContactPage(){
  const [t,setT]=React.useState('ADU');const [sent,setSent]=React.useState(false);
  const opts={ADU:[...TYPES.map(x=>x.n),'Not sure yet'],Remodel:REMS.map(r=>r.n),Financing:['$0 down ADU financing','HELOC','Cash-out refinance','Renovation loan','Not sure yet'],Other:['General question','Careers','Vendors & trades']};
  return <div>
    <SiteHeader active="contact"/>
    <PageHero slot="contact-hero" img={IMG+'contact-kitchen.png'} h="64vh" crumbs={[['Contact']]} kicker="Contact" title="Let’s talk about your property" lead="Book a free site visit, ask about financing, or just get a question answered."/>
    <section className="pg-2" style={{...SEC,background:'#fff',display:'grid',gridTemplateColumns:'minmax(0,1.4fr) minmax(0,1fr)',gap:'56px clamp(32px,6vw,120px)',alignItems:'start'}}>
      <div>{sent?<div><Icon name="circle-check" size={44} color={RED}/><H size="clamp(36px,4vw,60px)" style={{marginTop:24}}>Thank you</H><p style={{...P,marginTop:20,maxWidth:480}}>We’ll call you within one business day to schedule your site visit.</p></div>:<>
        <Kicker>Send a request</Kicker>
        <div style={{...LAB,marginTop:40,marginBottom:14}}>I’m interested in</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:8}}>{Object.keys(opts).map(k=><button key={k} onClick={()=>setT(k)} style={chipS(k===t)}>{k}</button>)}</div>
        <form onSubmit={e=>{e.preventDefault();setSent(true)}} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,marginTop:36}}>
          <PW.TextField label="Full name" placeholder="Jane Doe" required/><PW.TextField label="Phone" type="tel" placeholder="(000) 000-0000" required/>
          <PW.TextField label="Email" type="email" placeholder="you@email.com"/><PW.TextField label="City" placeholder="Encino"/>
          <PW.TextField label="Property address" placeholder="Street, city" style={{gridColumn:'1/-1'}}/>
          <PW.SelectField key={t} label="Project" options={opts[t]} style={{gridColumn:'1/-1'}}/>
          <PW.SelectField label="Timeline" options={['Within 3 months','3–6 months','6–12 months','Just exploring']}/><PW.SelectField label="Preferred contact" options={['Phone call','Text','Email']}/>
          <PW.TextField label="Tell us more" multiline rows={4} style={{gridColumn:'1/-1'}}/>
          <div style={{gridColumn:'1/-1',display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap',marginTop:8}}><PW.Checkbox defaultChecked label="I agree to be contacted about my project."/><Btn>Send request <Arrow color="#fff"/></Btn></div>
        </form></>}</div>
      <aside style={{position:'sticky',top:120,display:'flex',flexDirection:'column',gap:40}}>
        <div><div style={LAB}>Call</div><a href="tel:8883984499" style={{display:'block',fontSize:'clamp(28px,2.6vw,40px)',fontWeight:600,marginTop:12,letterSpacing:'-0.01em'}}>(888) 398-4499</a></div>
        <div><div style={LAB}>Email</div><a href="mailto:info@pwhbuilders.com" style={{display:'block',fontSize:18,marginTop:12}}>info@pwhbuilders.com</a></div>
        <div style={{background:'var(--pw-black)',color:'#fff',padding:'clamp(28px,3vw,40px)'}}><div style={{...LAB,color:'rgba(255,255,255,.55)'}}>What happens next</div>
          {[['We call you','A specialist reviews your request and calls to learn about the project.'],['Free site visit','We walk the property, measure and check what your lot allows.'],['Written proposal','You get design options, an itemized price and financing choices.']].map(([h,d],k)=><div key={h} style={{display:'flex',gap:18,paddingTop:22,marginTop:22,borderTop:k?'1px solid rgba(255,255,255,.12)':'none'}}><span style={{fontSize:24,fontWeight:600,color:'#ff6b6b',lineHeight:1}}>{k+1}</span><div><div style={{fontSize:16,fontWeight:600,textTransform:'uppercase'}}>{h}</div><p style={{margin:'6px 0 0',fontSize:14,fontWeight:300,lineHeight:1.6,color:'rgba(255,255,255,.75)'}}>{d}</p></div></div>)}</div>
      </aside>
    </section>
    <Offices bg="var(--pw-stone-50)"/>
    <SiteFooter/>
  </div>;
}

const PROJ=[['Exteriors',G+'02.png'],['Kitchens',G+'04.png'],['Bathrooms',G+'03.jpg'],['Exteriors',G+'01.png'],['Living & bedrooms',G+'05.png'],['Kitchens',IMG+'clean/kitchen-white-island.png'],['Construction',IMG+'build/04-framing.jpg'],['Bathrooms',G+'14.png'],['Living & bedrooms',G+'07.png'],['Exteriors',G+'12.png'],['Kitchens',G+'15.png'],['Construction',IMG+'build/03-foundation.jpg'],['Living & bedrooms',G+'10.png'],['Kitchens',IMG+'clean/kitchen-green-cabinets.png'],['Bathrooms',G+'17.png'],['Exteriors',G+'08.png'],['Kitchens',G+'06.png'],['Living & bedrooms',G+'11.png'],['Construction',IMG+'build/05-enclosure.jpg'],['Exteriors',G+'19.png'],['Kitchens',IMG+'clean/kitchen-taupe.png'],['Bathrooms',G+'20.png'],['Living & bedrooms',G+'09.png'],['Kitchens',G+'18.png'],['Construction',IMG+'build/06-rough-in.jpg'],['Living & bedrooms',G+'16.png'],['Kitchens',IMG+'clean/kitchen-pendant-floor.png'],['Living & bedrooms',IMG+'clean/dining-oak.png'],['Construction',IMG+'build/02-site-prep.jpg'],['Exteriors',IMG+'clean/adu-exterior-aerial.png']];
function ProjectsPage(){
  const [f,setF]=React.useState('All');const [lb,setLb]=React.useState(-1);
  const list=PROJ.filter(p=>f==='All'||p[0]===f);const cats=['All','Exteriors','Kitchens','Bathrooms','Living & bedrooms','Construction'];
  React.useEffect(()=>{const k=e=>{if(lb<0)return;if(e.key==='Escape')setLb(-1);if(e.key==='ArrowRight')setLb((lb+1)%list.length);if(e.key==='ArrowLeft')setLb((lb-1+list.length)%list.length);};addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[lb,list.length]);
  return <div>
    <SiteHeader active="projects"/>
    <section style={{padding:`calc(84px + clamp(56px,7vw,112px)) ${PAD} clamp(40px,5vw,64px)`,background:'var(--pw-black)',color:'#fff'}}>
      <Crumbs items={[['Projects']]}/>
      <h1 style={{margin:'40px 0 0',fontWeight:600,fontSize:'clamp(44px,6vw,104px)',lineHeight:.94,letterSpacing:'-0.02em',textTransform:'uppercase',animation:'v4Rise .9s var(--ease-out) both'}}>Projects</h1>
      <p style={{margin:'24px 0 0',maxWidth:560,fontSize:18,fontWeight:300,lineHeight:1.6,color:'rgba(255,255,255,.8)'}}>ADUs, remodels and builds in progress across Southern California.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:48}}>{cats.map(c=><button key={c} onClick={()=>setF(c)} style={chipS(c===f,true)}>{c}<span style={{marginLeft:8,opacity:.55}}>{c==='All'?PROJ.length:PROJ.filter(p=>p[0]===c).length}</span></button>)}</div>
    </section>
    <section style={{padding:`clamp(24px,3vw,40px) ${PAD} clamp(88px,10vw,160px)`,background:'var(--pw-black)'}}>
      <div className="v5-project-gallery" style={{columnWidth:'min(100%,340px)',columnGap:12}}>{list.map((p,k)=><figure key={p[1]} onClick={()=>setLb(k)} style={{margin:'0 0 12px',breakInside:'avoid',position:'relative',overflow:'hidden',cursor:'zoom-in',animation:`v4Rise .7s var(--ease-out) ${Math.min(k,8)*50}ms both`}} onMouseEnter={e=>{e.currentTarget.firstChild.style.transform='scale(1.05)';e.currentTarget.lastChild.style.opacity=1}} onMouseLeave={e=>{e.currentTarget.firstChild.style.transform='none';e.currentTarget.lastChild.style.opacity=0}}>
        <img src={p[1]} alt={p[0]} style={{width:'100%',display:'block',transition:'transform 1.1s var(--ease-out)'}}/>
        <figcaption style={{position:'absolute',inset:'auto 0 0 0',padding:'40px 18px 16px',background:'linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.75))',color:'#fff',fontSize:12,fontWeight:600,letterSpacing:'.16em',textTransform:'uppercase',display:'flex',justifyContent:'space-between',opacity:0,transition:'opacity .4s'}}>{p[0]}<Icon name="maximize-2" size={14} color="#fff"/></figcaption></figure>)}</div>
    </section>
    {lb>=0&&list[lb]&&<div onClick={()=>setLb(-1)} style={{position:'fixed',inset:0,zIndex:100,background:'rgba(0,0,0,.94)',display:'grid',placeItems:'center',padding:'72px clamp(16px,6vw,96px)'}}>
      <img src={list[lb][1]} alt="" onClick={e=>e.stopPropagation()} style={{maxWidth:'100%',maxHeight:'calc(100vh - 144px)',objectFit:'contain'}}/>
      <div style={{position:'absolute',top:24,left:PAD,right:PAD,display:'flex',justifyContent:'space-between',color:'#fff',fontSize:12,letterSpacing:'.18em',textTransform:'uppercase'}}><span>{list[lb][0]} · {lb+1} / {list.length}</span><button onClick={()=>setLb(-1)} style={{background:'none',border:'none',cursor:'pointer'}}><Icon name="x" size={24} color="#fff"/></button></div>
      {[['chevron-left',-1,{left:16}],['chevron-right',1,{right:16}]].map(([i,d,pos])=><button key={i} onClick={e=>{e.stopPropagation();setLb((lb+d+list.length)%list.length)}} style={{position:'absolute',top:'50%',...pos,width:52,height:52,display:'grid',placeItems:'center',background:'rgba(255,255,255,.1)',border:'none',cursor:'pointer'}}><Icon name={i} size={24} color="#fff"/></button>)}
    </div>}
    <SiteCTA kicker="Your project next" title="Start with a free site visit"/>
    <SiteFooter/><FloatCTA/>
  </div>;
}
Object.assign(window,{AboutPage,ContactPage,ProjectsPage,Offices});
