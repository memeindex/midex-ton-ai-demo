// Minimal canvas stub: add draggable nodes and simple SVG connections
const nodesEl = document.getElementById('nodes');
const svg = document.getElementById('connections');
const addBtn = document.getElementById('add-node');
const connectBtn = document.getElementById('connect-mode');
const clearBtn = document.getElementById('clear');
const inspector = document.getElementById('inspector');

let nodeCount = 0;
let connectMode = false;
let connectSource = null;
const nodeMap = new Map();

addBtn.onclick = () => createNode(60 + nodeCount*10, 60 + nodeCount*10);
connectBtn.onclick = () => { connectMode = !connectMode; connectBtn.textContent = `Режим соединения: ${connectMode? 'ON':'OFF'}` }
clearBtn.onclick = () => { nodesEl.innerHTML=''; svg.innerHTML=''; nodeMap.clear(); nodeCount=0; inspector.textContent='Клик на узел — показать данные' }

function createNode(x=100,y=100){
  nodeCount += 1;
  const id = 'n'+nodeCount;
  const el = document.createElement('div');
  el.className='node';
  el.id = id;
  el.style.left = x+'px';
  el.style.top = y+'px';
  el.innerHTML = `<strong>${id}</strong><div class="meta">type: agent</div>`;
  nodesEl.appendChild(el);
  nodeMap.set(id,{el,connections:[]});

  makeDraggable(el);

  el.addEventListener('click', (e)=>{
    e.stopPropagation();
    if(connectMode){
      handleConnectClick(id);
      return;
    }
    inspector.textContent = `Node ${id}\nType: agent\nConnections: ${nodeMap.get(id).connections.length}`;
  });
}

function handleConnectClick(id){
  if(!connectSource){
    connectSource = id;
    nodeMap.get(id).el.style.outline = '3px dashed #f59e0b';
    inspector.textContent = `Source: ${id} — выберите целевой узел`;
    return;
  }
  if(connectSource === id){
    nodeMap.get(id).el.style.outline = '';
    connectSource = null; inspector.textContent='Canceled'; return;
  }
  drawConnection(connectSource, id);
  nodeMap.get(connectSource).el.style.outline = '';
  connectSource = null;
}

function drawConnection(a,b){
  const na = nodeMap.get(a).el.getBoundingClientRect();
  const nb = nodeMap.get(b).el.getBoundingClientRect();
  const parentRect = nodesEl.getBoundingClientRect();
  const x1 = na.left + na.width/2 - parentRect.left;
  const y1 = na.top + na.height/2 - parentRect.top;
  const x2 = nb.left + nb.width/2 - parentRect.left;
  const y2 = nb.top + nb.height/2 - parentRect.top;
  const line = document.createElementNS('http://www.w3.org/2000/svg','line');
  line.setAttribute('x1',x1); line.setAttribute('y1',y1);
  line.setAttribute('x2',x2); line.setAttribute('y2',y2);
  line.setAttribute('stroke','#10b981'); line.setAttribute('stroke-width','3');
  svg.appendChild(line);
  nodeMap.get(a).connections.push({to:b,el:line});
}

function makeDraggable(el){
  let startX=0,startY=0,origX=0,origY=0;
  el.addEventListener('mousedown', (e)=>{
    e.preventDefault(); el.classList.add('dragging');
    startX = e.clientX; startY = e.clientY;
    const r = el.getBoundingClientRect();
    const parentRect = nodesEl.getBoundingClientRect();
    origX = r.left - parentRect.left; origY = r.top - parentRect.top;
    function onMove(ev){
      const dx = ev.clientX - startX; const dy = ev.clientY - startY;
      el.style.left = (origX + dx)+'px'; el.style.top = (origY + dy)+'px';
      updateConnections(el.id);
    }
    function onUp(){ document.removeEventListener('mousemove',onMove); document.removeEventListener('mouseup',onUp); el.classList.remove('dragging') }
    document.addEventListener('mousemove',onMove); document.addEventListener('mouseup',onUp);
  });
}

function updateConnections(nodeId){
  // recompute all SVG lines connected to this node
  const item = nodeMap.get(nodeId); if(!item) return;
  const rect = item.el.getBoundingClientRect();
  const parentRect = nodesEl.getBoundingClientRect();
  const cx = rect.left + rect.width/2 - parentRect.left;
  const cy = rect.top + rect.height/2 - parentRect.top;
  // update outgoing lines
  for(const c of item.connections){
    const line = c.el;
    line.setAttribute('x1',cx); line.setAttribute('y1',cy);
    // target coords may have changed; recompute target
    const t = nodeMap.get(c.to).el.getBoundingClientRect();
    const tx = t.left + t.width/2 - parentRect.left;
    const ty = t.top + t.height/2 - parentRect.top;
    line.setAttribute('x2',tx); line.setAttribute('y2',ty);
  }
  // update incoming lines (scan svg)
  svg.querySelectorAll('line').forEach(line=>{
    const x2 = parseFloat(line.getAttribute('x2'));
    const y2 = parseFloat(line.getAttribute('y2'));
    // if this line targets this node, update x2/y2
    const t = nodeMap.get(nodeId).el.getBoundingClientRect();
    const tx = t.left + t.width/2 - parentRect.left;
    const ty = t.top + t.height/2 - parentRect.top;
    // simple heuristic: if close to old coords, replace
    if(Math.hypot(x2-tx,y2-ty) < 50){ line.setAttribute('x2',tx); line.setAttribute('y2',ty); }
  });
}

// Click on canvas deselects
document.getElementById('canvas-area').addEventListener('click', ()=>{ if(connectSource){ nodeMap.get(connectSource).el.style.outline=''; connectSource=null } inspector.textContent='Клик на узел — показать данные' })

// seed
createNode(80,80); createNode(280,140);