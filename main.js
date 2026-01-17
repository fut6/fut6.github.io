// ==========================================
// 💣 AUTO-ACTUALIZADOR V3.0 (OBLIGATORIO AL INICIO)
// ==========================================
const APP_VERSION = "3.0"; 

// 1. Verificar versión y borrar caché si es vieja
if (localStorage.getItem('app_version') !== APP_VERSION) {
    console.log("Detectada versión antigua. Actualizando a " + APP_VERSION + "...");
    
    // Guardar nueva versión
    localStorage.setItem('app_version', APP_VERSION);
    
    // Borrar caché del navegador
    if ('caches' in window) {
        caches.keys().then((names) => {
            names.forEach((name) => caches.delete(name));
        });
    }
    
    // Forzar recarga desde el servidor (True = Ignorar caché)
    window.location.reload(true);
}

// ==========================================
// 🚀 INICIO DE LA APLICACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // ===========================================
  // 1. SISTEMA DE TEMAS NEÓN (INYECTADO)
  // ===========================================
  const applyTheme = (theme) => {
      if (!theme || theme === 'default') {
          document.body.className = document.body.className.replace(/theme-[\w-]+/g, '').trim();
          const existingStyle = document.getElementById('neon-styles');
          if (existingStyle) existingStyle.remove();
          return;
      }

      document.body.classList.add(`theme-${theme}`);

      if (!document.getElementById('neon-styles')) {
          const style = document.createElement('style');
          style.id = 'neon-styles';
          style.innerHTML = `
            /* --- 1. DEFINICIÓN DE COLORES --- */
            body.theme-neon-green { --neon-color: #39ff14; --neon-bg: radial-gradient(circle at 50% -20%, #0a1a00 0%, #000000 85%); }
            body.theme-neon-blue { --neon-color: #00ffff; --neon-bg: radial-gradient(circle at 50% -20%, #001a33 0%, #000000 85%); }
            body.theme-neon-pink { --neon-color: #ff00ff; --neon-bg: radial-gradient(circle at 50% -20%, #330033 0%, #000000 85%); }
            body.theme-neon-orange { --neon-color: #ff5500; --neon-bg: radial-gradient(circle at 50% -20%, #330a00 0%, #000000 85%); }
            body.theme-neon-gold { --neon-color: #ffd700; --neon-bg: radial-gradient(circle at 50% -20%, #332b00 0%, #000000 85%); }
            body.theme-neon-purple { --neon-color: #b026ff; --neon-bg: radial-gradient(circle at 50% -20%, #1a0033 0%, #000000 85%); }
            body.theme-neon-red { --neon-color: #ff003c; --neon-bg: radial-gradient(circle at 50% -20%, #330000 0%, #000000 85%); }
            body.theme-neon-cyan { --neon-color: #00ff9d; --neon-bg: radial-gradient(circle at 50% -20%, #003322 0%, #000000 85%); }

            /* MEZCLAS */
            body.theme-mix-sunset { --neon-color: #ffae00; --neon-bg: linear-gradient(180deg, #2e004d 0%, #000000 50%, #4d1900 100%); }
            body.theme-mix-ocean { --neon-color: #00eaff; --neon-bg: linear-gradient(180deg, #001f3d 0%, #000000 50%, #003d33 100%); }
            body.theme-mix-venom { --neon-color: #ccff00; --neon-bg: radial-gradient(circle at top, #240046 0%, #000000 50%, #153300 100%); }
            body.theme-mix-fire { --neon-color: #ff3c00; --neon-bg: linear-gradient(to bottom, #4a0404 0%, #000000 50%, #4d2600 100%); }

            /* --- 2. REGLAS GLOBALES --- */
            body[class*="theme-"] { 
                background: var(--neon-bg) !important; 
                background-attachment: fixed !important; 
                color: #e2e8f0 !important; 
            }
            .tabular-nums { font-feature-settings: "tnum"; font-variant-numeric: tabular-nums; }

            /* --- 3. TARJETA DE CAMPEÓN --- */
            .champion-card {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(0,0,0,0.95));
                border: 2px solid #ffd700;
                box-shadow: 0 0 50px rgba(255, 215, 0, 0.25), inset 0 0 20px rgba(255, 215, 0, 0.1);
                text-align: center;
                position: relative;
                overflow: hidden;
                padding: 3rem 1.5rem;
                transform: scale(1.02);
                transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;
                z-index: 10;
            }
            .champion-card:hover {
                transform: scale(1.05);
                box-shadow: 0 0 90px rgba(255, 215, 0, 0.7), inset 0 0 30px rgba(255, 215, 0, 0.3);
                border-color: #fff;
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), #000);
            }
            .trophy-icon { font-size: 6rem; filter: drop-shadow(0 0 25px #ffd700); margin-bottom: 1.5rem; display: inline-block; animation: float 3s ease-in-out infinite; }

            /* --- 4. FUEGOS ARTIFICIALES --- */
            .pyro > .before, .pyro > .after {
                position: absolute; width: 6px; height: 6px; border-radius: 50%;
                box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84, 190px 16.66667px #002bff, -113px -308.66667px #ff009d, -109px -287.66667px #ffb300, -50px -313.66667px #ff006e, 226px -31.66667px #ff0022, 180px -351.66667px #00ff3c, 250px -52.66667px #ff002f, 183px -226.66667px #1700ff, -225px -276.66667px #ff0099, -70px -338.66667px #00ff73, 5px -142.66667px #0051ff, 218px -46.66667px #ff0055, -217px -293.66667px #00ff15;
                animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
                opacity: 0; z-index: 0;
            }
            .pyro > .after { animation-delay: 1.25s, 1.25s, 1.25s; animation-duration: 1.25s, 1.25s, 6.25s; }
            .champion-card:hover .pyro > .before, .champion-card:hover .pyro > .after { opacity: 1; }

            /* Confeti */
            .confetti { position: absolute; width: 8px; height: 8px; background-color: #f2d74e; opacity: 0; }
            .champion-card:hover .confetti { animation: fall 2s linear infinite; opacity: 1; }
            .confetti:nth-child(1) { left: 10%; background: #f00; animation-delay: 0s; }
            .confetti:nth-child(2) { left: 30%; background: #0f0; animation-delay: 0.5s; }
            .confetti:nth-child(3) { left: 60%; background: #00f; animation-delay: 1s; }
            .confetti:nth-child(4) { left: 80%; background: #ff0; animation-delay: 1.5s; }
            @keyframes fall { 0% { top: -10%; transform: rotate(0deg); } 100% { top: 110%; transform: rotate(360deg); } }
            @keyframes bang { to { box-shadow: 128px -178.66667px transparent, 126px -27.66667px transparent, 270px -316.66667px transparent, 235px -84.66667px transparent, -29px -315.66667px transparent, -203px -336.66667px transparent, -71px -197.66667px transparent, 188px -203.66667px transparent, -78px -6.66667px transparent, 203px -26.66667px transparent, 185px -19.66667px transparent, 27px -331.66667px transparent, -214px -35.66667px transparent, -26px -278.66667px transparent, 221px -13.66667px transparent; } }
            @keyframes gravity { to { transform: translateY(200px); opacity: 0; } }
            @keyframes position { 0%, 19.9% { margin-top: 10%; margin-left: 40%; } 20%, 39.9% { margin-top: 40%; margin-left: 30%; } 40%, 59.9% { margin-top: 20%; margin-left: 70%; } 60%, 79.9% { margin-top: 30%; margin-left: 20%; } 80%, 99.9% { margin-top: 30%; margin-left: 80%; } }

            /* --- 5. CORRECCIONES TEXTO --- */
            body[class*="theme-"] .text-slate-900, body[class*="theme-"] .text-slate-800, body[class*="theme-"] .text-slate-700, body[class*="theme-"] .text-slate-600, body[class*="theme-"] .text-slate-500, body[class*="theme-"] .text-gray-500, body[class*="theme-"] .text-black { color: #ffffff !important; opacity: 1 !important; }
            body[class*="theme-"] .text-slate-400, body[class*="theme-"] .text-slate-300 { color: #cbd5e1 !important; }
            body[class*="theme-"] .text-indigo-900, body[class*="theme-"] .text-indigo-950, body[class*="theme-"] .text-indigo-800, body[class*="theme-"] .text-indigo-600, body[class*="theme-"] .font-black.text-emerald-500 { color: var(--neon-color) !important; text-shadow: 0 0 10px var(--neon-color); }
            
            /* --- 6. ELEMENTOS UI --- */
            body[class*="theme-"] table { background: transparent !important; }
            body[class*="theme-"] thead { background-color: rgba(255,255,255,0.1) !important; }
            body[class*="theme-"] thead th { color: var(--neon-color) !important; font-weight: 900 !important; text-transform: uppercase; border-bottom: 2px solid var(--neon-color) !important; }
            body[class*="theme-"] tbody tr { border-bottom: 1px solid rgba(255,255,255,0.1) !important; }
            body[class*="theme-"] tbody tr:hover { background-color: rgba(255,255,255,0.1) !important; }
            body[class*="theme-"] td { color: #fff !important; }
            
            body[class*="theme-"] .bg-white, body[class*="theme-"] .bg-indigo-950, body[class*="theme-"] .bg-indigo-900 { background-color: rgba(10, 20, 35, 0.75) !important; border: 1px solid rgba(255,255,255,0.15) !important; backdrop-filter: blur(12px); color: #fff !important; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important; }
            body[class*="theme-"] header { background-color: rgba(0,0,0,0.95) !important; border-bottom: 2px solid var(--neon-color) !important; }
            body[class*="theme-"] nav a:hover, body[class*="theme-"] nav a.text-emerald-400 { color: var(--neon-color) !important; text-shadow: 0 0 10px var(--neon-color) !important; }
            body[class*="theme-"] nav a.text-emerald-400::after { background-color: var(--neon-color) !important; box-shadow: 0 0 10px var(--neon-color) !important; }
            body[class*="theme-"] input:not([type="submit"]), body[class*="theme-"] select, body[class*="theme-"] textarea { background-color: #ffffff !important; color: #000000 !important; border: 2px solid var(--neon-color) !important; font-weight: bold !important; }
            body[class*="theme-"] option { color: #000; background: #fff; }
            body[class*="theme-"] label { color: #fff !important; text-shadow: 0 1px 3px #000; }
            body[class*="theme-"] #sponsors-title { color: #fff !important; text-shadow: 0 0 10px var(--neon-color) !important; opacity: 1 !important; }
            body[class*="theme-"] .sponsor-card { background-color: rgba(255,255,255,0.02) !important; border: 1px solid rgba(255,255,255,0.1) !important; transition: all 0.3s ease; }
            body[class*="theme-"] .sponsor-card:hover { border: 2px solid var(--neon-color) !important; box-shadow: 0 0 20px var(--neon-color) !important; background-color: rgba(0,0,0,0.8) !important; transform: translateY(-5px); }
            body[class*="theme-"] .sponsor-card h4 { color: #fff !important; }
            body[class*="theme-"] .bg-emerald-500, body[class*="theme-"] .text-emerald-500, body[class*="theme-"] .text-emerald-400 { color: var(--neon-color) !important; background-color: transparent !important; text-shadow: 0 0 10px var(--neon-color); }
            body[class*="theme-"] img { filter: brightness(1.05) contrast(1.1); }
          `;
          document.head.appendChild(style);
      }
  };

  // ===========================================
  // 2. CARGA DE DATOS & LOGIN
  // ===========================================
  // Usamos window.db como base
  let appData = { ...window.db }; 
  const savedData = localStorage.getItem('ligaData');
  
  if (savedData) {
      try { 
          const parsed = JSON.parse(savedData); 
          
          // FUSIONAR DATOS: Si el admin tiene datos, sobreescriben.
          appData = { ...appData, ...parsed };

          // CASO ESPECIAL GALERÍA: 
          // Si el array de galería en localStorage existe pero está vacío (se borró todo),
          // intentamos recuperar las fotos por defecto de data.js para que no quede en blanco.
          if (!parsed.galeria || parsed.galeria.length === 0) {
              if (window.db.galeria && window.db.galeria.length > 0) {
                  appData.galeria = window.db.galeria;
              }
          }

          if(appData.config && appData.config.tema) { applyTheme(appData.config.tema); }
      } catch (e) { console.error("Error cargando datos locales", e); }
  }

  const { config, equipos, tablaGeneral, tablaGoleo, galeria, patrocinadores, jornadas, playoffs, sliderImages, avisos, jugadorJornada } = appData;
  const getElement = (id) => document.getElementById(id);
  const findTeamById = (id) => equipos.find(eq => eq.id == id);
  const formatDate = (dateString) => { if(!dateString) return ''; const parts = dateString.split('-'); return parts.length === 3 ? `${parts[2]}/${parts[1]}` : dateString; };

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  // NAV
  document.querySelectorAll('nav div a').forEach(link => { 
      const href = link.getAttribute('href'); 
      if (href === currentPage) { 
          if(href === 'informacion.html') link.className = "bg-emerald-400 text-indigo-900 border-emerald-400 px-4 py-2 rounded-full transition shadow-[0_0_15px_rgba(52,211,153,0.3)] font-bold uppercase tracking-widest text-[11px]"; 
          else link.className = "text-emerald-400 relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-emerald-400 after:absolute after:-bottom-2 transition font-bold uppercase tracking-widest text-[11px]"; 
      } else { 
          if(href === 'informacion.html') link.className = "bg-white/10 border border-white/20 px-4 py-2 rounded-full hover:bg-emerald-400 hover:text-indigo-900 transition font-bold uppercase tracking-widest text-[11px] text-white"; 
          else link.className = "hover:text-emerald-400 transition text-slate-300 font-bold uppercase tracking-widest text-[11px]"; 
      } 
  });
  
  document.querySelectorAll('#mobile-menu a').forEach(link => { if (link.getAttribute('href') === currentPage) { link.classList.remove('hover:text-emerald-400', 'text-slate-300'); link.classList.add('text-emerald-400'); } });
  
  getElement('mobile-toggle')?.addEventListener('click', () => getElement('mobile-menu').classList.toggle('hidden'));
  const modal = getElement('login-modal'); const btnAdmin = getElement('btn-admin-access'); if (btnAdmin && modal) btnAdmin.onclick = (e) => { e.preventDefault(); modal.classList.remove('hidden'); }; getElement('close-modal-btn')?.addEventListener('click', () => modal.classList.add('hidden'));
  
  const loginForm = document.getElementById('login-form'); 
  if (loginForm) {
      loginForm.addEventListener('submit', (e) => { 
          e.preventDefault(); 
          const email = document.getElementById('email').value.trim(); 
          const pass = document.getElementById('password').value.trim(); 
          const auth = appData.auth || { superUser: 'super@liga.com', superPass: 'super123', adminUser: 'admin@liga.com', adminPass: 'admin123' };
          if (email === auth.superUser && pass === auth.superPass) { sessionStorage.setItem('userRole', 'superadmin'); window.location.href = 'admin_dashboard.html'; } 
          else if (email === auth.adminUser && pass === auth.adminPass) { sessionStorage.setItem('userRole', 'admin'); window.location.href = 'admin_dashboard.html'; } 
          else { alert('Credenciales incorrectas'); } 
      });
  }

  const lightbox = getElement('lightbox-modal'); window.openLightbox = (src) => { getElement('lightbox-img').src = src; lightbox.classList.remove('hidden'); }; getElement('close-lightbox')?.addEventListener('click', () => lightbox.classList.add('hidden'));

  // RENDERIZADO DE TABLA (CON FILTRO ANTI-DESCONOCIDOS)
  const tablaBody = getElement('tabla-body'); 
  if (tablaBody) { 
      const isMini = tablaBody.dataset.mini === 'true'; 
      let data = tablaGeneral.map(t => {
          const stats = {
              pj: parseInt(t.pj) || 0,
              pg: parseInt(t.pg) || 0,
              pe: parseInt(t.pe) || 0,
              pp: parseInt(t.pp) || 0,
              gf: parseInt(t.gf) || 0,
              gc: parseInt(t.gc) || 0,
              pts: parseInt(t.pts) || 0
          };
          stats.dg = stats.gf - stats.gc;
          return { ...t, ...stats };
      });

      data = data.filter(t => findTeamById(t.equipoId));
      data.sort((a,b) => b.pts - a.pts || b.dg - a.dg || b.gf - a.gf);

      if (isMini) data = data.slice(0, 5);
      
      tablaBody.innerHTML = data.map((t, i) => { 
          const eq = findTeamById(t.equipoId); 
          const extraCols = !isMini ? `<td class="text-center p-3 hidden md:table-cell text-slate-500 font-medium">${t.pg}</td><td class="text-center p-3 hidden md:table-cell text-slate-500 font-medium">${t.pe}</td><td class="text-center p-3 hidden md:table-cell text-slate-500 font-medium">${t.pp}</td><td class="text-center p-3 hidden md:table-cell text-slate-500">${t.gf}</td><td class="text-center p-3 hidden md:table-cell text-slate-500">${t.gc}</td><td class="text-center p-3 hidden md:table-cell font-black ${t.dg > 0 ? 'text-emerald-500' : (t.dg < 0 ? 'text-rose-500' : 'text-slate-500')}">${t.dg > 0 ? '+'+t.dg : t.dg}</td>` : ''; 
          let rankColor = "text-slate-500 font-bold";
          let rowClass = "border-b border-slate-50 hover:bg-slate-50 transition-colors group";
          if (i < 4) { rankColor = "text-emerald-500 font-black text-lg"; rowClass += " bg-emerald-50/10"; }
          return `<tr class="${rowClass}"><td class="py-4 pl-2 text-center ${rankColor}">${i+1}</td><td class="py-4 flex items-center gap-3"><div class="relative"><img src="${eq?.logo}" class="w-8 h-8 md:w-10 md:h-10 rounded-full object-contain bg-white p-0.5 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">${i===0 ? '<span class="absolute -top-2 -right-2 text-xs"></span>' : ''}</div><div class="flex flex-col"><span class="font-black text-slate-700 text-xs md:text-sm uppercase tracking-tight truncate max-w-[110px] md:max-w-none group-hover:text-indigo-600 transition-colors">${eq?.nombre}</span>${isMini ? `<span class="text-[9px] text-slate-400 font-bold md:hidden">DG: ${t.dg}</span>` : ''}</div></td><td class="text-center p-2 font-black text-slate-600 bg-slate-50/50 rounded-lg mx-1">${t.pj}</td>${extraCols}<td class="py-4 pr-2 text-center"><span class="font-black text-white text-sm md:text-lg bg-indigo-600 px-3 py-1 rounded-lg shadow-lg shadow-indigo-200">${t.pts}</span></td></tr>`; 
      }).join(''); 
  }
  
  const topScorers = getElement('top-scorers-list') || getElement('goleo-body'); if (topScorers) { const isIndex = topScorers.id === 'top-scorers-list'; const sorted = [...tablaGoleo].sort((a,b)=>b.goles-a.goles); const data = isIndex ? sorted.slice(0,3) : sorted; if (isIndex) topScorers.innerHTML = data.map((p,i) => `<div class="flex items-center justify-between p-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-lg"><div class="flex items-center gap-3"><span class="font-black text-slate-200 text-xl italic">#${i+1}</span><img src="${p.foto}" class="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"><div><p class="text-xs font-black text-slate-800 uppercase leading-none mb-1">${p.nombre} *</p><p class="text-[10px] font-bold text-indigo-500 uppercase">${findTeamById(p.equipoId)?.nombre}</p></div></div><span class="font-black text-xl text-slate-800">${p.goles}</span></div>`).join(''); else topScorers.innerHTML = data.map((p,i) => `<tr class="border-b border-slate-50 hover:bg-slate-50 transition"><td class="py-4 text-center font-black ${i<3?'text-amber-500':'text-slate-300'} w-16 text-lg">#${i+1}</td><td class="py-4"><div class="flex items-center gap-4"><img src="${p.foto}" class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"><div><span class="block font-black text-slate-800 text-sm uppercase">${p.nombre}</span><span class="text-xs text-slate-400 font-bold uppercase tracking-wider">${findTeamById(p.equipoId)?.nombre}</span></div></div></td><td class="py-4 text-center font-black text-2xl text-emerald-500">${p.goles}</td></tr>`).join(''); }
  
  // CORRECCIÓN JORNADAS
  const jornadasContainer = getElement('next-matches-list') || getElement('jornadas-container'); 
  if (jornadasContainer && jornadas.length > 0) {
      const isIndex = jornadasContainer.id === 'next-matches-list';
      const activeJornada = jornadas.find(j => j.active) || jornadas[jornadas.length - 1];
      const matches = isIndex ? activeJornada.partidos.slice(0,3) : activeJornada.partidos;

      const badge = getElement('jornada-badge') || getElement('jornada-titulo');
      if(badge) badge.innerText = isIndex ? `Jornada ${activeJornada.jornadaNum}` : `JORNADA ${activeJornada.jornadaNum}`;

      if(isIndex) {
          jornadasContainer.innerHTML = matches.map(p => `
            <div class="bg-white/10 rounded-xl p-3 mb-2 flex justify-between items-center text-white border border-white/10">
                <div class="w-1/3 text-center"><span class="block text-[10px] font-bold uppercase truncate opacity-90">${findTeamById(p.eqA)?.nombre}</span></div>
                <div class="w-1/3 text-center flex flex-col items-center">
                    <span class="text-[9px] font-bold text-slate-400 mb-1 block uppercase">${formatDate(p.fecha)}</span>
                    <span class="text-[9px] font-black bg-emerald-500 text-indigo-900 px-2 py-0.5 rounded shadow-lg">${p.hora}</span>
                </div>
                <div class="w-1/3 text-center"><span class="block text-[10px] font-bold uppercase truncate opacity-90">${findTeamById(p.eqB)?.nombre}</span></div>
            </div>`).join('');
      } else {
          jornadasContainer.innerHTML = matches.map(p => {
              const eqA = findTeamById(p.eqA);
              const eqB = findTeamById(p.eqB);
              return `<div class="bg-white py-6 px-4 md:px-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                  <div class="flex items-center gap-3 md:gap-5 w-5/12 overflow-hidden">
                      <div class="flex flex-col items-end w-full"><span class="font-black text-sm md:text-xl text-slate-800 uppercase truncate w-full text-right leading-none">${eqA?.nombre}</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">Local</span></div>
                      <div class="w-12 h-12 md:w-20 md:h-20 shrink-0 rounded-full bg-white p-1 md:p-2 shadow-md border border-slate-100 flex items-center justify-center relative z-10"><img src="${eqA?.logo}" class="w-full h-full object-contain rounded-full"></div>
                  </div>
                  <div class="flex flex-col items-center justify-center w-2/12 shrink-0 relative z-10 mx-2">
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">${formatDate(p.fecha)}</span>
                      <span class="text-3xl md:text-5xl font-black text-slate-200 leading-none">VS</span>
                      <div class="mt-2 bg-emerald-500 text-white px-3 md:px-5 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-emerald-200 whitespace-nowrap">${p.hora}</div>
                      <span class="mt-1 text-[9px] font-bold text-slate-400 uppercase tracking-wider truncate max-w-full">${p.cancha}</span>
                  </div>
                  <div class="flex items-center gap-3 md:gap-5 w-5/12 overflow-hidden flex-row-reverse">
                      <div class="flex flex-col items-start w-full"><span class="font-black text-sm md:text-xl text-slate-800 uppercase truncate w-full text-left leading-none">${eqB?.nombre}</span><span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">Visita</span></div>
                      <div class="w-12 h-12 md:w-20 md:h-20 shrink-0 rounded-full bg-white p-1 md:p-2 shadow-md border border-slate-100 flex items-center justify-center relative z-10"><img src="${eqB?.logo}" class="w-full h-full object-contain rounded-full"></div>
                  </div>
              </div>`;
          }).join('');
      }
  }

  const equiposGrid = getElement('equipos-grid'); if(equiposGrid) equiposGrid.innerHTML = equipos.map(e => `<div class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"><div class="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-0 transition-colors group-hover:bg-indigo-50"></div><div class="w-32 h-32 rounded-full bg-white p-2 mb-6 shadow-lg border border-slate-50 relative z-10 group-hover:scale-110 transition-transform duration-500"><img src="${e.logo}" class="w-full h-full object-contain rounded-full"></div><h3 class="font-sport font-black text-xl text-indigo-900 uppercase tracking-wide text-center relative z-10">${e.nombre}</h3><div class="h-1 w-10 bg-emerald-400 rounded-full mt-4 group-hover:w-20 transition-all"></div></div>`).join('');
  
  // --- CORRECCIÓN GALERÍA ---
