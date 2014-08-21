var callbacks = [],
		args = [],
		thats = [],
		ids = [],
    waiting = false,
    
		ticker,
		state;

function tickHandler(){
	var cb,
			c = callbacks,
			t = thats,
			a = args;
	
  waiting = false;
  
	callbacks = [];
	thats = [];
	args = [];
	ids = [];
	
	while(cb = c.shift()) cb.apply(t.shift(),a.shift());
}

if(!global.setImmediate){
  ticker = new Image();
  ticker.onerror = tickHandler;
  state = true;
}

module.exports = function(callback,arg,that){
	var id;
	
	callbacks.push(callback || function(){});
	args.push(arg || []);
	thats.push(that || global);
	ids.push(id = {});
	
  if(waiting) return id;
  waiting = true;
  
  if(ticker){
    if(state) ticker.src = 'data:,0';
    else ticker.src = 'data:,1';
    
    state = !state;
  }else setImmediate(tickHandler);
  
	return id;
};

module.exports.clear = function(id){
	var i = ids.indexOf(id);
	
	if(i == -1) return;
	
	callbacks.splice(i,1);
	thats.splice(i,1);
	args.splice(i,1);
	ids.splice(i,1);
};