// --- BLOQUE DE GALERÍA CORREGIDO ---
  const galeriaDiv = getElement('galeria-grid'); 
  if (galeriaDiv) { 
      const isMini = galeriaDiv.dataset.mini === 'true'; 
      // Usamos lista vacía si no hay datos
      const list = galeria || [];
      // Si es la página de inicio (mini), mostramos solo 4 fotos. Si es galería, todas.
      const show = isMini && list.length > 0 ? list.slice().reverse().slice(0, 4) : list.slice().reverse();
      
      if (show.length === 0) {
          galeriaDiv.innerHTML = '<p class="col-span-full text-center text-slate-400 italic">Sin imágenes</p>';
      } else {
          galeriaDiv.innerHTML = show.map(item => {
              // CORRECCIÓN CLAVE: Verifica si es un objeto nuevo o una ruta vieja
              const src = (typeof item === 'object' && item.img) ? item.img : item;
              // Genera la tarjeta
              return `<div class="relative group aspect-square overflow-hidden rounded-3xl shadow-lg cursor-pointer bg-slate-100 border border-slate-200" onclick="window.openLightbox('${src}')">
                <img src="${src}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="text-white text-4xl font-bold">+</span>
                </div>
              </div>`;
          }).join('');
      }
  }
  const slider = getElement('slider-track'); if (slider && sliderImages.length > 0) { slider.innerHTML = sliderImages.map(s => `<div class="min-w-full h-full relative"><img src="${s.img}" class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-transparent to-transparent flex items-end p-10 md:p-20"><div class="max-w-3xl"><span class="bg-emerald-500 text-indigo-900 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg">Novedad</span><h2 class="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter drop-shadow-2xl leading-none">${s.caption}</h2></div></div></div>`).join(''); let i = 0; setInterval(() => { i = (i + 1) % sliderImages.length; slider.style.transform = `translateX(-${i * 100}%)`; }, 5000); }
  const leagueStats = getElement('league-stats-container'); if (leagueStats && tablaGeneral.length > 0) { const tg = tablaGeneral.reduce((a,c) => a + (parseInt(c.gf) || 0), 0); const totalPJ = tablaGeneral.reduce((a,c) => a + (parseInt(c.pj) || 0), 0); const tp = Math.floor(totalPJ / 2); const te = equipos.length; leagueStats.innerHTML = `<div class="flex justify-around items-center text-center divide-x divide-indigo-500/30"><div class="px-4 md:px-12 group"><span class="block text-3xl md:text-5xl font-black text-white mb-2">${tg}</span><span class="text-[9px] md:text-xs font-black text-indigo-200 uppercase tracking-[0.2em]">Goles</span></div><div class="px-4 md:px-12 group"><span class="block text-3xl md:text-5xl font-black text-white mb-2">${tp}</span><span class="text-[9px] md:text-xs font-black text-indigo-200 uppercase tracking-[0.2em]">Partidos</span></div><div class="px-4 md:px-12 group"><span class="block text-3xl md:text-5xl font-black text-white mb-2">${te}</span><span class="text-[9px] md:text-xs font-black text-indigo-200 uppercase tracking-[0.2em]">Clubes</span></div></div>`; }
  
  const sponsorsDiv = getElement('patrocinadores-grid'); if (sponsorsDiv) { sponsorsDiv.innerHTML = patrocinadores.map(p => `<a href="${p.link}" target="_blank" class="sponsor-card group relative flex flex-col items-center bg-white w-48 md:w-56 p-6 rounded-[1.5rem] shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden"><div class="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-emerald-400 transition-colors duration-500"></div><div class="h-20 w-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"><img src="${p.logo}" class="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"></div><div class="w-full text-center border-t border-slate-50 pt-3 mt-auto"><h4 class="font-sport font-bold text-xs text-slate-400 uppercase tracking-widest group-hover:text-indigo-800 transition-colors truncate">${p.nombre}</h4></div></a>`).join(''); }
  const mvpContainer = getElement('mvp-container'); if (mvpContainer && appData.jugadoresJornada && appData.jugadoresJornada.length > 0) { const mvps = appData.jugadoresJornada; mvpContainer.innerHTML = `<div class="grid grid-cols-1 md:grid-cols-${mvps.length > 1 ? '2' : '1'} gap-8">${mvps.map(p => `<div class="relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-50 flex flex-col md:flex-row items-center gap-10 overflow-hidden group"><div class="absolute top-0 right-0 w-40 h-40 bg-amber-400 rounded-bl-[100px] z-0 opacity-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div><div class="relative z-10 shrink-0"><div class="p-1.5 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-amber-500 shadow-2xl"><img src="${p.foto}" class="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white"></div><div class="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white font-black text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg border-2 border-white">MVP</div></div><div class="relative z-10 text-center md:text-left flex-1"><h3 class="font-sport font-black text-2xl md:text-3xl uppercase italic text-indigo-950 leading-none mb-2 drop-shadow-sm">${p.nombre}</h3><p class="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 flex items-center justify-center md:justify-start gap-2"><span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span> ${p.equipo}</p><p class="text-slate-500 text-sm mb-6 italic font-medium leading-relaxed">"${p.frase}"</p><div class="flex justify-center md:justify-start gap-6 border-t border-slate-100 pt-4"><div><span class="block text-xl font-black text-slate-800 leading-none mb-1">${p.stats.goles}</span><span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Goles</span></div><div><span class="block text-xl font-black text-slate-800 leading-none mb-1">${p.stats.asistencias}</span><span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Asist</span></div><div><span class="block text-xl font-black text-emerald-500 leading-none mb-1">${p.stats.valoracion}</span><span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Rating</span></div></div></div></div>`).join('')}</div>`; }
  const btnWhatsapp = getElement('btn-whatsapp'); if(btnWhatsapp && config.telefonoWhatsApp) btnWhatsapp.href = `https://wa.me/${config.telefonoWhatsApp}`;
  const countdownContainer = getElement('countdown-widget'); if (countdownContainer) { if (config.faseActual === 'playoffs') { const targetDate = new Date(config.fechaGranFinal).getTime(); const updateTimer = () => { const now = new Date().getTime(); const dist = targetDate - now; if (dist < 0) { countdownContainer.innerHTML = `<div class="text-center animate-pulse"><h3 class="font-sport font-black text-2xl italic uppercase text-white">¡EN JUEGO!</h3></div>`; return; } const d = Math.floor(dist / (1000*60*60*24)); const h = Math.floor((dist % (1000*60*60*24)) / (1000*60*60)); countdownContainer.innerHTML = `<div class="relative z-10"><h3 class="font-sport font-black text-xl italic uppercase text-white mb-4 text-center tracking-widest">Gran Final</h3><div class="flex justify-center gap-3 text-white"><div class="bg-white/10 rounded-xl p-3 text-center border border-white/10 backdrop-blur-md min-w-[70px]"><span class="text-3xl font-black block leading-none">${d}</span><span class="text-[9px] uppercase font-bold text-emerald-400">Días</span></div><div class="text-2xl font-black flex items-center opacity-50">:</div><div class="bg-white/10 rounded-xl p-3 text-center border border-white/10 backdrop-blur-md min-w-[70px]"><span class="text-3xl font-black block leading-none">${h}</span><span class="text-[9px] uppercase font-bold text-emerald-400">Hrs</span></div></div></div>`; }; setInterval(updateTimer, 1000); updateTimer(); } else { countdownContainer.innerHTML = `<div class="relative z-10 text-center py-8"><span class="bg-white/10 border border-white/10 text-emerald-300 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg backdrop-blur-sm">Fase Regular</span><h3 class="font-sport font-black text-4xl italic uppercase text-white drop-shadow-lg">Jornada ${jornadas[0]?.jornadaNum}</h3></div>`; } }
  const avisosContainer = getElement('avisos-container'); if (avisosContainer && avisos) { avisosContainer.innerHTML = avisos.map(a => `<div class="bg-slate-900/40 border-l-4 ${a.tipo==='urgente'?'border-rose-500':'border-indigo-400'} p-4 rounded-r-xl mb-3 backdrop-blur-sm hover:bg-slate-900/60 transition-colors"><h4 class="font-bold text-xs uppercase text-white tracking-wide mb-1 flex items-center gap-2">${a.tipo==='urgente'?'🔴':''} ${a.titulo}</h4><p class="text-sm text-slate-300 leading-tight">${a.mensaje}</p></div>`).join(''); }

  // PLAYOFFS (Admin logic from data.js) - ACTUALIZADO: ALINEACIÓN PERFECTA (GRID)
  if (config.faseActual === 'playoffs') {
      const w = getElement('playoffs-wrapper');
      if(w) {
          w.classList.remove('hidden');
          const renderMatch = (m, type) => {
              const A = findTeamById(m.eqA); const B = findTeamById(m.eqB);
              const fin = m.scoreA !== undefined;
              
              if (type === 'final' && fin) {
                  const winner = m.scoreA > m.scoreB ? A : (m.scoreB > m.scoreA ? B : null);
                  if (winner) {
                      return `
                      <div class="champion-card p-6 rounded-2xl relative group" title="¡Pasa el mouse para celebrar!">
                          <div class="pyro">
                              <div class="before"></div>
                              <div class="after"></div>
                          </div>
                          <div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div><div class="confetti"></div>
                          
                          <div class="relative z-10 text-white flex flex-col items-center">
                              <div class="text-[10px] uppercase font-bold tracking-[0.3em] mb-4 text-[#ffd700]">Gran Final - Finalizado</div>
                              <div class="trophy-icon">🏆</div>
                              <h3 class="font-sport font-black text-5xl italic uppercase mb-2 drop-shadow-lg text-[#ffd700]">${winner.nombre}</h3>
                              <p class="text-sm font-bold uppercase tracking-widest mb-6 opacity-90 text-white">¡Nuevos Campeones!</p>
                              
                              <div class="bg-black/60 rounded-xl p-4 w-full max-w-sm border border-[#ffd700]/50 backdrop-blur-md">
                                  <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-2xl font-black">
                                      <div class="text-right text-slate-300 font-bold truncate text-xl uppercase leading-tight">${A?.nombre}</div>
                                      <div class="text-center px-2 flex items-center justify-center gap-1">
                                          <span class="text-[#ffd700] text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] tabular-nums leading-none">
                                              ${m.scoreA}
                                          </span>
                                          <span class="text-white/50 text-3xl font-light">-</span>
                                          <span class="text-[#ffd700] text-5xl font-black tracking-tighter drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] tabular-nums leading-none">
                                              ${m.scoreB}
                                          </span>
                                      </div>
                                      <div class="text-left text-slate-300 font-bold truncate text-xl uppercase leading-tight">${B?.nombre}</div>
                                  </div>
                              </div>
                          </div>
                      </div>`;
                  }
              }

              return `
              <div class="bg-white/5 border border-white/5 p-4 rounded-2xl mb-3 text-white text-sm hover:bg-white/10 transition-colors">
                  <div class="flex justify-between text-[10px] text-slate-400 uppercase mb-3 font-bold tracking-widest">
                      <span>${m.fecha ? m.fecha + ' | ' : ''}${m.cancha}</span>
                      <span class="${fin?'text-emerald-400':'text-amber-400'}">${fin?'FINAL':m.hora}</span>
                  </div>
                  
                  <div class="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                       <div class="flex items-center gap-3 overflow-hidden">
                          <img src="${A?.logo||''}" class="w-8 h-8 rounded-full bg-slate-800 p-0.5 shrink-0 object-cover">
                          <span class="font-bold uppercase tracking-wide truncate">${A?.nombre||'TBD'}</span>
                       </div>

                       <div class="text-center px-3 bg-white/5 rounded-lg py-1 min-w-[80px]">
                          <span class="font-black text-2xl tabular-nums tracking-widest ${fin ? 'text-white' : 'text-slate-500'}">
                              ${fin ? `${m.scoreA} - ${m.scoreB}` : 'VS'}
                          </span>
                       </div>

                       <div class="flex items-center gap-3 justify-end overflow-hidden">
                          <span class="font-bold uppercase tracking-wide truncate text-right">${B?.nombre||'TBD'}</span>
                          <img src="${B?.logo||''}" class="w-8 h-8 rounded-full bg-slate-800 p-0.5 shrink-0 object-cover">
                       </div>
                  </div>
              </div>`;
          };
          
          ['cuartos','semis','final'].forEach(s => {
              const el = getElement(s+'-container');
              if(el) el.innerHTML = playoffs[s].map(m => renderMatch(m, s)).join('');
          });
      }
  }
 });